// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"github.com/stretchr/testify/assert"
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestParseSCL(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Parser Suite SCL document")
}

/*
func TestParseGo2(t *testing.T) {
	err := PrepareOutputDir(goCodeDir)
	assert.NoError(t, err)

	files, err := GetFileList("test/complex_xsd", "SCL_Substation.*")
	assert.NoError(t, err)
	for _, file := range files {
		parser := NewParser(NewOptions(file, xsdSrcDir, goCodeDir, "Go"))
		err = parser.Parse()
		assert.NoError(t, err, file)
	}
}
*/

var _ = Describe("Parser and Gen SCL_Substation", func() {
	BeforeSuite(func() {
		t := GinkgoT()
		err := PrepareOutputDir(goCodeDir)
		assert.NoError(t, err)

		files, err := GetFileList("test/complex_xsd", "SCL_BaseTypes.*")
		assert.NoError(t, err)
		for _, file := range files {
			parser := NewParser(NewOptions(file, xsdSrcDir, goCodeDir, "Go"))
			err = parser.Parse()
			assert.NoError(t, err, file)
		}
	})

	Context("extensions", func() {
		It("should be embedded composite of TPowerSystemResource", func() {
			//
		})
	})
})
