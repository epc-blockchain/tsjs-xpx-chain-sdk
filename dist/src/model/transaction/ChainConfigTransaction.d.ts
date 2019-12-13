import { Transaction, TransactionBuilder } from './Transaction';
import { NetworkType } from '../blockchain/NetworkType';
import { Deadline } from './Deadline';
import { UInt64 } from '../UInt64';
import { PublicAccount } from '../account/PublicAccount';
import { TransactionInfo } from './TransactionInfo';
export declare class ChainConfigTransaction extends Transaction {
    readonly applyHeightDelta: UInt64;
    readonly networkConfig: string;
    readonly supportedEntityVersions: string;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param applyHeightDelta
     * @param networkConfig,
     * @param supportedEntityVersions,
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, applyHeightDelta: UInt64, networkConfig: string, supportedEntityVersions: string, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    static create(deadline: Deadline, applyHeightDelta: UInt64, networkConfig: string, supportedEntityVersions: string, networkType: NetworkType, maxFee?: UInt64): ChainConfigTransaction;
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof Transaction
     */
    readonly size: number;
    static calculateSize(networkConfigLength: number, supportedEntityVersionsLength: number): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof ChainConfigTransaction
     */
    toJSON(): {
        transaction: {
            applyHeightDelta: number[];
            networkConfig: string;
            supportedEntityVersions: string;
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class ChainConfigTransactionBuilder extends TransactionBuilder {
    private _applyHeightDelta;
    private _networkConfig;
    private _supportedEntityVersions;
    constructor();
    applyHeightDelta(applyHeightDelta: UInt64): this;
    networkConfig(networkConfig: string): this;
    supportedEntityVersions(supportedEntityVersions: string): this;
    build(): ChainConfigTransaction;
}
