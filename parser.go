// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"encoding/xml"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/sirupsen/logrus"
	"golang.org/x/net/html/charset"
)

type Lang string

const (
	TypeScriptLang Lang = "TypeScript"
	Golang         Lang = "Go"
)

// Options holds user-defined overrides and runtime data that are used when
// parsing from an XSD document.
type Options struct {
	FilePath            string
	FileDir             string
	InputDir            string
	OutputDir           string
	Extract             bool
	Lang                Lang
	Package             string
	IncludeMap          map[string]bool
	LocalNameNSMap      map[string]string
	NSSchemaLocationMap map[string]string
	ParseFileList       map[string]bool
	ParseFileMap        map[string][]interface{}
	ProtoTree           []interface{}
	RemoteSchema        map[string][]byte

	InElement        string
	CurrentEle       string
	InGroup          int
	InUnion          bool
	InAttributeGroup bool

	SimpleType     *Stack
	ComplexType    *Stack
	Element        *Stack
	Attribute      *Stack
	Group          *Stack
	AttributeGroup *Stack

	CodeGenerator *CodeGenerator

	Log logrus.Ext1FieldLogger

	// for elements inside <xs:choice >... </xs:choice>
	OutChoice *Choice

	TypeScriptOptions struct {
		// add "declare" to all classes
		//DeclareClass bool
		BaseIndexFileImport string
	}
}

func NewOptions(filePath, xsdSrcDir, codeDir string, lang Lang) *Options {
	return &Options{
		FilePath:            filePath,
		InputDir:            xsdSrcDir,
		OutputDir:           codeDir,
		Lang:                lang,
		IncludeMap:          make(map[string]bool),
		LocalNameNSMap:      make(map[string]string),
		NSSchemaLocationMap: make(map[string]string),
		ParseFileList:       make(map[string]bool),
		ParseFileMap:        make(map[string][]interface{}),
		ProtoTree:           make([]interface{}, 0),

		Log: logrus.New().WithField("pkg", "xgen-plus"),
	}
}

// NewParser creates a new parser options for the Parse. Useful for XML schema
// parsing.
func NewParser(options *Options) *Options {
	return options
}

// Parse reads XML documents and return proto tree for every element in the
// documents by given options. If value of the properity extract is false,
// parse will fetch schema used in <import> or <include> statements.
func (opt *Options) Parse() (err error) {
	opt.FileDir = filepath.Dir(opt.FilePath)
	var fi os.FileInfo
	fi, err = os.Stat(opt.FilePath)
	if err != nil {
		return
	}
	if fi.IsDir() {
		return
	}
	var xmlFile *os.File
	xmlFile, err = os.Open(opt.FilePath)
	if err != nil {
		return
	}
	if !opt.Extract {
		opt.ParseFileList[opt.FilePath] = true
		opt.ParseFileMap[opt.FilePath] = opt.ProtoTree
	}
	opt.ProtoTree = make([]interface{}, 0)

	opt.InElement = ""
	opt.CurrentEle = ""
	opt.InGroup = 0
	opt.InUnion = false
	opt.InAttributeGroup = false

	opt.SimpleType = NewStack()
	opt.ComplexType = NewStack()
	opt.Element = NewStack()
	opt.Attribute = NewStack()
	opt.Group = NewStack()
	opt.AttributeGroup = NewStack()

	decoder := xml.NewDecoder(xmlFile)
	decoder.CharsetReader = charset.NewReaderLabel
	for {
		token, _ := decoder.Token()
		if token == nil {
			break
		}

		switch element := token.(type) {
		case xml.StartElement:
			opt.InElement = element.Name.Local
			funcName := fmt.Sprintf("On%s", MakeFirstUpperCase(opt.InElement))
			if err = callFuncByName(opt, funcName, []reflect.Value{reflect.ValueOf(element), reflect.ValueOf(opt.ProtoTree)}); err != nil {
				log.Fatalln(err)
			}
		case xml.EndElement:
			funcName := fmt.Sprintf("End%s", MakeFirstUpperCase(element.Name.Local))
			if err = callFuncByName(opt, funcName, []reflect.Value{reflect.ValueOf(element), reflect.ValueOf(opt.ProtoTree)}); err != nil {
				log.Fatalln(err)
			}
		case xml.CharData:
			if err = opt.OnCharData(string(element), opt.ProtoTree); err != nil {
				return
			}
		default:
		}
	}
	defer xmlFile.Close()

	if !opt.Extract {
		if err := opt.createCodeGenerator(); err != nil {
			log.Fatalln(err)
		}
		if err := opt.Gen(); err != nil {
			return err
		}
	}
	return
}

