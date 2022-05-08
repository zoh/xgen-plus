import { TSclVersion,TBaseElement,TSclRevision,TSclRelease,THeader,TSubstation,TCommunication,TIED,TDataTypeTemplates,TLine,TProcess } from "./BaseIndex"


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
     this.Header = new THeader(opts['Header']); 
 this.Substation = opts['Substation']?.map(val => new TSubstation(val)); 
 this.Communication = new TCommunication(opts['Communication']); 
 this.IED = opts['IED']?.map(val => new TIED(val)); 
 this.DataTypeTemplates = new TDataTypeTemplates(opts['DataTypeTemplates']); 
 this.Line = opts['Line']?.map(val => new TLine(val)); 
 this.Process = opts['Process']?.map(val => new TProcess(val)); 

  }}
