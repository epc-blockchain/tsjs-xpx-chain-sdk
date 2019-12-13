import { Transaction, TransactionBuilder } from './Transaction';
import { NetworkType } from '../blockchain/NetworkType';
import { Deadline } from './Deadline';
import { UInt64 } from '../UInt64';
import { PublicAccount } from '../account/PublicAccount';
import { TransactionInfo } from './TransactionInfo';
export declare class ChainUpgradeTransaction extends Transaction {
    readonly upgradePeriod: UInt64;
    readonly newBlockchainVersion: UInt64;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, upgradePeriod: UInt64, newBlockchainVersion: UInt64, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    static create(deadline: Deadline, upgradePeriod: UInt64, newBlockchainVersion: UInt64, networkType: NetworkType, maxFee?: UInt64): ChainUpgradeTransaction;
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof Transaction
     */
    readonly size: number;
    static calculateSize(): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof ChainUpgradeTransaction
     */
    toJSON(): {
        transaction: {
            upgradePeriod: number[];
            newBlockchainVersion: number[];
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class ChainUpgradeTransactionBuilder extends TransactionBuilder {
    private _upgradePeriod;
    private _newBlockchainVersion;
    constructor();
    upgradePeriod(upgradePeriod: UInt64): this;
    newBlockchainVersion(newBlockchainVersion: UInt64): this;
    build(): ChainUpgradeTransaction;
}
