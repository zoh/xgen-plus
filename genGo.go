// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"fmt"
	"go/format"
	"os"
	"path"
	"reflect"
	"strings"

	"github.com/sirupsen/logrus"
)

// CodeGenerator holds code generator overrides and runtime data that are used
// when generate code from proto tree.
type CodeGenerator struct {
	Lang      string
	OutputDir string
	File      string
	Field     string
	Package   string

	Imports map[string]struct{}

	ProtoTree []interface{}
	StructAST map[string]string

	StructFieldName map[string]struct{}

	log *logrus.Logger

	JsonTag bool

	Validator bool

	// если задан то генерируем файл с базовыми типами
	BaseTypeFile bool

	opts *Options
}

func (gen *CodeGenerator) setImports(values ...string) {
	for _, v := range values {
		if false == isSimpleType(v, gen.Lang) {
			gen.Imports[v] = struct{}{}
		}
	}
}

var goBuildinType = map[string]bool{
	"xml.Name":      true,
	"byte":          true,
	"[]byte":        true,
	"bool":          true,
	"[]bool":        true,
	"complex64":     true,
	"complex128":    true,
	"float32":       true,
	"float64":       true,
	"int":           true,
	"int8":          true,
	"int16":         true,
	"int32":         true,
	"int64":         true,
	"interface":     true,
	"[]interface{}": true,
	"string":        true,
	"[]string":      true,
	"time.Time":     true,
	"uint":          true,
	"uint8":         true,
	"uint16":        true,
	"uint32":        true,
	"uint64":        true,
}

// GenGo generate Go programming language source code for XML schema
// definition files.
func (gen *CodeGenerator) GenGo() error {
	if gen.BaseTypeFile {
		baseFile := path.Join(gen.OutputDir, "BaseType.go")
		gen.GoBaseFile(baseFile)
	}

	for _, ele := range gen.ProtoTree {
		if ele == nil {
			continue
		}
		tt := reflect.TypeOf(ele).String()[6:]
		funcName := fmt.Sprintf("Go%s", tt)
		gen.Field += fmt.Sprintf("// %q", tt)
		err := callFuncByName(gen, funcName, []reflect.Value{reflect.ValueOf(ele)})
		if err != nil {
			logrus.Fatal(err)
		}
	}
	f, err := os.Create(gen.File + ".go")
	if err != nil {
		return err
	}
	defer f.Close()
	var importPackage, packages string

	for p := range gen.Imports {
		packages += fmt.Sprintf("\t%q\n", p)
	}

	if packages != "" {
		importPackage = fmt.Sprintf("import (\n%s) \n\n", packages)
	}
	packageName := gen.Package
	if packageName == "" {
		packageName = "schema"
	}
	source, err := format.Source([]byte(fmt.Sprintf("%s\n\npackage %s\n%s%s", copyright, packageName, importPackage, gen.Field)))
	if err != nil {
		_, _ = f.WriteString(fmt.Sprintf("package %s\n%s%s", packageName, importPackage, gen.Field))
		return err
	}
	f.Write(source)

	fmt.Println("/---------------------------------------------------/")
	fmt.Println(string(source))
	fmt.Println("/---------------------------------------------------/")

	return err
}

func genGoFieldName(name string) (fieldName string) {
	for _, str := range strings.Split(name, ":") {
		fieldName += MakeFirstUpperCase(str)
	}
	var tmp string
	for _, str := range strings.Split(fieldName, ".") {
		tmp += MakeFirstUpperCase(str)
	}
	fieldName = tmp
	fieldName = strings.Replace(strings.Replace(fieldName, "-", "", -1), "_", "", -1)
	return
}

func genEnumName(name string) (fieldName string) {
	for _, str := range strings.Split(name, ":") {
		fieldName += str
	}
	var tmp string
	for _, str := range strings.Split(fieldName, ".") {
		tmp += str
	}
	fieldName = tmp
	fieldName = strings.Replace(strings.Replace(fieldName, "-", "", -1), "_", "", -1)
	return
}

func genGoFieldType(name string) string {
	if _, ok := goBuildinType[name]; ok {
		return name
	}
	var fieldType string
	for _, str := range strings.Split(name, ".") {
		fieldType += MakeFirstUpperCase(str)
	}
	fieldType = strings.Replace(MakeFirstUpperCase(strings.Replace(fieldType, "-", "", -1)), "_", "", -1)
	if fieldType != "" {
		return fieldType
	}
	return "interface{}"
}

var copyright = "" // `// Code generated by xgen-plus. DO NOT EDIT.`

