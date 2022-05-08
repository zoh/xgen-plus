// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"path"
	"reflect"
	"strings"
	"text/template"
)

var typeScriptBuildInType = map[string]bool{
	"boolean":    true,
	"number":     true,
	"string":     true,
	"void":       true,
	"null":       true,
	"undefined":  true,
	"Uint8Array": true,
}

// GenTypeScript generate TypeScript programming language source code for XML
// schema definition files.
func (gen *CodeGenerator) GenTypeScript() error {

	// попробуем отсортировать по наследованию

	// отфильтруем ComplexType's
	var complexTypeList []*ComplexType
	var other []interface{}
	for i, ele := range gen.ProtoTree {
		if ele == nil {
			continue
		}
		if _, ok := ele.(*ComplexType); ok {
			complexTypeList = append(complexTypeList, gen.ProtoTree[i].(*ComplexType))
		} else {
			other = append(other, gen.ProtoTree[i])
		}
	}

	//sort.Slice(complexTypeList, func(i, j int) bool {
	//	a, b := complexTypeList[i], complexTypeList[j]
	//	if a.Base != "" && b.Base == "" {
	//		return false
	//	}
	//	if a.EmbeddedStructName != "" && b.EmbeddedStructName == "" {
	//		return false
	//	}
	//	return true
	//})

	for _, ele := range other {
		if ele == nil {
			continue
		}
		funcName := fmt.Sprintf("TypeScript%s", reflect.TypeOf(ele).String()[6:])
		fmt.Printf("%s, %T \r\n", funcName, ele)
		if err := callFuncByName(gen, funcName, []reflect.Value{reflect.ValueOf(ele)}); err != nil {
			log.Fatalln(err)
		}
	}
	// а теперь на вывод
	for _, ele := range complexTypeList {
		if ele == nil {
			continue
		}
		funcName := fmt.Sprintf("TypeScript%s", reflect.TypeOf(ele).String()[6:])
		if err := callFuncByName(gen, funcName, []reflect.Value{reflect.ValueOf(ele)}); err != nil {
			log.Fatalln(err)
		}
	}

	f, err := os.Create(gen.File + ".ts")
	if err != nil {
		return err
	}
	defer f.Close()
	if len(gen.Imports) > 0 {
		var exports []string
		for k := range gen.Imports {
			if _, ok := gen.StructFieldName[k]; !ok {
				exports = append(exports, k)
			}
		}
		f.WriteString(fmt.Sprintf("import { %s } from \"./BaseIndex\"\n", strings.Join(exports, ",")))
	}
	source := []byte(fmt.Sprintf("%s\n%s", copyright, gen.Field))
	f.Write(source)

	return err
}

func genTypeScriptFieldName(name string) (fieldName string) {
	for _, str := range strings.Split(name, ":") {
		fieldName += MakeFirstUpperCase(str)
	}
	var tmp string
	for _, str := range strings.Split(fieldName, ".") {
		tmp += MakeFirstUpperCase(str)
	}
	fieldName = tmp
	fieldName = strings.Replace(fieldName, "-", "", -1)
	return
}

func genTypeScriptFieldType(name string, plural bool) (fieldType string) {
	if _, ok := typeScriptBuildInType[name]; ok {
		fieldType = name
		return
	}
	for _, str := range strings.Split(name, ".") {
		fieldType += MakeFirstUpperCase(str)
	}
	fieldType = MakeFirstUpperCase(strings.Replace(fieldType, "-", "", -1))
	if fieldType == "" || fieldType == "Any" {
		fieldType = "any"
	}
	if plural {
		fieldType = fmt.Sprintf("Array<%s>", fieldType)
	}
	return
}

func clearPlural(val string) string {
	if strings.Contains(val, "Array<") {
		return val[6 : len(val)-1]
	}
	return val
}

