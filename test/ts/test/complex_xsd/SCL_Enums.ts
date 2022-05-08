import { UnsignedInt,TRestrName1stL } from "./BaseIndex"


// Simple type
// TPredefinedPTypeEnum ...
export enum TPredefinedPTypeEnum {
	"IP" = 'IP',
	"IP-SUBNET" = 'IP-SUBNET',
	"IP-GATEWAY" = 'IP-GATEWAY',
	"OSI-NSAP" = 'OSI-NSAP',
	"OSI-TSEL" = 'OSI-TSEL',
	"OSI-SSEL" = 'OSI-SSEL',
	"OSI-PSEL" = 'OSI-PSEL',
	"OSI-AP-Title" = 'OSI-AP-Title',
	"OSI-AP-Invoke" = 'OSI-AP-Invoke',
	"OSI-AE-Qualifier" = 'OSI-AE-Qualifier',
	"OSI-AE-Invoke" = 'OSI-AE-Invoke',
	"MAC-Address" = 'MAC-Address',
	"APPID" = 'APPID',
	"VLAN-PRIORITY" = 'VLAN-PRIORITY',
	"VLAN-ID" = 'VLAN-ID',
	"SNTP-Port" = 'SNTP-Port',
	"MMS-Port" = 'MMS-Port',
	"DNSName" = 'DNSName',
	"IPv6FlowLabel" = 'IPv6FlowLabel',
	"IPv6ClassOfTraffic" = 'IPv6ClassOfTraffic',
	"C37-118-IP-Port" = 'C37-118-IP-Port',
	"IP-UDP-PORT" = 'IP-UDP-PORT',
	"IP-TCP-PORT" = 'IP-TCP-PORT',
	"IPv6" = 'IPv6',
	"IPv6-SUBNET" = 'IPv6-SUBNET',
	"IPv6-GATEWAY" = 'IPv6-GATEWAY',
	"IPv6-IGMPv3Src" = 'IPv6-IGMPv3Src',
	"IP-IGMPv3Src" = 'IP-IGMPv3Src',
	"IP-ClassOfTraffic" = 'IP-ClassOfTraffic',
}

// Simple type
// TExtensionPTypeEnum ...
export type TExtensionPTypeEnum = string;

// Union type
// TPTypeEnum ...
export type TPTypeEnum =
	|	TPredefinedPTypeEnum
	|	TExtensionPTypeEnum

// Simple type
// TPredefinedPTypePhysConnEnum ...
export enum TPredefinedPTypePhysConnEnum {
	"Type" = 'Type',
	"Plug" = 'Plug',
	"Cable" = 'Cable',
	"Port" = 'Port',
}

// Union type
// TPTypePhysConnEnum ...
export type TPTypePhysConnEnum =
	|	TPredefinedPTypePhysConnEnum
	|	TExtensionPTypeEnum

// Simple type
// TPredefinedAttributeNameEnum ...
export enum TPredefinedAttributeNameEnum {
	"T" = 'T',
	"Test" = 'Test',
	"Check" = 'Check',
	"SIUnit" = 'SIUnit',
	"Oper" = 'Oper',
	"SBO" = 'SBO',
	"SBOw" = 'SBOw',
	"Cancel" = 'Cancel',
	"Addr" = 'Addr',
	"PRIORITY" = 'PRIORITY',
	"VID" = 'VID',
	"APPID" = 'APPID',
	"TransportInUse" = 'TransportInUse',
	"IPClassOfTraffic" = 'IPClassOfTraffic',
	"IPv6FlowLabel" = 'IPv6FlowLabel',
	"IPAddressLength" = 'IPAddressLength',
	"IPAddress" = 'IPAddress',
}

// Simple type
// TExtensionAttributeNameEnum ...
export type TExtensionAttributeNameEnum = string;

// Union type
// TAttributeNameEnum ...
export type TAttributeNameEnum =
	|	TPredefinedAttributeNameEnum
	|	TExtensionAttributeNameEnum