// GoSimpleType generates code for simple type XML schema in Go language
// syntax.
func (gen *CodeGenerator) GoSimpleType(v *SimpleType) {
	if v.List {
		if _, ok := gen.StructAST[v.Name]; !ok {
			fieldType := genGoFieldType(getBasefromSimpleType(trimNSPrefix(v.Base), gen.ProtoTree))
			if fieldType == "time.Time" {
				gen.Imports["time"] = struct{}{}
			}
			content := fmt.Sprintf(" []%s\n", genGoFieldType(fieldType))
			gen.StructAST[v.Name] = content
			fieldName := genGoFieldName(v.Name)
			gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])

			goto Validator
		}
	}
	if v.Union && len(v.MemberTypes) > 0 {
		v.Doc = " UNION type"
		if _, ok := gen.StructAST[v.Name]; !ok {
			content := " struct {  \n"
			fieldName := genGoFieldName(v.Name)
			if fieldName != v.Name {
				//gen.Imports["encoding/xml"] = struct{}{}
			}
			//content += "\tContent string `xml:\",chardata\" json:\",omitempty\"` \n"
			content += "\tUnionContent \n"

			for memberName, memberType := range v.MemberTypes {
				if memberType == "" { // fix order issue
					memberType = getBasefromSimpleType(memberName, gen.ProtoTree)
				}
				content += fmt.Sprintf("\t%s\t%s\n", memberName, "*"+genGoFieldType(memberName))
			}
			content += "}\n"
			gen.StructAST[v.Name] = content
			gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])

			// render IsEmpty()
			gen.Field += "\n"
			gen.Field += fmt.Sprintf("func (t *%s) IsEmpty() bool { return t.Content == \"\" }\n", fieldName)

			gen.Field += fmt.Sprintf(`func (t *%[1]s) UnmarshalXMLAttr(attr xml.Attr) error {
	t.Content = attr.Value
	return nil
}
func (t *%[1]s) MarshalXMLAttr(name xml.Name) (xml.Attr, error) {
	return xml.Attr{
		Name:  name,
		Value: t.Content,
	}, nil
}

`, fieldName)
			gen.Imports["encoding/xml"] = struct{}{}

			goto Validator
		}
	}
	if _, ok := gen.StructAST[v.Name]; !ok {
		content := fmt.Sprintf(" %s\n", genGoFieldType(getBasefromSimpleType(trimNSPrefix(v.Base), gen.ProtoTree)))
		gen.StructAST[v.Name] = content
		fieldName := genGoFieldName(trimNSPrefix(v.Name))

		gen.Field += fmt.Sprintf("%stype %s%s",
			genFieldComment(fieldName, v.Doc, "// base:\""+v.OrigBase+"\"\n//"),
			fieldName,
			gen.StructAST[v.Name],
		)

		if strings.TrimSpace(gen.StructAST[v.Name]) == "string" {
			gen.Field += fmt.Sprintf("func (t *%s) String() string { if t==nil {return \"\"} \n return string(*t) } \n", fieldName)
		}

		goto Validator
	}

	return

Validator:
	if gen.Validator {
		gen.GoSimpleTypeValidation(v)
	}

	if len(v.Restriction.Enum) > 0 {
		var sb strings.Builder
		fieldName := genGoFieldName(trimNSPrefix(v.Name))

		sb.WriteString("const (\n")
		for _, e := range v.Restriction.Enum {
			_, _ = fmt.Fprintf(&sb, "\t%s %s = %q\n", fieldName+"_"+genEnumName(e), fieldName, e)
		}
		sb.WriteString(")\n\n")

		gen.Field += sb.String()
	}
}

