package xgen

import (
	"fmt"
	"strings"
)

func (gen *CodeGenerator) GoSimpleTypeValidation(v *SimpleType) {
	var body string

	fieldName := genGoFieldName(trimNSPrefix(v.Name))

	if v.OrigBase != "" {
		baseName := genGoFieldName(v.OrigBase)
		body += "// " + baseName + " \n"
		if _, ok := FindSimpleType(v.OrigBase); ok {
			body += fmt.Sprintf("vv := %s(*t) \n	if err := vv.Validate(); err != nil { return err } \n", baseName)
		}
	}
	// todo: нужно сделать валидацию на <restriction base=""
	//  если он есть

	if v.Union && len(v.MemberTypes) > 0 {
		for memberName := range v.MemberTypes {
			var tt string
			if isUnionSimpleType(memberName) {
				tt = fmt.Sprintf("p := %s{} \n p.Content = t.Content \n", genGoFieldType(memberName))
			} else {
				tt = fmt.Sprintf("p := %[1]s(t.Content)", genGoFieldType(memberName))
			}

			body += fmt.Sprintf(`{
%[2]s
t.%[1]s = &p
if err := t.%[1]s.Validate(); err == nil { goto UnionLabel } else { t.%[1]s = nil }
}
`, memberName, tt)
		}
		gen.Imports["errors"] = struct{}{}
		body += fmt.Sprintf("return errors.New(\"не нашли member from union %s\")  \n UnionLabel: \n", fieldName)
	}

	if len(v.Restriction.Enum) > 0 {
		sb := new(strings.Builder)
		fieldName := genGoFieldName(trimNSPrefix(v.Name))

		sb.WriteString("// check all enums \nswitch *t {\n")
		for _, e := range v.Restriction.Enum {
			_, _ = fmt.Fprintf(sb, "case %s:\n", fieldName+"_"+genEnumName(e))
		}
		sb.WriteString("default: return fmt.Errorf(\"invalid enum value %v for type %s\", *t, \"" + fieldName + "\")\n")
		sb.WriteString("}\n\n")

		body += sb.String()
		gen.Imports["fmt"] = struct{}{}
	}

	if len(v.Restriction.Pattern) > 0 {
		gen.Imports["errors"] = struct{}{}
		gen.Imports["regexp"] = struct{}{}

		body += fmt.Sprintf(`var checkPattern bool
for _, p := range  []string{%s} {
	if ok, err := regexp.MatchString(p, string(*t)); err != nil { return err } else {
		if ok {
			checkPattern = true
			break
		}
	}
}
if checkPattern == false { return errors.New("none were found match pattern: " + %q) }
`, renderPatterns(v.Restriction.Pattern), fieldName)
	}

	if v.Restriction.MinLength > 0 {
		gen.Imports["errors"] = struct{}{}
		body += fmt.Sprintf("if len(*t) < %d { return errors.New(\"меньше минимального %[1]d значение в %s\") }\n",
			v.Restriction.MinLength, fieldName)
	}

	if v.Restriction.MaxLength > 0 {
		gen.Imports["errors"] = struct{}{}
		body += fmt.Sprintf("if len(*t) > %d { return errors.New(\"больше макс значения %[1]d в %s\") }\n",
			v.Restriction.MaxLength, fieldName)
	}

	// todo: max min ?

	gen.Field += fmt.Sprintf(`
// Validate ...
func (t *%[1]s) Validate() error { 
	if t == nil {
		return nil
	}
	%[2]s
	return nil
}
`, fieldName, body)
}

func renderPatterns(vls []string) string {
	bs := new(strings.Builder)
	for _, v := range vls {
		bs.WriteString("`" + v + "`")
		bs.WriteString(", ")
	}
	return bs.String()
}

