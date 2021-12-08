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
// TIEDNameOrNone is  UNION type
type TIEDNameOrNone struct {
	UnionContent
	//Content        string `xml:",chardata" json:",omitempty"`
	tIEDNameIsNone *TIEDNameIsNone
	tIEDName       *TIEDName
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
// base:"xs:normalizedString"
// TAnyName ...
type TAnyName string

func (t *TAnyName) Validate() error {

	return nil
}

// "ComplexType"
// ComplexType1 ...
type ComplexType1 struct {
	NodeID
	*TIEDNameOrNone `xml:",chardata" json:",omitempty"`
	TypeAttr        TAnyName        `xml:"type,attr" json:"type"`
	Type2Attr       *TIEDNameOrNone `xml:"type2,attr,omitempty" json:"type2,omitempty"`
}

func (t *ComplexType1) Validate() error {
	if err := t.TIEDNameOrNone.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	if err := t.TypeAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type="tAnyName"
	if t.TypeAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "type", "ComplexType1")
	}
	if err := t.Type2Attr.Validate(); err != nil {
		return err
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	//	for example minOccurs=1,2 ... and maxOccurs=2
	return nil
}

// "ComplexType"
// SCL ...
type SCL struct {
	TBaseElement
	ComplexType1 []ComplexType1 `xml:"ComplexType1" json:"ComplexType1"`
}

func (t *SCL) Validate() error {
	if err := t.TBaseElement.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	// Elements
	for _, el := range t.ComplexType1 {
		if err := CheckValidate(&el); err != nil {
			return err
		}
	}

	//todo: check "minOccurs" and "maxOccurs"
	//	for example minOccurs=1,2 ... and maxOccurs=2
	return nil
}

// "Element"// "Element"// "ComplexType"
// TBaseElement ...
type TBaseElement struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	CustomElements   []AnyHolder          `xml:",any"`
	Text             *string              `xml:"Text" json:"Text"`
}

func (t *TBaseElement) Validate() error {
	// AttributeGroup

	// Attributes
	// Elements
	//Text is SimpleType; skipped

	//todo: check "minOccurs" and "maxOccurs"
	//	for example minOccurs=1,2 ... and maxOccurs=2
	return nil
}
