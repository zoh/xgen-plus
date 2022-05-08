import { TVoltage,Constructor,TCommonConductingEquipmentEnum,TUnNaming,TName,TConnectivityNodeReference,TProcessType,TLNClassEnum,TLineType,TPhaseEnum,TLDInstOrEmpty,TProcessName,TTransformerWindingEnum,TPrefix,TGeneralEquipmentEnum,TLNInstOrEmpty,TAnyName,TNaming,TPowerTransformerEnum,TIEDNameOrNone } from "./BaseIndex"


// AgVirtual ...
export function AgVirtual<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    virtual?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("virtual")) this.virtual = args[0]['virtual'];

  }
  };
}
// Simple type
// TVoltageLevelNomFreqDecimal ...
export type TVoltageLevelNomFreqDecimal = number;

// Simple type
// TVoltageLevelNumPhasesUnsignedByte ...
export type TVoltageLevelNumPhasesUnsignedByte = any;

// Simple type
// TLineNomFreqDecimal ...
export type TLineNomFreqDecimal = number;

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
    
    // Attributes
  
    // Elements
     this.LNode = opts['LNode']?.map(val => new TLNode(val)); 

  }}

// ComplexType 
//  TPowerSystemResource ...
export class TPowerSystemResource extends TLNodeContainer {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TEquipmentContainer ...
export class TEquipmentContainer extends TPowerSystemResource {
	PowerTransformer?: Array<TPowerTransformer>;
	GeneralEquipment?: Array<TGeneralEquipment>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.PowerTransformer = opts['PowerTransformer']?.map(val => new TPowerTransformer(val)); 
 this.GeneralEquipment = opts['GeneralEquipment']?.map(val => new TGeneralEquipment(val)); 

  }}

// ComplexType 
//  TEquipment ...
export class TEquipment extends AgVirtual(TPowerSystemResource) {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TAbstractConductingEquipment ...
export class TAbstractConductingEquipment extends TEquipment {
	Terminal?: Array<TTerminal>;
	SubEquipment?: Array<TSubEquipment>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.Terminal = opts['Terminal']?.map(val => new TTerminal(val)); 
 this.SubEquipment = opts['SubEquipment']?.map(val => new TSubEquipment(val)); 

  }}

// ComplexType 
//  TConductingEquipment ...
export class TConductingEquipment extends TAbstractConductingEquipment {
	type: TCommonConductingEquipmentEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TSubEquipment ...
export class TSubEquipment extends AgVirtual(TPowerSystemResource) {
	phase?: TPhaseEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.phase = opts['phase'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TPowerTransformer ...
export class TPowerTransformer extends TEquipment {
	type: TPowerTransformerEnum;
	TransformerWinding: Array<TTransformerWinding>;
	SubEquipment?: Array<TSubEquipment>;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.TransformerWinding = opts['TransformerWinding']?.map(val => new TTransformerWinding(val)); 
 this.SubEquipment = opts['SubEquipment']?.map(val => new TSubEquipment(val)); 
 this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TTransformerWinding ...
export class TTransformerWinding extends TAbstractConductingEquipment {
	type: TTransformerWindingEnum;
	TapChanger?: TTapChanger;
	NeutralPoint?: TTerminal;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.TapChanger = new TTapChanger(opts['TapChanger']); 
 this.NeutralPoint = new TTerminal(opts['NeutralPoint']); 
 this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TTapChanger ...
export class TTapChanger extends AgVirtual(TPowerSystemResource) {
	type: string;
	SubEquipment?: Array<TSubEquipment>;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.SubEquipment = opts['SubEquipment']?.map(val => new TSubEquipment(val)); 
 this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TGeneralEquipment ...
export class TGeneralEquipment extends TEquipment {
	type: TGeneralEquipmentEnum;
	EqFunction?: Array<TEqFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.EqFunction = opts['EqFunction']?.map(val => new TEqFunction(val)); 

  }}

// ComplexType 
//  TSubstation ...
export class TSubstation extends TEquipmentContainer {
	VoltageLevel: Array<TVoltageLevel>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.VoltageLevel = opts['VoltageLevel']?.map(val => new TVoltageLevel(val)); 
 this.Function = opts['Function']?.map(val => new TFunction(val)); 

  }}

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
    
    // Attributes
      this.nomFreq = opts['nomFreq'];
    this.numPhases = opts['numPhases'];

    // Elements
     this.Voltage = new TVoltage(opts['Voltage']); 
 this.Bay = opts['Bay']?.map(val => new TBay(val)); 
 this.Function = opts['Function']?.map(val => new TFunction(val)); 

  }}

// ComplexType 
//  TBay ...
export class TBay extends TEquipmentContainer {
	ConductingEquipment?: Array<TConductingEquipment>;
	ConnectivityNode?: Array<TConnectivityNode>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.ConductingEquipment = opts['ConductingEquipment']?.map(val => new TConductingEquipment(val)); 
 this.ConnectivityNode = opts['ConnectivityNode']?.map(val => new TConnectivityNode(val)); 
 this.Function = opts['Function']?.map(val => new TFunction(val)); 

  }}

// ComplexType 
//  TLNode ...
export class TLNode extends TUnNaming {
	iedName?: TIEDNameOrNone;
	ldInst?: TLDInstOrEmpty;
	prefix?: TPrefix;
	lnClass: TLNClassEnum;
	lnInst?: TLNInstOrEmpty;
	lnType?: TName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.iedName = opts['iedName'];
    this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];
    this.lnType = opts['lnType'];

