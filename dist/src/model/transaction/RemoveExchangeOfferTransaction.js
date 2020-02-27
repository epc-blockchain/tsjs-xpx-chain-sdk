"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
const TransactionVersion_1 = require("./TransactionVersion");
const RemoveExchangeOfferTransaction_1 = require("../../infrastructure/builders/RemoveExchangeOfferTransaction");
const TransactionType_1 = require("./TransactionType");
const FeeCalculationStrategy_1 = require("./FeeCalculationStrategy");
class RemoveExchangeOfferTransaction extends Transaction_1.Transaction {
    constructor(networkType, version, deadline, offers, maxFee, signature, signer, transactionInfo) {
        super(TransactionType_1.TransactionType.REMOVE_EXCHANGE_OFFER, networkType, version, deadline, maxFee, signature, signer, transactionInfo);
        this.offers = offers || [];
    }
    /**
     * Create RemoveExchangeOfferTransaction object
     * @returns {RemoveExchangeOfferTransaction}
     */
    static create(deadline, offers, networkType, maxFee) {
        return new RemoveExchangeOfferTransactionBuilder()
            .networkType(networkType)
            .deadline(deadline)
            .maxFee(maxFee)
            .offers(offers)
            .build();
    }
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof RemoveExchangeOfferTransaction
     */
    get size() {
        return RemoveExchangeOfferTransaction.calculateSize(this.offers.length);
    }
    static calculateSize(offersLength) {
        const byteSize = Transaction_1.Transaction.getHeaderSize()
            + 1 // num offers
            + offersLength * (8 + 1);
        return byteSize;
    }
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof RemoveExchangeOfferTransaction
     */
    toJSON() {
        const parent = super.toJSON();
        return Object.assign(Object.assign({}, parent), { transaction: Object.assign(Object.assign({}, parent.transaction), { offers: this.offers.map(offer => offer.toDTO()) }) });
    }
    /**
     * @internal
     * @returns {VerifiableTransaction}
     */
    buildTransaction() {
        return new RemoveExchangeOfferTransaction_1.Builder()
            .addSize(this.size)
            .addType(this.type)
            .addVersion(this.versionToDTO())
            .addDeadline(this.deadline.toDTO())
            .addMaxFee(this.maxFee.toDTO())
            .addOffers(this.offers.map(offer => ({
            mosaicId: offer.mosaicId.id.toDTO(),
            offerType: offer.offerType
        })))
            .build();
    }
}
exports.RemoveExchangeOfferTransaction = RemoveExchangeOfferTransaction;
class RemoveExchangeOfferTransactionBuilder extends Transaction_1.TransactionBuilder {
    offers(offers) {
        this._offers = offers;
        return this;
    }
    build() {
        return new RemoveExchangeOfferTransaction(this._networkType, this._version || TransactionVersion_1.TransactionVersion.REMOVE_EXCHANGE_OFFER, this._deadline ? this._deadline : this._createNewDeadlineFn(), this._offers, this._maxFee ? this._maxFee : FeeCalculationStrategy_1.calculateFee(RemoveExchangeOfferTransaction.calculateSize(this._offers.length), this._feeCalculationStrategy), this._signature, this._signer, this._transactionInfo);
    }
}
exports.RemoveExchangeOfferTransactionBuilder = RemoveExchangeOfferTransactionBuilder;
//# sourceMappingURL=RemoveExchangeOfferTransaction.js.map