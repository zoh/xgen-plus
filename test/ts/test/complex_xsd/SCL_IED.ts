import { TPrefix,TSMVDeliveryEnum,TGSEControlTypeEnum,TLNInstOrEmpty,TSclRevision,TUnNaming,TLDInst,TFullDOName,TValKindEnum,TCBName,TNaming,TAssociationKindEnum,TFCEnum,TMessageID,TSclRelease,TPredefinedTypeOfSecurityEnum,TAttributeNameEnum,Constructor,TRightEnum,TAssociationID,TSmpMod,AgDesc,TFullAttributeName,TDataName,TVal,TServiceSettingsNoDynEnum,TLNClassEnum,TIEDName,TAccessPointName,TSclVersion,NodeID,TDataSetName,TLogName,TName,TLNInst,TLDName,TIEDNameOrRelative,TAnyContentFromOtherNamespace,TServiceType,TServiceSettingsEnum } from "./BaseIndex"


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
  };
}
// AgLDRef ...
export function AgLDRef<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends AgDesc(Base) {
    iedName: TIEDName;
  ldInst: TLDInst;

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
    prefix?: TPrefix;
  lnClass: TLNClassEnum;
  lnInst: TLNInstOrEmpty;

  constructor(...args: any[]) {
    super(...args);
    if (args[0]?.hasOwnProperty("prefix")) this.prefix = args[0]['prefix'];
    if (args[0]?.hasOwnProperty("lnClass")) this.lnClass = args[0]['lnClass'];
    if (args[0]?.hasOwnProperty("lnInst")) this.lnInst = args[0]['lnInst'];

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
export type TRptEnabledMaxUnsignedInt = number;

// Simple type
// TSettingControlNumOfSGsUnsignedInt ...
export type TSettingControlNumOfSGsUnsignedInt = number;

// Simple type
// TSettingControlActSGUnsignedInt ...
export type TSettingControlActSGUnsignedInt = number;

// Simple type
// TServiceWithMaxNonZeroMaxUnsignedInt ...
export type TServiceWithMaxNonZeroMaxUnsignedInt = number;

// Simple type
// TServiceConfReportControlBufModeName ...
export enum TServiceConfReportControlBufModeName {
	"unbuffered" = 'unbuffered',
	"buffered" = 'buffered',
	"both" = 'both',
}

// Simple type
// TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt ...
export type TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt = number;

// Simple type
// TClientServicesMaxAttributesUnsignedInt ...
export type TClientServicesMaxAttributesUnsignedInt = number;

// Simple type
// TClientServicesMaxReportsUnsignedInt ...
export type TClientServicesMaxReportsUnsignedInt = number;

// Simple type
// TClientServicesMaxGOOSEUnsignedInt ...
export type TClientServicesMaxGOOSEUnsignedInt = number;

// Simple type
// TClientServicesMaxSMVUnsignedInt ...
export type TClientServicesMaxSMVUnsignedInt = number;

// IEDElement ...
export type IEDElement = TIED;

// LN0Element ...
export type LN0Element = LN0;

// LNElement ...
export type LNElement = TLN;

// ComplexType 
//  TIED ...
export class TIED extends TUnNaming {
	name: TIEDName;
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
        this.Services = opts['Services'];
    this.AccessPoint = opts['AccessPoint'];
    this.KDC = opts['KDC'];

  }}

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
    // Attributes
      this.nameLength = opts['nameLength'];

    // Elements
        this.DynAssociation = opts['DynAssociation'];
    this.SettingGroups = opts['SettingGroups'];
    this.GetDirectory = opts['GetDirectory'];
    this.GetDataObjectDefinition = opts['GetDataObjectDefinition'];
    this.DataObjectDirectory = opts['DataObjectDirectory'];
    this.GetDataSetValue = opts['GetDataSetValue'];
    this.SetDataSetValue = opts['SetDataSetValue'];
    this.DataSetDirectory = opts['DataSetDirectory'];
    this.ConfDataSet = opts['ConfDataSet'];
    this.DynDataSet = opts['DynDataSet'];
    this.ReadWrite = opts['ReadWrite'];
    this.TimerActivatedControl = opts['TimerActivatedControl'];
    this.ConfReportControl = opts['ConfReportControl'];
    this.GetCBValues = opts['GetCBValues'];
    this.ConfLogControl = opts['ConfLogControl'];
    this.ReportSettings = opts['ReportSettings'];
    this.LogSettings = opts['LogSettings'];
    this.GSESettings = opts['GSESettings'];
    this.SMVSettings = opts['SMVSettings'];
    this.GSEDir = opts['GSEDir'];
    this.GOOSE = opts['GOOSE'];
    this.GSSE = opts['GSSE'];
    this.SMVsc = opts['SMVsc'];
    this.FileHandling = opts['FileHandling'];
    this.ConfLNs = opts['ConfLNs'];
    this.ClientServices = opts['ClientServices'];
    this.ConfLdName = opts['ConfLdName'];
    this.SupSubscription = opts['SupSubscription'];
    this.ConfSigRef = opts['ConfSigRef'];
    this.ValueHandling = opts['ValueHandling'];
    this.RedProt = opts['RedProt'];
    this.TimeSyncProt = opts['TimeSyncProt'];
    this.CommProt = opts['CommProt'];

  }}

