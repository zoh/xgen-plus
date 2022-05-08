// generated index.ts for all export
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

export * from "./SCL"
export * from "./SCL_BaseSimpleTypes"
export * from "./SCL_BaseTypes"
export * from "./SCL_Communication"
export * from "./SCL_DataTypeTemplates"
export * from "./SCL_Enums"
export * from "./SCL_IED"
export * from "./SCL_Substation"