// GoComplexType generates code for complex type XML schema in Go language
// syntax.
func (gen *CodeGenerator) GoComplexType(v *ComplexType) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		gen.log.Infof("Render complex type: %s", v.Name)

		content := " struct {\n"

		if v.EmbeddedStructName != "" {
			tt := getBasefromSimpleType(trimNSPrefix(v.EmbeddedStructName), gen.ProtoTree)
			_, ok := simpleTypes[v.EmbeddedStructName]

			if isSimpleType(tt, gen.Lang) || ok {
				// добавляем  NodeID
				content += "NodeID\n"
				//  и пишем как Content ....
				content += fmt.Sprintf("\tContent %s\t`xml:\",chardata\" json:\",omitempty\"` \n",
					"*"+genGoFieldName(trimNSPrefix(v.EmbeddedStructName)))
			} else {
				if types, ok := BuildInTypes[tt]; ok {
					t := types[0]
					content += fmt.Sprintf("NodeID\n Content %s\t`xml:\",chardata\" json:\",omitempty\"` \n", t)
				} else {
					t := genGoFieldName(trimNSPrefix(v.EmbeddedStructName))
					content += "\t" + t + "\n"
				}
			}
		} else {
			if v.Base != "" {
				content += genGoFieldName(trimNSPrefix(v.Base)) + "\n"
			} else {
				// добавляем только NodeID
				content += "\tNodeID\n"

				if genGoFieldName(v.Name) == "TAnyContentFromOtherNamespace" {
					content += fmt.Sprintf("Content *string\t`xml:\",chardata\" json:\",omitempty\"` \n")
				}
			}
		}

		if v.AnyAttributes {
			content += "\tAdditionalFields\tAdditionalFieldsType `xml:\",any,attr\" json:\"-\"`\n"
		}
		if v.AnyElements {
			content += "\tCustomElements\t[]AnyHolder\t`xml:\",any\" json:\"-\"`\n"
		}

		fieldName := genGoFieldName(v.Name)
		//if fieldName != v.Name {
		//	gen.Imports.EncodingXML = true
		//	content += fmt.Sprintf("\tXMLName\txml.Name\t`xml:\"%s\"`\n", v.Name)
		//}

		for _, attrGroup := range v.AttributeGroup {
			fieldType := getBasefromSimpleType(trimNSPrefix(attrGroup.Ref), gen.ProtoTree)
			if fieldType == "time.Time" {
				gen.Imports["time.Time"] = struct{}{}
			}
			content += fmt.Sprintf("\t%s\t// AttributeGroup\n", genGoFieldType(fieldType))
		}

		var attrDefaultVariables = ""
		for _, attribute := range v.Attributes {
			vv := attribute.Type // getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree)

			var fieldType string
			if vv == "" && attribute.SimpleTypeInside != nil {
				//vv := getBasefromSimpleType(trimNSPrefix(attribute.SimpleTypeInside.Name), gen.ProtoTree)
				fieldType = genGoFieldType(attribute.SimpleTypeInside.Name)
			} else {
				fieldType = genGoFieldType(vv)
				if fieldType == "time.Time" {
					gen.Imports["time.Time"] = struct{}{}
				}
			}

			var optional string
			if attribute.Optional {
				optional = `,omitempty`
				// set how pointer type
				fieldType = "*" + fieldType
			}

			var jsonTag string
			if gen.JsonTag {
				jsonTag = fmt.Sprintf(` json:"%s%s"`, attribute.Name, optional)
			}

			var defaultTag string
			if attribute.Default != nil {
				attrDefaultVariables += fmt.Sprintf("\t%s%sAttrDefault = %q\n",
					fieldName, genGoFieldName(attribute.Name), *attribute.Default)

				defaultTag = fmt.Sprintf(" default:%q", *attribute.Default)
			}

			content += fmt.Sprintf("\t%sAttr\t%s\t`xml:\"%s,attr%s\"%s%s`\n",
				genGoFieldName(attribute.Name), fieldType, attribute.Name, optional, jsonTag, defaultTag)

		}
		for _, group := range v.Groups {
			var plural string
			if group.Plural {
				plural = "[]"
			}
			content += fmt.Sprintf("\t%s\t%s%s\n", genGoFieldName(group.Name), plural, genGoFieldType(getBasefromSimpleType(trimNSPrefix(group.Ref), gen.ProtoTree)))
		}

		for _, element := range v.Elements {
			var plural, optional string

			if element.PluralOptional {
				optional = `,omitempty`
				plural = "*" + plural
			}
			if element.Plural {
				plural = "[]"
			}

			fieldType := genGoFieldType(getBasefromSimpleType(trimNSPrefix(element.Type), gen.ProtoTree))
			if fieldType == "time.Time" {
				gen.Imports["time.Time"] = struct{}{}
			}

			var jsonTag string
			if gen.JsonTag {
				jsonTag = fmt.Sprintf(` json:"%s%s"`, element.Name, optional)
			}

			if plural == "[]" && fieldType == "uint32" {
				fieldType = "UnitSlice"
			}

			content += fmt.Sprintf("\t%s\t%s%s\t`xml:\"%s\"%s`\n",
				genGoFieldName(element.Name), plural, fieldType, element.Name, jsonTag)
		}
		content += "}\n"
		gen.StructAST[v.Name] = content
		gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])

		if attrDefaultVariables != "" {
			gen.Field += "\nvar (\n" + attrDefaultVariables + "\n)"
		}
	}

	if gen.Validator {
		gen.GoComplexTypeValidation(v)
	}

	return
}

