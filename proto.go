// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"strings"
)

// SimpleTypeInside definitions provide for constraining character information item
// [children] of element and attribute information items.
// https://www.w3.org/TR/xmlschema-1/#Simple_Type_Definitions
type SimpleType struct {
	Doc  string
	Name string
	Base string

	// то что записано в схеме
	OrigBase    string
	Anonymous   bool
	List        bool
	Union       bool
	MemberTypes map[string]string
	Restriction Restriction

	OrigName string
}

// Element declarations provide for: Local validation of element information
// item values using a type definition; Specifying default or fixed values for
// an element information items; Establishing uniquenesses and reference
// constraint relationships among the values of related elements and
// attributes; Controlling the substitutability of elements through the
// mechanism of element substitution groups.
// https://www.w3.org/TR/xmlschema-1/#cElement_Declarations
type Element struct {
	Doc            string
	Name           string
	Wildcard       bool
	Type           string
	Abstract       bool
	Plural         bool
	PluralOptional bool
	Optional       bool
	Nillable       bool
	Default        string
}

// Attribute declarations provide for: Local validation of attribute
// information item values using a simple type definition; Specifying default
// or fixed values for attribute information items.
// https://www.w3.org/TR/xmlschema-1/structures.html#element-attribute
type Attribute struct {
	Name     string
	Doc      string
	Type     string
	Plural   bool
	Default  *string
	Optional bool

	// {value constraint}
	//Optional. A pair consisting of a value and one of default, fixed.
	Fixed string // todo: Implement for validation

	SimpleTypeInside *SimpleType
}

// ComplexType definitions are identified by their {name} and {target
// namespace}. Except for anonymous complex type definitions (those with no
// {name}), since type definitions (i.e. both simple and complex type
// definitions taken together) must be uniquely identified within an ·XML
// Schema·, no complex type definition can have the same name as another
// simple or complex type definition. Complex type {name}s and {target
// namespace}s are provided for reference from instances, and for use in the
// XML representation of schema components (specifically in <element>). See
// References to schema components across namespaces for the use of component
// identifiers when importing one schema into another.
// https://www.w3.org/TR/xmlschema-1/structures.html#element-complexType
type ComplexType struct {
	Doc            string
	Name           string
	Base           string
	Anonymous      bool
	Elements       []*Element
	Attributes     []*Attribute
	Groups         []*Group
	AttributeGroup []*AttributeGroup
	Mixed          bool

	EmbeddedStructName string

	AnyElements   bool
	AnyAttributes bool
}

// Group (model group) definitions are provided primarily for reference from
// the XML Representation of Complex Type Definitions. Thus, model group
// definitions provide a replacement for some uses of XML's parameter entity
// facility.
// https://www.w3.org/TR/xmlschema-1/structures.html#cModel_Group_Definitions
type Group struct {
	Doc      string
	Name     string
	Elements []*Element
	Groups   []*Group
	Plural   bool
	Ref      string
}

// AttributeGroup definitions do not participate in ·validation· as such, but
// the {attribute uses} and {attribute wildcard} of one or more complex type
// definitions may be constructed in whole or part by reference to an
// attribute group. Thus, attribute group definitions provide a replacement
// for some uses of XML's parameter entity facility. Attribute group
// definitions are provided primarily for reference from the XML
// representation of schema components (see <complexType> and
// <attributeGroup>).
// https://www.w3.org/TR/xmlschema-1/structures.html#Attribute_Group_Definition
type AttributeGroup struct {
	Doc        string
	Name       string
	Ref        string
	Attributes []*Attribute

	AttributeGroup []*AttributeGroup

	insideAttrGroup bool
}

// Restriction are used to define acceptable values for XML elements or
// attributes. Restriction on XML elements are called facets.
// https://www.w3.org/TR/xmlschema-1/structures.html#element-restriction
type Restriction struct {
	Doc                  string
	Precision            int
	Enum                 []string
	Min, Max             float64
	MinLength, MaxLength int
	Pattern              []string
}

type Choice struct {
	MinOccurs string
	MaxOccurs string
}

