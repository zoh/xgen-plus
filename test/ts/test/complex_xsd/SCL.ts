import { TSclRevision,TDataTypeTemplates,TLine,TBaseElement,TSclVersion,TSclRelease,THeader,TSubstation,TCommunication,TIED,TProcess } from "./BaseIndex"


// SCLElement ...
export type SCLElement = SCL;

// ComplexType 
//  SCL ...
export class SCL extends TBaseElement {
	version!: TSclVersion;
	revision!: TSclRevision;
	release!: TSclRelease;
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
    if (opts) {
    
    // Attributes
      this.version = opts['version'];
    this.revision = opts['revision'];
    this.release = opts['release'];

    // Elements
     this.Header = new THeader(opts['Header']); 
 this.Substation = opts['Substation']?.map((val: any) => new TSubstation(val)); 
 this.Communication = new TCommunication(opts['Communication']); 
 this.IED = opts['IED']?.map((val: any) => new TIED(val)); 
 this.DataTypeTemplates = new TDataTypeTemplates(opts['DataTypeTemplates']); 
 this.Line = opts['Line']?.map((val: any) => new TLine(val)); 
 this.Process = opts['Process']?.map((val: any) => new TProcess(val)); 

    }
  }

  Elements() {
    return {
      ...super.Elements(),
      //...
      "Header": { construct: THeader,  },
"Substation": { construct: TSubstation, plural: true },
"Communication": { construct: TCommunication,  },
"IED": { construct: TIED, plural: true },
"DataTypeTemplates": { construct: TDataTypeTemplates,  },
"Line": { construct: TLine, plural: true },
"Process": { construct: TProcess, plural: true },

    }
  }

  Attributes() {
    return [
      ...super.Attributes(),
       { name: 'version', required: true, fieldType: 'tSclVersion', fixed: '2007', },
 { name: 'revision', required: true, fieldType: 'tSclRevision', fixed: 'B', },
 { name: 'release', required: true, fieldType: 'tSclRelease', fixed: '4', },

    ]
  }
}