// validate for ComplexType
func (gen *CodeGenerator) GoComplexTypeValidation(v *ComplexType) {
	var (
		body      string
		fieldName = genGoFieldName(v.Name)
	)

	// parent validation
	if v.EmbeddedStructName != "" {
		tt := getBasefromSimpleType(trimNSPrefix(v.EmbeddedStructName), gen.ProtoTree)

		_, ok := simpleTypes[v.EmbeddedStructName]

		if isSimpleType(tt, gen.Lang) || ok {
			// валидация для
			body += fmt.Sprintf("if t.Content != nil { if err := t.Content.Validate(); err!=nil { return err } } \n")
		} else {
			if types, ok := BuildInTypes[tt]; ok {
				body += fmt.Sprintf("// Content type %q skipped, is go-based", types[0])
			} else {
				body += fmt.Sprintf("if err := t.%s.Validate(); err!=nil { return err }\n",
					genGoFieldName(trimNSPrefix(v.EmbeddedStructName)))
			}

		}
	} else {
		if v.Base != "" {
			body += fmt.Sprintf(`if err := t.%s.Validate(); err!=nil {  return err  }
`,
				genGoFieldName(trimNSPrefix(v.Base)))
		}
	}

	// AttributeGroup
	body += "// AttributeGroup \n"
	for _, attrGroup := range v.AttributeGroup {
		fieldType := getBasefromSimpleType(trimNSPrefix(attrGroup.Ref), gen.ProtoTree)
		body += fmt.Sprintf("if err := t.%s.Validate(); err!=nil { return err } \n", genGoFieldType(fieldType))
	}
	body += "\n"

	body += "// Attributes \n"
	for _, attribute := range v.Attributes {
		name := genGoFieldName(attribute.Name) + "Attr"
		if !isSimpleType(attribute.Type, "Go") {
			body += fmt.Sprintf("if err := t.%s.Validate();err!=nil{ return err } \n", name)
		}
		if attribute.Optional == false {
			// check on required value
			body += fmt.Sprintf("// check use='required'  type=%q \n", attribute.Type)
			st, ok := simpleTypes[attribute.Type]

			if ok && st.Union {
				body += fmt.Sprintf("if t.%s.IsEmpty() { return fmt.Errorf(\"requred attribute %%q in %%s\", %[2]q, %[3]q) }\n",
					name, attribute.Name, fieldName)
			} else {
				var valueEq string
				attType := attribute.Type

				if st, ok := simpleTypes[attribute.Type]; ok {
					attType = st.Base
				}

				switch attType {
				case "uint32", "byte", "int":
					valueEq = `0`
				case "string":
					valueEq = `""`
				case "bool":
					valueEq = `false`
				case "":
					if attribute.SimpleTypeInside != nil {
						switch attribute.SimpleTypeInside.Base {
						case "uint32", "byte", "int":
							valueEq = `0`
						case "string":
							valueEq = `""`
						case "bool":
							valueEq = `false`
						}
					}
				default:
					valueEq = `""`
				}

				body += fmt.Sprintf("if t.%s == %[4]s { return fmt.Errorf(\"requred attribute %%q in %%s\", %[2]q, %[3]q) }\n",
					name, attribute.Name, fieldName, valueEq)
			}
			gen.Imports["fmt"] = struct{}{}
		}

		if attribute.Fixed != "" {
			//todo: check fixed value
		}
	}

	body += "// Elements \n"
	for _, element := range v.Elements {
		name := genGoFieldName(element.Name)
		if element.Plural {
			body += fmt.Sprintf("for _, el := range t.%s {\n", name)
			body += fmt.Sprintf("if err := CheckValidate(&el); err!=nil{ return err } \n")
			body += "}\n"
		} else {
			fieldType := genGoFieldType(getBasefromSimpleType(trimNSPrefix(element.Type), gen.ProtoTree))
			if isSimpleType(fieldType, "Go") {
				body += "//" + name + " is SimpleType; skipped \n"
				continue
			}
			body += fmt.Sprintf("if err := t.%s.Validate(); err!=nil { return err } \n", name)
		}
	}

	gen.Field += fmt.Sprintf(`
// Validate ...
func (t *%s) Validate() error { 
	if t == nil {
		return nil
	}
	%s
	//todo: check "minOccurs" and "maxOccurs"
	//	for example minOccurs=1,2 ... and maxOccurs=2
	return nil
}
`, fieldName, body)
}

// GoAttributeGroupValidation ...
func (gen *CodeGenerator) GoAttributeGroupValidation(v *AttributeGroup) {
	fieldName := genGoFieldName(trimNSPrefix(v.Name))
	var body string

	for _, attribute := range v.Attributes {
		fType := genGoFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree))

		if !isSimpleType(fType, "Go") {
			body += fmt.Sprintf("if err := t.%sAttr.Validate();err!=nil{ return err } \n", genGoFieldName(attribute.Name))
		}
		/*content += fmt.Sprintf("\t%sAttr\t%s\t`xml:\"%s,attr%s\"%s`\n",
		genGoFieldName(attribute.Name),
		genGoFieldType(getBasefromSimpleType(trimNSPrefix(attribute.Type), gen.ProtoTree)),
		attribute.Name, optional, jsonTag)*/
	}

	gen.Field += fmt.Sprintf(`
func (t *%s) Validate() error { 
	if t == nil {
		return nil
	}
	%s
	return nil
}
`, fieldName, body)
}
