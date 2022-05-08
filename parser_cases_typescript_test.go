package xgen

import (
	"fmt"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestParse_TS_Case1(t *testing.T) {
	file := "test/xsd/interations/case1/case1.xsd"

	opts := NewOptions(file, xsdSrcDir, xsdSrcDir, "TypeScript")
	parser := NewParser(opts)
	err := parser.Parse()
	assert.NoError(t, err, file)

	//fmt.Println(parser.CodeGenerator.File+".ts", "?")

	require.NoError(t, CreateBaseIndexFile(parser.CodeGenerator.OutputDir, []string{
		parser.CodeGenerator.File,
	}))
}

func TestCreateBaseIndexFile(t *testing.T) {
	require.NoError(t, CreateBaseIndexFile("", []string{"1", "2"}))
}

//
func TestParse_TS_Case2(t *testing.T) {
	file := "test/xsd/interations/case2/case2.xsd"

	opts := NewOptions(file, xsdSrcDir, xsdSrcDir, "TypeScript")
	parser := NewParser(opts)
	err := parser.Parse()
	assert.NoError(t, err, file)

	fmt.Println(parser.CodeGenerator.File+".ts", "?")
	require.NoError(t, CreateBaseIndexFile(parser.CodeGenerator.OutputDir, []string{
		parser.CodeGenerator.File,
	}))
}

func TestParse_TypeScriptSCLfile(t *testing.T) {
	file := "test/complex_xsd/SCL.xsd"
	parser := NewParser(NewOptions(file, xsdSrcDir, tsSrcDir, TypeScriptLang))
	err := parser.Parse()
	require.NoError(t, err, file)
}

func TestParse_TypeScriptSCLAll(t *testing.T) {
	err := PrepareOutputDir(tsSrcDir)
	assert.NoError(t, err)

	files, err := GetFileList("test/complex_xsd", "SCL.*")
	assert.NoError(t, err)
	//

	var resultFiles []string
	var parser *Options
	for _, file := range files {
		parser = NewParser(NewOptions(file, xsdSrcDir, tsSrcDir, TypeScriptLang))
		err = parser.Parse()
		require.NoError(t, err, file)

		if parser.CodeGenerator != nil {
			logrus.Infoln(parser.CodeGenerator.File)
			resultFiles = append(resultFiles, parser.CodeGenerator.File)
		} else {
			logrus.Warn("not found CodeGenerator object")
		}
		fmt.Println("Done.", file)
	}

	require.NoError(t, CreateBaseIndexFile("test/ts/test/complex_xsd", resultFiles))
}
