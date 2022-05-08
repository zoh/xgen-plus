import { TID,Constructor,TName,NodeID,TUnitMultiplierEnum } from "./BaseIndex"


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
    // Attributes
  
    // Elements
        this.Text = opts['Text'];
    this.Private = opts['Private'];

  }}

// ComplexType 
//  TUnNaming ...
export class TUnNaming extends AgDesc(TBaseElement) {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TNaming ...
export class TNaming extends AgDesc(TBaseElement) {
	name: TName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];

    // Elements
    
  }}

// ComplexType 
//  TIDNaming ...
export class TIDNaming extends AgDesc(TBaseElement) {
	id: TID;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.id = opts['id'];

    // Elements
    
  }}

// ComplexType 
//  TAnyContentFromOtherNamespace ...
export class TAnyContentFromOtherNamespace extends NodeID {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

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
    
  }}

// ComplexType 
//  TPrivate ...
export class TPrivate extends TAnyContentFromOtherNamespace {
	type: TPrivateTypeNormalizedString;
	source?: string;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.type = opts['type'];
    this.source = opts['source'];

    // Elements
    
  }}

// ComplexType 
//  History ...
export class History extends NodeID {
	Hitem: Array<THitem>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
        this.Hitem = opts['Hitem'];

  }}

// ComplexType 
//  THeader ...
export class THeader extends NodeID {
	id: string;
	version?: string;
	revision?: string;
	toolID?: string;
	nameStructure?: THeaderNameStructureName;
	Text?: TText;
	History?: History;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.id = opts['id'];
    this.version = opts['version'];
    this.revision = opts['revision'];
    this.toolID = opts['toolID'];
    this.nameStructure = opts['nameStructure'];

    // Elements
        this.Text = opts['Text'];
    this.History = opts['History'];

  }}

// ComplexType 
//  THitem ...
export class THitem extends TAnyContentFromOtherNamespace {
	version: string;
	revision: string;
	when: string;
	who?: string;
	what?: string;
	why?: string;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.version = opts['version'];
    this.revision = opts['revision'];
    this.when = opts['when'];
    this.who = opts['who'];
    this.what = opts['what'];
    this.why = opts['why'];

    // Elements
    
  }}

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
    
  }}

// ComplexType 
//  TValueWithUnit ...
export class TValueWithUnit {
Content: number; 
	unit: string;
	multiplier?: TUnitMultiplierEnum;
  constructor(...args: any[]) {
    
      const opts = args[0];
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
  }}

// ComplexType 
//  TVoltage ...
export class TVoltage extends TValueWithUnit {
	unit: string;
	multiplier?: TUnitMultiplierEnum;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
  }}

// ComplexType 
//  TDurationInSec ...
export class TDurationInSec extends TValueWithUnit {
	unit: string;
	multiplier?: TUnitMultiplierEnum;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
  }}

// ComplexType 
//  TDurationInMilliSec ...
export class TDurationInMilliSec {
Content: number; 
	unit?: string;
	multiplier?: TUnitMultiplierEnum;
  constructor(...args: any[]) {
    
      const opts = args[0];
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
  }}

// ComplexType 
//  TBitRateInMbPerSec ...
export class TBitRateInMbPerSec {
Content: number; 
	unit?: string;
	multiplier?: TUnitMultiplierEnum;
  constructor(...args: any[]) {
    
      const opts = args[0];
    // Attributes
      this.unit = opts['unit'];
    this.multiplier = opts['multiplier'];

    // Elements
    
  }}
