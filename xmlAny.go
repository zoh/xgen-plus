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

func (opt *Options) OnAny(ele xml.StartElement, protoTree []interface{}) (err error) {
	ct := opt.ComplexType.Peek().(*ComplexType)

	if ct != nil {
		ct.AnyElements = true
	}

	return
}
func (opt *Options) EndAny(ele xml.EndElement, protoTree []interface{}) (err error) {
	if ele.Name.Local == opt.CurrentEle {
		opt.CurrentEle = ""
	}
	return
}

// Attributes
func (opt *Options) OnAnyAttribute(ele xml.StartElement, protoTree []interface{}) (err error) {
	ct := opt.ComplexType.Peek().(*ComplexType)

	if ct != nil {
		ct.AnyAttributes = true
	}

	return
}
func (opt *Options) EndAnyAttribute(ele xml.EndElement, protoTree []interface{}) (err error) {
	if ele.Name.Local == opt.CurrentEle {
		opt.CurrentEle = ""
	}
	return
}