func (opt *Options) createCodeGenerator() error {
	opt.ParseFileList[opt.FilePath] = true
	opt.ParseFileMap[opt.FilePath] = opt.ProtoTree
	//
	path := filepath.Join(opt.OutputDir, strings.TrimPrefix(opt.FilePath, opt.InputDir))

	logrus.Infoln("OutputDir", filepath.Dir(path))

	if err := PrepareOutputDir(filepath.Dir(path)); err != nil {
		return err
	}
	opt.CodeGenerator = &CodeGenerator{
		Lang:            string(opt.Lang),
		Package:         opt.Package,
		File:            strings.ReplaceAll(path, ".xsd", ""),
		ProtoTree:       opt.ProtoTree,
		StructAST:       map[string]string{},
		Imports:         map[string]struct{}{},
		StructFieldName: map[string]struct{}{},

		log:       logrus.New(),
		JsonTag:   true,
		Validator: true,

		OutputDir:    filepath.Dir(path),
		BaseTypeFile: true,

		opts: opt,
	}
	return nil
}

func (opt *Options) Gen() error {
	funcName := fmt.Sprintf("Gen%s", MakeFirstUpperCase(string(opt.Lang)))
	if err := callFuncByName(opt.CodeGenerator, funcName, []reflect.Value{}); err != nil {
		log.Printf("Error %v", err)
		return err
	}
	return nil
}

// GetValueType convert XSD schema value type to the build-in type for the
// given value and proto tree.
func (opt *Options) GetValueType(value string, XSDSchema []interface{}) (valueType string, err error) {
	if buildType, ok := getBuildInTypeByLang(trimNSPrefix(value), string(opt.Lang)); ok {
		valueType = buildType
		return
	}
	valueType = getBasefromSimpleType(trimNSPrefix(value), XSDSchema)
	if valueType != trimNSPrefix(value) && valueType != "" {
		return
	}
	if opt.Extract {
		return
	}
	schemaLocation := opt.NSSchemaLocationMap[opt.parseNS(value)]
	if isValidURL(schemaLocation) {
		return
	}
	xsdFile := filepath.Join(opt.FileDir, schemaLocation)
	var fi os.FileInfo
	fi, err = os.Stat(xsdFile)
	if err != nil {
		return
	}
	if fi.IsDir() {
		// extract type of value from include schema.
		valueType = ""
		for include := range opt.IncludeMap {
			fmt.Println("file", filepath.Join(opt.FileDir, include))
			parser := NewParser(&Options{
				FilePath:            filepath.Join(opt.FileDir, include),
				OutputDir:           opt.OutputDir,
				Extract:             true,
				Lang:                opt.Lang,
				IncludeMap:          opt.IncludeMap,
				LocalNameNSMap:      opt.LocalNameNSMap,
				NSSchemaLocationMap: opt.NSSchemaLocationMap,
				ParseFileList:       opt.ParseFileList,
				ParseFileMap:        opt.ParseFileMap,
				ProtoTree:           make([]interface{}, 0),
			})
			if parser.Parse() != nil {
				return
			}
			if vt := getBasefromSimpleType(trimNSPrefix(value), parser.ProtoTree); vt != trimNSPrefix(value) {
				valueType = vt
			}
		}
		if valueType == "" {
			valueType = trimNSPrefix(value)
		}
		return
	}

	depXSDSchema, ok := opt.ParseFileMap[xsdFile]
	if !ok {

		parser := NewParser(&Options{
			FilePath:            xsdFile,
			OutputDir:           opt.OutputDir,
			Extract:             false,
			Lang:                opt.Lang,
			IncludeMap:          opt.IncludeMap,
			LocalNameNSMap:      opt.LocalNameNSMap,
			NSSchemaLocationMap: opt.NSSchemaLocationMap,
			ParseFileList:       opt.ParseFileList,
			ParseFileMap:        opt.ParseFileMap,
			ProtoTree:           make([]interface{}, 0),
		})
		if parser.Parse() != nil {
			return
		}
		depXSDSchema = parser.ProtoTree
	}
	valueType = getBasefromSimpleType(trimNSPrefix(value), depXSDSchema)
	if valueType != trimNSPrefix(value) && valueType != "" {
		return
	}

	parser := NewParser(&Options{
		FilePath:            xsdFile,
		OutputDir:           opt.OutputDir,
		Extract:             true,
		Lang:                opt.Lang,
		IncludeMap:          opt.IncludeMap,
		LocalNameNSMap:      opt.LocalNameNSMap,
		NSSchemaLocationMap: opt.NSSchemaLocationMap,
		ParseFileList:       opt.ParseFileList,
		ParseFileMap:        opt.ParseFileMap,
		ProtoTree:           make([]interface{}, 0),
	})
	if parser.Parse() != nil {
		return
	}
	valueType = getBasefromSimpleType(trimNSPrefix(value), parser.ProtoTree)
	return
}
