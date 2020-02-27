import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
import { AggregateTransactionInfo } from './AggregateTransactionInfo';
import { AddExchangeOffer } from './AddExchangeOffer';
export declare class AddExchangeOfferTransaction extends Transaction {
    /**
     * Create AddExchangeOfferTransaction object
     * @returns {AddExchangeOfferTransaction}
     */
    static create(deadline: Deadline, offers: AddExchangeOffer[], networkType: NetworkType, maxFee?: UInt64): AddExchangeOfferTransaction;
    offers: AddExchangeOffer[];
    constructor(networkType: NetworkType, version: number, deadline: Deadline, offers: AddExchangeOffer[], maxFee: UInt64, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo | AggregateTransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof AddExchangeOfferTransaction
     */
    readonly size: number;
    static calculateSize(offersLength: number): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof AddExchangeOfferTransaction
     */
    toJSON(): {
        transaction: {
            offers: {
                mosaicId: number[];
                mosaicAmount: number[];
                cost: number[];
                type: import("./ExchangeOfferType").ExchangeOfferType;
                duration: number[];
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
export declare class AddExchangeOfferTransactionBuilder extends TransactionBuilder {
    private _offers;
    offers(offers: AddExchangeOffer[]): this;
    build(): AddExchangeOfferTransaction;
}