// ComplexType 
//  TAccessPoint ...
export class TAccessPoint extends TUnNaming {
	name: TAccessPointName;
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
    // Attributes
      this.name = opts['name'];
    this.router = opts['router'];
    this.clock = opts['clock'];
    this.kdc = opts['kdc'];

    // Elements
        this.Server = opts['Server'];
    this.LN = opts['LN'];
    this.ServerAt = opts['ServerAt'];
    this.Services = opts['Services'];
    this.GOOSESecurity = opts['GOOSESecurity'];
    this.SMVSecurity = opts['SMVSecurity'];

  }}

// ComplexType 
//  TCertificate ...
export class TCertificate extends TNaming {
	xferNumber?: number;
	serialNumber: TCertificateSerialNumberNormalizedString;
	Subject: TCert;
	IssuerName: TCert;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.xferNumber = opts['xferNumber'];
    this.serialNumber = opts['serialNumber'];

    // Elements
        this.Subject = opts['Subject'];
    this.IssuerName = opts['IssuerName'];

  }}

// ComplexType 
//  TCert ...
export class TCert extends NodeID {
	commonName: TCertCommonNameNormalizedString;
	idHierarchy: TCertIdHierarchyNormalizedString;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.commonName = opts['commonName'];
    this.idHierarchy = opts['idHierarchy'];

    // Elements
    
  }}

// ComplexType 
//  TServerAt ...
export class TServerAt extends TUnNaming {
	apName: TAccessPointName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.apName = opts['apName'];

    // Elements
    
  }}

// ComplexType 
//  Authentication ...
export class Authentication extends AgAuthentication(NodeID) {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TServer ...
export class TServer extends TUnNaming {
	timeout?: number;
	Authentication: Authentication;
	LDevice: Array<TLDevice>;
	Association?: Array<TAssociation>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.timeout = opts['timeout'];

    // Elements
        this.Authentication = opts['Authentication'];
    this.LDevice = opts['LDevice'];
    this.Association = opts['Association'];

  }}

// ComplexType 
//  TLDevice ...
export class TLDevice extends TUnNaming {
	inst: TLDInst;
	ldName?: TLDName;
	LN0: LN0;
	LN?: Array<TLN>;
	AccessControl?: TAccessControl;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.inst = opts['inst'];
    this.ldName = opts['ldName'];

    // Elements
        this.LN0 = opts['LN0'];
    this.LN = opts['LN'];
    this.AccessControl = opts['AccessControl'];

  }}

// ComplexType 
//  TAccessControl ...
export class TAccessControl extends TAnyContentFromOtherNamespace {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TAssociation ...
export class TAssociation extends AgLNRef(NodeID) {
	kind: TAssociationKindEnum;
	associationID?: TAssociationID;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.kind = opts['kind'];
    this.associationID = opts['associationID'];

