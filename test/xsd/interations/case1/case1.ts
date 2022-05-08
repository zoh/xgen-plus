import {Constructor, NodeID} from "./BaseIndex"


// AgDesc ...
export function AgDesc<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    desc?: string;

    constructor(...args: any[]) {
      super(...args);
      if (args[0]?.hasOwnProperty("desc")) this.desc = args[0]['desc'];

    }
  };
}

// Simple type
// TID ...
export type TID = string;

// Simple type
// TPrivateTypeNormalizedString ...
export type TPrivateTypeNormalizedString = string;

// Union type
// TIEDNameOrNone ...
export type TIEDNameOrNone =
  | TIEDName
  | TIEDNameIsNone

// Simple type
// TIEDNameIsNone ...
export type TIEDNameIsNone = string;

// Simple type
// TIEDName ...
export type TIEDName = string;

// Simple type
// TAcsiName ...
export type TAcsiName = string;

// ComplexType 
//  TBaseElement ...
export class TBaseElement extends NodeID {
  Text?: TText;
  Private?: Array<TPrivate>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    // Attributes

    // Elements
    this.Text = opts['Text'];
    this.Private = opts['Private'];

  }
}

// ComplexType 
//  TAnyContentFromOtherNamespace ...
export class TAnyContentFromOtherNamespace extends NodeID {
  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    // Attributes

    // Elements

  }
}

// ComplexType 
//  TText ...
export class TText extends TAnyContentFromOtherNamespace {
  source?: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    // Attributes
    this.source = opts['source'];

    // Elements

  }
}

// ComplexType 
//  TIDNaming ...
export class TIDNaming extends AgDesc(TBaseElement) {
  id: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    // Attributes
    this.id = opts['id'];

    // Elements

  }
}

// ComplexType 
//  TVal ...
export class TVal {
  Content: string;
  sGroup?: number;

  constructor(...args: any[]) {

    const opts = args[0];
    // Attributes
    this.sGroup = opts['sGroup'];

    // Elements

  }
}

// ComplexType 
//  TPrivate ...
export class TPrivate extends TAnyContentFromOtherNamespace {
  typesss?: string;
  name?: string;
  type: TPrivateTypeNormalizedString;
  source: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    // Attributes
    this.typesss = opts['typesss'];
    this.name = opts['name'];
    this.type = opts['type'];
    this.source = opts['source'];

    // Elements

  }
}
