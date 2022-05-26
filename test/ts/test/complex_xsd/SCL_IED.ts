import { TDataSetName,TFullDOName,TServiceSettingsEnum,TRightEnum,TAttributeNameEnum,TSclVersion,TCBName,TServiceType,TServiceSettingsNoDynEnum,TLDInst,TPrefix,TSclRelease,TLNInst,TVal,TAccessPointName,TLDName,TGSEControlTypeEnum,NodeID,TNaming,TSclRevision,TAnyContentFromOtherNamespace,TName,TLNClassEnum,TMessageID,TFullAttributeName,TSmpMod,TIEDName,TAssociationID,Constructor,TLNInstOrEmpty,TUnNaming,TLogName,TValKindEnum,TSMVDeliveryEnum,TAssociationKindEnum,TFCEnum,AgDesc,TPredefinedTypeOfSecurityEnum,TDataName,TIEDNameOrRelative } from "./BaseIndex"


// AgAuthentication ...
export function AgAuthentication<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    none?: boolean;
  password?: boolean;
  weak?: boolean;
  strong?: boolean;
  certificate?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("none")) this.none = args[0]['none'];
    if (args[0]?.hasOwnProperty("password")) this.password = args[0]['password'];
    if (args[0]?.hasOwnProperty("weak")) this.weak = args[0]['weak'];
    if (args[0]?.hasOwnProperty("strong")) this.strong = args[0]['strong'];
    if (args[0]?.hasOwnProperty("certificate")) this.certificate = args[0]['certificate'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "none",  fieldType: "boolean" },
 {name: "password",  fieldType: "boolean" },
 {name: "weak",  fieldType: "boolean" },
 {name: "strong",  fieldType: "boolean" },
 {name: "certificate",  fieldType: "boolean" },

    ]
  }
  };
}
// AgSmvOpts ...
export function AgSmvOpts<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    refreshTime?: boolean;
  sampleSynchronized?: boolean;
  sampleRate?: boolean;
  dataSet?: boolean;
  security?: boolean;
  timestamp?: boolean;
  synchSourceId?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("refreshTime")) this.refreshTime = args[0]['refreshTime'];
    if (args[0]?.hasOwnProperty("sampleSynchronized")) this.sampleSynchronized = args[0]['sampleSynchronized'];
    if (args[0]?.hasOwnProperty("sampleRate")) this.sampleRate = args[0]['sampleRate'];
    if (args[0]?.hasOwnProperty("dataSet")) this.dataSet = args[0]['dataSet'];
    if (args[0]?.hasOwnProperty("security")) this.security = args[0]['security'];
    if (args[0]?.hasOwnProperty("timestamp")) this.timestamp = args[0]['timestamp'];
    if (args[0]?.hasOwnProperty("synchSourceId")) this.synchSourceId = args[0]['synchSourceId'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "refreshTime",  fieldType: "boolean" },
 {name: "sampleSynchronized",  fieldType: "boolean" },
 {name: "sampleRate",  fieldType: "boolean" },
 {name: "dataSet",  fieldType: "boolean" },
 {name: "security",  fieldType: "boolean" },
 {name: "timestamp",  fieldType: "boolean" },
 {name: "synchSourceId",  fieldType: "boolean" },

    ]
  }
  };
}
// AgOptFields ...
export function AgOptFields<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    seqNum?: boolean;
  timeStamp?: boolean;
  dataSet?: boolean;
  reasonCode?: boolean;
  dataRef?: boolean;
  entryID?: boolean;
  configRef?: boolean;
  bufOvfl?: boolean;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("seqNum")) this.seqNum = args[0]['seqNum'];
    if (args[0]?.hasOwnProperty("timeStamp")) this.timeStamp = args[0]['timeStamp'];
    if (args[0]?.hasOwnProperty("dataSet")) this.dataSet = args[0]['dataSet'];
    if (args[0]?.hasOwnProperty("reasonCode")) this.reasonCode = args[0]['reasonCode'];
    if (args[0]?.hasOwnProperty("dataRef")) this.dataRef = args[0]['dataRef'];
    if (args[0]?.hasOwnProperty("entryID")) this.entryID = args[0]['entryID'];
    if (args[0]?.hasOwnProperty("configRef")) this.configRef = args[0]['configRef'];
    if (args[0]?.hasOwnProperty("bufOvfl")) this.bufOvfl = args[0]['bufOvfl'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "seqNum",  fieldType: "boolean" },
 {name: "timeStamp",  fieldType: "boolean" },
 {name: "dataSet",  fieldType: "boolean" },
 {name: "reasonCode",  fieldType: "boolean" },
 {name: "dataRef",  fieldType: "boolean" },
 {name: "entryID",  fieldType: "boolean" },
 {name: "configRef",  fieldType: "boolean" },
 {name: "bufOvfl",  fieldType: "boolean" },

    ]
  }
  };
}
// AgLDRef ...
export function AgLDRef<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends AgDesc(Base) {
    iedName!: TIEDName;
  ldInst!: TLDInst;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("iedName")) this.iedName = args[0]['iedName'];
    if (args[0]?.hasOwnProperty("ldInst")) this.ldInst = args[0]['ldInst'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "iedName", required: true, fieldType: "TIEDName" },
 {name: "ldInst", required: true, fieldType: "TLDInst" },

    ]
  }
  };
}
// AgLNRef ...
export function AgLNRef<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends AgLDRef(Base) {
    prefix?: TPrefix;
  lnClass!: TLNClassEnum;
  lnInst!: TLNInstOrEmpty;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("prefix")) this.prefix = args[0]['prefix'];
    if (args[0]?.hasOwnProperty("lnClass")) this.lnClass = args[0]['lnClass'];
    if (args[0]?.hasOwnProperty("lnInst")) this.lnInst = args[0]['lnInst'];

  }

  Attributes() {
    return [
      ...super.Attributes(),
       {name: "prefix",  fieldType: "TPrefix" },
 {name: "lnClass", required: true, fieldType: "TLNClassEnum" },
 {name: "lnInst", required: true, fieldType: "TLNInstOrEmpty" },

    ]
  }
  };
}
// Simple type
// TServicesNameLengthToken ...
export type TServicesNameLengthToken = string;

// Simple type
// TCertificateSerialNumberNormalizedString ...
export type TCertificateSerialNumberNormalizedString = string;

// Simple type
// TCertCommonNameNormalizedString ...
export type TCertCommonNameNormalizedString = string;

// Simple type
// TCertIdHierarchyNormalizedString ...
export type TCertIdHierarchyNormalizedString = string;

