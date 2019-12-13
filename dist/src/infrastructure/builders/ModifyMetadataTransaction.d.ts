import { VerifiableTransaction } from './VerifiableTransaction';
export default class ModifyMetadataTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    fee: any;
    version: any;
    type: any;
    deadline: any;
    metadataType: any;
    metadataId: any;
    modifications: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(fee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addMetadataType(metadataType: any): this;
    addMetadataId(metadataId: any): this;
    addModifications(modifications: any): this;
    build(): ModifyMetadataTransaction;
}
