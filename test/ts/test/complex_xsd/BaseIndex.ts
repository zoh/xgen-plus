// generated index.ts for all export
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

  Elements(): { [name: string]: ElementDetail } {
    return {}
  }

  Attributes(): AttributeDetail[] {
    return []
  }
}

export interface Constructor {
  new (...args: any[]): any
  name?: string
}

//export type Constructor = new (...args: any[]) => {};

export * from "./SCL"
export * from "./SCL_BaseSimpleTypes"
export * from "./SCL_BaseTypes"
export * from "./SCL_Communication"
export * from "./SCL_DataTypeTemplates"
export * from "./SCL_Enums"
export * from "./SCL_IED"
export * from "./SCL_Substation"