// Simple type
// TPredefinedCommonConductingEquipmentEnum ...
export enum TPredefinedCommonConductingEquipmentEnum {
	"CBR" = 'CBR',
	"DIS" = 'DIS',
	"VTR" = 'VTR',
	"CTR" = 'CTR',
	"GEN" = 'GEN',
	"CAP" = 'CAP',
	"REA" = 'REA',
	"CON" = 'CON',
	"MOT" = 'MOT',
	"EFN" = 'EFN',
	"PSH" = 'PSH',
	"BAT" = 'BAT',
	"BSH" = 'BSH',
	"CAB" = 'CAB',
	"GIL" = 'GIL',
	"LIN" = 'LIN',
	"RES" = 'RES',
	"RRC" = 'RRC',
	"SAR" = 'SAR',
	"TCF" = 'TCF',
	"TCR" = 'TCR',
	"IFL" = 'IFL',
	"FAN" = 'FAN',
	"SCR" = 'SCR',
	"SMC" = 'SMC',
	"PMP" = 'PMP',
}

// Simple type
// TExtensionEquipmentEnum ...
export type TExtensionEquipmentEnum = string;

// Union type
// TCommonConductingEquipmentEnum ...
export type TCommonConductingEquipmentEnum =
	|	TPredefinedCommonConductingEquipmentEnum
	|	TExtensionEquipmentEnum

// Simple type
// TPowerTransformerEnum ...
export enum TPowerTransformerEnum {
	"PTR" = 'PTR',
}

// Simple type
// TTransformerWindingEnum ...
export enum TTransformerWindingEnum {
	"PTW" = 'PTW',
}

// Simple type
// TPredefinedGeneralEquipmentEnum ...
export enum TPredefinedGeneralEquipmentEnum {
	"AXN" = 'AXN',
	"BAT" = 'BAT',
	"MOT" = 'MOT',
	"FAN" = 'FAN',
	"FIL" = 'FIL',
	"PMP" = 'PMP',
	"TNK" = 'TNK',
	"VLV" = 'VLV',
}

// Simple type
// TExtensionGeneralEquipmentEnum ...
export type TExtensionGeneralEquipmentEnum = string;

// Union type
// TGeneralEquipmentEnum ...
export type TGeneralEquipmentEnum =
	|	TPredefinedGeneralEquipmentEnum
	|	TExtensionGeneralEquipmentEnum

// Simple type
// TServiceSettingsNoDynEnum ...
export enum TServiceSettingsNoDynEnum {
	"Conf" = 'Conf',
	"Fix" = 'Fix',
}

// Simple type
// TServiceSettingsEnum ...
export enum TServiceSettingsEnum {
	"Dyn" = 'Dyn',
	"Conf" = 'Conf',
	"Fix" = 'Fix',
}

// Simple type
// TRedProtEnum ...
export enum TRedProtEnum {
	"none" = 'none',
	"hsr" = 'hsr',
	"prp" = 'prp',
	"rstp" = 'rstp',
}

// Simple type
// TSMVDeliveryEnum ...
export enum TSMVDeliveryEnum {
	"unicast" = 'unicast',
	"multicast" = 'multicast',
	"both" = 'both',
}

// Simple type
// TPhaseEnum ...
export enum TPhaseEnum {
	"A" = 'A',
	"B" = 'B',
	"C" = 'C',
	"N" = 'N',
	"all" = 'all',
	"none" = 'none',
	"AB" = 'AB',
	"BC" = 'BC',
	"CA" = 'CA',
}

// Simple type
// TAuthenticationEnum ...
export enum TAuthenticationEnum {
	"none" = 'none',
	"password" = 'password',
	"weak" = 'weak',
	"strong" = 'strong',
	"certificate" = 'certificate',
}

// Simple type
// TAssociationKindEnum ...
export enum TAssociationKindEnum {
	"pre-established" = 'pre-established',
	"predefined" = 'predefined',
}

// Simple type
// TLPHDEnum ...
export enum TLPHDEnum {
	"LPHD" = 'LPHD',
}

// Simple type
// TLLN0Enum ...
export enum TLLN0Enum {
	"LLN0" = 'LLN0',
}