// Simple type
// TRptEnabledMaxUnsignedInt ...
export type TRptEnabledMaxUnsignedInt = Number;

// Simple type
// TSettingControlNumOfSGsUnsignedInt ...
export type TSettingControlNumOfSGsUnsignedInt = Number;

// Simple type
// TSettingControlActSGUnsignedInt ...
export type TSettingControlActSGUnsignedInt = Number;

// Simple type
// TServiceWithMaxNonZeroMaxUnsignedInt ...
export type TServiceWithMaxNonZeroMaxUnsignedInt = Number;

// Simple type
// TServiceConfReportControlBufModeName ...
export enum TServiceConfReportControlBufModeName {
	"unbuffered" = 'unbuffered',
	"buffered" = 'buffered',
	"both" = 'both',
}

// Simple type
// TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt ...
export type TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt = Number;

// Simple type
// TClientServicesMaxAttributesUnsignedInt ...
export type TClientServicesMaxAttributesUnsignedInt = Number;

// Simple type
// TClientServicesMaxReportsUnsignedInt ...
export type TClientServicesMaxReportsUnsignedInt = Number;

// Simple type
// TClientServicesMaxGOOSEUnsignedInt ...
export type TClientServicesMaxGOOSEUnsignedInt = Number;

// Simple type
// TClientServicesMaxSMVUnsignedInt ...
export type TClientServicesMaxSMVUnsignedInt = Number;

// IEDElement ...
export type IEDElement = TIED;

// LN0Element ...
export type LN0Element = LN0;

// LNElement ...
export type LNElement = TLN;

// ComplexType 
//  TIED ...
export class TIED extends TUnNaming {
	name!: TIEDName;
	type?: string;
	manufacturer?: string;
	configVersion?: string;
	originalSclVersion?: TSclVersion;
	originalSclRevision?: TSclRevision;
	originalSclRelease?: TSclRelease;
	engRight?: TRightEnum;
	owner?: string;
	Services?: TServices;
	AccessPoint: Array<TAccessPoint>;
	KDC?: Array<TKDC>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.type = opts['type'];
    this.manufacturer = opts['manufacturer'];
    this.configVersion = opts['configVersion'];
    this.originalSclVersion = opts['originalSclVersion'];
    this.originalSclRevision = opts['originalSclRevision'];
    this.originalSclRelease = opts['originalSclRelease'];
    this.engRight = opts['engRight'];
    this.owner = opts['owner'];