// GoGroup generates code for group XML schema in Go language syntax.
func (gen *CodeGenerator) GoGroup(v *Group) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		content := " struct {\n"
		fieldName := genGoFieldName(v.Name)
		if fieldName != v.Name {
			//gen.Imports["encoding/xml"] = struct{}{}
			//content += fmt.Sprintf("\tXMLName\txml.Name\t`xml:\"%s\"`\n", v.Name)
		}
		for _, element := range v.Elements {
			var plural string
			if element.Plural {
				plural = "[]"
			}
			content += fmt.Sprintf("\t%s\t%s%s\n", genGoFieldName(element.Name), plural, genGoFieldType(getBasefromSimpleType(trimNSPrefix(element.Type), gen.ProtoTree)))
		}

		for _, group := range v.Groups {
			var plural string
			if group.Plural {
				plural = "[]"
			}
			content += fmt.Sprintf("\t%s\t%s%s\n", genGoFieldName(group.Name), plural, genGoFieldType(getBasefromSimpleType(trimNSPrefix(group.Ref), gen.ProtoTree)))
		}

		content += "}\n"
		gen.StructAST[v.Name] = content
		gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

// GoAttributeGroup generates code for attribute group XML schema in Go language
// syntax.
func (gen *CodeGenerator) GoAttributeGroup(v *AttributeGroup) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		content := " struct {\n"
		fieldName := genGoFieldName(v.Name)
		if fieldName != v.Name {
			//gen.ImportEncodingXML = true
			//content += fmt.Sprintf("\tXMLName\txml.Name\t`xml:\"%s\"`\n", v.Name)
		}

		for _, g := range v.AttributeGroup {
			content += fmt.Sprintf("%s\n", genGoFieldName(g.Name))
		}

		var attrDefaultVariables = ""
		for _, attribute := range v.Attributes {
			var optional string
			if attribute.Optional {
				optional = ",omitempty"
			}

			var jsonTag string
			if gen.JsonTag {
				jsonTag = fmt.Sprintf(` json:"%s%s"`, attribute.Name, optional)
			}

			fType := genGoFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree))

			if attribute.Optional {
				fType = "*" + fType
			}

			var defaultTag string
			if attribute.Default != nil {
				attrDefaultVariables += fmt.Sprintf("\t%s%sAttrDefault = %q\n",
					fieldName, genGoFieldName(attribute.Name), *attribute.Default)

				defaultTag = fmt.Sprintf(" default:%q", *attribute.Default)
			}

			content += fmt.Sprintf("\t%sAttr\t%s\t`xml:\"%s,attr%s\"%s%s`\n",
				genGoFieldName(attribute.Name),
				fType,
				attribute.Name,
				optional,
				jsonTag,
				defaultTag,
			)

		}
		content += "}\n"
		gen.StructAST[v.Name] = content
		gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])

		if attrDefaultVariables != "" {
			gen.Field += "\nvar (\n" + attrDefaultVariables + "\n)"
		}

		if gen.Validator {
			gen.GoAttributeGroupValidation(v)
		}
	}
	return
}

// GoElement generates code for element XML schema in Go language syntax.
func (gen *CodeGenerator) GoElement(v *Element) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		var plural string
		if v.Plural {
			plural = "[]"
		}
		content := fmt.Sprintf("\t%s%s\n", plural, genGoFieldType(getBasefromSimpleType(trimNSPrefix(v.Type), gen.ProtoTree)))
		gen.StructAST[v.Name] = content
		fieldName := genGoFieldName(v.Name)
		gen.Field += fmt.Sprintf("%stype %s = %s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

// GoAttribute generates code for attribute XML schema in Go language syntax.
func (gen *CodeGenerator) GoAttribute(v *Attribute) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		var plural string
		if v.Plural {
			plural = "[]"
		}
		content := fmt.Sprintf("\t%s%s\n", plural, genGoFieldType(getBasefromSimpleType(trimNSPrefix(v.Type), gen.ProtoTree)))
		gen.StructAST[v.Name] = content
		fieldName := genGoFieldName(v.Name)
		gen.Field += fmt.Sprintf("%stype %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

func (gen *CodeGenerator) GoBaseFile(file string) {
	f, err := os.Create(file)
	if err != nil {
		logrus.Fatalln(err)
	}
	defer f.Close()

	var packageName = gen.Package
	if packageName == "" {
		packageName = "schema"
	}

	s := fmt.Sprintf(BaseTypeTmpl, packageName)
	b := []byte(s)

	b, err = format.Source(b)
	if err != nil {
		logrus.Fatalln(err)
	}
	_, _ = f.Write(b)
}
