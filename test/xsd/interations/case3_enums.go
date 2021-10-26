// Code generated by xgen-plus. DO NOT EDIT.

package schema

import (
	"encoding/xml"
)

// "SimpleType"
// base:"xs:normalizedString"
// TPAddr ...
type TPAddr string

// "ComplexType"
// TP ...
type TP struct {
	NodeID
	Content  *TPAddr    `xml:",chardata" json:",omitempty"`
	TypeAttr TPTypeEnum `xml:"type,attr" json:"type"`
}

// "ComplexType"
// TPIPbase ...
type TPIPbase struct {
	TP
}

// "Element"
// IPbase ...
type IPbase TPIPbase

// "ComplexType"
// SCL ...
type SCL struct {
	TBaseElement
	IPbase []TPIPbase `xml:"IPbase" json:"IPbase"`
}

// "Element"// "ComplexType"
// TBaseElement ...
type TBaseElement struct {
	NodeID
	AdditionalFields AdditionalFieldsType `xml:",any,attr"`
	TestAttr         string               `xml:"test,attr" json:"test"`
}

// "SimpleType"
// TPTypeEnum ...
type TPTypeEnum struct { /* UNION */
	TPredefinedPTypeEnum *TPredefinedPTypeEnum
	TExtensionPTypeEnum  *TExtensionPTypeEnum
}

// "SimpleType"
// base:"xs:Name"
// TPredefinedPTypeEnum ...
type TPredefinedPTypeEnum string

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

// "SimpleType"
// TSDOCount ...
type TSDOCount struct { /* UNION */
	UnsignedInt    *uint32
	TRestrName1stL *TRestrName1stL
}

// "SimpleType"
// base:"xs:Name"
// TRestrName1stL ...
type TRestrName1stL string

// "SimpleType"
// base:"xs:Name"
// TAcsiName ...
type TAcsiName string

// "SimpleType"
// base:"tAcsiName"
// TIEDNameIsNone ...
type TIEDNameIsNone string

// "ComplexType"
// TPIPv6IGMPv3Src ...
type TPIPv6IGMPv3Src struct {
	TPIPv6base
	TypeAttr TPTypeEnum `xml:"type,attr" json:"type"`
}

// "ComplexType"
// TPIPv6base ...
type TPIPv6base struct {
	TP
}
