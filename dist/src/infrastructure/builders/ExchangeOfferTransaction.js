"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Convert_1 = require("../../core/format/Convert");
const TransactionType_1 = require("../../model/transaction/TransactionType");
const ExchangeOfferTransactionBuffer_1 = require("../buffers/ExchangeOfferTransactionBuffer");
const VerifiableTransaction_1 = require("./VerifiableTransaction");
const { ExchangeOfferTransactionBuffer, ExchangeOfferBuffer, } = ExchangeOfferTransactionBuffer_1.default.Buffers;
const flatbuffers_1 = require("flatbuffers");
const ExchangeOfferTransactionSchema_1 = require("../schemas/ExchangeOfferTransactionSchema");
/**
 * @module transactions/ExchangeOfferTransaction
 */
class ExchangeOfferTransaction extends VerifiableTransaction_1.VerifiableTransaction {
    constructor(bytes) {
        super(bytes, ExchangeOfferTransactionSchema_1.default);
    }
}
exports.default = ExchangeOfferTransaction;
// tslint:disable-next-line:max-classes-per-file
class Builder {
    constructor() {
        this.maxFee = [0, 0];
        this.type = TransactionType_1.TransactionType.EXCHANGE_OFFER;
    }
    addSize(size) {
        this.size = size;
        return this;
    }
    addMaxFee(maxFee) {
        this.maxFee = maxFee;
        return this;
    }
    addVersion(version) {
        this.version = version;
        return this;
    }
    addType(type) {
        this.type = type;
        return this;
    }
    addDeadline(deadline) {
        this.deadline = deadline;
        return this;
    }
    addOffers(offers) {
        this.offers = offers;
        return this;
    }
    build() {
        const builder = new flatbuffers_1.flatbuffers.Builder(1);
        // Constants
        // Create offers
        const offersArray = [];
        this.offers.forEach(offer => {
            const mosaicIdVector = ExchangeOfferBuffer
                .createMosaicIdVector(builder, offer.mosaicId);
            const mosaicAmountVector = ExchangeOfferBuffer
                .createMosaicAmountVector(builder, offer.mosaicAmount);
            const costVector = ExchangeOfferBuffer
                .createCostVector(builder, offer.cost);
            const ownerVector = ExchangeOfferBuffer
                .createOwnerVector(builder, Convert_1.Convert.hexToUint8(offer.owner));
            ExchangeOfferBuffer.startExchangeOfferBuffer(builder);
            ExchangeOfferBuffer.addMosaicId(builder, mosaicIdVector);
            ExchangeOfferBuffer.addMosaicAmount(builder, mosaicAmountVector);
            ExchangeOfferBuffer.addCost(builder, costVector);
            ExchangeOfferBuffer.addType(builder, offer.type);
            ExchangeOfferBuffer.addOwner(builder, ownerVector);
            offersArray.push(ExchangeOfferBuffer.endExchangeOfferBuffer(builder));
        });
        // Create vectors
        const signatureVector = ExchangeOfferTransactionBuffer
            .createSignatureVector(builder, Array(...Array(64)).map(Number.prototype.valueOf, 0));
        const signerVector = ExchangeOfferTransactionBuffer
            .createSignerVector(builder, Array(...Array(32)).map(Number.prototype.valueOf, 0));
        const deadlineVector = ExchangeOfferTransactionBuffer
            .createDeadlineVector(builder, this.deadline);
        const feeVector = ExchangeOfferTransactionBuffer
            .createMaxFeeVector(builder, this.maxFee);
        const offersVector = ExchangeOfferTransactionBuffer
            .createOffersVector(builder, offersArray);
        ExchangeOfferTransactionBuffer.startExchangeOfferTransactionBuffer(builder);
        ExchangeOfferTransactionBuffer.addSize(builder, this.size);
        ExchangeOfferTransactionBuffer.addSignature(builder, signatureVector);
        ExchangeOfferTransactionBuffer.addSigner(builder, signerVector);
        ExchangeOfferTransactionBuffer.addVersion(builder, this.version);
        ExchangeOfferTransactionBuffer.addType(builder, this.type);
        ExchangeOfferTransactionBuffer.addMaxFee(builder, feeVector);
        ExchangeOfferTransactionBuffer.addDeadline(builder, deadlineVector);
        ExchangeOfferTransactionBuffer.addOffersCount(builder, this.offers.length);
        ExchangeOfferTransactionBuffer.addOffers(builder, offersVector);
        // Calculate size
        const codedMosaicChangeSupply = ExchangeOfferTransactionBuffer.endExchangeOfferTransactionBuffer(builder);
        builder.finish(codedMosaicChangeSupply);
        const bytes = builder.asUint8Array();
        return new ExchangeOfferTransaction(bytes);
    }
}
exports.Builder = Builder;
//# sourceMappingURL=ExchangeOfferTransaction.js.map