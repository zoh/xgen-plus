import { TLDInst,TPhysConnTypeEnum,TPAddr,TUnNaming,TPTypePhysConnEnum,TPTypeEnum,TNaming,TBitRateInMbPerSec,TIEDName,TAccessPointName,NodeID,TDurationInMilliSec,TCBName } from "./BaseIndex"


// Simple type
// TSubNetworkTypeNormalizedString ...
export type TSubNetworkTypeNormalizedString = string;

// CommunicationElement ...
export type CommunicationElement = TCommunication;

// ComplexType 
//  TControlBlock ...
export class TControlBlock extends TUnNaming {
	ldInst!: TLDInst;
	cbName!: TCBName;
	Address?: TAddress;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.ldInst = opts['ldInst'];
    this.cbName = opts['cbName'];

    // Elements
     this.Address = new TAddress(opts['Address']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Address": { construct: TAddress,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'ldInst', required: true, fieldType: 'tLDInst',  },
 { name: 'cbName', required: true, fieldType: 'tCBName',  },

    ]
  }
}

// ComplexType 
//  TCommunication ...
export class TCommunication extends TUnNaming {
	SubNetwork: Array<TSubNetwork>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.SubNetwork = opts['SubNetwork']?.map((val: any) => new TSubNetwork(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SubNetwork": { construct: TSubNetwork, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TSubNetwork ...
export class TSubNetwork extends TNaming {
	type?: TSubNetworkTypeNormalizedString;
	BitRate?: TBitRateInMbPerSec;
	ConnectedAP: Array<TConnectedAP>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.BitRate = new TBitRateInMbPerSec(opts['BitRate']); 
 this.ConnectedAP = opts['ConnectedAP']?.map((val: any) => new TConnectedAP(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "BitRate": { construct: TBitRateInMbPerSec,  },
"ConnectedAP": { construct: TConnectedAP, plural: true },

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
//  TConnectedAP ...
export class TConnectedAP extends TUnNaming {
	iedName!: TIEDName;
	apName!: TAccessPointName;
	redProt?: string;
	Address?: TAddress;
	GSE?: Array<TGSE>;
	SMV?: Array<TSMV>;
	PhysConn?: Array<TPhysConn>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedName = opts['iedName'];
    this.apName = opts['apName'];
    this.redProt = opts['redProt'];

    // Elements
     this.Address = new TAddress(opts['Address']); 
 this.GSE = opts['GSE']?.map((val: any) => new TGSE(val)); 
 this.SMV = opts['SMV']?.map((val: any) => new TSMV(val)); 
 this.PhysConn = opts['PhysConn']?.map((val: any) => new TPhysConn(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Address": { construct: TAddress,  },
"GSE": { construct: TGSE, plural: true },
"SMV": { construct: TSMV, plural: true },
"PhysConn": { construct: TPhysConn, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'iedName', required: true, fieldType: 'tIEDName',  },
 { name: 'apName', required: true, fieldType: 'tAccessPointName',  },
 { name: 'redProt',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TAddress ...
export class TAddress extends NodeID {
	P: Array<TP>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.P = opts['P']?.map((val: any) => new TP(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "P": { construct: TP, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TGSE ...
export class TGSE extends TControlBlock {
	MinTime?: TDurationInMilliSec;
	MaxTime?: TDurationInMilliSec;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.MinTime = new TDurationInMilliSec(opts['MinTime']); 
 this.MaxTime = new TDurationInMilliSec(opts['MaxTime']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "MinTime": { construct: TDurationInMilliSec,  },
"MaxTime": { construct: TDurationInMilliSec,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TSMV ...
export class TSMV extends TControlBlock {

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
//  TPhysConn ...
export class TPhysConn extends TUnNaming {
	type!: TPhysConnTypeEnum;
	P?: Array<TP_PhysConn>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];

    // Elements
     this.P = opts['P']?.map((val: any) => new TP_PhysConn(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "P": { construct: TP_PhysConn, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type', required: true, fieldType: 'tPhysConnTypeEnum',  },

    ]
  }
}

// ComplexType 
//  TP_PhysConn ...
export class TP_PhysConn extends NodeID {
	Content?: TPAddr; 
	type!: TPTypePhysConnEnum;

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
       { name: 'type', required: true, fieldType: 'tPTypePhysConnEnum',  },

    ]
  }
}

// ComplexType 
//  TP ...
export class TP extends NodeID {
	Content?: TPAddr; 
	type!: TPTypeEnum;

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
       { name: 'type', required: true, fieldType: 'tPTypeEnum',  },

    ]
  }
}

// ComplexType 
//  TP_IPbase ...
export class TP_IPbase extends TP {

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
//  TP_IP ...
export class TP_IP extends TP_IPbase {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP', },

    ]
  }
}

// ComplexType 
//  TP_IPSUBNET ...
export class TP_IPSUBNET extends TP_IPbase {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-SUBNET', },

    ]
  }
}

// ComplexType 
//  TP_IPGATEWAY ...
export class TP_IPGATEWAY extends TP_IPbase {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-GATEWAY', },

    ]
  }
}

// ComplexType 
//  TP_IPv6base ...
export class TP_IPv6base extends TP {

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
//  TP_IPv6 ...
export class TP_IPv6 extends TP_IPv6base {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6', },

    ]
  }
}

// ComplexType 
//  TP_IPv6SUBNET ...
export class TP_IPv6SUBNET extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6-SUBNET', },

    ]
  }
}

// ComplexType 
//  TP_IPv6GATEWAY ...
export class TP_IPv6GATEWAY extends TP_IPv6base {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6-GATEWAY', },

    ]
  }
}

// ComplexType 
//  TP_DNSName ...
export class TP_DNSName extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'DNSName', },

    ]
  }
}

