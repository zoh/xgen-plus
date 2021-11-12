package schema

import (
	"errors"
	"fmt"
)

// "AttributeGroup"
// AgDesc ...
type AgDesc struct {
	DescAttr *string `xml:"desc,attr,omitempty" json:"desc,omitempty"`
}

func (t *AgDesc) Validate() error {

	return nil
}

// "ComplexType"
// TBaseElement ...
type TBaseElement struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	CustomElements   []AnyHolder          `xml:",any"`
}

func (t *TBaseElement) Validate() error {
	// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TUnNaming ...
type TUnNaming struct {
	TBaseElement
	AgDesc // AttributeGroup
}

func (t *TUnNaming) Validate() error {
	if err := t.TBaseElement.Validate(); err != nil {
		return err
	}
	// AttributeGroup
	if err := t.AgDesc.Validate(); err != nil {
		return err
	}

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TNaming ...
type TNaming struct {
	TBaseElement
	AgDesc         // AttributeGroup
	NameAttr TName `xml:"name,attr" json:"name"`
}

func (t *TNaming) Validate() error {
	if err := t.TBaseElement.Validate(); err != nil {
		return err
	}
	// AttributeGroup
	if err := t.AgDesc.Validate(); err != nil {
		return err
	}

	// Attributes
	if err := t.NameAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type="tName"
	if t.NameAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "name", "TNaming")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "SimpleType"
// base:"tAnyName"
// TName ...
type TName string

func (t *TName) Validate() error {
	if len(*t) < 1 {
		return errors.New("меньше минимального 1 значение в TName")
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