// Simple type
// TSystemLNGroupEnum ...
export enum TSystemLNGroupEnum {
	"LLN0" = 'LLN0',
	"LPHD" = 'LPHD',
	"LCCH" = 'LCCH',
	"LGOS" = 'LGOS',
	"LSVS" = 'LSVS',
	"LTIM" = 'LTIM',
	"LTMS" = 'LTMS',
	"LTRK" = 'LTRK',
}

// Simple type
// TDomainLNGroupAEnum ...
export enum TDomainLNGroupAEnum {
	"ANCR" = 'ANCR',
	"ARCO" = 'ARCO',
	"ARIS" = 'ARIS',
	"ATCC" = 'ATCC',
	"AVCO" = 'AVCO',
}

// Simple type
// TDomainLNGroupCEnum ...
export enum TDomainLNGroupCEnum {
	"CALH" = 'CALH',
	"CCGR" = 'CCGR',
	"CILO" = 'CILO',
	"CPOW" = 'CPOW',
	"CSWI" = 'CSWI',
	"CSYN" = 'CSYN',
}

// Simple type
// TDomainLNGroupFEnum ...
export enum TDomainLNGroupFEnum {
	"FCNT" = 'FCNT',
	"FCSD" = 'FCSD',
	"FFIL" = 'FFIL',
	"FLIM" = 'FLIM',
	"FPID" = 'FPID',
	"FRMP" = 'FRMP',
	"FSPT" = 'FSPT',
	"FXOT" = 'FXOT',
	"FXUT" = 'FXUT',
}

// Simple type
// TDomainLNGroupGEnum ...
export enum TDomainLNGroupGEnum {
	"GAPC" = 'GAPC',
	"GGIO" = 'GGIO',
	"GLOG" = 'GLOG',
	"GSAL" = 'GSAL',
}

// Simple type
// TDomainLNGroupIEnum ...
export enum TDomainLNGroupIEnum {
	"IARC" = 'IARC',
	"IHMI" = 'IHMI',
	"ISAF" = 'ISAF',
	"ITCI" = 'ITCI',
	"ITMI" = 'ITMI',
	"ITPC" = 'ITPC',
}

// Simple type
// TDomainLNGroupKEnum ...
export enum TDomainLNGroupKEnum {
	"KFAN" = 'KFAN',
	"KFIL" = 'KFIL',
	"KPMP" = 'KPMP',
	"KTNK" = 'KTNK',
	"KVLV" = 'KVLV',
}

// Simple type
// TDomainLNGroupMEnum ...
export enum TDomainLNGroupMEnum {
	"MDIF" = 'MDIF',
	"MENV" = 'MENV',
	"MFLK" = 'MFLK',
	"MHAI" = 'MHAI',
	"MHAN" = 'MHAN',
	"MHYD" = 'MHYD',
	"MMDC" = 'MMDC',
	"MMET" = 'MMET',
	"MMTN" = 'MMTN',
	"MMTR" = 'MMTR',
	"MMXN" = 'MMXN',
	"MMXU" = 'MMXU',
	"MSQI" = 'MSQI',
	"MSTA" = 'MSTA',
}

// Simple type
// TDomainLNGroupPEnum ...
export enum TDomainLNGroupPEnum {
	"PDIF" = 'PDIF',
	"PDIR" = 'PDIR',
	"PDIS" = 'PDIS',
	"PDOP" = 'PDOP',
	"PDUP" = 'PDUP',
	"PFRC" = 'PFRC',
	"PHAR" = 'PHAR',
	"PHIZ" = 'PHIZ',
	"PIOC" = 'PIOC',
	"PMRI" = 'PMRI',
	"PMSS" = 'PMSS',
	"POPF" = 'POPF',
	"PPAM" = 'PPAM',
	"PRTR" = 'PRTR',
	"PSCH" = 'PSCH',
	"PSDE" = 'PSDE',
	"PTEF" = 'PTEF',
	"PTHF" = 'PTHF',
	"PTOC" = 'PTOC',
	"PTOF" = 'PTOF',
	"PTOV" = 'PTOV',
	"PTRC" = 'PTRC',
	"PTTR" = 'PTTR',
	"PTUC" = 'PTUC',
	"PTUF" = 'PTUF',
	"PTUV" = 'PTUV',
	"PUPF" = 'PUPF',
	"PVOC" = 'PVOC',
	"PVPH" = 'PVPH',
	"PZSU" = 'PZSU',
}

