import { TID,NodeID,TUnitMultiplierEnum,Constructor,TName } from "./BaseIndex"


// AgDesc ...
export function AgDesc<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    desc?: string;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("desc")) this.desc = args[0]['desc'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "desc",  fieldType: "string" },

    ]
  }
  };
}
// Simple type
// TPrivateTypeNormalizedString ...
export type TPrivateTypeNormalizedString = string;

// Simple type
// THeaderNameStructureName ...
export enum THeaderNameStructureName {
	"IEDName" = 'IEDName',
}

// ComplexType 
//  TBaseElement ...
export class TBaseElement extends NodeID {
	Text?: TText;
	Private?: Array<TPrivate>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.Text = new TText(opts['Text']); 
 this.Private = opts['Private']?.map((val: any) => new TPrivate(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Text": { construct: TText,  },
"Private": { construct: TPrivate, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TUnNaming ...
export class TUnNaming extends AgDesc(TBaseElement) {

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
//  TNaming ...
export class TNaming extends AgDesc(TBaseElement) {
	name!: TName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];

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
       { name: 'name', required: true, fieldType: 'tName',  },

    ]
  }
}

// ComplexType 
//  TIDNaming ...
export class TIDNaming extends AgDesc(TBaseElement) {
	id!: TID;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.id = opts['id'];

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
       { name: 'id', required: true, fieldType: 'tID',  },

    ]
  }
}

// ComplexType 
//  TAnyContentFromOtherNamespace ...
export class TAnyContentFromOtherNamespace extends NodeID {

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
//  TText ...
export class TText extends TAnyContentFromOtherNamespace {
	source?: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.source = opts['source'];

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
       { name: 'source',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TPrivate ...
export class TPrivate extends TAnyContentFromOtherNamespace {
	type!: TPrivateTypeNormalizedString;
	source?: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];
    this.source = opts['source'];

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
       { name: 'type', required: true, fieldType: '',  },
 { name: 'source',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  History ...
export class History extends NodeID {
	Hitem: Array<THitem>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.Hitem = opts['Hitem']?.map((val: any) => new THitem(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Hitem": { construct: THitem, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  THeader ...
export class THeader extends NodeID {
	id!: string;
	version?: string;
	revision?: string;
	toolID?: string;
	nameStructure?: THeaderNameStructureName;
	Text?: TText;
	History?: History;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.id = opts['id'];
    this.version = opts['version'];
    this.revision = opts['revision'];
    this.toolID = opts['toolID'];
    this.nameStructure = opts['nameStructure'];

    // Elements
     this.Text = new TText(opts['Text']); 
 this.History = new History(opts['History']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Text": { construct: TText,  },
"History": { construct: History,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'id', required: true, fieldType: 'string',  },
 { name: 'version',  fieldType: 'string',  },
 { name: 'revision',  fieldType: 'string',  },
 { name: 'toolID',  fieldType: 'string',  },
 { name: 'nameStructure',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  THitem ...
export class THitem extends TAnyContentFromOtherNamespace {
	version!: string;
	revision!: string;
	when!: string;
	who?: string;
	what?: string;
	why?: string;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.version = opts['version'];
    this.revision = opts['revision'];
    this.when = opts['when'];
    this.who = opts['who'];
    this.what = opts['what'];
    this.why = opts['why'];

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
       { name: 'version', required: true, fieldType: 'string',  },
 { name: 'revision', required: true, fieldType: 'string',  },
 { name: 'when', required: true, fieldType: 'string',  },
 { name: 'who',  fieldType: 'string',  },
 { name: 'what',  fieldType: 'string',  },
 { name: 'why',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TVal ...
export class TVal {
Content!: string; 
	sGroup?: Number;

  constructor(...args: any[]) {
    
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.sGroup = opts['sGroup'];

    // Elements
    
    }
  }

  Elements() {
    return {
      
      //...
      
    }
  }

  Attributes() {
    return [
      
       { name: 'sGroup',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TValueWithUnit ...
export class TValueWithUnit {
Content!: number; 
	unit!: string;
	multiplier?: TUnitMultiplierEnum;

  constructor(...args: any[]) {
    
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
    }
  }

  Elements() {
    return {
      
      //...
      
    }
  }

  Attributes() {
    return [
      
       { name: 'unit', required: true, fieldType: 'string',  },
 { name: 'multiplier',  fieldType: 'tUnitMultiplierEnum',  },

    ]
  }
}

// ComplexType 
//  TVoltage ...
export class TVoltage extends TValueWithUnit {
	unit!: string;
	multiplier?: TUnitMultiplierEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

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
       { name: 'unit', required: true, fieldType: 'string', fixed: 'V', },
 { name: 'multiplier',  fieldType: 'tUnitMultiplierEnum',  },

    ]
  }
}

// ComplexType 
//  TDurationInSec ...
export class TDurationInSec extends TValueWithUnit {
	unit!: string;
	multiplier?: TUnitMultiplierEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

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
       { name: 'unit', required: true, fieldType: 'string', fixed: 's', },
 { name: 'multiplier',  fieldType: 'tUnitMultiplierEnum',  },

    ]
  }
}

// ComplexType 
//  TDurationInMilliSec ...
export class TDurationInMilliSec {
Content!: number; 
	unit?: string;
	multiplier?: TUnitMultiplierEnum;

  constructor(...args: any[]) {
    
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
    }
  }

  Elements() {
    return {
      
      //...
      
    }
  }

  Attributes() {
    return [
      
       { name: 'unit',  fieldType: 'string', fixed: 's', },
 { name: 'multiplier',  fieldType: 'tUnitMultiplierEnum', fixed: 'm', },

    ]
  }
}

// ComplexType 
//  TBitRateInMbPerSec ...
export class TBitRateInMbPerSec {
Content!: number; 
	unit?: string;
	multiplier?: TUnitMultiplierEnum;

  constructor(...args: any[]) {
    
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
    }
  }

  Elements() {
    return {
      
      //...
      
    }
  }

  Attributes() {
    return [
      
       { name: 'unit',  fieldType: 'string', fixed: 'b/s', },
 { name: 'multiplier',  fieldType: 'tUnitMultiplierEnum', fixed: 'M', },

    ]
  }
}