    // Elements
    
  }}

// ComplexType 
//  TAnyLN ...
export class TAnyLN extends TUnNaming {
	lnType: TName;
	DataSet?: Array<TDataSet>;
	ReportControl?: Array<TReportControl>;
	LogControl?: Array<TLogControl>;
	DOI?: Array<TDOI>;
	Inputs?: TInputs;
	Log?: Array<TLog>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.lnType = opts['lnType'];

    // Elements
        this.DataSet = opts['DataSet'];
    this.ReportControl = opts['ReportControl'];
    this.LogControl = opts['LogControl'];
    this.DOI = opts['DOI'];
    this.Inputs = opts['Inputs'];
    this.Log = opts['Log'];

  }}

// ComplexType 
//  TLN ...
export class TLN extends TAnyLN {
	prefix?: TPrefix;
	lnClass: TLNClassEnum;
	inst: TLNInst;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.inst = opts['inst'];

    // Elements
    
  }}

// ComplexType 
//  TLN0 ...
export class TLN0 extends TAnyLN {
	lnClass: TLNClassEnum;
	inst: string;
	GSEControl?: Array<TGSEControl>;
	SampledValueControl?: Array<TSampledValueControl>;
	SettingControl?: TSettingControl;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.lnClass = opts['lnClass'];
    this.inst = opts['inst'];

    // Elements
        this.GSEControl = opts['GSEControl'];
    this.SampledValueControl = opts['SampledValueControl'];
    this.SettingControl = opts['SettingControl'];

  }}

// ComplexType 
//  TDataSet ...
export class TDataSet extends TUnNaming {
	name: TDataSetName;
	FCDA: Array<TFCDA>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];

    // Elements
        this.FCDA = opts['FCDA'];

  }}

// ComplexType 
//  TFCDA ...
export class TFCDA extends NodeID {
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;
	doName?: TFullDOName;
	daName?: TFullAttributeName;
	fc: TFCEnum;
	ix?: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
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
    
  }}

// ComplexType 
//  TControl ...
export class TControl extends TUnNaming {
	name: TCBName;
	datSet?: TDataSetName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.datSet = opts['datSet'];

    // Elements
    
  }}

// ComplexType 
//  TControlWithTriggerOpt ...
export class TControlWithTriggerOpt extends TControl {
	intgPd?: number;
	TrgOps?: TTrgOps;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.intgPd = opts['intgPd'];

    // Elements
        this.TrgOps = opts['TrgOps'];

  }}

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
    // Attributes
      this.dchg = opts['dchg'];
    this.qchg = opts['qchg'];
    this.dupd = opts['dupd'];
    this.period = opts['period'];
    this.gi = opts['gi'];

    // Elements
    
  }}

// ComplexType 
//  OptFields ...
export class OptFields extends AgOptFields(NodeID) {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TReportControl ...
export class TReportControl extends TControlWithTriggerOpt {
	rptID?: TMessageID;
	confRev: number;
	buffered?: boolean;
	bufTime?: number;
	indexed?: boolean;
	OptFields: OptFields;
	RptEnabled?: TRptEnabled;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.rptID = opts['rptID'];
    this.confRev = opts['confRev'];
    this.buffered = opts['buffered'];
    this.bufTime = opts['bufTime'];
    this.indexed = opts['indexed'];

    // Elements
        this.OptFields = opts['OptFields'];
    this.RptEnabled = opts['RptEnabled'];

  }}

// ComplexType 
//  TRptEnabled ...
export class TRptEnabled extends TUnNaming {
	max?: TRptEnabledMaxUnsignedInt;
	ClientLN?: Array<TClientLN>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.max = opts['max'];

    // Elements
        this.ClientLN = opts['ClientLN'];

  }}

// ComplexType 
//  TClientLN ...
export class TClientLN extends AgLNRef(NodeID) {
	apRef?: TAccessPointName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.apRef = opts['apRef'];