// Simple type
// TDomainLNGroupQEnum ...
export enum TDomainLNGroupQEnum {
	"QFVR" = 'QFVR',
	"QITR" = 'QITR',
	"QIUB" = 'QIUB',
	"QVTR" = 'QVTR',
	"QVUB" = 'QVUB',
	"QVVR" = 'QVVR',
}

// Simple type
// TDomainLNGroupREnum ...
export enum TDomainLNGroupREnum {
	"RADR" = 'RADR',
	"RBDR" = 'RBDR',
	"RBRF" = 'RBRF',
	"RDIR" = 'RDIR',
	"RDRE" = 'RDRE',
	"RDRS" = 'RDRS',
	"RFLO" = 'RFLO',
	"RMXU" = 'RMXU',
	"RPSB" = 'RPSB',
	"RREC" = 'RREC',
	"RSYN" = 'RSYN',
}

// Simple type
// TDomainLNGroupSEnum ...
export enum TDomainLNGroupSEnum {
	"SARC" = 'SARC',
	"SCBR" = 'SCBR',
	"SIMG" = 'SIMG',
	"SIML" = 'SIML',
	"SLTC" = 'SLTC',
	"SOPM" = 'SOPM',
	"SPDC" = 'SPDC',
	"SPTR" = 'SPTR',
	"SSWI" = 'SSWI',
	"STMP" = 'STMP',
	"SVBR" = 'SVBR',
}

// Simple type
// TDomainLNGroupTEnum ...
export enum TDomainLNGroupTEnum {
	"TANG" = 'TANG',
	"TAXD" = 'TAXD',
	"TCTR" = 'TCTR',
	"TDST" = 'TDST',
	"TFLW" = 'TFLW',
	"TFRQ" = 'TFRQ',
	"TGSN" = 'TGSN',
	"THUM" = 'THUM',
	"TLVL" = 'TLVL',
	"TMGF" = 'TMGF',
	"TMVM" = 'TMVM',
	"TPOS" = 'TPOS',
	"TPRS" = 'TPRS',
	"TRTN" = 'TRTN',
	"TSND" = 'TSND',
	"TTMP" = 'TTMP',
	"TTNS" = 'TTNS',
	"TVBR" = 'TVBR',
	"TVTR" = 'TVTR',
	"TWPH" = 'TWPH',
}

// Simple type
// TDomainLNGroupXEnum ...
export enum TDomainLNGroupXEnum {
	"XCBR" = 'XCBR',
	"XSWI" = 'XSWI',
}

// Simple type
// TDomainLNGroupYEnum ...
export enum TDomainLNGroupYEnum {
	"YEFN" = 'YEFN',
	"YLTC" = 'YLTC',
	"YPSH" = 'YPSH',
	"YPTR" = 'YPTR',
}

// Simple type
// TDomainLNGroupZEnum ...
export enum TDomainLNGroupZEnum {
	"ZAXN" = 'ZAXN',
	"ZBAT" = 'ZBAT',
	"ZBSH" = 'ZBSH',
	"ZCAB" = 'ZCAB',
	"ZCAP" = 'ZCAP',
	"ZCON" = 'ZCON',
	"ZGEN" = 'ZGEN',
	"ZGIL" = 'ZGIL',
	"ZLIN" = 'ZLIN',
	"ZMOT" = 'ZMOT',
	"ZREA" = 'ZREA',
	"ZRES" = 'ZRES',
	"ZRRC" = 'ZRRC',
	"ZSAR" = 'ZSAR',
	"ZSCR" = 'ZSCR',
	"ZSMC" = 'ZSMC',
	"ZTCF" = 'ZTCF',
	"ZTCR" = 'ZTCR',
}

