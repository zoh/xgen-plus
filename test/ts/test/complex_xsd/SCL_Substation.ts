import { TTransformerWindingEnum,TIEDNameOrNone,TPrefix,TName,TLineType,TGeneralEquipmentEnum,TProcessName,TLDInstOrEmpty,TConnectivityNodeReference,TAnyName,TProcessType,TVoltage,TUnNaming,TLNInstOrEmpty,Constructor,TCommonConductingEquipmentEnum,TLNClassEnum,TNaming,TPhaseEnum,TPowerTransformerEnum } from "./BaseIndex"


// AgVirtual ...
export function AgVirtual<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    virtual?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("virtual")) this.virtual = args[0]['virtual'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "virtual",  fieldType: "boolean" },

    ]
  }
  };
}
// Simple type
// TVoltageLevelNomFreqDecimal ...
export type TVoltageLevelNomFreqDecimal = Number;

// Simple type
// TVoltageLevelNumPhasesUnsignedByte ...
export type TVoltageLevelNumPhasesUnsignedByte = any;

// Simple type
// TLineNomFreqDecimal ...
export type TLineNomFreqDecimal = Number;

// Simple type
// TLineNumPhasesUnsignedByte ...
export type TLineNumPhasesUnsignedByte = any;

// SubstationElement ...
export type SubstationElement = TSubstation;

// ProcessElement ...
export type ProcessElement = TProcess;

// LineElement ...
export type LineElement = TLine;

