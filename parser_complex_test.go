// Copyright 2020 - 2021 The xgen Authors. All rights reserved. Use of this
// source code is governed by a BSD-style license that can be found in the
// LICENSE file.
//
// Package xgen written in pure Go providing a set of functions that allow you
// to parse XSD (XML schema files). This library needs Go version 1.10 or
// later.

package xgen

import (
	"bufio"
	"fmt"
	"github.com/stretchr/testify/assert"
	"log"
	"os"
	"strings"
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
	var resFiles []string
	t := GinkgoT()

	BeforeSuite(func() {
		err := PrepareOutputDir(goCodeDir)
		assert.NoError(t, err)

		files, err := GetFileList("test/complex_xsd", "SCL.*")
		assert.NoError(t, err)
		for _, file := range files {
			parser := NewParser(NewOptions(file, xsdSrcDir, goCodeDir, "Go"))
			err = parser.Parse()
			assert.NoError(t, err, file)
			resFiles = append(resFiles, parser.CodeGenerator.File+".go")
		}
	})

	Context("check types", func() {
		It("should not types interface", func() {
			//
			for _, f := range resFiles {
				assert.NoError(t, readFile(f, func(v string, fileName string, line int) error {
					if strings.Contains(v, "interface{}") {
						return fmt.Errorf("не должно быть interface{} типа в структурах file=%s, line=%d", fileName, line)
					}
					return nil
				}))
			}
		})
	})
})

func readFile(fileName string, fnChecker func(v string, fileName string, line int) error) error {
	file, err := os.Open(fileName)
	if err != nil {
		log.Fatalf("failed to open")

	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Split(bufio.ScanLines)

	line := 0
	for scanner.Scan() {
		line++
		if err := fnChecker(scanner.Text(), fileName, line); err != nil {
			return err
		}
		//text = append(text, scanner.Text())
	}

	return nil
}

func checkInterface(v string, fileName string, line int) error {
	if strings.Contains(v, "interface{}") {
		return fmt.Errorf("не должно быть interface{} типа в структурах file=%s, line=%d", fileName, line)
	}
	return nil
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

func TestParse_Case1(t *testing.T) {
	file := "test/xsd/interations/case1.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, goCodeDir, "Go"))
	err := parser.Parse()
	assert.NoError(t, err, file)

	err = readFile("test/go/output/interations/case1.go", checkInterface)
	assert.NoError(t, err)
}