// TypeScriptSimpleType generates code for simple type XML schema in TypeScript language
// syntax.
func (gen *CodeGenerator) TypeScriptSimpleType(v *SimpleType) {
	if v.List {
		if _, ok := gen.StructAST[v.Name]; !ok {
			fieldType := genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(v.Base), gen.ProtoTree), true)
			content := fmt.Sprintf(" = %s;\n", fieldType)
			gen.StructAST[v.Name] = content
			fieldName := genTypeScriptFieldName(v.Name)
			gen.StructFieldName[fieldName] = struct{}{}
			gen.Field += fmt.Sprintf("%sexport type %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
			return
		}
	}
	if v.Union && len(v.MemberTypes) > 0 {
		gen.Field += "\n// Union type"
		if _, ok := gen.StructAST[v.Name]; !ok {
			content := " ="
			for memberName, memberType := range v.MemberTypes {
				if memberType == "" { // fix order issue
					//memberType = getBasefromSimpleType(memberName, gen.ProtoTree)
				}
				gen.setImports(genTypeScriptFieldName(memberName))
				content += "\n\t|\t" + fmt.Sprintf("%s", genTypeScriptFieldName(memberName))
			}

			gen.StructAST[v.Name] = content + "\n"
			fieldName := genTypeScriptFieldName(v.Name)
			gen.StructFieldName[fieldName] = struct{}{}
			gen.Field += fmt.Sprintf("%sexport type %s%s",
				genFieldComment(fieldName, v.Doc, "//"),
				fieldName,
				gen.StructAST[v.Name],
			)
		}
		return
	}
	gen.Field += "\n// Simple type"
	if len(v.Restriction.Enum) > 0 {
		var content string
		baseType := genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(v.Base), gen.ProtoTree), false)
		for _, enum := range v.Restriction.Enum {
			switch baseType {
			case "string":
				content += fmt.Sprintf("\t%q = '%s',\n", enum, enum)
			case "number":
				content += fmt.Sprintf("\tEnum%s = %s,\n", enum, enum)
			default:
				content += fmt.Sprintf("\tEnum%s = '%s',\n", enum, enum)
			}
		}
		fieldName := genTypeScriptFieldName(v.Name)
		gen.Field += fmt.Sprintf("%sexport enum %s {\n%s}\n", genFieldComment(fieldName, v.Doc, "//"), fieldName, content)
		gen.StructFieldName[fieldName] = struct{}{}
		return
	}
	if _, ok := gen.StructAST[v.Name]; !ok {
		content := fmt.Sprintf(" %s;\n", genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(v.Base), gen.ProtoTree), false))
		gen.StructAST[v.Name] = content
		fieldName := genTypeScriptFieldName(v.Name)
		gen.StructFieldName[fieldName] = struct{}{}
		gen.Field += fmt.Sprintf("%sexport type %s =%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

// TypeScriptComplexType generates code for complex type XML schema in TypeScript language
// syntax.
func (gen *CodeGenerator) TypeScriptComplexType(v *ComplexType) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		var contentCharData string
		var extends []string

		if v.EmbeddedStructName != "" {
			tt := getBasefromSimpleType(trimNSPrefix(v.EmbeddedStructName), gen.ProtoTree)
			_, ok := simpleTypes[v.EmbeddedStructName]

			if isSimpleType(tt, gen.Lang) || ok {
				// добавляем  NodeID
				extends = append(extends, "NodeID")
				gen.Imports["NodeID"] = struct{}{}
				//  и пишем как Content ....
				t := genTypeScriptFieldName(trimNSPrefix(v.EmbeddedStructName))
				gen.setImports(t)
				contentCharData = fmt.Sprintf("\tContent?: %s; \n", t)
			} else {
				if types, ok := BuildInTypes[tt]; ok {
					t := types[1]
					gen.setImports(t)
					contentCharData = fmt.Sprintf("Content: %s; \n", t)
				} else {
					t := genTypeScriptFieldName(trimNSPrefix(v.EmbeddedStructName))
					extends = append(extends, t)
				}
			}
		} else {
			if v.Base != "" {
				extends = append(extends, genTypeScriptFieldName(trimNSPrefix(v.Base)))
			} else {
				// добавляем только NodeID
				extends = append(extends, "NodeID")
				gen.Imports["NodeID"] = struct{}{}
			}
		}

		var mixins []string
		for _, attrGroup := range v.AttributeGroup {
			mixins = append(mixins, genTypeScriptFieldName(attrGroup.Name))
		}

		if len(extends) > 1 {
			log.Fatalln("TypeScript extends class more one Parent class unsupported: " + genTypeScriptFieldName(v.Name))
		}
		var content string
		if len(extends) > 0 {
			gen.setImports(mixins...)
			gen.setImports(extends...)
			content += " extends " + wrapMixins(strings.Join(extends, ", "), mixins)
		} else {
			if len(mixins) > 0 {
				log.Fatalln("TypeScript has AttributeGroup but doesnt have a parent ")
			}
		}

		content += " {\n"
		content += contentCharData

		for _, attribute := range v.Attributes {
			var optional string
			if attribute.Optional {
				optional = "?"
			}
			var fieldType string

			vv := attribute.Type
			if vv == "" && attribute.SimpleTypeInside != nil {
				fieldType = genGoFieldType(attribute.SimpleTypeInside.Name)
			} else {
				fieldType = genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree), attribute.Plural)
			}

			gen.setImports(clearPlural(fieldType))
			content += fmt.Sprintf("\t%s%s: %s;\n", attribute.Name, optional, fieldType)
		}
		for _, group := range v.Groups {
			content += fmt.Sprintf("\t%s: %s;\n",
				genTypeScriptFieldName(group.Name),
				genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(group.Ref), gen.ProtoTree), group.Plural))
		}

		for _, element := range v.Elements {
			fieldType := genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(element.Type), gen.ProtoTree), element.Plural)
			var optional string
			if element.PluralOptional {
				optional = "?"
			}
			gen.setImports(clearPlural(fieldType))
			content += fmt.Sprintf("\t%s%s: %s;\n", element.Name, optional, fieldType)
			element.Type = clearPlural(fieldType)
		}

		//  generate constructor body.
		t, err := template.New("TypeScriptComplexType").Parse(__TypeScriptComplexTypeConstructor)
		if err != nil {
			log.Fatalln(err)
		}

		var tpl bytes.Buffer
		if err := t.Execute(&tpl, map[string]interface{}{
			"v":          v,
			"hasContent": contentCharData != "",
			"hasParent":  len(extends) > 0,
		}); err != nil {
			log.Fatalln(err)
		}
		content += tpl.String()

		content += "}\n"
		gen.StructAST[v.Name] = content
		fieldName := genTypeScriptFieldName(v.Name)
		gen.StructFieldName[fieldName] = struct{}{}
		gen.Field += fmt.Sprintf("%sexport class %s%s",
			genFieldComment(fieldName, v.Doc, "// ComplexType \n// "),
			fieldName,
			gen.StructAST[v.Name],
		)
	}
	return
}

