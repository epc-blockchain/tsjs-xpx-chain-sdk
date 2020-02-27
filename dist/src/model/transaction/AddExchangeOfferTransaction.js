"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
const TransactionVersion_1 = require("./TransactionVersion");
const AddExchangeOfferTransaction_1 = require("../../infrastructure/builders/AddExchangeOfferTransaction");
const TransactionType_1 = require("./TransactionType");
const FeeCalculationStrategy_1 = require("./FeeCalculationStrategy");
class AddExchangeOfferTransaction extends Transaction_1.Transaction {
    constructor(networkType, version, deadline, offers, maxFee, signature, signer, transactionInfo) {
        super(TransactionType_1.TransactionType.ADD_EXCHANGE_OFFER, networkType, version, deadline, maxFee, signature, signer, transactionInfo);
        this.offers = offers || [];
    }
    /**
     * Create AddExchangeOfferTransaction object
     * @returns {AddExchangeOfferTransaction}
     */
    static create(deadline, offers, networkType, maxFee) {
        return new AddExchangeOfferTransactionBuilder()
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
     * @memberof AddExchangeOfferTransaction
     */
    get size() {
        return AddExchangeOfferTransaction.calculateSize(this.offers.length);
    }
    static calculateSize(offersLength) {
        const byteSize = Transaction_1.Transaction.getHeaderSize()
            + 1 // num offers
            + offersLength * (8 + 8 + 8 + 1 + 8 /* 33 */);
        return byteSize;
    }
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof AddExchangeOfferTransaction
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
        return new AddExchangeOfferTransaction_1.Builder()
            .addSize(this.size)
            .addType(this.type)
            .addVersion(this.versionToDTO())
            .addDeadline(this.deadline.toDTO())
            .addMaxFee(this.maxFee.toDTO())
            .addOffers(this.offers.map(offer => ({
            mosaicId: offer.mosaicId.id.toDTO(),
            mosaicAmount: offer.mosaicAmount.toDTO(),
            cost: offer.cost.toDTO(),
            type: offer.type,
            duration: offer.duration.toDTO()
        })))
            .build();
    }
}
exports.AddExchangeOfferTransaction = AddExchangeOfferTransaction;
class AddExchangeOfferTransactionBuilder extends Transaction_1.TransactionBuilder {
    offers(offers) {
        this._offers = offers;
        return this;
    }
    build() {
        return new AddExchangeOfferTransaction(this._networkType, this._version || TransactionVersion_1.TransactionVersion.ADD_EXCHANGE_OFFER, this._deadline ? this._deadline : this._createNewDeadlineFn(), this._offers, this._maxFee ? this._maxFee : FeeCalculationStrategy_1.calculateFee(AddExchangeOfferTransaction.calculateSize(this._offers.length), this._feeCalculationStrategy), this._signature, this._signer, this._transactionInfo);
    }
}
exports.AddExchangeOfferTransactionBuilder = AddExchangeOfferTransactionBuilder;
//# sourceMappingURL=AddExchangeOfferTransaction.js.map