import { Constructor,TIDNaming,AgDesc,TVal,TSDOCount,TUnNaming,TDataName,TName,TNamespaceName,TDACount,TValKindEnum,TAttributeNameEnum,TCDCEnum,TAnyName,TLNClassEnum,TSubDataName,TFCEnum,NodeID,TEnumStringValue,TBasicTypeEnum } from "./BaseIndex"


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
     this.Val = opts['Val']?.map(val => new TVal(val)); 

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
     this.DO = opts['DO']?.map(val => new TDO(val)); 

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
     this.SDO = opts['SDO']?.map(val => new TSDO(val)); 
 this.DA = opts['DA']?.map(val => new TDA(val)); 

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
     this.ProtNs = opts['ProtNs']?.map(val => new TProtNs(val)); 

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
     this.BDA = opts['BDA']?.map(val => new TBDA(val)); 
 this.ProtNs = opts['ProtNs']?.map(val => new TProtNs(val)); 

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
     this.EnumVal = opts['EnumVal']?.map(val => new TEnumVal(val)); 

  }}

// ComplexType 
//  TProtNs ...
export class TProtNs extends NodeID {
	Content?: TNamespaceName; 
	type?: TProtNsTypeNormalizedString;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
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
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
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
     this.LNodeType = opts['LNodeType']?.map(val => new TLNodeType(val)); 
 this.DOType = opts['DOType']?.map(val => new TDOType(val)); 
 this.DAType = opts['DAType']?.map(val => new TDAType(val)); 
 this.EnumType = opts['EnumType']?.map(val => new TEnumType(val)); 

  }}