// Union type
// TDomainLNEnum ...
export type TDomainLNEnum =
	|	TDomainLNGroupTEnum
	|	TDomainLNGroupXEnum
	|	TDomainLNGroupCEnum
	|	TDomainLNGroupIEnum
	|	TDomainLNGroupSEnum
	|	TDomainLNGroupZEnum
	|	TDomainLNGroupAEnum
	|	TDomainLNGroupPEnum
	|	TDomainLNGroupYEnum
	|	TDomainLNGroupMEnum
	|	TDomainLNGroupQEnum
	|	TDomainLNGroupREnum
	|	TDomainLNGroupFEnum
	|	TDomainLNGroupGEnum
	|	TDomainLNGroupKEnum

// Union type
// TPredefinedLNClassEnum ...
export type TPredefinedLNClassEnum =
	|	TSystemLNGroupEnum
	|	TDomainLNEnum

// Simple type
// TExtensionLNClassEnum ...
export type TExtensionLNClassEnum = string;

// Union type
// TLNClassEnum ...
export type TLNClassEnum =
	|	TExtensionLNClassEnum
	|	TPredefinedLNClassEnum

// Simple type
// TPredefinedCDCEnum ...
export enum TPredefinedCDCEnum {
	"SPS" = 'SPS',
	"DPS" = 'DPS',
	"INS" = 'INS',
	"ENS" = 'ENS',
	"ACT" = 'ACT',
	"ACD" = 'ACD',
	"SEC" = 'SEC',
	"BCR" = 'BCR',
	"HST" = 'HST',
	"VSS" = 'VSS',
	"MV" = 'MV',
	"CMV" = 'CMV',
	"SAV" = 'SAV',
	"WYE" = 'WYE',
	"DEL" = 'DEL',
	"SEQ" = 'SEQ',
	"HMV" = 'HMV',
	"HWYE" = 'HWYE',
	"HDEL" = 'HDEL',
	"SPC" = 'SPC',
	"DPC" = 'DPC',
	"INC" = 'INC',
	"ENC" = 'ENC',
	"BSC" = 'BSC',
	"ISC" = 'ISC',
	"APC" = 'APC',
	"BAC" = 'BAC',
	"SPG" = 'SPG',
	"ING" = 'ING',
	"ENG" = 'ENG',
	"ORG" = 'ORG',
	"TSG" = 'TSG',
	"CUG" = 'CUG',
	"VSG" = 'VSG',
	"ASG" = 'ASG',
	"CURVE" = 'CURVE',
	"CSG" = 'CSG',
	"DPL" = 'DPL',
	"LPL" = 'LPL',
	"CSD" = 'CSD',
	"CST" = 'CST',
	"BTS" = 'BTS',
	"UTS" = 'UTS',
	"LTS" = 'LTS',
	"GTS" = 'GTS',
	"MTS" = 'MTS',
	"NTS" = 'NTS',
	"STS" = 'STS',
	"CTS" = 'CTS',
	"OTS" = 'OTS',
	"VSD" = 'VSD',
	"ORS" = 'ORS',
	"TCS" = 'TCS',
}

// Simple type
// TExtensionCDCEnum ...
export type TExtensionCDCEnum = string;

// Simple type
// TCDCEnum ...
export type TCDCEnum = string;

// Simple type
// TFCEnum ...
export enum TFCEnum {
	"ST" = 'ST',
	"MX" = 'MX',
	"CO" = 'CO',
	"SP" = 'SP',
	"SG" = 'SG',
	"SE" = 'SE',
	"SV" = 'SV',
	"CF" = 'CF',
	"DC" = 'DC',
	"EX" = 'EX',
	"SR" = 'SR',
	"BL" = 'BL',
	"OR" = 'OR',
}

