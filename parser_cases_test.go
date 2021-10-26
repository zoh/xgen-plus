// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"errors"
	"fmt"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"path"
	"strings"
	"testing"
)

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
func TestParse_Case1(t *testing.T) {
	file := "test/xsd/interations/case1.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	err = readFile("test/go/output/interations/case1.go", checkInterface)
	assert.NoError(t, err)

	err = readFile("test/go/output/interations/case1.go", func(v string, fileName string, line int) error {
		if strings.Contains(v, "XsNormalizedString") {
			return errors.New("XsNormalizedString invalid XsNormalizedString generated")
		}
		return nil
	})
	assert.NoError(t, err)
}

func TestParse_Case2(t *testing.T) {
	testLogger.Info("Проверка на верность составления attributes group")
	file := "test/xsd/interations/case2.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	err = readFile("test/go/output/interations/case2.go", func(lineString string, fileName string, line int) error {
		l := strings.TrimSpace(lineString)
		if strings.Contains(l, "AgDesc   AgDesc") {
			return errors.New("incorrect render attribute group")
		}
		return nil
	})
	assert.NoError(t, err)
}

func TestParse_Case3(t *testing.T) {
	file := "test/xsd/interations/case3_enums.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	filePath := "test/xsd/interations/case3_enums.go"

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
	file := "test/xsd/interations/case4_union.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	fValue, err := readFileAll("test/xsd/interations/case4_union.go")
	require.NoError(t, err)
	lines := strings.Split(fValue, "\n")

	assert.False(t, strings.Contains(fValue, "type TP struct {\n\tTPAddr"), "TP struct должен быть тип родителя ")

	for i := 0; i < len(lines); i++ {
		if strings.Contains(lines[i], "type ComplexType1") {
			line := strings.TrimSpace(lines[i+1])
			assert.Contains(t, line, "NodeID", "ComplexType1 должен содержать NodeID так как базовый тип простой")
		}
	}
}

func TestParse_Case5(t *testing.T) {
	testLogger.Info("Проверка на Union Types")
	file := "test/xsd/interations/case5_any.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, xsdSrcDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	fValue, err := readFileAll("test/xsd/interations/case5_any.go")
	require.NoError(t, err)
	lines := strings.Split(fValue, "\n")

	for i := 0; i < len(lines); i++ {
		if strings.Contains(lines[i], "type TAnyContentFromOtherNamespace struct") {
			//line := strings.TrimSpace(lines[i+1])
			//assert.Contains(t, line, "NodeID", "ComplexType1 должен содержать NodeID так как базовый тип простой")

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

// todo: case with pattern regExp
