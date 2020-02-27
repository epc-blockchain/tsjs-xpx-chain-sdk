import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
import { AggregateTransactionInfo } from './AggregateTransactionInfo';
import { RemoveExchangeOffer } from './RemoveExchangeOffer';
export declare class RemoveExchangeOfferTransaction extends Transaction {
    /**
     * Create RemoveExchangeOfferTransaction object
     * @returns {RemoveExchangeOfferTransaction}
     */
    static create(deadline: Deadline, offers: RemoveExchangeOffer[], networkType: NetworkType, maxFee?: UInt64): RemoveExchangeOfferTransaction;
    offers: RemoveExchangeOffer[];
    constructor(networkType: NetworkType, version: number, deadline: Deadline, offers: RemoveExchangeOffer[], maxFee: UInt64, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo | AggregateTransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof RemoveExchangeOfferTransaction
     */
    readonly size: number;
    static calculateSize(offersLength: number): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof RemoveExchangeOfferTransaction
     */
    toJSON(): {
        transaction: {
            offers: {
                mosaicId: number[];
                offerType: import("./ExchangeOfferType").ExchangeOfferType;
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
export declare class RemoveExchangeOfferTransactionBuilder extends TransactionBuilder {
    private _offers;
    offers(offers: RemoveExchangeOffer[]): this;
    build(): RemoveExchangeOfferTransaction;
}
