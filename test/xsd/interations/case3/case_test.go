package schema

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"github.com/sirupsen/logrus"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"os"
	"testing"
)

func TestCase3(t *testing.T) {
	logrus.SetLevel(logrus.TraceLevel)

	b, err := os.ReadFile("case3_enums.xml")
	require.NoError(t, err)

	var model SCL
	require.NoError(t, xml.Unmarshal(b, &model))
	assert.NoError(t, model.Validate(), "валидация должна проходить")

	// check <Val
	assert.Equal(t, model.Val[0].Content, "adasd asd asdsa")
	assert.Equal(t, *(model.Val[0].SGroupAttr), uint32(123))

	b, err = xml.Marshal(model)
	require.NoError(t, err)
	fmt.Println(string(b))


	t.Run("un/marshall json", func(t *testing.T) {
		b, err := json.Marshal(model)
		require.NoError(t, err)

		fmt.Println(string(b), "?")
	})
}
