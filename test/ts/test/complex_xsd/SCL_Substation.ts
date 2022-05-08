import { TLNClassEnum,TConnectivityNodeReference,TLineType,TPowerTransformerEnum,TProcessName,TVoltage,TIEDNameOrNone,TCommonConductingEquipmentEnum,TTransformerWindingEnum,TUnNaming,TLDInstOrEmpty,TAnyName,TPhaseEnum,TPrefix,TGeneralEquipmentEnum,Constructor,TNaming,TLNInstOrEmpty,TName,TProcessType } from "./BaseIndex"


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
        this.LNode = opts['LNode'];

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
        this.PowerTransformer = opts['PowerTransformer'];
    this.GeneralEquipment = opts['GeneralEquipment'];

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
        this.Terminal = opts['Terminal'];
    this.SubEquipment = opts['SubEquipment'];

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
        this.EqFunction = opts['EqFunction'];

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
        this.EqFunction = opts['EqFunction'];

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
        this.TransformerWinding = opts['TransformerWinding'];
    this.SubEquipment = opts['SubEquipment'];
    this.EqFunction = opts['EqFunction'];

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
        this.TapChanger = opts['TapChanger'];
    this.NeutralPoint = opts['NeutralPoint'];
    this.EqFunction = opts['EqFunction'];

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
        this.SubEquipment = opts['SubEquipment'];
    this.EqFunction = opts['EqFunction'];

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
        this.EqFunction = opts['EqFunction'];

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
        this.VoltageLevel = opts['VoltageLevel'];
    this.Function = opts['Function'];

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
        this.Voltage = opts['Voltage'];
    this.Bay = opts['Bay'];
    this.Function = opts['Function'];

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
        this.ConductingEquipment = opts['ConductingEquipment'];
    this.ConnectivityNode = opts['ConnectivityNode'];
    this.Function = opts['Function'];

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
        this.SubFunction = opts['SubFunction'];
    this.GeneralEquipment = opts['GeneralEquipment'];
    this.ConductingEquipment = opts['ConductingEquipment'];

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
        this.GeneralEquipment = opts['GeneralEquipment'];
    this.ConductingEquipment = opts['ConductingEquipment'];
    this.SubFunction = opts['SubFunction'];

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
        this.GeneralEquipment = opts['GeneralEquipment'];
    this.EqSubFunction = opts['EqSubFunction'];

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
        this.GeneralEquipment = opts['GeneralEquipment'];
    this.Function = opts['Function'];

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
        this.Voltage = opts['Voltage'];
    this.ConductingEquipment = opts['ConductingEquipment'];
    this.ConnectivityNode = opts['ConnectivityNode'];

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
        this.ConductingEquipment = opts['ConductingEquipment'];
    this.Substation = opts['Substation'];
    this.Line = opts['Line'];
    this.Process = opts['Process'];

  }}
