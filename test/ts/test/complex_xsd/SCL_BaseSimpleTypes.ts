import {  } from "./BaseIndex"


// Simple type
// TConnectivityNodeReference ...
export type TConnectivityNodeReference = string;

// Simple type
// TAnyName ...
export type TAnyName = string;

// Simple type
// TName ...
export type TName = string;

// Simple type
// TID ...
export type TID = string;

// Simple type
// TAcsiName ...
export type TAcsiName = string;

// Simple type
// TRestrName1stU ...
export type TRestrName1stU = string;

// Simple type
// TRestrName1stL ...
export type TRestrName1stL = string;

// Simple type
// TPAddr ...
export type TPAddr = string;

// Simple type
// TSclVersion ...
export type TSclVersion = string;

// Simple type
// TSclRevision ...
export type TSclRevision = string;

// Simple type
// TSclRelease ...
export type TSclRelease = any;

// Simple type
// TEmpty ...
export type TEmpty = string;

// Simple type
// TIEDName ...
export type TIEDName = string;

// Simple type
// TIEDNameIsNone ...
export type TIEDNameIsNone = string;

// Union type
// TIEDNameOrNone ...
export type TIEDNameOrNone =
	|	TIEDNameIsNone
	|	TIEDName

// Simple type
// TOnlyRelativeIEDName ...
export type TOnlyRelativeIEDName = string;

// Union type
// TIEDNameOrRelative ...
export type TIEDNameOrRelative =
	|	TOnlyRelativeIEDName
	|	TIEDName

// Simple type
// TLDName ...
export type TLDName = string;

// Simple type
// TLDInst ...
export type TLDInst = string;

// Union type
// TLDInstOrEmpty ...
export type TLDInstOrEmpty =
	|	TLDInst
	|	TEmpty

// Simple type
// TPrefix ...
export type TPrefix = string;

// Simple type
// TLNInst ...
export type TLNInst = string;

// Union type
// TLNInstOrEmpty ...
export type TLNInstOrEmpty =
	|	TLNInst
	|	TEmpty

// Simple type
// TDataName ...
export type TDataName = string;

// Simple type
// TDataSetName ...
export type TDataSetName = string;

// Simple type
// TCBName ...
export type TCBName = string;

// Simple type
// TLogName ...
export type TLogName = string;

// Simple type
// TAccessPointName ...
export type TAccessPointName = string;

// Simple type
// TAssociationID ...
export type TAssociationID = string;

// Simple type
// TVisibleBasicLatin ...
export type TVisibleBasicLatin = string;

// Simple type
// TMessageID ...
export type TMessageID = string;

// Simple type
// TFullAttributeName ...
export type TFullAttributeName = string;

// Simple type
// TFullDOName ...
export type TFullDOName = string;

// Simple type
// TSubDataName ...
export type TSubDataName = string;

// Simple type
// TNamespaceName ...
export type TNamespaceName = string;

// Simple type
// TLineType ...
export type TLineType = string;

// Simple type
// TProcessType ...
export type TProcessType = string;

// Simple type
// TProcessName ...
export type TProcessName = string;

// Simple type
// TEnumStringValue ...
export type TEnumStringValue = string;