// ComplexType 
//  TP_IPv6FlowLabel ...
export class TP_IPv6FlowLabel extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6FlowLabel', },

    ]
  }
}

// ComplexType 
//  TP_OSINSAP ...
export class TP_OSINSAP extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-NSAP', },

    ]
  }
}

// ComplexType 
//  TP_OSITSEL ...
export class TP_OSITSEL extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-TSEL', },

    ]
  }
}

// ComplexType 
//  TP_OSISSEL ...
export class TP_OSISSEL extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-SSEL', },

    ]
  }
}

// ComplexType 
//  TP_OSIPSEL ...
export class TP_OSIPSEL extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-PSEL', },

    ]
  }
}

// ComplexType 
//  TP_OSIAPTitle ...
export class TP_OSIAPTitle extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-AP-Title', },

    ]
  }
}

// ComplexType 
//  TP_OSIAPInvoke ...
export class TP_OSIAPInvoke extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-AP-Invoke', },

    ]
  }
}

// ComplexType 
//  TP_OSIAEQualifier ...
export class TP_OSIAEQualifier extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-AE-Qualifier', },

    ]
  }
}

// ComplexType 
//  TP_OSIAEInvoke ...
export class TP_OSIAEInvoke extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'OSI-AE-Invoke', },

    ]
  }
}

// ComplexType 
//  TP_MACAddress ...
export class TP_MACAddress extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'MAC-Address', },

    ]
  }
}

// ComplexType 
//  TP_APPID ...
export class TP_APPID extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'APPID', },

    ]
  }
}

// ComplexType 
//  TP_VLANPRIORITY ...
export class TP_VLANPRIORITY extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'VLAN-PRIORITY', },

    ]
  }
}

// ComplexType 
//  TP_VLANID ...
export class TP_VLANID extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'VLAN-ID', },

    ]
  }
}

// ComplexType 
//  TP_Port ...
export class TP_Port extends TP {

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
//  TP_SNTPPort ...
export class TP_SNTPPort extends TP_Port {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'SNTP-Port', },

    ]
  }
}

// ComplexType 
//  TP_MMSPort ...
export class TP_MMSPort extends TP_Port {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'MMS-Port', },

    ]
  }
}

// ComplexType 
//  TP_UDPPort ...
export class TP_UDPPort extends TP_Port {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-UDP-PORT', },

    ]
  }
}

// ComplexType 
//  TP_TCPPort ...
export class TP_TCPPort extends TP_Port {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-TCP-PORT', },

    ]
  }
}

// ComplexType 
//  TP_IPv6ClassOfTraffic ...
export class TP_IPv6ClassOfTraffic extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6ClassOfTraffic', },

    ]
  }
}

// ComplexType 
//  TP_C37118IPPort ...
export class TP_C37118IPPort extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'C37-118-IP-Port', },

    ]
  }
}

// ComplexType 
//  TP_IPv6IGMPv3Src ...
export class TP_IPv6IGMPv3Src extends TP_IPv6base {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IPv6-IGMPv3Src', },

    ]
  }
}

// ComplexType 
//  TP_IPIGMPv3Src ...
export class TP_IPIGMPv3Src extends TP_IPbase {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-IGMPv3Src', },

    ]
  }
}

// ComplexType 
//  TP_IPClassOfTraffic ...
export class TP_IPClassOfTraffic extends TP {
	type!: TPTypeEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
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
       { name: 'type', required: true, fieldType: 'tPTypeEnum', fixed: 'IP-ClassOfTraffic', },

    ]
  }
}
