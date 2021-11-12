package schema

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"os"
	"testing"
)

func TestCase1With(t *testing.T) {
	b, err := os.ReadFile("./case3_enums.xml")
	require.NoError(t, err)

	fmt.Println(string(b))
}
