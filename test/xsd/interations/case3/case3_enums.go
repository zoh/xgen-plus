package schema

import (
	"encoding/xml"
	"errors"
	"fmt"
	"regexp"
)

// "SimpleType"
// base:"xs:normalizedString"
// TPAddr ...
type TPAddr string

func (t *TPAddr) Validate() error {
	if len(*t) < 1 {
		return errors.New("меньше минимального 1 значение в TPAddr")
	}

	return nil
}

// "ComplexType"
// TP ...
type TP struct {
	NodeID
	*TPAddr  `xml:",chardata" json:",omitempty"`
	TypeAttr TPTypeEnum `xml:"type,attr" json:"type"`
}

func (t *TP) Validate() error {
	if err := t.TPAddr.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	if err := t.TypeAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type="tPTypeEnum"
	if t.TypeAttr.IsEmpty() {
		return fmt.Errorf("requred attribute %q in %s", "type", "TP")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TPIPbase ...
type TPIPbase struct {
	TP
}

func (t *TPIPbase) Validate() error {
	if err := t.TP.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "Element"
// IPbase ...
type IPbase = TPIPbase

// "ComplexType"
// SCL ...
type SCL struct {
	TBaseElement
	IPbase []TPIPbase `xml:"IPbase" json:"IPbase"`
	Val    []TVal     `xml:"Val" json:"Val"`
}

func (t *SCL) Validate() error {
	if err := t.TBaseElement.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	// Elements
	for _, el := range t.IPbase {
		if err := CheckValidate(&el); err != nil {
			return err
		}
	}
	for _, el := range t.Val {
		if err := CheckValidate(&el); err != nil {
			return err
		}
	}

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "Element"// "ComplexType"
// TBaseElement ...
type TBaseElement struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	TestAttr         string               `xml:"test,attr" json:"test"`
}

func (t *TBaseElement) Validate() error {
	// AttributeGroup

	// Attributes
	// check use='required'  type="string"
	if t.TestAttr == "" {
		return fmt.Errorf("requred attribute %q in %s", "test", "TBaseElement")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "SimpleType"
// TPTypeEnum ...
type TPTypeEnum struct { /* UNION */
	Content              string `xml:",chardata" json:",omitempty"`
	tPredefinedPTypeEnum *TPredefinedPTypeEnum
	tExtensionPTypeEnum  *TExtensionPTypeEnum
}

func (t *TPTypeEnum) IsEmpty() bool { return t.Content == "" }
func (t *TPTypeEnum) UnmarshalXMLAttr(attr xml.Attr) error {
	t.Content = attr.Value
	return nil
}
func (t *TPTypeEnum) MarshalXMLAttr(name xml.Name) (xml.Attr, error) {
	return xml.Attr{
		Name:  name,
		Value: t.Content,
	}, nil
}

func (t *TPTypeEnum) Validate() error {
	{
		p := TPredefinedPTypeEnum(t.Content)
		t.tPredefinedPTypeEnum = &p
		if err := t.tPredefinedPTypeEnum.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.tPredefinedPTypeEnum = nil
		}
	}
	{
		p := TExtensionPTypeEnum(t.Content)
		t.tExtensionPTypeEnum = &p
		if err := t.tExtensionPTypeEnum.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.tExtensionPTypeEnum = nil
		}
	}
	return errors.New("не нашли member from union TPTypeEnum")
UnionLabel:

	return nil
}

// "SimpleType"
// base:"xs:Name"
// TPredefinedPTypeEnum ...
type TPredefinedPTypeEnum string

func (t *TPredefinedPTypeEnum) Validate() error {
	// check all enums
	switch *t {
	case TPredefinedPTypeEnum_IP:
	case TPredefinedPTypeEnum_IPSUBNET:
	case TPredefinedPTypeEnum_IPGATEWAY:
	case TPredefinedPTypeEnum_OSINSAP:
	case TPredefinedPTypeEnum_OSITSEL:
	case TPredefinedPTypeEnum_OSISSEL:
	case TPredefinedPTypeEnum_OSIPSEL:
	case TPredefinedPTypeEnum_OSIAPTitle:
	case TPredefinedPTypeEnum_OSIAPInvoke:
	case TPredefinedPTypeEnum_OSIAEQualifier:
	case TPredefinedPTypeEnum_OSIAEInvoke:
	case TPredefinedPTypeEnum_MACAddress:
	case TPredefinedPTypeEnum_APPID:
	case TPredefinedPTypeEnum_VLANPRIORITY:
	case TPredefinedPTypeEnum_VLANID:
	case TPredefinedPTypeEnum_SNTPPort:
	case TPredefinedPTypeEnum_MMSPort:
	case TPredefinedPTypeEnum_DNSName:
	case TPredefinedPTypeEnum_IPv6FlowLabel:
	case TPredefinedPTypeEnum_IPv6ClassOfTraffic:
	case TPredefinedPTypeEnum_C37118IPPort:
	case TPredefinedPTypeEnum_IPUDPPORT:
	case TPredefinedPTypeEnum_IPTCPPORT:
	case TPredefinedPTypeEnum_IPv6:
	case TPredefinedPTypeEnum_IPv6SUBNET:
	case TPredefinedPTypeEnum_IPv6GATEWAY:
	case TPredefinedPTypeEnum_IPv6IGMPv3Src:
	case TPredefinedPTypeEnum_IPIGMPv3Src:
	case TPredefinedPTypeEnum_IPClassOfTraffic:
	default:
		return fmt.Errorf("invalid enum value %v for type %s", *t, "TPredefinedPTypeEnum")
	}

	return nil
}

const (
	TPredefinedPTypeEnum_IP                 TPredefinedPTypeEnum = "IP"
	TPredefinedPTypeEnum_IPSUBNET           TPredefinedPTypeEnum = "IP-SUBNET"
	TPredefinedPTypeEnum_IPGATEWAY          TPredefinedPTypeEnum = "IP-GATEWAY"
	TPredefinedPTypeEnum_OSINSAP            TPredefinedPTypeEnum = "OSI-NSAP"
	TPredefinedPTypeEnum_OSITSEL            TPredefinedPTypeEnum = "OSI-TSEL"
	TPredefinedPTypeEnum_OSISSEL            TPredefinedPTypeEnum = "OSI-SSEL"
	TPredefinedPTypeEnum_OSIPSEL            TPredefinedPTypeEnum = "OSI-PSEL"
	TPredefinedPTypeEnum_OSIAPTitle         TPredefinedPTypeEnum = "OSI-AP-Title"
	TPredefinedPTypeEnum_OSIAPInvoke        TPredefinedPTypeEnum = "OSI-AP-Invoke"
	TPredefinedPTypeEnum_OSIAEQualifier     TPredefinedPTypeEnum = "OSI-AE-Qualifier"
	TPredefinedPTypeEnum_OSIAEInvoke        TPredefinedPTypeEnum = "OSI-AE-Invoke"
	TPredefinedPTypeEnum_MACAddress         TPredefinedPTypeEnum = "MAC-Address"
	TPredefinedPTypeEnum_APPID              TPredefinedPTypeEnum = "APPID"
	TPredefinedPTypeEnum_VLANPRIORITY       TPredefinedPTypeEnum = "VLAN-PRIORITY"
	TPredefinedPTypeEnum_VLANID             TPredefinedPTypeEnum = "VLAN-ID"
	TPredefinedPTypeEnum_SNTPPort           TPredefinedPTypeEnum = "SNTP-Port"
	TPredefinedPTypeEnum_MMSPort            TPredefinedPTypeEnum = "MMS-Port"
	TPredefinedPTypeEnum_DNSName            TPredefinedPTypeEnum = "DNSName"
	TPredefinedPTypeEnum_IPv6FlowLabel      TPredefinedPTypeEnum = "IPv6FlowLabel"
	TPredefinedPTypeEnum_IPv6ClassOfTraffic TPredefinedPTypeEnum = "IPv6ClassOfTraffic"
	TPredefinedPTypeEnum_C37118IPPort       TPredefinedPTypeEnum = "C37-118-IP-Port"
	TPredefinedPTypeEnum_IPUDPPORT          TPredefinedPTypeEnum = "IP-UDP-PORT"
	TPredefinedPTypeEnum_IPTCPPORT          TPredefinedPTypeEnum = "IP-TCP-PORT"
	TPredefinedPTypeEnum_IPv6               TPredefinedPTypeEnum = "IPv6"
	TPredefinedPTypeEnum_IPv6SUBNET         TPredefinedPTypeEnum = "IPv6-SUBNET"
	TPredefinedPTypeEnum_IPv6GATEWAY        TPredefinedPTypeEnum = "IPv6-GATEWAY"
	TPredefinedPTypeEnum_IPv6IGMPv3Src      TPredefinedPTypeEnum = "IPv6-IGMPv3Src"
	TPredefinedPTypeEnum_IPIGMPv3Src        TPredefinedPTypeEnum = "IP-IGMPv3Src"
	TPredefinedPTypeEnum_IPClassOfTraffic   TPredefinedPTypeEnum = "IP-ClassOfTraffic"
)

// "SimpleType"
// base:"xs:normalizedString"
// TExtensionPTypeEnum ...
type TExtensionPTypeEnum string

func (t *TExtensionPTypeEnum) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^[A-Z][0-9A-Za-z\-]*$`} {
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
		return errors.New("none were found match pattern: " + "TExtensionPTypeEnum")
	}

	return nil
}

// "SimpleType"
// TSDOCount ...
type TSDOCount struct { /* UNION */
	Content        string `xml:",chardata" json:",omitempty"`
	unsignedInt    *UnsignedInt
	tRestrName1stL *TRestrName1stL
}

func (t *TSDOCount) IsEmpty() bool { return t.Content == "" }
func (t *TSDOCount) UnmarshalXMLAttr(attr xml.Attr) error {
	t.Content = attr.Value
	return nil
}
func (t *TSDOCount) MarshalXMLAttr(name xml.Name) (xml.Attr, error) {
	return xml.Attr{
		Name:  name,
		Value: t.Content,
	}, nil
}

func (t *TSDOCount) Validate() error {
	{
		p := UnsignedInt(t.Content)
		t.unsignedInt = &p
		if err := t.unsignedInt.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.unsignedInt = nil
		}
	}
	{
		p := TRestrName1stL(t.Content)
		t.tRestrName1stL = &p
		if err := t.tRestrName1stL.Validate(); err == nil {
			goto UnionLabel
		} else {
			t.tRestrName1stL = nil
		}
	}
	return errors.New("не нашли member from union TSDOCount")
UnionLabel:

	return nil
}

// "SimpleType"
// base:"xs:Name"
// TRestrName1stL ...
type TRestrName1stL string

func (t *TRestrName1stL) Validate() error {
	var checkPattern bool
	for _, p := range []string{`^[a-z][0-9A-Za-z]*$`} {
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
		return errors.New("none were found match pattern: " + "TRestrName1stL")
	}

	return nil
}

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

// "ComplexType"
// TPIPv6IGMPv3Src ...
type TPIPv6IGMPv3Src struct {
	TPIPv6base
	TypeAttr TPTypeEnum `xml:"type,attr" json:"type"`
}

func (t *TPIPv6IGMPv3Src) Validate() error {
	if err := t.TPIPv6base.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	if err := t.TypeAttr.Validate(); err != nil {
		return err
	}
	// check use='required'  type="tPTypeEnum"
	if t.TypeAttr.IsEmpty() {
		return fmt.Errorf("requred attribute %q in %s", "type", "TPIPv6IGMPv3Src")
	}
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "ComplexType"
// TPIPv6base ...
type TPIPv6base struct {
	TP
}

func (t *TPIPv6base) Validate() error {
	if err := t.TP.Validate(); err != nil {
		return err
	}
	// AttributeGroup

	// Attributes
	// Elements

	//todo: check "minOccurs" and "maxOccurs"
	return nil
}

// "Element"
// Val ...
type Val = TVal

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