    // Elements
    
  }}

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
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.SubFunction = opts['SubFunction']?.map(val => new TSubFunction(val)); 
 this.GeneralEquipment = opts['GeneralEquipment']?.map(val => new TGeneralEquipment(val)); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map(val => new TConductingEquipment(val)); 

  }}

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
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map(val => new TGeneralEquipment(val)); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map(val => new TConductingEquipment(val)); 
 this.SubFunction = opts['SubFunction']?.map(val => new TSubFunction(val)); 

  }}

// ComplexType 
//  TAbstractEqFuncSubFunc ...
export class TAbstractEqFuncSubFunc extends TPowerSystemResource {
	type?: string;
	GeneralEquipment?: Array<TGeneralEquipment>;
	EqSubFunction?: Array<TEqSubFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map(val => new TGeneralEquipment(val)); 
 this.EqSubFunction = opts['EqSubFunction']?.map(val => new TEqSubFunction(val)); 

  }}

// ComplexType 
//  TEqFunction ...
export class TEqFunction extends TAbstractEqFuncSubFunc {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TEqSubFunction ...
export class TEqSubFunction extends TAbstractEqFuncSubFunc {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TConnectivityNode ...
export class TConnectivityNode extends TLNodeContainer {
	pathName: TConnectivityNodeReference;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.pathName = opts['pathName'];

    // Elements
    
  }}

// ComplexType 
//  TTerminal ...
export class TTerminal extends TUnNaming {
	name?: TAnyName;
	connectivityNode: TConnectivityNodeReference;
	processName?: TProcessName;
	substationName?: TName;
	voltageLevelName?: TName;
	bayName?: TName;
	cNodeName: TName;
	lineName?: TName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
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
    
  }}

// ComplexType 
//  TGeneralEquipmentContainer ...
export class TGeneralEquipmentContainer extends TPowerSystemResource {
	GeneralEquipment?: Array<TGeneralEquipment>;
	Function?: Array<TFunction>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.GeneralEquipment = opts['GeneralEquipment']?.map(val => new TGeneralEquipment(val)); 
 this.Function = opts['Function']?.map(val => new TFunction(val)); 

  }}

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
    
    // Attributes
      this.type = opts['type'];
    this.nomFreq = opts['nomFreq'];
    this.numPhases = opts['numPhases'];

    // Elements
     this.Voltage = new TVoltage(opts['Voltage']); 
 this.ConductingEquipment = opts['ConductingEquipment']?.map(val => new TConductingEquipment(val)); 
 this.ConnectivityNode = opts['ConnectivityNode']?.map(val => new TConnectivityNode(val)); 

  }}

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
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.ConductingEquipment = opts['ConductingEquipment']?.map(val => new TConductingEquipment(val)); 
 this.Substation = opts['Substation']?.map(val => new TSubstation(val)); 
 this.Line = opts['Line']?.map(val => new TLine(val)); 
 this.Process = opts['Process']?.map(val => new TProcess(val)); 

  }}