// TypeScriptGroup generates code for group XML schema in TypeScript language syntax.
func (gen *CodeGenerator) TypeScriptGroup(v *Group) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		content := " {\n"
		for _, element := range v.Elements {
			content += fmt.Sprintf("\t%s: %s;\n", genTypeScriptFieldName(element.Name), genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(element.Type), gen.ProtoTree), element.Plural))
		}

		for _, group := range v.Groups {
			content += fmt.Sprintf("\t%s: %s;\n", genTypeScriptFieldName(group.Name), genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(group.Ref), gen.ProtoTree), group.Plural))
		}

		content += "}\n"
		gen.StructAST[v.Name] = content
		fieldName := genTypeScriptFieldName(v.Name)
		gen.Field += fmt.Sprintf("%sexport class %s%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

// TypeScriptAttributeGroup generates code for attribute group XML schema in TypeScript language
// syntax.
func (gen *CodeGenerator) TypeScriptAttributeGroup(v *AttributeGroup) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		gen.Imports["Constructor"] = struct{}{}
		//
		t, err := template.New("BaseIndex").Parse(_TypeScriptAttributeGroupBody)
		if err != nil {
			log.Fatalln(err)
		}

		type Attribute struct {
			Name     string
			Optional bool
			Type     string
			Plural   bool
		}
		var params []Attribute
		var content string

		var mix []string
		for _, g := range v.AttributeGroup {
			//content += fmt.Sprintf("%s\n", genGoFieldName(g.Name))
			mix = append(mix, genGoFieldName(g.Name))
		}

		for _, attribute := range v.Attributes {
			fieldType := genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree), attribute.Plural)

			//t := genTypeScriptFieldName(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree))
			gen.setImports(fieldType)
			params = append(params, Attribute{
				Name:     attribute.Name,
				Optional: attribute.Optional,
				Type:     fieldType,
				Plural:   attribute.Plural,
			})
			//content += fmt.Sprintf("\t%q%s: %s;\n", attribute.Name, optional,
			//	genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree), attribute.Plural))
		}

		var tpl bytes.Buffer
		if err := t.Execute(&tpl, map[string]interface{}{
			"name":   genTypeScriptFieldName(v.Name),
			"params": params,
			"base":   wrapMixins("Base", mix),
		}); err != nil {
			log.Fatalln(err)
		}
		fieldName := genTypeScriptFieldName(v.Name)
		content = tpl.String()
		gen.StructAST[v.Name] = content
		gen.StructFieldName[fieldName] = struct{}{}
		gen.Field += fmt.Sprintf("%s%s", genFieldComment(fieldName, v.Doc, "//"), gen.StructAST[v.Name])
	}
	return
}

