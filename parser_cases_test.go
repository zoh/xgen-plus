package xgen

import (
	"errors"
	"fmt"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go/ast"
	"go/parser"
	"go/token"
	"log"
	"path"
	"strings"
	"testing"
)

func TestParse_Case1(t *testing.T) {
	file := "test/xsd/interations/case1/case1.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	err = readFile("test/xsd/interations/case1/case1.go", checkInterface)
	assert.NoError(t, err)

	err = readFile("test/xsd/interations/case1/case1.go", func(v string, fileName string, line int) error {
		if strings.Contains(v, "XsNormalizedString") && strings.Contains(v, "// XsNormalizedString") == false {
			return errors.New("XsNormalizedString invalid XsNormalizedString generated")
		}
		return nil
	})
	assert.NoError(t, err)
}

func TestParse_Case2(t *testing.T) {
	testLogger.Info("Проверка на верность составления attributes group")
	file := "test/xsd/interations/case2/case2.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	err = readFile("test/xsd/interations/case2/case2.go", func(lineString string, fileName string, line int) error {
		l := strings.TrimSpace(lineString)
		if strings.Contains(l, "AgDesc   AgDesc") {
			return errors.New("incorrect render attribute group")
		}
		return nil
	})
	assert.NoError(t, err)
}

func TestParse_Case3(t *testing.T) {
	file := "test/xsd/interations/case3/case3_enums.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	filePath := "test/xsd/interations/case3/case3_enums.go"

	var enums = []string{"IP",
		"IP-SUBNET",
		"IP-GATEWAY",
		"OSI-NSAP",
		"OSI-TSEL",
		"OSI-SSEL",
		"OSI-PSEL",
		"OSI-AP-Title",
		"OSI-AP-Invoke",
		"OSI-AE-Qualifier",
		"OSI-AE-Invoke",
		"MAC-Address",
		"APPID",
		"VLAN-PRIORITY",
		"VLAN-ID",
		"SNTP-Port",
		"MMS-Port",
		"DNSName",
		"IPv6FlowLabel",
		"IPv6ClassOfTraffic",
		"C37-118-IP-Port",
		"IP-UDP-PORT",
		"IP-TCP-PORT",
		"IPv6",
		"IPv6-SUBNET",
		"IPv6-GATEWAY",
		"IPv6-IGMPv3Src",
		"IP-IGMPv3Src",
		"IP-ClassOfTraffic"}

	fValue, err := readFileAll(filePath)
	require.NoError(t, err)

	for _, e := range enums {
		if !strings.Contains(fValue, fmt.Sprintf("%q", e)) {
			t.Errorf("%s в файле нет %q", path.Base(filePath), e)
		}
	}

	assert.False(t, strings.Contains(fValue, "type TP struct {\n\tTPAddr"), "TP struct должен быть тип родителя ")
}

