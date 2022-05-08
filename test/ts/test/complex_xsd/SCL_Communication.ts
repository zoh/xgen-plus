import { TBitRateInMbPerSec,TAccessPointName,TLDInst,TCBName,TDurationInMilliSec,TPTypePhysConnEnum,TPTypeEnum,TNaming,NodeID,TPhysConnTypeEnum,TUnNaming,TIEDName,TPAddr } from "./BaseIndex"


// Simple type
// TSubNetworkTypeNormalizedString ...
export type TSubNetworkTypeNormalizedString = string;

// CommunicationElement ...
export type CommunicationElement = TCommunication;

// ComplexType 
//  TControlBlock ...
export class TControlBlock extends TUnNaming {
	ldInst: TLDInst;
	cbName: TCBName;
	Address?: TAddress;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.ldInst = opts['ldInst'];
    this.cbName = opts['cbName'];

    // Elements
     this.Address = new TAddress(opts['Address']); 

  }}

// ComplexType 
//  TCommunication ...
export class TCommunication extends TUnNaming {
	SubNetwork: Array<TSubNetwork>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.SubNetwork = opts['SubNetwork']?.map(val => new TSubNetwork(val)); 

  }}

// ComplexType 
//  TSubNetwork ...
export class TSubNetwork extends TNaming {
	type?: TSubNetworkTypeNormalizedString;
	BitRate?: TBitRateInMbPerSec;
	ConnectedAP: Array<TConnectedAP>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.BitRate = new TBitRateInMbPerSec(opts['BitRate']); 
 this.ConnectedAP = opts['ConnectedAP']?.map(val => new TConnectedAP(val)); 

  }}

// ComplexType 
//  TConnectedAP ...
export class TConnectedAP extends TUnNaming {
	iedName: TIEDName;
	apName: TAccessPointName;
	redProt?: string;
	Address?: TAddress;
	GSE?: Array<TGSE>;
	SMV?: Array<TSMV>;
	PhysConn?: Array<TPhysConn>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.iedName = opts['iedName'];
    this.apName = opts['apName'];
    this.redProt = opts['redProt'];

    // Elements
     this.Address = new TAddress(opts['Address']); 
 this.GSE = opts['GSE']?.map(val => new TGSE(val)); 
 this.SMV = opts['SMV']?.map(val => new TSMV(val)); 
 this.PhysConn = opts['PhysConn']?.map(val => new TPhysConn(val)); 

  }}

// ComplexType 
//  TAddress ...
export class TAddress extends NodeID {
	P: Array<TP>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.P = opts['P']?.map(val => new TP(val)); 

  }}

// ComplexType 
//  TGSE ...
export class TGSE extends TControlBlock {
	MinTime?: TDurationInMilliSec;
	MaxTime?: TDurationInMilliSec;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
     this.MinTime = new TDurationInMilliSec(opts['MinTime']); 
 this.MaxTime = new TDurationInMilliSec(opts['MaxTime']); 

  }}

// ComplexType 
//  TSMV ...
export class TSMV extends TControlBlock {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TPhysConn ...
export class TPhysConn extends TUnNaming {
	type: TPhysConnTypeEnum;
	P?: Array<TP_PhysConn>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.P = opts['P']?.map(val => new TP_PhysConn(val)); 

  }}

// ComplexType 
//  TP_PhysConn ...
export class TP_PhysConn extends NodeID {
	Content?: TPAddr; 
	type: TPTypePhysConnEnum;

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
//  TP ...
export class TP extends NodeID {
	Content?: TPAddr; 
	type: TPTypeEnum;

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
//  TP_IPbase ...
export class TP_IPbase extends TP {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TP_IP ...
export class TP_IP extends TP_IPbase {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPSUBNET ...
export class TP_IPSUBNET extends TP_IPbase {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPGATEWAY ...
export class TP_IPGATEWAY extends TP_IPbase {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6base ...
export class TP_IPv6base extends TP {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TP_IPv6 ...
export class TP_IPv6 extends TP_IPv6base {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6SUBNET ...
export class TP_IPv6SUBNET extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6GATEWAY ...
export class TP_IPv6GATEWAY extends TP_IPv6base {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_DNSName ...
export class TP_DNSName extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6FlowLabel ...
export class TP_IPv6FlowLabel extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSINSAP ...
export class TP_OSINSAP extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSITSEL ...
export class TP_OSITSEL extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSISSEL ...
export class TP_OSISSEL extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSIPSEL ...
export class TP_OSIPSEL extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSIAPTitle ...
export class TP_OSIAPTitle extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSIAPInvoke ...
export class TP_OSIAPInvoke extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSIAEQualifier ...
export class TP_OSIAEQualifier extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_OSIAEInvoke ...
export class TP_OSIAEInvoke extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_MACAddress ...
export class TP_MACAddress extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_APPID ...
export class TP_APPID extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_VLANPRIORITY ...
export class TP_VLANPRIORITY extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_VLANID ...
export class TP_VLANID extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_Port ...
export class TP_Port extends TP {

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TP_SNTPPort ...
export class TP_SNTPPort extends TP_Port {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_MMSPort ...
export class TP_MMSPort extends TP_Port {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_UDPPort ...
export class TP_UDPPort extends TP_Port {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_TCPPort ...
export class TP_TCPPort extends TP_Port {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6ClassOfTraffic ...
export class TP_IPv6ClassOfTraffic extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_C37118IPPort ...
export class TP_C37118IPPort extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPv6IGMPv3Src ...
export class TP_IPv6IGMPv3Src extends TP_IPv6base {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPIGMPv3Src ...
export class TP_IPIGMPv3Src extends TP_IPbase {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}

// ComplexType 
//  TP_IPClassOfTraffic ...
export class TP_IPClassOfTraffic extends TP {
	type: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    
    // Attributes
      this.type = opts['type'];

    // Elements
    
  }}
