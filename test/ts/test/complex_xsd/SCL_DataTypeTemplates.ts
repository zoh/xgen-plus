import { TFCEnum,TSDOCount,TBasicTypeEnum,TVal,TDataName,TSubDataName,AgDesc,Constructor,TName,TCDCEnum,TEnumStringValue,TIDNaming,TAttributeNameEnum,NodeID,TNamespaceName,TUnNaming,TAnyName,TDACount,TLNClassEnum,TValKindEnum } from "./BaseIndex"


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
	name: TAttributeNameEnum;
	sAddr?: string;
	bType: TBasicTypeEnum;
	valKind?: TValKindEnum;
	type?: TAnyName;
	count?: TDACount;
	valImport?: boolean;
	Val?: Array<TVal>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.sAddr = opts['sAddr'];
    this.bType = opts['bType'];
    this.valKind = opts['valKind'];
    this.type = opts['type'];
    this.count = opts['count'];
    this.valImport = opts['valImport'];

    // Elements
        this.Val = opts['Val'];

  }}

// ComplexType 
//  TLNodeType ...
export class TLNodeType extends TIDNaming {
	iedType?: TAnyName;
	lnClass: TLNClassEnum;
	DO: Array<TDO>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.iedType = opts['iedType'];
    this.lnClass = opts['lnClass'];

    // Elements
        this.DO = opts['DO'];

  }}

// ComplexType 
//  TDO ...
export class TDO extends TUnNaming {
	name: TDataName;
	type: TName;
	accessControl?: string;
	transient?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.type = opts['type'];
    this.accessControl = opts['accessControl'];
    this.transient = opts['transient'];

    // Elements
    
  }}

// ComplexType 
//  TDOType ...
export class TDOType extends TIDNaming {
	iedType?: TAnyName;
	cdc: TCDCEnum;
	SDO?: Array<TSDO>;
	DA?: Array<TDA>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.iedType = opts['iedType'];
    this.cdc = opts['cdc'];

    // Elements
        this.SDO = opts['SDO'];
    this.DA = opts['DA'];

  }}

// ComplexType 
//  TSDO ...
export class TSDO extends TUnNaming {
	name: TSubDataName;
	type: TName;
	count?: TSDOCount;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.type = opts['type'];
    this.count = opts['count'];

    // Elements
    
  }}

// ComplexType 
//  TDA ...
export class TDA extends AgDATrgOp(TAbstractDataAttribute) {
	fc: TFCEnum;
	ProtNs?: Array<TProtNs>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.fc = opts['fc'];

    // Elements
        this.ProtNs = opts['ProtNs'];

  }}

// ComplexType 
//  TDAType ...
export class TDAType extends TIDNaming {
	iedType?: TAnyName;
	BDA: Array<TBDA>;
	ProtNs?: Array<TProtNs>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.iedType = opts['iedType'];

    // Elements
        this.BDA = opts['BDA'];
    this.ProtNs = opts['ProtNs'];

  }}

// ComplexType 
//  TBDA ...
export class TBDA extends TAbstractDataAttribute {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TEnumType ...
export class TEnumType extends TIDNaming {
	EnumVal: Array<TEnumVal>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
        this.EnumVal = opts['EnumVal'];

  }}

// ComplexType 
//  TProtNs ...
export class TProtNs extends NodeID {
	Content?: TNamespaceName; 
	type?: TProtNsTypeNormalizedString;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TEnumVal ...
export class TEnumVal extends AgDesc(NodeID) {
	Content?: TEnumStringValue; 
	ord: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.ord = opts['ord'];

    // Elements
    
  }}

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
    // Attributes
  
    // Elements
        this.LNodeType = opts['LNodeType'];
    this.DOType = opts['DOType'];
    this.DAType = opts['DAType'];
    this.EnumType = opts['EnumType'];

  }}
