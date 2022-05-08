import { TSubstation,TIED,TLine,TBaseElement,TSclRevision,THeader,TCommunication,TDataTypeTemplates,TProcess,TSclVersion,TSclRelease } from "./BaseIndex"


// SCLElement ...
export type SCLElement = SCL;

// ComplexType 
//  SCL ...
export class SCL extends TBaseElement {
	version: TSclVersion;
	revision: TSclRevision;
	release: TSclRelease;
	Header: THeader;
	Substation?: Array<TSubstation>;
	Communication?: TCommunication;
	IED?: Array<TIED>;
	DataTypeTemplates?: TDataTypeTemplates;
	Line?: Array<TLine>;
	Process?: Array<TProcess>;
  constructor(...args: any[]) {
    super(...args);
      const opts = args[0];
    // Attributes
      this.version = opts['version'];
    this.revision = opts['revision'];
    this.release = opts['release'];

    // Elements
        this.Header = opts['Header'];
    this.Substation = opts['Substation'];
    this.Communication = opts['Communication'];
    this.IED = opts['IED'];
    this.DataTypeTemplates = opts['DataTypeTemplates'];
    this.Line = opts['Line'];
    this.Process = opts['Process'];

  }}