// ComplexType 
//  TLNodeContainer ...
export class TLNodeContainer extends TNaming {
	LNode?: Array<TLNode>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.LNode = opts['LNode']?.map((val: any) => new TLNode(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "LNode": { construct: TLNode, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TPowerSystemResource ...
export class TPowerSystemResource extends TLNodeContainer {

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
//  TEquipmentContainer ...
export class TEquipmentContainer extends TPowerSystemResource {
	PowerTransformer?: Array<TPowerTransformer>;
	GeneralEquipment?: Array<TGeneralEquipment>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.PowerTransformer = opts['PowerTransformer']?.map((val: any) => new TPowerTransformer(val)); 
 this.GeneralEquipment = opts['GeneralEquipment']?.map((val: any) => new TGeneralEquipment(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "PowerTransformer": { construct: TPowerTransformer, plural: true },
"GeneralEquipment": { construct: TGeneralEquipment, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TEquipment ...
export class TEquipment extends AgVirtual(TPowerSystemResource) {

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
//  TAbstractConductingEquipment ...
export class TAbstractConductingEquipment extends TEquipment {
	Terminal?: Array<TTerminal>;
	SubEquipment?: Array<TSubEquipment>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.Terminal = opts['Terminal']?.map((val: any) => new TTerminal(val)); 
 this.SubEquipment = opts['SubEquipment']?.map((val: any) => new TSubEquipment(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Terminal": { construct: TTerminal, plural: true },
"SubEquipment": { construct: TSubEquipment, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TConductingEquipment ...
export class TConductingEquipment extends TAbstractConductingEquipment {
	type!: TCommonConductingEquipmentEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'tCommonConductingEquipmentEnum',  },

    ]
  }
}

// ComplexType 
//  TSubEquipment ...
export class TSubEquipment extends AgVirtual(TPowerSystemResource) {
	phase?: TPhaseEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.phase = opts['phase'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'phase',  fieldType: 'tPhaseEnum',  },

    ]
  }
}

// ComplexType 
//  TPowerTransformer ...
export class TPowerTransformer extends TEquipment {
	type!: TPowerTransformerEnum;
	TransformerWinding: Array<TTransformerWinding>;
	SubEquipment?: Array<TSubEquipment>;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.TransformerWinding = opts['TransformerWinding']?.map((val: any) => new TTransformerWinding(val)); 
 this.SubEquipment = opts['SubEquipment']?.map((val: any) => new TSubEquipment(val)); 
 this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "TransformerWinding": { construct: TTransformerWinding, plural: true },
"SubEquipment": { construct: TSubEquipment, plural: true },
"EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'tPowerTransformerEnum', fixed: 'PTR', },

    ]
  }
}

// ComplexType 
//  TTransformerWinding ...
export class TTransformerWinding extends TAbstractConductingEquipment {
	type!: TTransformerWindingEnum;
	TapChanger?: TTapChanger;
	NeutralPoint?: TTerminal;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.TapChanger = new TTapChanger(opts['TapChanger']); 
 this.NeutralPoint = new TTerminal(opts['NeutralPoint']); 
 this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "TapChanger": { construct: TTapChanger,  },
"NeutralPoint": { construct: TTerminal,  },
"EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'tTransformerWindingEnum', fixed: 'PTW', },

    ]
  }
}

// ComplexType 
//  TTapChanger ...
export class TTapChanger extends AgVirtual(TPowerSystemResource) {
	type!: string;
	SubEquipment?: Array<TSubEquipment>;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.SubEquipment = opts['SubEquipment']?.map((val: any) => new TSubEquipment(val)); 
 this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SubEquipment": { construct: TSubEquipment, plural: true },
"EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'string', fixed: 'LTC', },

    ]
  }
}

// ComplexType 
//  TGeneralEquipment ...
export class TGeneralEquipment extends TEquipment {
	type!: TGeneralEquipmentEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map((val: any) => new TEqFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "EqFunction": { construct: TEqFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'tGeneralEquipmentEnum',  },

    ]
  }
}

// ComplexType 
//  TSubstation ...
export class TSubstation extends TEquipmentContainer {
	VoltageLevel: Array<TVoltageLevel>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.VoltageLevel = opts['VoltageLevel']?.map((val: any) => new TVoltageLevel(val)); 
 this.Function = opts['Function']?.map((val: any) => new TFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "VoltageLevel": { construct: TVoltageLevel, plural: true },
"Function": { construct: TFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TVoltageLevel ...
export class TVoltageLevel extends TEquipmentContainer {
	nomFreq?: TVoltageLevelNomFreqDecimal;
	numPhases?: TVoltageLevelNumPhasesUnsignedByte;
	Voltage?: TVoltage;
	Bay: Array<TBay>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.nomFreq = opts['nomFreq'];
    this.numPhases = opts['numPhases'];

    // Elements
     this.Voltage = new TVoltage(opts['Voltage']); 
 this.Bay = opts['Bay']?.map((val: any) => new TBay(val)); 
 this.Function = opts['Function']?.map((val: any) => new TFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Voltage": { construct: TVoltage,  },
"Bay": { construct: TBay, plural: true },
"Function": { construct: TFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'nomFreq',  fieldType: '',  },
 { name: 'numPhases',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TBay ...
export class TBay extends TEquipmentContainer {
	ConductingEquipment?: Array<TConductingEquipment>;
	ConnectivityNode?: Array<TConnectivityNode>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.ConductingEquipment = opts['ConductingEquipment']?.map((val: any) => new TConductingEquipment(val)); 
 this.ConnectivityNode = opts['ConnectivityNode']?.map((val: any) => new TConnectivityNode(val)); 
 this.Function = opts['Function']?.map((val: any) => new TFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "ConductingEquipment": { construct: TConductingEquipment, plural: true },
"ConnectivityNode": { construct: TConnectivityNode, plural: true },
"Function": { construct: TFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TLNode ...
export class TLNode extends TUnNaming {
	iedName?: TIEDNameOrNone;
	ldInst?: TLDInstOrEmpty;
	prefix?: TPrefix;
	lnClass!: TLNClassEnum;
	lnInst?: TLNInstOrEmpty;
	lnType?: TName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedName = opts['iedName'];
    this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];
    this.lnType = opts['lnType'];

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
       { name: 'iedName',  fieldType: 'tIEDNameOrNone',  },
 { name: 'ldInst',  fieldType: 'tLDInstOrEmpty',  },
 { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass', required: true, fieldType: 'tLNClassEnum',  },
 { name: 'lnInst',  fieldType: 'tLNInstOrEmpty',  },
 { name: 'lnType',  fieldType: 'tName',  },

    ]
  }
}

// ComplexType 
//  TFunction ...
export class TFunction extends TPowerSystemResource {
	type?: string;
	SubFunction?: Array<TSubFunction>;
	GeneralEquipment?: Array<TGeneralEquipment>;
	ConductingEquipment?: Array<TConductingEquipment>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.SubFunction = opts['SubFunction']?.map((val: any) => new TSubFunction(val)); 
 this.GeneralEquipment = opts['GeneralEquipment']?.map((val: any) => new TGeneralEquipment(val)); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map((val: any) => new TConductingEquipment(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SubFunction": { construct: TSubFunction, plural: true },
"GeneralEquipment": { construct: TGeneralEquipment, plural: true },
"ConductingEquipment": { construct: TConductingEquipment, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TSubFunction ...
export class TSubFunction extends TPowerSystemResource {
	type?: string;
	GeneralEquipment?: Array<TGeneralEquipment>;
	ConductingEquipment?: Array<TConductingEquipment>;
	SubFunction?: Array<TSubFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map((val: any) => new TGeneralEquipment(val)); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map((val: any) => new TConductingEquipment(val)); 
 this.SubFunction = opts['SubFunction']?.map((val: any) => new TSubFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "GeneralEquipment": { construct: TGeneralEquipment, plural: true },
"ConductingEquipment": { construct: TConductingEquipment, plural: true },
"SubFunction": { construct: TSubFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TAbstractEqFuncSubFunc ...
export class TAbstractEqFuncSubFunc extends TPowerSystemResource {
	type?: string;
	GeneralEquipment?: Array<TGeneralEquipment>;
	EqSubFunction?: Array<TEqSubFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map((val: any) => new TGeneralEquipment(val)); 
 this.EqSubFunction = opts['EqSubFunction']?.map((val: any) => new TEqSubFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "GeneralEquipment": { construct: TGeneralEquipment, plural: true },
"EqSubFunction": { construct: TEqSubFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TEqFunction ...
export class TEqFunction extends TAbstractEqFuncSubFunc {

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
//  TEqSubFunction ...
export class TEqSubFunction extends TAbstractEqFuncSubFunc {

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
//  TConnectivityNode ...
export class TConnectivityNode extends TLNodeContainer {
	pathName!: TConnectivityNodeReference;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.pathName = opts['pathName'];

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
       { name: 'pathName', required: true, fieldType: 'tConnectivityNodeReference',  },

    ]
  }
}

// ComplexType 
//  TTerminal ...
export class TTerminal extends TUnNaming {
	name?: TAnyName;
	connectivityNode!: TConnectivityNodeReference;
	processName?: TProcessName;
	substationName?: TName;
	voltageLevelName?: TName;
	bayName?: TName;
	cNodeName!: TName;
	lineName?: TName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.connectivityNode = opts['connectivityNode'];
    this.processName = opts['processName'];
    this.substationName = opts['substationName'];
    this.voltageLevelName = opts['voltageLevelName'];
    this.bayName = opts['bayName'];
    this.cNodeName = opts['cNodeName'];
    this.lineName = opts['lineName'];

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
       { name: 'name',  fieldType: 'tAnyName',  },
 { name: 'connectivityNode', required: true, fieldType: 'tConnectivityNodeReference',  },
 { name: 'processName',  fieldType: 'tProcessName',  },
 { name: 'substationName',  fieldType: 'tName',  },
 { name: 'voltageLevelName',  fieldType: 'tName',  },
 { name: 'bayName',  fieldType: 'tName',  },
 { name: 'cNodeName', required: true, fieldType: 'tName',  },
 { name: 'lineName',  fieldType: 'tName',  },

    ]
  }
}

// ComplexType 
//  TGeneralEquipmentContainer ...
export class TGeneralEquipmentContainer extends TPowerSystemResource {
	GeneralEquipment?: Array<TGeneralEquipment>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map((val: any) => new TGeneralEquipment(val)); 
 this.Function = opts['Function']?.map((val: any) => new TFunction(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "GeneralEquipment": { construct: TGeneralEquipment, plural: true },
"Function": { construct: TFunction, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TLine ...
export class TLine extends TGeneralEquipmentContainer {
	type?: TLineType;
	nomFreq?: TLineNomFreqDecimal;
	numPhases?: TLineNumPhasesUnsignedByte;
	Voltage?: TVoltage;
	ConductingEquipment: Array<TConductingEquipment>;
	ConnectivityNode?: Array<TConnectivityNode>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];
    this.nomFreq = opts['nomFreq'];
    this.numPhases = opts['numPhases'];

    // Elements
     this.Voltage = new TVoltage(opts['Voltage']); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map((val: any) => new TConductingEquipment(val)); 
 this.ConnectivityNode = opts['ConnectivityNode']?.map((val: any) => new TConnectivityNode(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Voltage": { construct: TVoltage,  },
"ConductingEquipment": { construct: TConductingEquipment, plural: true },
"ConnectivityNode": { construct: TConnectivityNode, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'tLineType',  },
 { name: 'nomFreq',  fieldType: '',  },
 { name: 'numPhases',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TProcess ...
export class TProcess extends TGeneralEquipmentContainer {
	type?: TProcessType;
	ConductingEquipment?: Array<TConductingEquipment>;
	Substation?: Array<TSubstation>;
	Line?: Array<TLine>;
	Process?: Array<TProcess>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.ConductingEquipment = opts['ConductingEquipment']?.map((val: any) => new TConductingEquipment(val)); 
 this.Substation = opts['Substation']?.map((val: any) => new TSubstation(val)); 
 this.Line = opts['Line']?.map((val: any) => new TLine(val)); 
 this.Process = opts['Process']?.map((val: any) => new TProcess(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "ConductingEquipment": { construct: TConductingEquipment, plural: true },
"Substation": { construct: TSubstation, plural: true },
"Line": { construct: TLine, plural: true },
"Process": { construct: TProcess, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'tProcessType',  },

    ]
  }
}
