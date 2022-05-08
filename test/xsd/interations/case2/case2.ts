import { Constructor,NodeID } from "./BaseIndex"


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
// TAcsiName ...
export type TAcsiName = string;

// Simple type
// TIEDName ...
export type TIEDName = string;

// AgLDRef ...
export function AgLDRef<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends AgDesc(Base) {
    iedName: string;
  ldInst: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("iedName")) this.iedName = args[0]['iedName'];
    if (args[0]?.hasOwnProperty("ldInst")) this.ldInst = args[0]['ldInst'];

  }
  };
}
// AgLNRef ...
export function AgLNRef<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends AgLDRef(Base) {
    prefix?: string;
  lnClass: string;
  lnInst: string;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("prefix")) this.prefix = args[0]['prefix'];
    if (args[0]?.hasOwnProperty("lnClass")) this.lnClass = args[0]['lnClass'];
    if (args[0]?.hasOwnProperty("lnInst")) this.lnInst = args[0]['lnInst'];

  }
  };
}
// Simple type
// TName ...
export type TName = string;

// Simple type
// TAnyName ...
export type TAnyName = string;

// ComplexType 
//  TBaseElement ...
export class TBaseElement extends NodeID {
  constructor(...args: any[]) {
    super(...args);
	const opts = args[0];
    // Attributes
	
    // Elements
    
  }}

// ComplexType 
//  TNaming ...
export class TNaming extends AgDesc(TBaseElement) {
	name: TAnyName;
  constructor(...args: any[]) {
    super(...args);
	const opts = args[0];
    // Attributes
	    this.name = opts['name'];

    // Elements
    
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
