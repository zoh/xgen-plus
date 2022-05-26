import { Constructor,TBasicTypeEnum,TAnyName,TIDNaming,TUnNaming,TAttributeNameEnum,TValKindEnum,TVal,TSubDataName,TSDOCount,TNamespaceName,TDACount,TDataName,TName,TLNClassEnum,NodeID,TEnumStringValue,AgDesc,TCDCEnum,TFCEnum } from "./BaseIndex"


// AgDATrgOp ...
export function AgDATrgOp<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    dchg?: boolean;
  qchg?: boolean;
  dupd?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("dchg")) this.dchg = args[0]['dchg'];
    if (args[0]?.hasOwnProperty("qchg")) this.qchg = args[0]['qchg'];
    if (args[0]?.hasOwnProperty("dupd")) this.dupd = args[0]['dupd'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "dchg",  fieldType: "boolean" },
 {name: "qchg",  fieldType: "boolean" },
 {name: "dupd",  fieldType: "boolean" },

    ]
  }
  };
}
// Simple type
// TProtNsTypeNormalizedString ...
export type TProtNsTypeNormalizedString = string;

// DataTypeTemplatesElement ...
export type DataTypeTemplatesElement = TDataTypeTemplates;

// ComplexType 
//  TAbstractDataAttribute ...
export class TAbstractDataAttribute extends TUnNaming {
	name!: TAttributeNameEnum;
	sAddr?: string;
	bType!: TBasicTypeEnum;
	valKind?: TValKindEnum;
	type?: TAnyName;
	count?: TDACount;
	valImport?: boolean;
	Val?: Array<TVal>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.sAddr = opts['sAddr'];
    this.bType = opts['bType'];
    this.valKind = opts['valKind'];
    this.type = opts['type'];
    this.count = opts['count'];
    this.valImport = opts['valImport'];

    // Elements
     this.Val = opts['Val']?.map((val: any) => new TVal(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Val": { construct: TVal, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tAttributeNameEnum',  },
 { name: 'sAddr',  fieldType: 'string',  },
 { name: 'bType', required: true, fieldType: 'tBasicTypeEnum',  },
 { name: 'valKind',  fieldType: 'tValKindEnum',  },
 { name: 'type',  fieldType: 'tAnyName',  },
 { name: 'count',  fieldType: 'tDACount',  },
 { name: 'valImport',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TLNodeType ...
export class TLNodeType extends TIDNaming {
	iedType?: TAnyName;
	lnClass!: TLNClassEnum;
	DO: Array<TDO>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedType = opts['iedType'];
    this.lnClass = opts['lnClass'];

    // Elements
     this.DO = opts['DO']?.map((val: any) => new TDO(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "DO": { construct: TDO, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'iedType',  fieldType: 'tAnyName',  },
 { name: 'lnClass', required: true, fieldType: 'tLNClassEnum',  },

    ]
  }
}

// ComplexType 
//  TDO ...
export class TDO extends TUnNaming {
	name!: TDataName;
	type!: TName;
	accessControl?: string;
	transient?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.type = opts['type'];
    this.accessControl = opts['accessControl'];
    this.transient = opts['transient'];

    // Elements
    
    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      
    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tDataName',  },
 { name: 'type', required: true, fieldType: 'tName',  },
 { name: 'accessControl',  fieldType: 'string',  },
 { name: 'transient',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TDOType ...
export class TDOType extends TIDNaming {
	iedType?: TAnyName;
	cdc!: TCDCEnum;
	SDO?: Array<TSDO>;
	DA?: Array<TDA>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedType = opts['iedType'];
    this.cdc = opts['cdc'];

    // Elements
     this.SDO = opts['SDO']?.map((val: any) => new TSDO(val)); 
 this.DA = opts['DA']?.map((val: any) => new TDA(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SDO": { construct: TSDO, plural: true },
"DA": { construct: TDA, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'iedType',  fieldType: 'tAnyName',  },
 { name: 'cdc', required: true, fieldType: 'tCDCEnum',  },

    ]
  }
}

// ComplexType 
//  TSDO ...
export class TSDO extends TUnNaming {
	name!: TSubDataName;
	type!: TName;
	count?: TSDOCount;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.type = opts['type'];
    this.count = opts['count'];

    // Elements
    
    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      
    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tSubDataName',  },
 { name: 'type', required: true, fieldType: 'tName',  },
 { name: 'count',  fieldType: 'tSDOCount',  },

    ]
  }
}

// ComplexType 
//  TDA ...
export class TDA extends AgDATrgOp(TAbstractDataAttribute) {
	fc!: TFCEnum;
	ProtNs?: Array<TProtNs>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.fc = opts['fc'];

    // Elements
     this.ProtNs = opts['ProtNs']?.map((val: any) => new TProtNs(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "ProtNs": { construct: TProtNs, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'fc', required: true, fieldType: 'tFCEnum',  },

    ]
  }
}

// ComplexType 
//  TDAType ...
export class TDAType extends TIDNaming {
	iedType?: TAnyName;
	BDA: Array<TBDA>;
	ProtNs?: Array<TProtNs>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedType = opts['iedType'];

    // Elements
     this.BDA = opts['BDA']?.map((val: any) => new TBDA(val)); 
 this.ProtNs = opts['ProtNs']?.map((val: any) => new TProtNs(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "BDA": { construct: TBDA, plural: true },
"ProtNs": { construct: TProtNs, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'iedType',  fieldType: 'tAnyName',  },

    ]
  }
}

// ComplexType 
//  TBDA ...
export class TBDA extends TAbstractDataAttribute {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
    
    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      
    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TEnumType ...
export class TEnumType extends TIDNaming {
	EnumVal: Array<TEnumVal>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.EnumVal = opts['EnumVal']?.map((val: any) => new TEnumVal(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "EnumVal": { construct: TEnumVal, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TProtNs ...
export class TProtNs extends NodeID {
	Content?: TNamespaceName; 
	type?: TProtNsTypeNormalizedString;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.type = opts['type'];

    // Elements
    
    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      
    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TEnumVal ...
export class TEnumVal extends AgDesc(NodeID) {
	Content?: TEnumStringValue; 
	ord!: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.ord = opts['ord'];

    // Elements
    
    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      
    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'ord', required: true, fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TDataTypeTemplates ...
export class TDataTypeTemplates extends NodeID {
	LNodeType: Array<TLNodeType>;
	DOType: Array<TDOType>;
	DAType?: Array<TDAType>;
	EnumType?: Array<TEnumType>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.LNodeType = opts['LNodeType']?.map((val: any) => new TLNodeType(val)); 
 this.DOType = opts['DOType']?.map((val: any) => new TDOType(val)); 
 this.DAType = opts['DAType']?.map((val: any) => new TDAType(val)); 
 this.EnumType = opts['EnumType']?.map((val: any) => new TEnumType(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "LNodeType": { construct: TLNodeType, plural: true },
"DOType": { construct: TDOType, plural: true },
"DAType": { construct: TDAType, plural: true },
"EnumType": { construct: TEnumType, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}
