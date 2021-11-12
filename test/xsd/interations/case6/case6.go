package schema

import (
	"fmt"
)

// "SimpleType"
// base:"xs:unsignedInt"
// TServiceWithMaxNonZeroMaxUnsignedInt ...
type TServiceWithMaxNonZeroMaxUnsignedInt uint32

func (t *TServiceWithMaxNonZeroMaxUnsignedInt) Validate() error {

	return nil
}

// "ComplexType"
// TServiceWithMaxNonZero ...
type TServiceWithMaxNonZero struct {
	NodeID
	MaxAttr TServiceWithMaxNonZeroMaxUnsignedInt `xml:"max,attr" json:"max"`
}

func (t *TServiceWithMaxNonZero) Validate() error {
	// AttributeGroup

	// Attributes
	if err := t.MaxAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type=""
	if t.MaxAttr == 0 {
		return fmt.Errorf("requred attribute %q in %s", "max", "TServiceWithMaxNonZero")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "Element"
// ConfLogControl ...
type ConfLogControl = TServiceWithMaxNonZero

// "ComplexType"
// SCL ...
type SCL struct {
	NodeID
	ConfLogControl []TServiceWithMaxNonZero `xml:"ConfLogControl" json:"ConfLogControl"`
}

func (t *SCL) Validate() error {
	// AttributeGroup

	// Attributes
	// Elements
	for _, el := range t.ConfLogControl {
		if err := CheckValidate(&el); err != nil {
			return err
		}
	}

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "Element"