    // Elements
    
  }}

// ComplexType 
//  TLogControl ...
export class TLogControl extends TControlWithTriggerOpt {
	ldInst?: TLDInst;
	prefix?: TPrefix;
	lnClass?: TLNClassEnum;
	lnInst?: TLNInst;
	logName: TLogName;
	logEna?: boolean;
	reasonCode?: boolean;
	bufTime?: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
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
    
  }}

// ComplexType 
//  TInputs ...
export class TInputs extends TUnNaming {
	ExtRef: Array<TExtRef>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
        this.ExtRef = opts['ExtRef'];

  }}

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
    
  }}

// ComplexType 
//  TLog ...
export class TLog extends TUnNaming {
	name?: TLogName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];

    // Elements
    
  }}

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
    // Attributes
      this.apRef = opts['apRef'];
    this.ldInst = opts['ldInst'];
    this.prefix = opts['prefix'];
    this.lnClass = opts['lnClass'];
    this.lnInst = opts['lnInst'];

    // Elements
    
  }}

// ComplexType 
//  TControlWithIEDName ...
export class TControlWithIEDName extends TControl {
	confRev?: number;
	IEDName?: Array<IEDName>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.confRev = opts['confRev'];

    // Elements
        this.IEDName = opts['IEDName'];

  }}

// ComplexType 
//  TProtocol ...
export class TProtocol {
Content: string; 
	mustUnderstand: boolean;
  constructor(...args: any[]) {
    
      const opts = args[0];
    // Attributes
      this.mustUnderstand = opts['mustUnderstand'];

    // Elements
    
  }}

// ComplexType 
//  TGSEControl ...
export class TGSEControl extends TControlWithIEDName {
	type?: TGSEControlTypeEnum;
	appID: TMessageID;
	fixedOffs?: boolean;
	securityEnable?: string;
	Protocol?: TProtocol;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.type = opts['type'];
    this.appID = opts['appID'];
    this.fixedOffs = opts['fixedOffs'];
    this.securityEnable = opts['securityEnable'];

    // Elements
        this.Protocol = opts['Protocol'];

  }}

// ComplexType 
//  SmvOpts ...
export class SmvOpts extends AgSmvOpts(NodeID) {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TSampledValueControl ...
export class TSampledValueControl extends TControlWithIEDName {
	smvID: TMessageID;
	multicast?: boolean;
	smpRate: number;
	nofASDU: number;
	smpMod?: TSmpMod;
	securityEnable?: TPredefinedTypeOfSecurityEnum;
	SmvOpts: SmvOpts;
	Protocol?: TProtocol;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.smvID = opts['smvID'];
    this.multicast = opts['multicast'];
    this.smpRate = opts['smpRate'];
    this.nofASDU = opts['nofASDU'];
    this.smpMod = opts['smpMod'];
    this.securityEnable = opts['securityEnable'];

    // Elements
        this.SmvOpts = opts['SmvOpts'];
    this.Protocol = opts['Protocol'];

  }}

// ComplexType 
//  TSettingControl ...
export class TSettingControl extends TUnNaming {
	numOfSGs: TSettingControlNumOfSGsUnsignedInt;
	actSG?: TSettingControlActSGUnsignedInt;
	resvTms?: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.numOfSGs = opts['numOfSGs'];
    this.actSG = opts['actSG'];
    this.resvTms = opts['resvTms'];

    // Elements
    
  }}

// ComplexType 
//  TDOI ...
export class TDOI extends TUnNaming {
	name: TDataName;
	ix?: number;
	accessControl?: string;
	SDI?: Array<TSDI>;
	DAI?: Array<TDAI>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.ix = opts['ix'];
    this.accessControl = opts['accessControl'];

    // Elements
        this.SDI = opts['SDI'];
    this.DAI = opts['DAI'];

  }}

// ComplexType 
//  TSDI ...
export class TSDI extends TUnNaming {
	name: TAttributeNameEnum;
	ix?: number;
	sAddr?: string;
	SDI?: Array<TSDI>;
	DAI?: Array<TDAI>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.ix = opts['ix'];
    this.sAddr = opts['sAddr'];

