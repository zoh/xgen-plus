package schema

import (
	"encoding/xml"
	"github.com/google/uuid"
	"strconv"
	"strings"
)

// NodeID используется для маппинга элементов из бд и структуры
type NodeID struct {
	NodeID *uuid.UUID `xml:"-" json:"node_id,omitempty"`
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
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	CustomElements   []AnyHolder          `xml:",any"`
}

type AnyHolder struct {
	MModel
}

type MModel struct {
	XMLName xml.Name
	Attr    []xml.Attr `xml:",any,attr"`
	XML     string     `xml:",innerxml"`
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
