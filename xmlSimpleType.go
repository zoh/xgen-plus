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
)

// OnSimpleType handles parsing event on the simpleType start elements. The
// simpleType element defines a simple type and specifies the constraints and
// information about the values of attributes or text-only elements.
func (opt *Options) OnSimpleType(ele xml.StartElement, protoTree []interface{}) (err error) {
	if opt.SimpleType.Len() == 0 {
		opt.SimpleType.Push(&SimpleType{})
	}
	if opt.CurrentEle == "attributeGroup" {
		// return
	}
	opt.CurrentEle = opt.InElement
	for _, attr := range ele.Attr {
		if attr.Name.Local == "name" {
			opt.SimpleType.Peek().(*SimpleType).Name = attr.Value
			opt.SimpleType.Peek().(*SimpleType).OrigName = attr.Value
		}
	}

	// если внутрях complexType, как добавочный для <xs:attribute
	if l := opt.ComplexType.Peek(); l != nil {
		ct := l.(*ComplexType)

		if len(ct.Attributes) > 0 {
			st := opt.SimpleType.Peek().(*SimpleType)
			ct.Attributes[len(ct.Attributes)-1].SimpleTypeInside = st
		}
	}

	return
}

// EndSimpleType handles parsing event on the simpleType end elements.
func (opt *Options) EndSimpleType(ele xml.EndElement, protoTree []interface{}) (err error) {
	if opt.SimpleType.Len() > 0 && opt.Attribute.Len() > 0 {

		opt.Attribute.Peek().(*Attribute).Type = opt.SimpleType.Pop().(*SimpleType).Base
		return
	}

	// todo: <complexType> => ...
	//if ele.Name.Local == opt.CurrentEle && opt.ComplexType.Len() == 1 {
	//	opt.ProtoTree = append(opt.ProtoTree, opt.ComplexType.Pop())
	//	opt.CurrentEle = ""
	//}

	if ele.Name.Local == opt.CurrentEle && !opt.InUnion {
		opt.CurrentEle = ""

		st := opt.SimpleType.Pop().(*SimpleType)

		if l := opt.ComplexType.Peek(); l != nil {
			ct := l.(*ComplexType)

			if len(ct.Attributes) > 0 {
				ctName := ct.Name
				atName := ct.Attributes[len(ct.Attributes)-1].Name

				st.Name = ctName + genGoFieldName(atName) + genGoFieldType(trimNSPrefix(st.Name))
			}
		}

		opt.ProtoTree = append(opt.ProtoTree, st)

		FlushSimpleType(st)
	}
	return
}
