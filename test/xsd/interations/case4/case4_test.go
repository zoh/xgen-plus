package schema

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"io/ioutil"
	"log"
	"testing"
)

func readFileAll(fileName string) ([]byte, error) {
	b, err := ioutil.ReadFile(fileName)
	if err != nil {
		log.Fatalf("failed to open")

	}
	return b, err
}

func TestParseXml(t *testing.T) {
	// test correct parse xml
	s, err := readFileAll("case4_union.xml")
	require.NoError(t, err)
	var model SCL
	require.NoError(t, xml.Unmarshal(s, &model))

	content := model.ComplexType1[0]

	assert.Equal(t, string(content.TypeAttr), "123123")
	assert.Equal(t, string(content.Type2Attr.Content), "ASDAD2")
	assert.Equal(t, content.Content, "123None123")
	//assert.NotNil(t, model.Content, "None")

	err = content.TIEDNameOrNone.Validate()
	assert.Error(t, err,
		"должна быть ошибка при проверку паттерна ")

	logrus.Info(err)

	b, err := xml.Marshal(model)
	require.NoError(t, err)

	fmt.Println(string(b))

	b, err = json.Marshal(model)
	fmt.Println(string(b), err)
}

func TestParseXmlRequireTypeAttr(t *testing.T) {
	// test correct parse xml
	s, err := readFileAll("case4_union_2.xml")
	require.NoError(t, err)
	var model SCL
	require.NoError(t, xml.Unmarshal(s, &model))

	t.Cleanup(func() {
		b, err := xml.Marshal(model)
		require.NoError(t, err)

		fmt.Println(string(b))
	})

	content := model.ComplexType1[0]

	assert.Equal(t, content.TypeAttr, TAnyName(""))
	assert.Equal(t, content.Content, "None")

	err = content.Validate()

	assert.Error(t, err, "должна быть ошибка при проверку паттерна ")
	logrus.Info(err)

	assert.NotNil(t, content.tIEDNameIsNone, "должно быть присвоено значение string равное Content типа union")

	// должно быть и валидировать комплекс тайп
	err = model.Validate()
	assert.NotNil(t, model.Validate())

	fmt.Println(err, "?")
}
