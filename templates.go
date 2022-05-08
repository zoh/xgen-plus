package xgen

const _BaseIndexFileTypeScript = `// generated index.ts for all export
//
export type UnsignedInt = number;

// NodeID ...
export class NodeID {
  node_id?: string

  constructor(...args: any[]) {
    if (args[0]?.node_id) {
      this.node_id = args[0]?.node_id
    }
  }
}


export type Constructor = new (...args: any[]) => {};

{{range .files}}export * from "./{{ . }}"
{{end}}`

const _TypeScriptAttributeGroupBody = `export function {{ .name }}<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends {{.base}} {
  {{range .params}}  {{.Name}}{{if .Optional}}?{{end}}: {{if .Plural}}[]{{end}}{{.Type}};
{{end}}
  constructor(...args: any[]) {
    super(...args);
{{range .params}}    if (args[0]?.hasOwnProperty("{{ .Name}}")) this.{{.Name}} = args[0]['{{.Name}}'];
{{end}}
  }
  };
}`

const __TypeScriptComplexTypeConstructor = `  constructor(...args: any[]) {
    {{if .hasParent}}super(...args);{{end}}
      const opts = args[0];
    // Attributes
  {{range .v.Attributes}}    this.{{.Name}} = opts['{{.Name}}'];
{{end}}
    // Elements
    {{range .v.Elements}}    this.{{.Name}} = opts['{{.Name}}'];
{{end}}
  }`
