/**
 * @module transactions/AggregateTransaction
 */
import { SignSchema } from '../../core/crypto';
import { VerifiableTransaction } from './VerifiableTransaction';
export declare class AggregateTransaction extends VerifiableTransaction {
    constructor(bytes: any);
    private static recalculateSize;
    signTransactionWithCosigners(initializer: any, cosigners: any, generationHash: any, signSchema?: SignSchema): {
        payload: string;
        hash: string;
    };
    signTransactionGivenSignatures(initializer: any, cosignedSignedTransactions: any, generationHash: any, signSchema?: SignSchema): {
        payload: string;
        hash: string;
    };
    static appendSignatures(signedTransaction: any, cosignedSignedTransactions: any): {
        payload: any;
        hash: any;
    };
}
export declare class Builder {
    size: any;
    maxFee: any;
    version: any;
    type: any;
    deadline: any;
    transactions: any;
    constructor();
    addSize(size: any): this;
    addMaxFee(maxFee: any): this;
    addVersion(version: any): this;
    addType(type: any): this;
    addDeadline(deadline: any): this;
    addTransactions(transactions: any): this;
    build(): AggregateTransaction;
}
