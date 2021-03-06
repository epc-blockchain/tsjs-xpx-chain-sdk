import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { Mosaic } from '../mosaic/Mosaic';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { SignedTransaction } from './SignedTransaction';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
/**
 * Lock funds transaction is used before sending an Aggregate bonded transaction, as a deposit to announce the transaction.
 * When aggregate bonded transaction is confirmed funds are returned to LockFundsTransaction signer.
 *
 * @since 1.0
 */
export declare class LockFundsTransaction extends Transaction {
    /**
     * The locked mosaic.
     */
    readonly mosaic: Mosaic;
    /**
     * The funds lock duration.
     */
    readonly duration: UInt64;
    /**
     * Aggregate bonded hash.
     */
    readonly hash: string;
    /**
     * Create a Lock funds transaction object
     * @param deadline - The deadline to include the transaction.
     * @param mosaic - The locked mosaic.
     * @param duration - The funds lock duration.
     * @param signedTransaction - The signed transaction for which funds are locked.
     * @param networkType - The network type.
     * @param maxFee - (Optional) Max fee defined by the sender
     * @returns {LockFundsTransaction}
     */
    static create(deadline: Deadline, mosaic: Mosaic, duration: UInt64, signedTransaction: SignedTransaction, networkType: NetworkType, maxFee?: UInt64): LockFundsTransaction;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param mosaic
     * @param duration
     * @param signedTransaction
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, 
    /**
     * The locked mosaic.
     */
    mosaic: Mosaic, 
    /**
     * The funds lock duration.
     */
    duration: UInt64, signedTransaction: SignedTransaction, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a LockFundsTransaction
     * @returns {number}
     * @memberof LockFundsTransaction
     */
    readonly size: number;
    static calculateSize(): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof LockFundsTransaction
     */
    toJSON(): {
        transaction: {
            mosaicId: number[];
            amount: number[];
            duration: number[];
            hash: string;
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class LockFundsTransactionBuilder extends TransactionBuilder {
    private _mosaic;
    private _duration;
    private _signedTransaction;
    mosaic(mosaic: Mosaic): this;
    duration(duration: UInt64): this;
    signedTransaction(signedTransaction: SignedTransaction): this;
    build(): LockFundsTransaction;
}
