package schema

import (
	"encoding/xml"
	"time"
)

// MyType1 ...
type MyType1 []byte

// MyType2 ...
type MyType2 struct {
	XMLName    xml.Name `xml:"myType2"`
	LengthAttr int      `xml:"length,attr,omitempty"`
}

// MyType3 ...
type MyType3 struct {
	XMLName    xml.Name `xml:"myType3"`
	LengthAttr int      `xml:"length,attr,omitempty"`
}

// MyType4 ...
type MyType4 struct {
	XMLName   xml.Name  `xml:"myType4"`
	Title     string    `xml:"title"`
	Blob      []byte    `xml:"blob"`
	Timestamp time.Time `xml:"timestamp"`
}

// MyType5 ...
type MyType5 time.Time
