package schema

import (
	"encoding/xml"
	"errors"
	"fmt"
	"regexp"
)

// "SimpleType"
// base:"xs:Name"
// TAcsiName ...
type TAcsiName string

func (t *TAcsiName) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^[A-Za-z][0-9A-Za-z_]*$`} {
		if ok, err := regexp.MatchString(p, string(*t)); err != nil {
			return err
		} else {
			if ok {
				checkPattern = true
				break
			}
		}
	}
	if checkPattern == false {
		return errors.New("none were found match pattern: " + "TAcsiName")
	}

	return nil
}

// "SimpleType"
// base:"tAcsiName"
// TIEDName ...
type TIEDName string

func (t *TIEDName) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^[A-Za-z][0-9A-Za-z_]{0,2}$`, `^[A-Za-z][0-9A-Za-z_]{4,63}$`, `^[A-MO-Za-z][0-9A-Za-z_]{3}$`, `^N[0-9A-Za-np-z_][0-9A-Za-z_]{2}$`, `^No[0-9A-Za-mo-z_][0-9A-Za-z_]$`, `^Non[0-9A-Za-df-z_]$`} {
		if ok, err := regexp.MatchString(p, string(*t)); err != nil {
			return err
		} else {
			if ok {
				checkPattern = true
				break
			}
		}
	}
	if checkPattern == false {
		return errors.New("none were found match pattern: " + "TIEDName")
	}
	if len(*t) < 1 {
		return errors.New("меньше минимального 1 значение в TIEDName")
	}
	if len(*t) > 64 {
		return errors.New("больше макс значения 64 в TIEDName")
	}

	return nil
}

// "SimpleType"
// base:"tAcsiName"
// TIEDNameIsNone ...
type TIEDNameIsNone string

func (t *TIEDNameIsNone) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^None$`} {
		if ok, err := regexp.MatchString(p, string(*t)); err != nil {
			return err
		} else {
			if ok {
				checkPattern = true
				break
			}
		}
	}
	if checkPattern == false {
		return errors.New("none were found match pattern: " + "TIEDNameIsNone")
	}

	return nil
}

// "SimpleType"
// TIEDNameOrNone ...
type TIEDNameOrNone struct { /* UNION */
	Content        string `xml:",chardata" json:",omitempty"`
	tIEDName       *TIEDName
	tIEDNameIsNone *TIEDNameIsNone
}

func (t *TIEDNameOrNone) IsEmpty() bool { return t.Content == "" }
func (t *TIEDNameOrNone) UnmarshalXMLAttr(attr xml.Attr) error {
	t.Content = attr.Value
	return nil
}
func (t *TIEDNameOrNone) MarshalXMLAttr(name xml.Name) (xml.Attr, error) {
	return xml.Attr{
		Name:  name,
		Value: t.Content,
	}, nil
}

func (t *TIEDNameOrNone) Validate() error {
	{
		p := TIEDName(t.Content)
		t.tIEDName = &p
		if err := t.tIEDName.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.tIEDName = nil
		}
	}
	{
		p := TIEDNameIsNone(t.Content)
		t.tIEDNameIsNone = &p
		if err := t.tIEDNameIsNone.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.tIEDNameIsNone = nil
		}
	}
	return errors.New("не нашли member from union TIEDNameOrNone")
UnionLabel:

	return nil
}

// "ComplexType"
// TAnyContentFromOtherNamespace ...
type TAnyContentFromOtherNamespace struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	CustomElements   []AnyHolder          `xml:",any"`
}

func (t *TAnyContentFromOtherNamespace) Validate() error {
	// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "SimpleType"
// base:"xs:normalizedString"
// TPrivateTypeNormalizedString ...
type TPrivateTypeNormalizedString string

func (t *TPrivateTypeNormalizedString) Validate() error {
	if len(*t) < 1 {
		return errors.New("меньше минимального 1 значение в TPrivateTypeNormalizedString")
	}

	return nil
}

// "ComplexType"
// TPrivate ...
type TPrivate struct {
	TAnyContentFromOtherNamespace
	TypesssAttr *string                      `xml:"typesss,attr,omitempty" json:"typesss,omitempty"`
	NameAttr    *TIEDName                    `xml:"name,attr,omitempty" json:"name,omitempty"`
	TypeAttr    TPrivateTypeNormalizedString `xml:"type,attr" json:"type"`
	SourceAttr  string                       `xml:"source,attr" json:"source"`
}

func (t *TPrivate) Validate() error {
	if err := t.TAnyContentFromOtherNamespace.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	if err := t.NameAttr.Validate(); err != nil {
		return err
	}
	if err := t.TypeAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type=""
	if t.TypeAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "type", "TPrivate")
	}
	// check use='required'  type="string"
	if t.SourceAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "source", "TPrivate")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TVal ...
type TVal struct {
	NodeID
	Content    string  `xml:",chardata" json:",omitempty"`
	SGroupAttr *uint32 `xml:"sGroup,attr,omitempty" json:"sGroup,omitempty"`
}

func (t *TVal) Validate() error {
	// Content type "string" skipped, is go-based// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TIDNaming ...
type TIDNaming struct {
	TBaseElement
	AgDesc     // AttributeGroup
	IdAttr TID `xml:"id,attr" json:"id"`
}

func (t *TIDNaming) Validate() error {
	if err := t.TBaseElement.Validate(); err != nil {
		return err
	}
	// AttributeGroup
	if err := t.AgDesc.Validate(); err != nil {
		return err
	}

	// Attributes
	if err := t.IdAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type="tID"
	if t.IdAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "id", "TIDNaming")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TBaseElement ...
type TBaseElement struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	CustomElements   []AnyHolder          `xml:",any"`
	Text             *TText               `xml:"Text" json:"Text"`
	Private          []TPrivate           `xml:"Private" json:"Private"`
}

func (t *TBaseElement) Validate() error {
	// AttributeGroup

	// Attributes
	// Elements
	if err := t.Text.Validate(); err != nil {
		return err
	}
	for _, el := range t.Private {
		if err := CheckValidate(&el); err != nil {
			return err
		}
	}

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "SimpleType"
// base:"xs:token"
// TID ...
type TID string

func (t *TID) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^\S+$`} {
		if ok, err := regexp.MatchString(p, string(*t)); err != nil {
			return err
		} else {
			if ok {
				checkPattern = true
				break
			}
		}
	}
	if checkPattern == false {
		return errors.New("none were found match pattern: " + "TID")
	}
	if len(*t) < 1 {
		return errors.New("меньше минимального 1 значение в TID")
	}
	if len(*t) > 255 {
		return errors.New("больше макс значения 255 в TID")
	}

	return nil
}

// "AttributeGroup"
// AgDesc ...
type AgDesc struct {
	DescAttr *string `xml:"desc,attr,omitempty" json:"desc,omitempty"`
}

func (t *AgDesc) Validate() error {

	return nil
}

// "ComplexType"
// TText ...
type TText struct {
	TAnyContentFromOtherNamespace
	SourceAttr *string `xml:"source,attr,omitempty" json:"source,omitempty"`
}

func (t *TText) Validate() error {
	if err := t.TAnyContentFromOtherNamespace.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}