var BaseTypeTmpl = strings.ReplaceAll(`package %s

import (
	"encoding/json"
	"encoding/xml"
	"errors"
	"fmt"
	"github.com/google/uuid"
	"strconv"
	"strings"
)


// NodeID используется для маппинга элементов из бд и структуры
type NodeID struct {
	NodeID *uuid.UUID \\xml:"-" json:"node_id,omitempty"\\
}


func (t *NodeID) Scan(el *Element) error {
	if el.ID != uuid.Nil {
		t.NodeID = &el.ID
	}
	return nil
}
func (t *NodeID) Read(el *Element) error {
	if t.NodeID != nil {
		el.ID = *t.NodeID
	}
	return nil
}

type UnsignedInt string


func (u *UnsignedInt) Validate() error {
	_, err := strconv.ParseUint(string(*u), 10, 32)
	return err
}

/* Additional fields */
var nameSpaceAliases = make(map[string]string)

type AdditionalFieldsType []AdditionalField

type AdditionalField struct {
	xml.Attr
}

func (a *AdditionalField) UnmarshalXMLAttr(attr xml.Attr) error {
	a.Attr = attr
	if attr.Name.Local != "" && strings.Contains(attr.Value, "//") {
		nameSpaceAliases[attr.Value] = attr.Name.Local
	}
	return nil
}

func (a *AdditionalField) MarshalXMLAttr(_ xml.Name) (xml.Attr, error) {
	space := a.Name.Space
	if strings.Contains(space, "//") {
		space = nameSpaceAliases[space]
	}
	if space != "" {
		space += ":"
	}
	return xml.Attr{
		Name: xml.Name{
			//Space: a.FieldName.Space,
			Local: space + a.Name.Local,
		},
		Value: a.Value,
	}, nil
}

type AdditionalFields struct {
	AdditionalFields AdditionalFieldsType \\xml:",any,attr"\\
	CustomElements   []AnyHolder          \\xml:",any"\\
}

type AnyHolder struct {
	MModel
}

type MModel struct {
	XMLName xml.Name
	Attr    []xml.Attr \\xml:",any,attr"\\
	XML     string     \\xml:",innerxml"\\
}

func (a *AnyHolder) UnmarshalXML(d *xml.Decoder, start xml.StartElement) error {
	var model MModel
	err := d.DecodeElement(&model, &start)
	a.MModel = model

	return err
}

func (a *AnyHolder) MarshalXML(e *xml.Encoder, start xml.StartElement) error {
	space := a.MModel.XMLName.Space
	if strings.Contains(space, "//") {
		space = nameSpaceAliases[space]
	}
	if space != "" {
		space += ":"
	}

	am := MModel{
		XMLName: xml.Name{
			Space: "",
			Local: space + a.XMLName.Local,
		},
		Attr: a.Attr,
		XML:  a.XML,
	}

	return e.Encode(am)
}

var (
	_ xml.Unmarshaler = (*AnyHolder)(nil)
	_ xml.Marshaler   = (*AnyHolder)(nil)
)


type Validator interface {
	Validate() error
}

func CheckValidate(v interface{}) error {
	if fn, ok := v.(Validator); ok {
		return fn.Validate()
	}
	return nil
}


type UnionContent struct {
	Content string \\xml:",chardata" json:",omitempty"\\
}

func (u UnionContent) MarshalJSON() ([]byte, error) {
	return []byte("\"" + u.Content + "\""), nil
}


func (u *UnionContent) UnmarshalJSON(v []byte) error {
	if len(v) > 0 {
		u.Content = strings.Trim(string(v), "\"")
	}
	return nil
}

func (u UnionContent) String() string {
	return u.Content
}

var (
	_ json.Unmarshaler = (*UnionContent)(nil)
	_ json.Marshaler   = (*UnionContent)(nil)
	_ fmt.Stringer   = (*UnionContent)(nil)
)


// "ComplexType"
// UnitSlice - хак чтобы побороть []uint32
type UnitSlice struct {
	NodeID
	Content string \\xml:",chardata" json:",omitempty"\\
}


func (t *UnitSlice) CreateElement(xmlTag string, level, pos uint, parentEl *Element) (*Element, error) {
	if xmlTag == "" {
		return nil, errors.New("UnitSlice.CreateElement empty tag ")
	}
	el := NewElement(xmlTag, level, pos, parentEl)
	if t.NodeID.NodeID != nil {
		el.ID = *t.NodeID.NodeID
	}
	el.Content = t.Content
	return el, nil
}


`, `\\`, "`")
