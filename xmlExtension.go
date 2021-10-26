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
	"errors"
)

func (opt *Options) OnExtension(ele xml.StartElement, protoTree []interface{}) (err error) {
	ct, ok := opt.ComplexType.Peek().(*ComplexType)
	if !ok {
		return nil
	}
	if ct.EmbeddedStructName != "" {
		return errors.New("struct has already parent type")
	}

	// find base value
	var baseType string
	for _, attr := range ele.Attr {
		if attr.Name.Local == "base" {
			baseType = attr.Value
			break
		}
	}
	ct.EmbeddedStructName = baseType

	return
}

func (opt *Options) EndExtension(ele xml.EndElement, protoTree []interface{}) (err error) {
	return
}
