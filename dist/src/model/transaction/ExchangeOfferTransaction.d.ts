import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
import { AggregateTransactionInfo } from './AggregateTransactionInfo';
import { ExchangeOffer } from './ExchangeOffer';
export declare class ExchangeOfferTransaction extends Transaction {
    /**
     * Create ExchangeOfferTransaction object
     * @returns {ExchangeOfferTransaction}
     */
    static create(deadline: Deadline, offers: ExchangeOffer[], networkType: NetworkType, maxFee?: UInt64): ExchangeOfferTransaction;
    offers: ExchangeOffer[];
    constructor(networkType: NetworkType, version: number, deadline: Deadline, offers: ExchangeOffer[], maxFee: UInt64, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo | AggregateTransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof ExchangeOfferTransaction
     */
    readonly size: number;
    static calculateSize(offersLength: number): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof ExchangeOfferTransaction
     */
    toJSON(): {
        transaction: {
            offers: {
                mosaicId: number[];
                mosaicAmount: number[];
                cost: number[];
                type: import("./ExchangeOfferType").ExchangeOfferType;
                owner: string;
            }[];
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class ExchangeOfferTransactionBuilder extends TransactionBuilder {
    private _offers;
    offers(offers: ExchangeOffer[]): this;
    build(): ExchangeOfferTransaction;
}
