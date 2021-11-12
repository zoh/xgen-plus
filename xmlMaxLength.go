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
	"strconv"
)

func (opt *Options) OnMaxLength(ele xml.StartElement, protoTree []interface{}) (err error) {
	if opt.CurrentEle == "simpleType" {
		if opt.SimpleType.Len() > 0 {
			st := opt.SimpleType.Peek().(*SimpleType)

			for _, attr := range ele.Attr {
				if attr.Name.Local == "value" {
					val, err := strconv.Atoi(attr.Value)
					if err != nil {
						return err
					}
					st.Restriction.MaxLength = val
				}
			}
		}
	}
	return
}

// EndMaxLength handles parsing event on the maxLength end elements. MaxLength
// specifies the maximum number of characters or list items allowed. Must be
// equal to or greater than zero.
func (opt *Options) EndMaxLength(ele xml.EndElement, protoTree []interface{}) (err error) {
	if opt.SimpleType.Len() > 0 && opt.Element.Len() > 0 {
		if opt.Element.Peek().(*Element).Type, err = opt.GetValueType(opt.SimpleType.Pop().(*SimpleType).Base, opt.ProtoTree); err != nil {
			return
		}
		opt.CurrentEle = ""
	}
	return
}
