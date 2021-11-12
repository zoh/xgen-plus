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
	"log"
)

// OnRestriction handles parsing event on the restriction start elements. The
// restriction element defines restrictions on a simpleType, simpleContent, or
// complexContent definition.
func (opt *Options) OnChoice(ele xml.StartElement, protoTree []interface{}) (err error) {
	c := &Choice{}

	for _, attr := range ele.Attr {
		if attr.Name.Local == "minOccurs" {
			c.MinOccurs = attr.Value
		}
		if attr.Name.Local == "maxOccurs" {
			c.MaxOccurs = attr.Value
		}
	}

	if opt.OutChoice != nil {
		log.Fatal("already has :choice")
	}

	opt.OutChoice = c

	return
}

// EndRestriction handles parsing event on the restriction end elements.
func (opt *Options) EndChoice(ele xml.EndElement, protoTree []interface{}) (err error) {
	opt.OutChoice = nil
	return
}