func TestParse_Case4(t *testing.T) {
	testLogger.Info("Проверка на Union Types")
	file := "test/xsd/interations/case4/case4_union.xsd"
	parserXgen := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parserXgen.Parse()
	assert.NoError(t, err, file)

	fileName := "test/xsd/interations/case4/case4_union.go"
	fValue, err := readFileAll(fileName)
	require.NoError(t, err)
	lines := strings.Split(fValue, "\n")

	assert.False(t, strings.Contains(fValue, "type TP struct {\n\tTPAddr"), "TP struct должен быть тип родителя ")

	for i := 0; i < len(lines); i++ {
		if strings.Contains(lines[i], "type ComplexType1") {
			line := strings.TrimSpace(lines[i+1])
			assert.Contains(t, line, "NodeID", "ComplexType1 должен содержать NodeID так как базовый тип простой")
		}
	}

	// check pattern parsed
	var p = []string{
		"^[A-Za-z][0-9A-Za-z_]{0,2}$",
		"^[A-Za-z][0-9A-Za-z_]{4,63}$",
		"^[A-MO-Za-z][0-9A-Za-z_]{3}$",
		"^N[0-9A-Za-np-z_][0-9A-Za-z_]{2}$",
		"^No[0-9A-Za-mo-z_][0-9A-Za-z_]$",
		"^Non[0-9A-Za-df-z_]$",
	}

	for _, pt := range parserXgen.ProtoTree {
		st, ok := pt.(*SimpleType)
		if ok && st.Name == "tIEDName" {
			if !contains(p, st.Restriction.Pattern) {
				t.Error("not found all patterns", st.Restriction.Pattern)
			} else {
				log.Printf("Good.")
			}

			// check minLength and maxLength
			assert.Equal(t, st.Restriction.MinLength, 1)
			assert.Equal(t, st.Restriction.MaxLength, 64)
		}

		if ok && st.Name == "tAcsiName" {
			if !contains([]string{"^[A-Za-z][0-9A-Za-z_]*$"}, st.Restriction.Pattern) {
				t.Error("not found all patterns", st.Restriction.Pattern)
			}
		}
	}

	t.Run("check default param from <attribute", func(t *testing.T) {
		for _, pt := range parserXgen.ProtoTree {
			ct, ok := pt.(*ComplexType)
			if ok && ct.Name == "ComplexType1" {
				for _, attr := range ct.Attributes {
					if attr.Name == "type2" {
						require.NotNil(t, attr.Default)
						assert.Equal(t, *attr.Default, "NonA")
					}
				}
			}
		}

		fset := token.NewFileSet()
		node, err := parser.ParseFile(fset, fileName, nil, parser.ParseComments)
		if err != nil {
			panic(err)
		}

		var cases = []struct {
			name  string
			value string
			found bool
		}{
			{
				name:  "ComplexType1Type2AttrDefault",
				value: `NonA`,
			},
			{
				"ComplexType1Type3AttrDefault", "false", false,
			},
			{
				"ComplexType1XferNumberAttrDefault", "30", false,
			},
		}

		for _, f := range node.Decls {
			genD, ok := f.(*ast.GenDecl)
			if !ok {
				continue
			}
			for _, spec := range genD.Specs {
				currType, ok := spec.(*ast.ValueSpec)
				if !ok {
					continue
				}

				if len(currType.Values) > 1 {
					panic("sow many values")
				}

				switch v := currType.Values[0].(type) {
				case *ast.BasicLit:
					for i, c := range cases {
						if c.name == currType.Names[0].String() && fmt.Sprintf("%q", c.value) == v.Value {
							cases[i].found = true
						}
					}
				case *ast.Ident:
					for i, c := range cases {
						if c.name == currType.Names[0].String() && fmt.Sprintf("%q", c.value) == v.String() {
							cases[i].found = true
						}
					}
				}
			}
		}

		// check cases
		for _, c := range cases {
			if !c.found {
				t.Errorf("not found %s with value %s", c.name, c.value)
			}
		}
	})
}

func TestParse_Case5(t *testing.T) {
	testLogger.Info("Проверка на Union Types")
	file := "test/xsd/interations/case5/case5_any.xsd"
	parserXgen := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parserXgen.Parse()
	assert.NoError(t, err, file)

	fValue, err := readFileAll("test/xsd/interations/case5/case5_any.go")
	require.NoError(t, err)
	lines := strings.Split(fValue, "\n")

	for i := 0; i < len(lines); i++ {
		if strings.Contains(lines[i], "type TAnyContentFromOtherNamespace struct") {
			for _, l := range lines[i:] {
				if strings.Contains(l, `xml:",any,attr"`) {
					goto next1
				}
			}
			t.Error("not found any attributes declarations")

		next1:
			for _, l := range lines[i:] {
				if strings.Contains(l, `xml:",any"`) {
					goto next2
				}
			}
			t.Error("not found any elements declarations")
		next2:
		}
	}
}

func TestParse_Case6(t *testing.T) {
	file := "test/xsd/interations/case6/case6.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	fValue, err := readFileAll("test/xsd/interations/case6/case6.go")
	require.NoError(t, err)
	_ = strings.Split(fValue, "\n")
}