    // Elements
        this.SDI = opts['SDI'];
    this.DAI = opts['DAI'];

  }}

// ComplexType 
//  TDAI ...
export class TDAI extends TUnNaming {
	name: TAttributeNameEnum;
	sAddr?: string;
	valKind?: TValKindEnum;
	ix?: number;
	valImport?: boolean;
	Val?: Array<TVal>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.name = opts['name'];
    this.sAddr = opts['sAddr'];
    this.valKind = opts['valKind'];
    this.ix = opts['ix'];
    this.valImport = opts['valImport'];

    // Elements
        this.Val = opts['Val'];

  }}

// ComplexType 
//  TServiceYesNo ...
export class TServiceYesNo extends NodeID {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}

// ComplexType 
//  TServiceWithOptionalMax ...
export class TServiceWithOptionalMax extends NodeID {
	max?: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.max = opts['max'];

    // Elements
    
  }}

// ComplexType 
//  TServiceWithMax ...
export class TServiceWithMax extends NodeID {
	max: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.max = opts['max'];

    // Elements
    
  }}

// ComplexType 
//  TServiceWithMaxNonZero ...
export class TServiceWithMaxNonZero extends NodeID {
	max: TServiceWithMaxNonZeroMaxUnsignedInt;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.max = opts['max'];

    // Elements
    
  }}

// ComplexType 
//  TServiceConfReportControl ...
export class TServiceConfReportControl extends TServiceWithMax {
	bufMode?: TServiceConfReportControlBufModeName;
	bufConf?: boolean;
	maxBuf?: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.bufMode = opts['bufMode'];
    this.bufConf = opts['bufConf'];
    this.maxBuf = opts['maxBuf'];

    // Elements
    
  }}

// ComplexType 
//  TServiceWithMaxAndMaxAttributes ...
export class TServiceWithMaxAndMaxAttributes extends TServiceWithMax {
	maxAttributes?: TServiceWithMaxAndMaxAttributesMaxAttributesUnsignedInt;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.maxAttributes = opts['maxAttributes'];

    // Elements
    
  }}

// ComplexType 
//  TServiceWithMaxAndModify ...
export class TServiceWithMaxAndModify extends TServiceWithMax {
	modify?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.modify = opts['modify'];

    // Elements
    
  }}

// ComplexType 
//  TServiceForConfDataSet ...
export class TServiceForConfDataSet extends TServiceWithMaxAndMaxAttributes {
	modify?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.modify = opts['modify'];

    // Elements
    
  }}

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
        this.TimeSyncProt = opts['TimeSyncProt'];
    this.McSecurity = opts['McSecurity'];

  }}

// ComplexType 
//  TServiceSettings ...
export class TServiceSettings extends NodeID {
	cbName?: TServiceSettingsNoDynEnum;
	datSet?: TServiceSettingsEnum;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.cbName = opts['cbName'];
    this.datSet = opts['datSet'];

    // Elements
    
  }}

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
    // Attributes
      this.rptID = opts['rptID'];
    this.optFields = opts['optFields'];
    this.bufTime = opts['bufTime'];
    this.trgOps = opts['trgOps'];
    this.intgPd = opts['intgPd'];
    this.resvTms = opts['resvTms'];
    this.owner = opts['owner'];

    // Elements
    
  }}

// ComplexType 
//  TLogSettings ...
export class TLogSettings extends TServiceSettings {
	logEna?: TServiceSettingsEnum;
	trgOps?: TServiceSettingsEnum;
	intgPd?: TServiceSettingsEnum;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.logEna = opts['logEna'];
    this.trgOps = opts['trgOps'];
    this.intgPd = opts['intgPd'];

