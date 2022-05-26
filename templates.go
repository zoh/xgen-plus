package xgen

const _BaseIndexFileTypeScript = `// generated index.ts for all export
//
export type UnsignedInt = number;

export type AttributeDetail = {
  name: string
  fixed?: string
  required?: boolean
  fieldType?: any
}

export type ElementDetail = {
  plural?: boolean
  construct: Constructor
}

// NodeID ...
export class NodeID {
  node_id?: string

  constructor(...args: any[]) {
    if (args[0]?.node_id) {
      this.node_id = args[0]?.node_id
    }
  }

  Elements(): Record<string,ElementDetail> {
    return {}
  }

  Attributes(): Record<string, AttributeDetail> {
    return {}
  }
}

export interface Constructor {
  new (...args: any[]): any
  name?: string
}

//export type Constructor = new (...args: any[]) => {};

{{range .files}}export * from "./{{ . }}"
{{end}}`

const _TypeScriptAttributeGroupBody = `export function {{ .name }}<TBase extends Constructor>(Base: TBase) {
  return class {{ .name }} extends {{.base}} {
  {{range .params}}  {{.Name}}{{if .Optional}}?{{else}}!{{end}}: {{if .Plural}}[]{{end}}{{.Type}};
{{end}}
  constructor(...args: any[]) {
    super(...args);
{{range .params}}    if (args[0]?.hasOwnProperty("{{ .Name}}")) this.{{.Name}} = args[0]['{{.Name}}'];
{{end}}
  }

  Attributes() {
    return {
      ...super.Attributes(),
      {{range .params}} {{.Name}}: {name: "{{.Name}}", {{if .Optional}}{{else}}required: true,{{end}} fieldType: "{{.Type}}" },
{{end}}
    }
  }
  };
}`

const __TypeScriptComplexTypeConstructorMethods = `
  constructor(...args: any[]) {
    {{if .hasParent}}super(...args);{{end}}
    const opts = args[0];
    if (opts) {
    {{if .hasContent}}if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; {{end}}
    // Attributes
  {{range .v.Attributes}} {{if .Optional}}if (opts['{{.Name}}']) {{end}} this.{{.Name}} = opts['{{.Name}}'];
{{end}}
    // Elements
    {{range .v.Elements}}{{if .Plural}}{{if .PluralOptional}}if (opts['{{.Name}}']) {{end}} this.{{.Name}} = opts['{{.Name}}']?.map((val: any) => new {{.Type}}(val)); {{else}}{{if .PluralOptional}}if (opts['{{.Name}}']) {{end}} this.{{.Name}} = new {{.Type}}(opts['{{.Name}}']); {{end}}
{{end}}
    }
  }

  Elements() {
    return {
      {{if .hasParent}}...super.Elements(),{{end}}
      //...
      {{range .v.Elements}}"{{.Name}}": { construct: {{.Type}}, {{if .Plural}}plural: true{{end}} },
{{end}}
    }
  }

  Attributes() {
    return {
      {{if .hasParent}}...super.Attributes(),{{end}}
      {{range .v.Attributes}} {{.Name}}: { name: '{{.Name}}', {{if eq .Optional false}}required: true,{{end}} fieldType: '{{.Type}}', {{if .Fixed}}fixed: '{{.Fixed}}',{{end}} },
{{end}}
    }
  }
`