    // Elements
     this.Services = new TServices(opts['Services']); 
 this.AccessPoint = opts['AccessPoint']?.map((val: any) => new TAccessPoint(val)); 
 this.KDC = opts['KDC']?.map((val: any) => new TKDC(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Services": { construct: TServices,  },
"AccessPoint": { construct: TAccessPoint, plural: true },
"KDC": { construct: TKDC, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tIEDName',  },
 { name: 'type',  fieldType: 'string',  },
 { name: 'manufacturer',  fieldType: 'string',  },
 { name: 'configVersion',  fieldType: 'string',  },
 { name: 'originalSclVersion',  fieldType: 'tSclVersion',  },
 { name: 'originalSclRevision',  fieldType: 'tSclRevision',  },
 { name: 'originalSclRelease',  fieldType: 'tSclRelease',  },
 { name: 'engRight',  fieldType: 'tRightEnum',  },
 { name: 'owner',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TServices ...
export class TServices extends NodeID {
	nameLength?: TServicesNameLengthToken;
	DynAssociation?: TServiceWithOptionalMax;
	SettingGroups?: TSettingGroups;
	GetDirectory?: TServiceYesNo;
	GetDataObjectDefinition?: TServiceYesNo;
	DataObjectDirectory?: TServiceYesNo;
	GetDataSetValue?: TServiceYesNo;
	SetDataSetValue?: TServiceYesNo;
	DataSetDirectory?: TServiceYesNo;
	ConfDataSet?: TServiceForConfDataSet;
	DynDataSet?: TServiceWithMaxAndMaxAttributes;
	ReadWrite?: TServiceYesNo;
	TimerActivatedControl?: TServiceYesNo;
	ConfReportControl?: TServiceConfReportControl;
	GetCBValues?: TServiceYesNo;
	ConfLogControl?: TServiceWithMaxNonZero;
	ReportSettings?: TReportSettings;
	LogSettings?: TLogSettings;
	GSESettings?: TGSESettings;
	SMVSettings?: TSMVSettings;
	GSEDir?: TServiceYesNo;
	GOOSE?: TGOOSEcapabilities;
	GSSE?: TServiceWithMax;
	SMVsc?: TSMVsc;
	FileHandling?: TFileHandling;
	ConfLNs?: TConfLNs;
	ClientServices?: TClientServices;
	ConfLdName?: TServiceYesNo;
	SupSubscription?: TSupSubscription;
	ConfSigRef?: TServiceWithMaxNonZero;
	ValueHandling?: TValueHandling;
	RedProt?: TRedProt;
	TimeSyncProt?: TTimeSyncProt;
	CommProt?: TCommProt;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.nameLength = opts['nameLength'];

    // Elements
     this.DynAssociation = new TServiceWithOptionalMax(opts['DynAssociation']); 
 this.SettingGroups = new TSettingGroups(opts['SettingGroups']); 
 this.GetDirectory = new TServiceYesNo(opts['GetDirectory']); 
 this.GetDataObjectDefinition = new TServiceYesNo(opts['GetDataObjectDefinition']); 
 this.DataObjectDirectory = new TServiceYesNo(opts['DataObjectDirectory']); 
 this.GetDataSetValue = new TServiceYesNo(opts['GetDataSetValue']); 
 this.SetDataSetValue = new TServiceYesNo(opts['SetDataSetValue']); 
 this.DataSetDirectory = new TServiceYesNo(opts['DataSetDirectory']); 
 this.ConfDataSet = new TServiceForConfDataSet(opts['ConfDataSet']); 
 this.DynDataSet = new TServiceWithMaxAndMaxAttributes(opts['DynDataSet']); 
 this.ReadWrite = new TServiceYesNo(opts['ReadWrite']); 
 this.TimerActivatedControl = new TServiceYesNo(opts['TimerActivatedControl']); 
 this.ConfReportControl = new TServiceConfReportControl(opts['ConfReportControl']); 
 this.GetCBValues = new TServiceYesNo(opts['GetCBValues']); 
 this.ConfLogControl = new TServiceWithMaxNonZero(opts['ConfLogControl']); 
 this.ReportSettings = new TReportSettings(opts['ReportSettings']); 
 this.LogSettings = new TLogSettings(opts['LogSettings']); 
 this.GSESettings = new TGSESettings(opts['GSESettings']); 
 this.SMVSettings = new TSMVSettings(opts['SMVSettings']); 
 this.GSEDir = new TServiceYesNo(opts['GSEDir']); 
 this.GOOSE = new TGOOSEcapabilities(opts['GOOSE']); 
 this.GSSE = new TServiceWithMax(opts['GSSE']); 
 this.SMVsc = new TSMVsc(opts['SMVsc']); 
 this.FileHandling = new TFileHandling(opts['FileHandling']); 
 this.ConfLNs = new TConfLNs(opts['ConfLNs']); 
 this.ClientServices = new TClientServices(opts['ClientServices']); 
 this.ConfLdName = new TServiceYesNo(opts['ConfLdName']); 
 this.SupSubscription = new TSupSubscription(opts['SupSubscription']); 
 this.ConfSigRef = new TServiceWithMaxNonZero(opts['ConfSigRef']); 
 this.ValueHandling = new TValueHandling(opts['ValueHandling']); 
 this.RedProt = new TRedProt(opts['RedProt']); 
 this.TimeSyncProt = new TTimeSyncProt(opts['TimeSyncProt']); 
 this.CommProt = new TCommProt(opts['CommProt']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "DynAssociation": { construct: TServiceWithOptionalMax,  },
"SettingGroups": { construct: TSettingGroups,  },
"GetDirectory": { construct: TServiceYesNo,  },
"GetDataObjectDefinition": { construct: TServiceYesNo,  },
"DataObjectDirectory": { construct: TServiceYesNo,  },
"GetDataSetValue": { construct: TServiceYesNo,  },
"SetDataSetValue": { construct: TServiceYesNo,  },
"DataSetDirectory": { construct: TServiceYesNo,  },
"ConfDataSet": { construct: TServiceForConfDataSet,  },
"DynDataSet": { construct: TServiceWithMaxAndMaxAttributes,  },
"ReadWrite": { construct: TServiceYesNo,  },
"TimerActivatedControl": { construct: TServiceYesNo,  },
"ConfReportControl": { construct: TServiceConfReportControl,  },
"GetCBValues": { construct: TServiceYesNo,  },
"ConfLogControl": { construct: TServiceWithMaxNonZero,  },
"ReportSettings": { construct: TReportSettings,  },
"LogSettings": { construct: TLogSettings,  },
"GSESettings": { construct: TGSESettings,  },
"SMVSettings": { construct: TSMVSettings,  },
"GSEDir": { construct: TServiceYesNo,  },
"GOOSE": { construct: TGOOSEcapabilities,  },
"GSSE": { construct: TServiceWithMax,  },
"SMVsc": { construct: TSMVsc,  },
"FileHandling": { construct: TFileHandling,  },
"ConfLNs": { construct: TConfLNs,  },
"ClientServices": { construct: TClientServices,  },
"ConfLdName": { construct: TServiceYesNo,  },
"SupSubscription": { construct: TSupSubscription,  },
"ConfSigRef": { construct: TServiceWithMaxNonZero,  },
"ValueHandling": { construct: TValueHandling,  },
"RedProt": { construct: TRedProt,  },
"TimeSyncProt": { construct: TTimeSyncProt,  },
"CommProt": { construct: TCommProt,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'nameLength',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TAccessPoint ...
export class TAccessPoint extends TUnNaming {
	name!: TAccessPointName;
	router?: boolean;
	clock?: boolean;
	kdc?: boolean;
	Server?: TServer;
	LN?: Array<TLN>;
	ServerAt?: TServerAt;
	Services?: TServices;
	GOOSESecurity?: Array<TCertificate>;
	SMVSecurity?: Array<TCertificate>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.router = opts['router'];
    this.clock = opts['clock'];
    this.kdc = opts['kdc'];

    // Elements
     this.Server = new TServer(opts['Server']); 
 this.LN = opts['LN']?.map((val: any) => new TLN(val)); 
 this.ServerAt = new TServerAt(opts['ServerAt']); 
 this.Services = new TServices(opts['Services']); 
 this.GOOSESecurity = opts['GOOSESecurity']?.map((val: any) => new TCertificate(val)); 
 this.SMVSecurity = opts['SMVSecurity']?.map((val: any) => new TCertificate(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Server": { construct: TServer,  },
"LN": { construct: TLN, plural: true },
"ServerAt": { construct: TServerAt,  },
"Services": { construct: TServices,  },
"GOOSESecurity": { construct: TCertificate, plural: true },
"SMVSecurity": { construct: TCertificate, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tAccessPointName',  },
 { name: 'router',  fieldType: 'boolean',  },
 { name: 'clock',  fieldType: 'boolean',  },
 { name: 'kdc',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TCertificate ...
export class TCertificate extends TNaming {
	xferNumber?: Number;
	serialNumber!: TCertificateSerialNumberNormalizedString;
	Subject: TCert;
	IssuerName: TCert;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.xferNumber = opts['xferNumber'];
    this.serialNumber = opts['serialNumber'];

    // Elements
     this.Subject = new TCert(opts['Subject']); 
 this.IssuerName = new TCert(opts['IssuerName']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Subject": { construct: TCert,  },
"IssuerName": { construct: TCert,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'xferNumber',  fieldType: 'number',  },
 { name: 'serialNumber', required: true, fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TCert ...
export class TCert extends NodeID {
	commonName!: TCertCommonNameNormalizedString;
	idHierarchy!: TCertIdHierarchyNormalizedString;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.commonName = opts['commonName'];
    this.idHierarchy = opts['idHierarchy'];

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
       { name: 'commonName', required: true, fieldType: '',  },
 { name: 'idHierarchy', required: true, fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TServerAt ...
export class TServerAt extends TUnNaming {
	apName!: TAccessPointName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.apName = opts['apName'];

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
       { name: 'apName', required: true, fieldType: 'tAccessPointName',  },

    ]
  }
}

// ComplexType 
//  Authentication ...
export class Authentication extends AgAuthentication(NodeID) {

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
//  TServer ...
export class TServer extends TUnNaming {
	timeout?: Number;
	Authentication: Authentication;
	LDevice: Array<TLDevice>;
	Association?: Array<TAssociation>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.timeout = opts['timeout'];

    // Elements
     this.Authentication = new Authentication(opts['Authentication']); 
 this.LDevice = opts['LDevice']?.map((val: any) => new TLDevice(val)); 
 this.Association = opts['Association']?.map((val: any) => new TAssociation(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Authentication": { construct: Authentication,  },
"LDevice": { construct: TLDevice, plural: true },
"Association": { construct: TAssociation, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'timeout',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TLDevice ...
export class TLDevice extends TUnNaming {
	inst!: TLDInst;
	ldName?: TLDName;
	LN0: LN0;
	LN?: Array<TLN>;
	AccessControl?: TAccessControl;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.inst = opts['inst'];
    this.ldName = opts['ldName'];

    // Elements
     this.LN0 = new LN0(opts['LN0']); 
 this.LN = opts['LN']?.map((val: any) => new TLN(val)); 
 this.AccessControl = new TAccessControl(opts['AccessControl']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "LN0": { construct: LN0,  },
"LN": { construct: TLN, plural: true },
"AccessControl": { construct: TAccessControl,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'inst', required: true, fieldType: 'tLDInst',  },
 { name: 'ldName',  fieldType: 'tLDName',  },

    ]
  }
}

// ComplexType 
//  TAccessControl ...
export class TAccessControl extends TAnyContentFromOtherNamespace {

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
//  TAssociation ...
export class TAssociation extends AgLNRef(NodeID) {
	kind!: TAssociationKindEnum;
	associationID?: TAssociationID;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.kind = opts['kind'];
    this.associationID = opts['associationID'];

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
       { name: 'kind', required: true, fieldType: 'tAssociationKindEnum',  },
 { name: 'associationID',  fieldType: 'tAssociationID',  },

    ]
  }
}

// ComplexType 
//  TAnyLN ...
export class TAnyLN extends TUnNaming {
	lnType!: TName;
	DataSet?: Array<TDataSet>;
	ReportControl?: Array<TReportControl>;
	LogControl?: Array<TLogControl>;
	DOI?: Array<TDOI>;
	Inputs?: TInputs;
	Log?: Array<TLog>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.lnType = opts['lnType'];

    // Elements
     this.DataSet = opts['DataSet']?.map((val: any) => new TDataSet(val)); 
 this.ReportControl = opts['ReportControl']?.map((val: any) => new TReportControl(val)); 
 this.LogControl = opts['LogControl']?.map((val: any) => new TLogControl(val)); 
 this.DOI = opts['DOI']?.map((val: any) => new TDOI(val)); 
 this.Inputs = new TInputs(opts['Inputs']); 
 this.Log = opts['Log']?.map((val: any) => new TLog(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "DataSet": { construct: TDataSet, plural: true },
"ReportControl": { construct: TReportControl, plural: true },
"LogControl": { construct: TLogControl, plural: true },
"DOI": { construct: TDOI, plural: true },
"Inputs": { construct: TInputs,  },
"Log": { construct: TLog, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'lnType', required: true, fieldType: 'tName',  },

    ]
  }
}

// ComplexType 
//  TLN ...
export class TLN extends TAnyLN {
	prefix?: TPrefix;
	lnClass!: TLNClassEnum;
	inst!: TLNInst;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.inst = opts['inst'];

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
       { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass', required: true, fieldType: 'tLNClassEnum',  },
 { name: 'inst', required: true, fieldType: 'tLNInst',  },

    ]
  }
}

// ComplexType 
//  TLN0 ...
export class TLN0 extends TAnyLN {
	lnClass!: TLNClassEnum;
	inst!: string;
	GSEControl?: Array<TGSEControl>;
	SampledValueControl?: Array<TSampledValueControl>;
	SettingControl?: TSettingControl;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.lnClass = opts['lnClass'];
    this.inst = opts['inst'];

    // Elements
     this.GSEControl = opts['GSEControl']?.map((val: any) => new TGSEControl(val)); 
 this.SampledValueControl = opts['SampledValueControl']?.map((val: any) => new TSampledValueControl(val)); 
 this.SettingControl = new TSettingControl(opts['SettingControl']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "GSEControl": { construct: TGSEControl, plural: true },
"SampledValueControl": { construct: TSampledValueControl, plural: true },
"SettingControl": { construct: TSettingControl,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'lnClass', required: true, fieldType: 'tLNClassEnum', fixed: 'LLN0', },
 { name: 'inst', required: true, fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TDataSet ...
export class TDataSet extends TUnNaming {
	name!: TDataSetName;
	FCDA: Array<TFCDA>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];

    // Elements
     this.FCDA = opts['FCDA']?.map((val: any) => new TFCDA(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "FCDA": { construct: TFCDA, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tDataSetName',  },

    ]
  }
}

// ComplexType 
//  TFCDA ...
export class TFCDA extends NodeID {
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;
	doName?: TFullDOName;
	daName?: TFullAttributeName;
	fc!: TFCEnum;
	ix?: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];
    this.doName = opts['doName'];
    this.daName = opts['daName'];
    this.fc = opts['fc'];
    this.ix = opts['ix'];

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
       { name: 'ldInst',  fieldType: 'tLDInst',  },
 { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass',  fieldType: 'tLNClassEnum',  },
 { name: 'lnInst',  fieldType: 'tLNInst',  },
 { name: 'doName',  fieldType: 'tFullDOName',  },
 { name: 'daName',  fieldType: 'tFullAttributeName',  },
 { name: 'fc', required: true, fieldType: 'tFCEnum',  },
 { name: 'ix',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TControl ...
export class TControl extends TUnNaming {
	name!: TCBName;
	datSet?: TDataSetName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.datSet = opts['datSet'];

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
       { name: 'name', required: true, fieldType: 'tCBName',  },
 { name: 'datSet',  fieldType: 'tDataSetName',  },

    ]
  }
}

// ComplexType 
//  TControlWithTriggerOpt ...
export class TControlWithTriggerOpt extends TControl {
	intgPd?: Number;
	TrgOps?: TTrgOps;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.intgPd = opts['intgPd'];

    // Elements
     this.TrgOps = new TTrgOps(opts['TrgOps']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "TrgOps": { construct: TTrgOps,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'intgPd',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TTrgOps ...
export class TTrgOps extends NodeID {
	dchg?: boolean;
	qchg?: boolean;
	dupd?: boolean;
	period?: boolean;
	gi?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.dchg = opts['dchg'];
    this.qchg = opts['qchg'];
    this.dupd = opts['dupd'];
    this.period = opts['period'];
    this.gi = opts['gi'];

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
       { name: 'dchg',  fieldType: 'boolean',  },
 { name: 'qchg',  fieldType: 'boolean',  },
 { name: 'dupd',  fieldType: 'boolean',  },
 { name: 'period',  fieldType: 'boolean',  },
 { name: 'gi',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  OptFields ...
export class OptFields extends AgOptFields(NodeID) {

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
//  TReportControl ...
export class TReportControl extends TControlWithTriggerOpt {
	rptID?: TMessageID;
	confRev!: Number;
	buffered?: boolean;
	bufTime?: Number;
	indexed?: boolean;
	OptFields: OptFields;
	RptEnabled?: TRptEnabled;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.rptID = opts['rptID'];
    this.confRev = opts['confRev'];
    this.buffered = opts['buffered'];
    this.bufTime = opts['bufTime'];
    this.indexed = opts['indexed'];

    // Elements
     this.OptFields = new OptFields(opts['OptFields']); 
 this.RptEnabled = new TRptEnabled(opts['RptEnabled']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "OptFields": { construct: OptFields,  },
"RptEnabled": { construct: TRptEnabled,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'rptID',  fieldType: 'tMessageID',  },
 { name: 'confRev', required: true, fieldType: 'number',  },
 { name: 'buffered',  fieldType: 'boolean',  },
 { name: 'bufTime',  fieldType: 'number',  },
 { name: 'indexed',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TRptEnabled ...
export class TRptEnabled extends TUnNaming {
	max?: TRptEnabledMaxUnsignedInt;
	ClientLN?: Array<TClientLN>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.max = opts['max'];

    // Elements
     this.ClientLN = opts['ClientLN']?.map((val: any) => new TClientLN(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "ClientLN": { construct: TClientLN, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'max',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TClientLN ...
export class TClientLN extends AgLNRef(NodeID) {
	apRef?: TAccessPointName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.apRef = opts['apRef'];

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
       { name: 'apRef',  fieldType: 'tAccessPointName',  },

    ]
  }
}

// ComplexType 
//  TLogControl ...
export class TLogControl extends TControlWithTriggerOpt {
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;
	logName!: TLogName;
	logEna?: boolean;
	reasonCode?: boolean;
	bufTime?: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];
    this.logName = opts['logName'];
    this.logEna = opts['logEna'];
    this.reasonCode = opts['reasonCode'];
    this.bufTime = opts['bufTime'];

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
       { name: 'ldInst',  fieldType: 'tLDInst',  },
 { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass',  fieldType: 'tLNClassEnum',  },
 { name: 'lnInst',  fieldType: 'tLNInst',  },
 { name: 'logName', required: true, fieldType: 'tLogName',  },
 { name: 'logEna',  fieldType: 'boolean',  },
 { name: 'reasonCode',  fieldType: 'boolean',  },
 { name: 'bufTime',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TInputs ...
export class TInputs extends TUnNaming {
	ExtRef: Array<TExtRef>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.ExtRef = opts['ExtRef']?.map((val: any) => new TExtRef(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "ExtRef": { construct: TExtRef, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  TExtRef ...
export class TExtRef extends AgDesc(NodeID) {
	iedName?: TIEDNameOrRelative;
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;
	doName?: TFullDOName;
	daName?: TFullAttributeName;
	intAddr?: string;
	serviceType?: TServiceType;
	srcLDInst?: TLDInst;
	srcPrefix?: TPrefix;
	srcLNClass?: TLNClassEnum;
	srcLNInst?: TLNInst;
	srcCBName?: TCBName;
	pServT?: TServiceType;
	pLN?: TLNClassEnum;
	pDO?: TFullDOName;
	pDA?: TFullAttributeName;

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
    this.doName = opts['doName'];
    this.daName = opts['daName'];
    this.intAddr = opts['intAddr'];
    this.serviceType = opts['serviceType'];
    this.srcLDInst = opts['srcLDInst'];
    this.srcPrefix = opts['srcPrefix'];
    this.srcLNClass = opts['srcLNClass'];
    this.srcLNInst = opts['srcLNInst'];
    this.srcCBName = opts['srcCBName'];
    this.pServT = opts['pServT'];
    this.pLN = opts['pLN'];
    this.pDO = opts['pDO'];
    this.pDA = opts['pDA'];

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
       { name: 'iedName',  fieldType: 'tIEDNameOrRelative',  },
 { name: 'ldInst',  fieldType: 'tLDInst',  },
 { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass',  fieldType: 'tLNClassEnum',  },
 { name: 'lnInst',  fieldType: 'tLNInst',  },
 { name: 'doName',  fieldType: 'tFullDOName',  },
 { name: 'daName',  fieldType: 'tFullAttributeName',  },
 { name: 'intAddr',  fieldType: 'string',  },
 { name: 'serviceType',  fieldType: 'tServiceType',  },
 { name: 'srcLDInst',  fieldType: 'tLDInst',  },
 { name: 'srcPrefix',  fieldType: 'tPrefix',  },
 { name: 'srcLNClass',  fieldType: 'tLNClassEnum',  },
 { name: 'srcLNInst',  fieldType: 'tLNInst',  },
 { name: 'srcCBName',  fieldType: 'tCBName',  },
 { name: 'pServT',  fieldType: 'tServiceType',  },
 { name: 'pLN',  fieldType: 'tLNClassEnum',  },
 { name: 'pDO',  fieldType: 'tFullDOName',  },
 { name: 'pDA',  fieldType: 'tFullAttributeName',  },

    ]
  }
}

// ComplexType 
//  TLog ...
export class TLog extends TUnNaming {
	name?: TLogName;

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
       { name: 'name',  fieldType: 'tLogName',  },

    ]
  }
}

// ComplexType 
//  IEDName ...
export class IEDName extends NodeID {
	Content?: TIEDName; 
	apRef?: TAccessPointName;
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.apRef = opts['apRef'];
    this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];

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
       { name: 'apRef',  fieldType: 'tAccessPointName',  },
 { name: 'ldInst',  fieldType: 'tLDInst',  },
 { name: 'prefix',  fieldType: 'tPrefix',  },
 { name: 'lnClass',  fieldType: 'tLNClassEnum',  },
 { name: 'lnInst',  fieldType: 'tLNInst',  },

    ]
  }
}

// ComplexType 
//  TControlWithIEDName ...
export class TControlWithIEDName extends TControl {
	confRev?: Number;
	IEDName?: Array<IEDName>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.confRev = opts['confRev'];

    // Elements
     this.IEDName = opts['IEDName']?.map((val: any) => new IEDName(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "IEDName": { construct: IEDName, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'confRev',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TProtocol ...
export class TProtocol {
Content!: string; 
	mustUnderstand!: boolean;

  constructor(...args: any[]) {
    
    const opts = args[0];
    if (opts) {
    if (typeof opts.Content != "undefined") 
      this.Content = opts.Content; 
    // Attributes
      this.mustUnderstand = opts['mustUnderstand'];

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
      
       { name: 'mustUnderstand', required: true, fieldType: 'boolean', fixed: 'true', },

    ]
  }
}

// ComplexType 
//  TGSEControl ...
export class TGSEControl extends TControlWithIEDName {
	type?: TGSEControlTypeEnum;
	appID!: TMessageID;
	fixedOffs?: boolean;
	securityEnable?: string;
	Protocol?: TProtocol;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.type = opts['type'];
    this.appID = opts['appID'];
    this.fixedOffs = opts['fixedOffs'];
    this.securityEnable = opts['securityEnable'];

    // Elements
     this.Protocol = new TProtocol(opts['Protocol']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Protocol": { construct: TProtocol,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'type',  fieldType: 'tGSEControlTypeEnum',  },
 { name: 'appID', required: true, fieldType: 'tMessageID',  },
 { name: 'fixedOffs',  fieldType: 'boolean',  },
 { name: 'securityEnable',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  SmvOpts ...
export class SmvOpts extends AgSmvOpts(NodeID) {

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
//  TSampledValueControl ...
export class TSampledValueControl extends TControlWithIEDName {
	smvID!: TMessageID;
	multicast?: boolean;
	smpRate!: Number;
	nofASDU!: Number;
	smpMod?: TSmpMod;
	securityEnable?: TPredefinedTypeOfSecurityEnum;
	SmvOpts: SmvOpts;
	Protocol?: TProtocol;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.smvID = opts['smvID'];
    this.multicast = opts['multicast'];
    this.smpRate = opts['smpRate'];
    this.nofASDU = opts['nofASDU'];
    this.smpMod = opts['smpMod'];
    this.securityEnable = opts['securityEnable'];

    // Elements
     this.SmvOpts = new SmvOpts(opts['SmvOpts']); 
 this.Protocol = new TProtocol(opts['Protocol']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SmvOpts": { construct: SmvOpts,  },
"Protocol": { construct: TProtocol,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'smvID', required: true, fieldType: 'tMessageID',  },
 { name: 'multicast',  fieldType: 'boolean',  },
 { name: 'smpRate', required: true, fieldType: 'number',  },
 { name: 'nofASDU', required: true, fieldType: 'number',  },
 { name: 'smpMod',  fieldType: 'tSmpMod',  },
 { name: 'securityEnable',  fieldType: 'tPredefinedTypeOfSecurityEnum',  },

    ]
  }
}

// ComplexType 
//  TSettingControl ...
export class TSettingControl extends TUnNaming {
	numOfSGs!: TSettingControlNumOfSGsUnsignedInt;
	actSG?: TSettingControlActSGUnsignedInt;
	resvTms?: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.numOfSGs = opts['numOfSGs'];
    this.actSG = opts['actSG'];
    this.resvTms = opts['resvTms'];

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
       { name: 'numOfSGs', required: true, fieldType: '',  },
 { name: 'actSG',  fieldType: '',  },
 { name: 'resvTms',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TDOI ...
export class TDOI extends TUnNaming {
	name!: TDataName;
	ix?: Number;
	accessControl?: string;
	SDI?: Array<TSDI>;
	DAI?: Array<TDAI>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.ix = opts['ix'];
    this.accessControl = opts['accessControl'];

    // Elements
     this.SDI = opts['SDI']?.map((val: any) => new TSDI(val)); 
 this.DAI = opts['DAI']?.map((val: any) => new TDAI(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SDI": { construct: TSDI, plural: true },
"DAI": { construct: TDAI, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tDataName',  },
 { name: 'ix',  fieldType: 'number',  },
 { name: 'accessControl',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TSDI ...
export class TSDI extends TUnNaming {
	name!: TAttributeNameEnum;
	ix?: Number;
	sAddr?: string;
	SDI?: Array<TSDI>;
	DAI?: Array<TDAI>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.ix = opts['ix'];
    this.sAddr = opts['sAddr'];

    // Elements
     this.SDI = opts['SDI']?.map((val: any) => new TSDI(val)); 
 this.DAI = opts['DAI']?.map((val: any) => new TDAI(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SDI": { construct: TSDI, plural: true },
"DAI": { construct: TDAI, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tAttributeNameEnum',  },
 { name: 'ix',  fieldType: 'number',  },
 { name: 'sAddr',  fieldType: 'string',  },

    ]
  }
}

// ComplexType 
//  TDAI ...
export class TDAI extends TUnNaming {
	name!: TAttributeNameEnum;
	sAddr?: string;
	valKind?: TValKindEnum;
	ix?: Number;
	valImport?: boolean;
	Val?: Array<TVal>;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.name = opts['name'];
    this.sAddr = opts['sAddr'];
    this.valKind = opts['valKind'];
    this.ix = opts['ix'];
    this.valImport = opts['valImport'];

    // Elements
     this.Val = opts['Val']?.map((val: any) => new TVal(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Val": { construct: TVal, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'name', required: true, fieldType: 'tAttributeNameEnum',  },
 { name: 'sAddr',  fieldType: 'string',  },
 { name: 'valKind',  fieldType: 'tValKindEnum',  },
 { name: 'ix',  fieldType: 'number',  },
 { name: 'valImport',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TServiceYesNo ...
export class TServiceYesNo extends NodeID {

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
//  TServiceWithOptionalMax ...
export class TServiceWithOptionalMax extends NodeID {
	max?: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.max = opts['max'];

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
       { name: 'max',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TServiceWithMax ...
export class TServiceWithMax extends NodeID {
	max!: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.max = opts['max'];

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
       { name: 'max', required: true, fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TServiceWithMaxNonZero ...
export class TServiceWithMaxNonZero extends NodeID {
	max!: TServiceWithMaxNonZeroMaxUnsignedInt;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.max = opts['max'];

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
       { name: 'max', required: true, fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TServiceConfReportControl ...
export class TServiceConfReportControl extends TServiceWithMax {
	bufMode?: TServiceConfReportControlBufModeName;
	bufConf?: boolean;
	maxBuf?: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.bufMode = opts['bufMode'];
    this.bufConf = opts['bufConf'];
    this.maxBuf = opts['maxBuf'];

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
       { name: 'bufMode',  fieldType: '',  },
 { name: 'bufConf',  fieldType: 'boolean',  },
 { name: 'maxBuf',  fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TServiceWithMaxAndMaxAttributes ...
export class TServiceWithMaxAndMaxAttributes extends TServiceWithMax {
	maxAttributes?: TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.maxAttributes = opts['maxAttributes'];

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
       { name: 'maxAttributes',  fieldType: '',  },

    ]
  }
}

// ComplexType 
//  TServiceWithMaxAndModify ...
export class TServiceWithMaxAndModify extends TServiceWithMax {
	modify?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.modify = opts['modify'];

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
       { name: 'modify',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TServiceForConfDataSet ...
export class TServiceForConfDataSet extends TServiceWithMaxAndMaxAttributes {
	modify?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.modify = opts['modify'];

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
       { name: 'modify',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TClientServices ...
export class TClientServices extends NodeID {
	goose?: boolean;
	gsse?: boolean;
	bufReport?: boolean;
	unbufReport?: boolean;
	readLog?: boolean;
	sv?: boolean;
	supportsLdName?: boolean;
	maxAttributes?: TClientServicesMaxAttributesUnsignedInt;
	maxReports?: TClientServicesMaxReportsUnsignedInt;
	maxGOOSE?: TClientServicesMaxGOOSEUnsignedInt;
	maxSMV?: TClientServicesMaxSMVUnsignedInt;
	rGOOSE?: boolean;
	rSV?: boolean;
	noIctBinding?: boolean;
	TimeSyncProt?: TTimeSyncProt;
	McSecurity?: TMcSecurity;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.goose = opts['goose'];
    this.gsse = opts['gsse'];
    this.bufReport = opts['bufReport'];
    this.unbufReport = opts['unbufReport'];
    this.readLog = opts['readLog'];
    this.sv = opts['sv'];
    this.supportsLdName = opts['supportsLdName'];
    this.maxAttributes = opts['maxAttributes'];
    this.maxReports = opts['maxReports'];
    this.maxGOOSE = opts['maxGOOSE'];
    this.maxSMV = opts['maxSMV'];
    this.rGOOSE = opts['rGOOSE'];
    this.rSV = opts['rSV'];
    this.noIctBinding = opts['noIctBinding'];

    // Elements
     this.TimeSyncProt = new TTimeSyncProt(opts['TimeSyncProt']); 
 this.McSecurity = new TMcSecurity(opts['McSecurity']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "TimeSyncProt": { construct: TTimeSyncProt,  },
"McSecurity": { construct: TMcSecurity,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'goose',  fieldType: 'boolean',  },
 { name: 'gsse',  fieldType: 'boolean',  },
 { name: 'bufReport',  fieldType: 'boolean',  },
 { name: 'unbufReport',  fieldType: 'boolean',  },
 { name: 'readLog',  fieldType: 'boolean',  },
 { name: 'sv',  fieldType: 'boolean',  },
 { name: 'supportsLdName',  fieldType: 'boolean',  },
 { name: 'maxAttributes',  fieldType: '',  },
 { name: 'maxReports',  fieldType: '',  },
 { name: 'maxGOOSE',  fieldType: '',  },
 { name: 'maxSMV',  fieldType: '',  },
 { name: 'rGOOSE',  fieldType: 'boolean',  },
 { name: 'rSV',  fieldType: 'boolean',  },
 { name: 'noIctBinding',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TServiceSettings ...
export class TServiceSettings extends NodeID {
	cbName?: TServiceSettingsNoDynEnum;
	datSet?: TServiceSettingsEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.cbName = opts['cbName'];
    this.datSet = opts['datSet'];

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
       { name: 'cbName',  fieldType: 'tServiceSettingsNoDynEnum',  },
 { name: 'datSet',  fieldType: 'tServiceSettingsEnum',  },

    ]
  }
}

// ComplexType 
//  TReportSettings ...
export class TReportSettings extends TServiceSettings {
	rptID?: TServiceSettingsEnum;
	optFields?: TServiceSettingsEnum;
	bufTime?: TServiceSettingsEnum;
	trgOps?: TServiceSettingsEnum;
	intgPd?: TServiceSettingsEnum;
	resvTms?: boolean;
	owner?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.rptID = opts['rptID'];
    this.optFields = opts['optFields'];
    this.bufTime = opts['bufTime'];
    this.trgOps = opts['trgOps'];
    this.intgPd = opts['intgPd'];
    this.resvTms = opts['resvTms'];
    this.owner = opts['owner'];

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
       { name: 'rptID',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'optFields',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'bufTime',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'trgOps',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'intgPd',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'resvTms',  fieldType: 'boolean',  },
 { name: 'owner',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TLogSettings ...
export class TLogSettings extends TServiceSettings {
	logEna?: TServiceSettingsEnum;
	trgOps?: TServiceSettingsEnum;
	intgPd?: TServiceSettingsEnum;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.logEna = opts['logEna'];
    this.trgOps = opts['trgOps'];
    this.intgPd = opts['intgPd'];

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
       { name: 'logEna',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'trgOps',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'intgPd',  fieldType: 'tServiceSettingsEnum',  },

    ]
  }
}

// ComplexType 
//  TGSESettings ...
export class TGSESettings extends TServiceSettings {
	appID?: TServiceSettingsEnum;
	dataLabel?: TServiceSettingsEnum;
	kdaParticipant?: boolean;
	McSecurity?: TMcSecurity;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.appID = opts['appID'];
    this.dataLabel = opts['dataLabel'];
    this.kdaParticipant = opts['kdaParticipant'];

    // Elements
     this.McSecurity = new TMcSecurity(opts['McSecurity']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "McSecurity": { construct: TMcSecurity,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'appID',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'dataLabel',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'kdaParticipant',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TSMVSettings ...
export class TSMVSettings extends TServiceSettings {
	svID?: TServiceSettingsEnum;
	optFields?: TServiceSettingsEnum;
	smpRate?: TServiceSettingsEnum;
	samplesPerSec?: boolean;
	pdcTimeStamp?: boolean;
	synchSrcId?: boolean;
	nofASDU?: TServiceSettingsNoDynEnum;
	kdaParticipant?: boolean;
	SmpRate: Array<Number>;
	SamplesPerSec: Array<Number>;
	SecPerSamples: Array<Number>;
	McSecurity?: TMcSecurity;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.svID = opts['svID'];
    this.optFields = opts['optFields'];
    this.smpRate = opts['smpRate'];
    this.samplesPerSec = opts['samplesPerSec'];
    this.pdcTimeStamp = opts['pdcTimeStamp'];
    this.synchSrcId = opts['synchSrcId'];
    this.nofASDU = opts['nofASDU'];
    this.kdaParticipant = opts['kdaParticipant'];

    // Elements
     this.SmpRate = opts['SmpRate']?.map((val: any) => new Number(val)); 
 this.SamplesPerSec = opts['SamplesPerSec']?.map((val: any) => new Number(val)); 
 this.SecPerSamples = opts['SecPerSamples']?.map((val: any) => new Number(val)); 
 this.McSecurity = new TMcSecurity(opts['McSecurity']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SmpRate": { construct: Number, plural: true },
"SamplesPerSec": { construct: Number, plural: true },
"SecPerSamples": { construct: Number, plural: true },
"McSecurity": { construct: TMcSecurity,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'svID',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'optFields',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'smpRate',  fieldType: 'tServiceSettingsEnum',  },
 { name: 'samplesPerSec',  fieldType: 'boolean',  },
 { name: 'pdcTimeStamp',  fieldType: 'boolean',  },
 { name: 'synchSrcId',  fieldType: 'boolean',  },
 { name: 'nofASDU',  fieldType: 'tServiceSettingsNoDynEnum',  },
 { name: 'kdaParticipant',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TConfLNs ...
export class TConfLNs extends NodeID {
	fixPrefix?: boolean;
	fixLnInst?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.fixPrefix = opts['fixPrefix'];
    this.fixLnInst = opts['fixLnInst'];

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
       { name: 'fixPrefix',  fieldType: 'boolean',  },
 { name: 'fixLnInst',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TValueHandling ...
export class TValueHandling extends NodeID {
	setToRO?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.setToRO = opts['setToRO'];

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
       { name: 'setToRO',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TFileHandling ...
export class TFileHandling extends TServiceYesNo {
	mms?: boolean;
	ftp?: boolean;
	ftps?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.mms = opts['mms'];
    this.ftp = opts['ftp'];
    this.ftps = opts['ftps'];

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
       { name: 'mms',  fieldType: 'boolean',  },
 { name: 'ftp',  fieldType: 'boolean',  },
 { name: 'ftps',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TGOOSEcapabilities ...
export class TGOOSEcapabilities extends TServiceWithMax {
	fixedOffs?: boolean;
	goose?: boolean;
	rGOOSE?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.fixedOffs = opts['fixedOffs'];
    this.goose = opts['goose'];
    this.rGOOSE = opts['rGOOSE'];

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
       { name: 'fixedOffs',  fieldType: 'boolean',  },
 { name: 'goose',  fieldType: 'boolean',  },
 { name: 'rGOOSE',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TRedProt ...
export class TRedProt extends NodeID {
	hsr?: boolean;
	prp?: boolean;
	rstp?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.hsr = opts['hsr'];
    this.prp = opts['prp'];
    this.rstp = opts['rstp'];

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
       { name: 'hsr',  fieldType: 'boolean',  },
 { name: 'prp',  fieldType: 'boolean',  },
 { name: 'rstp',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TTimeSyncProt ...
export class TTimeSyncProt extends TServiceYesNo {
	sntp?: boolean;
	iec61850_9_3?: boolean;
	c37_238?: boolean;
	other?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.sntp = opts['sntp'];
    this.iec61850_9_3 = opts['iec61850_9_3'];
    this.c37_238 = opts['c37_238'];
    this.other = opts['other'];

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
       { name: 'sntp',  fieldType: 'boolean',  },
 { name: 'iec61850_9_3',  fieldType: 'boolean',  },
 { name: 'c37_238',  fieldType: 'boolean',  },
 { name: 'other',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TSMVsc ...
export class TSMVsc extends TServiceWithMax {
	delivery?: TSMVDeliveryEnum;
	deliveryConf?: boolean;
	sv?: boolean;
	rSV?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.delivery = opts['delivery'];
    this.deliveryConf = opts['deliveryConf'];
    this.sv = opts['sv'];
    this.rSV = opts['rSV'];

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
       { name: 'delivery',  fieldType: 'tSMVDeliveryEnum',  },
 { name: 'deliveryConf',  fieldType: 'boolean',  },
 { name: 'sv',  fieldType: 'boolean',  },
 { name: 'rSV',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TSupSubscription ...
export class TSupSubscription extends NodeID {
	maxGo!: Number;
	maxSv!: Number;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.maxGo = opts['maxGo'];
    this.maxSv = opts['maxSv'];

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
       { name: 'maxGo', required: true, fieldType: 'number',  },
 { name: 'maxSv', required: true, fieldType: 'number',  },

    ]
  }
}

// ComplexType 
//  TCommProt ...
export class TCommProt extends TServiceYesNo {
	ipv6?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.ipv6 = opts['ipv6'];

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
       { name: 'ipv6',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TMcSecurity ...
export class TMcSecurity extends NodeID {
	signature?: boolean;
	encryption?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.signature = opts['signature'];
    this.encryption = opts['encryption'];

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
       { name: 'signature',  fieldType: 'boolean',  },
 { name: 'encryption',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TKDC ...
export class TKDC extends NodeID {
	iedName!: TIEDName;
	apName!: TAccessPointName;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.iedName = opts['iedName'];
    this.apName = opts['apName'];

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
       { name: 'iedName', required: true, fieldType: 'tIEDName',  },
 { name: 'apName', required: true, fieldType: 'tAccessPointName',  },

    ]
  }
}

// ComplexType 
//  SGEdit ...
export class SGEdit extends TServiceYesNo {
	resvTms?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.resvTms = opts['resvTms'];

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
       { name: 'resvTms',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  ConfSG ...
export class ConfSG extends TServiceYesNo {
	resvTms?: boolean;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
      this.resvTms = opts['resvTms'];

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
       { name: 'resvTms',  fieldType: 'boolean',  },

    ]
  }
}

// ComplexType 
//  TSettingGroups ...
export class TSettingGroups extends NodeID {
	SGEdit?: SGEdit;
	ConfSG?: ConfSG;

  constructor(...args: any[]) {
    super(...args);
    const opts = args[0];
    if (opts) {
    
    // Attributes
  
    // Elements
     this.SGEdit = new SGEdit(opts['SGEdit']); 
 this.ConfSG = new ConfSG(opts['ConfSG']); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "SGEdit": { construct: SGEdit,  },
"ConfSG": { construct: ConfSG,  },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
      
    ]
  }
}

// ComplexType 
//  LN0 ...
export class LN0 extends TLN0 {

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