    // Elements
    
  }}

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
    // Attributes
      this.appID = opts['appID'];
    this.dataLabel = opts['dataLabel'];
    this.kdaParticipant = opts['kdaParticipant'];

    // Elements
        this.McSecurity = opts['McSecurity'];

  }}

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
	SmpRate: number;
	SamplesPerSec: number;
	SecPerSamples: number;
	McSecurity?: TMcSecurity;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
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
        this.SmpRate = opts['SmpRate'];
    this.SamplesPerSec = opts['SamplesPerSec'];
    this.SecPerSamples = opts['SecPerSamples'];
    this.McSecurity = opts['McSecurity'];

  }}

// ComplexType 
//  TConfLNs ...
export class TConfLNs extends NodeID {
	fixPrefix?: boolean;
	fixLnInst?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.fixPrefix = opts['fixPrefix'];
    this.fixLnInst = opts['fixLnInst'];

    // Elements
    
  }}

// ComplexType 
//  TValueHandling ...
export class TValueHandling extends NodeID {
	setToRO?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.setToRO = opts['setToRO'];

    // Elements
    
  }}

// ComplexType 
//  TFileHandling ...
export class TFileHandling extends TServiceYesNo {
	mms?: boolean;
	ftp?: boolean;
	ftps?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.mms = opts['mms'];
    this.ftp = opts['ftp'];
    this.ftps = opts['ftps'];

    // Elements
    
  }}

// ComplexType 
//  TGOOSEcapabilities ...
export class TGOOSEcapabilities extends TServiceWithMax {
	fixedOffs?: boolean;
	goose?: boolean;
	rGOOSE?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.fixedOffs = opts['fixedOffs'];
    this.goose = opts['goose'];
    this.rGOOSE = opts['rGOOSE'];

    // Elements
    
  }}

// ComplexType 
//  TRedProt ...
export class TRedProt extends NodeID {
	hsr?: boolean;
	prp?: boolean;
	rstp?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.hsr = opts['hsr'];
    this.prp = opts['prp'];
    this.rstp = opts['rstp'];

    // Elements
    
  }}

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
    // Attributes
      this.sntp = opts['sntp'];
    this.iec61850_9_3 = opts['iec61850_9_3'];
    this.c37_238 = opts['c37_238'];
    this.other = opts['other'];

    // Elements
    
  }}

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
    // Attributes
      this.delivery = opts['delivery'];
    this.deliveryConf = opts['deliveryConf'];
    this.sv = opts['sv'];
    this.rSV = opts['rSV'];

    // Elements
    
  }}

// ComplexType 
//  TSupSubscription ...
export class TSupSubscription extends NodeID {
	maxGo: number;
	maxSv: number;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.maxGo = opts['maxGo'];
    this.maxSv = opts['maxSv'];

    // Elements
    
  }}

// ComplexType 
//  TCommProt ...
export class TCommProt extends TServiceYesNo {
	ipv6?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.ipv6 = opts['ipv6'];

    // Elements
    
  }}

// ComplexType 
//  TMcSecurity ...
export class TMcSecurity extends NodeID {
	signature?: boolean;
	encryption?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.signature = opts['signature'];
    this.encryption = opts['encryption'];

    // Elements
    
  }}

// ComplexType 
//  TKDC ...
export class TKDC extends NodeID {
	iedName: TIEDName;
	apName: TAccessPointName;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.iedName = opts['iedName'];
    this.apName = opts['apName'];

    // Elements
    
  }}

// ComplexType 
//  SGEdit ...
export class SGEdit extends TServiceYesNo {
	resvTms?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.resvTms = opts['resvTms'];

    // Elements
    
  }}

// ComplexType 
//  ConfSG ...
export class ConfSG extends TServiceYesNo {
	resvTms?: boolean;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.resvTms = opts['resvTms'];

    // Elements
    
  }}

// ComplexType 
//  TSettingGroups ...
export class TSettingGroups extends NodeID {
	SGEdit?: SGEdit;
	ConfSG?: ConfSG;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
        this.SGEdit = opts['SGEdit'];
    this.ConfSG = opts['ConfSG'];

  }}

// ComplexType 
//  LN0 ...
export class LN0 extends TLN0 {
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
  
    // Elements
    
  }}
