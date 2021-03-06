import { VerifiableTransaction } from './VerifiableTransaction';
/**
 * @module transactions/MultisigModificationTransaction
 */
export default class MultisigModificationTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    minRemovalDelta: any;
    minApprovalDelta: any;
    modifications: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addMinRemovalDelta(minRemovalDelta: any): this;
    addMinApprovalDelta(minApprovalDelta: any): this;
    addModifications(modifications: any): this;
    build(): MultisigModificationTransaction;
}