// TypeScriptElement generates code for element XML schema in TypeScript language syntax.
func (gen *CodeGenerator) TypeScriptElement(v *Element) {
	name := v.Name + "Element"
	if _, ok := gen.StructAST[name]; !ok {
		gen.StructAST[name] = fmt.Sprintf(" %s;\n", genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(v.Type), gen.ProtoTree), v.Plural))
		fieldName := genTypeScriptFieldName(name)
		gen.Field += fmt.Sprintf("%sexport type %s =%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[name])
	}
	return
}

// TypeScriptAttribute generates code for attribute XML schema in TypeScript language syntax.
func (gen *CodeGenerator) TypeScriptAttribute(v *Attribute) {
	if _, ok := gen.StructAST[v.Name]; !ok {
		gen.StructAST[v.Name] = fmt.Sprintf(" %s;\n", genTypeScriptFieldType(getBasefromSimpleType(trimNSPrefix(v.Type), gen.ProtoTree), v.Plural))
		fieldName := genTypeScriptFieldName(v.Name)
		gen.StructFieldName[fieldName] = struct{}{}
		gen.Field += fmt.Sprintf("%sexport type %s =%s", genFieldComment(fieldName, v.Doc, "//"), fieldName, gen.StructAST[v.Name])
	}
	return
}

func CreateBaseIndexFile(outputDir string, allFiles []string) error {
	t, err := template.New("BaseIndex").Parse(_BaseIndexFileTypeScript)
	if err != nil {
		return err
	}
	f, err := os.Create(path.Join(outputDir, "BaseIndex.ts"))
	if err != nil {
		return err
	}
	defer f.Close()

	var ff []string
	for _, p := range allFiles {
		ff = append(ff, path.Base(p))
	}

	return t.Execute(f, map[string]interface{}{"files": ff})
}

func wrapMixins(val string, mix []string) string {
	if len(mix) == 0 {
		return val
	}
	return wrapMixins(fmt.Sprintf("%s(%s)", mix[0], val), mix[1:])
}
