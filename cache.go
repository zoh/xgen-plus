package xgen

var (
	simpleTypes = map[string]*SimpleType{}
)

//
func FlushSimpleType(st *SimpleType) {
	if _, ok := simpleTypes[st.Name]; ok == false {
		simpleTypes[st.Name] = st
	}
}

func FindSimpleType(name string) (*SimpleType, bool) {
	st, ok := simpleTypes[name]
	return st, ok
}

func isUnionSimpleType(name string) bool {

	st, ok := FindSimpleType(name)
	if ok {
		return st.Union
	}
	return false
}