// Simple type
// TPredefinedBasicTypeEnum ...
export enum TPredefinedBasicTypeEnum {
	"BOOLEAN" = 'BOOLEAN',
	"INT8" = 'INT8',
	"INT16" = 'INT16',
	"INT24" = 'INT24',
	"INT32" = 'INT32',
	"INT64" = 'INT64',
	"INT128" = 'INT128',
	"INT8U" = 'INT8U',
	"INT16U" = 'INT16U',
	"INT24U" = 'INT24U',
	"INT32U" = 'INT32U',
	"FLOAT32" = 'FLOAT32',
	"FLOAT64" = 'FLOAT64',
	"Enum" = 'Enum',
	"Dbpos" = 'Dbpos',
	"Tcmd" = 'Tcmd',
	"Quality" = 'Quality',
	"Timestamp" = 'Timestamp',
	"VisString32" = 'VisString32',
	"VisString64" = 'VisString64',
	"VisString65" = 'VisString65',
	"VisString129" = 'VisString129',
	"VisString255" = 'VisString255',
	"Octet64" = 'Octet64',
	"Unicode255" = 'Unicode255',
	"Struct" = 'Struct',
	"EntryTime" = 'EntryTime',
	"Check" = 'Check',
	"ObjRef" = 'ObjRef',
	"Currency" = 'Currency',
	"PhyComAddr" = 'PhyComAddr',
	"TrgOps" = 'TrgOps',
	"OptFlds" = 'OptFlds',
	"SvOptFlds" = 'SvOptFlds',
	"LogOptFlds" = 'LogOptFlds',
	"EntryID" = 'EntryID',
	"Octet6" = 'Octet6',
	"Octet16" = 'Octet16',
}

// Simple type
// TBasicTypeEnum ...
export type TBasicTypeEnum = string;

// Simple type
// TValKindEnum ...
export enum TValKindEnum {
	"Spec" = 'Spec',
	"Conf" = 'Conf',
	"RO" = 'RO',
	"Set" = 'Set',
}

// Simple type
// TGSEControlTypeEnum ...
export enum TGSEControlTypeEnum {
	"GSSE" = 'GSSE',
	"GOOSE" = 'GOOSE',
}

// Simple type
// TUnitMultiplierEnum ...
export enum TUnitMultiplierEnum {
	"" = '',
	"m" = 'm',
	"k" = 'k',
	"M" = 'M',
	"mu" = 'mu',
	"y" = 'y',
	"z" = 'z',
	"a" = 'a',
	"f" = 'f',
	"p" = 'p',
	"n" = 'n',
	"c" = 'c',
	"d" = 'd',
	"da" = 'da',
	"h" = 'h',
	"G" = 'G',
	"T" = 'T',
	"P" = 'P',
	"E" = 'E',
	"Z" = 'Z',
	"Y" = 'Y',
}

// Simple type
// TRightEnum ...
export enum TRightEnum {
	"full" = 'full',
	"fix" = 'fix',
	"dataflow" = 'dataflow',
}

// Union type
// TSDOCount ...
export type TSDOCount =
	|	UnsignedInt
	|	TRestrName1stL

// Union type
// TDACount ...
export type TDACount =
	|	UnsignedInt
	|	TAttributeNameEnum

// Simple type
// TSmpMod ...
export enum TSmpMod {
	"SmpPerPeriod" = 'SmpPerPeriod',
	"SmpPerSec" = 'SmpPerSec',
	"SecPerSmp" = 'SecPerSmp',
}

// Simple type
// TPredefinedPhysConnTypeEnum ...
export enum TPredefinedPhysConnTypeEnum {
	"Connection" = 'Connection',
	"RedConn" = 'RedConn',
}

// Simple type
// TExtensionPhysConnTypeEnum ...
export type TExtensionPhysConnTypeEnum = string;

// Union type
// TPhysConnTypeEnum ...
export type TPhysConnTypeEnum =
	|	TPredefinedPhysConnTypeEnum
	|	TExtensionPhysConnTypeEnum

// Simple type
// TServiceType ...
export enum TServiceType {
	"Poll" = 'Poll',
	"Report" = 'Report',
	"GOOSE" = 'GOOSE',
	"SMV" = 'SMV',
}

// Simple type
// TPredefinedTypeOfSecurityEnum ...
export enum TPredefinedTypeOfSecurityEnum {
	"None" = 'None',
	"Signature" = 'Signature',
	"SignatureAndEncryption" = 'SignatureAndEncryption',
}
