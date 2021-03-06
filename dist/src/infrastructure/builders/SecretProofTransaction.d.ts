import { VerifiableTransaction } from './VerifiableTransaction';
export default class SecretProofTransaction extends VerifiableTransaction {
    constructor(bytes: any);
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    hashAlgorithm: any;
    secret: any;
    recipient: any;
    proof: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addHashAlgorithm(hashAlgorithm: any): this;
    addSecret(secret: any): this;
    addRecipient(recipient: any): this;
    addProof(proof: any): this;
    build(): SecretProofTransaction;
}
