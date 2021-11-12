package schema

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
