"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const NetworkType_1 = require("../../../src/model/blockchain/NetworkType");
const MosaicId_1 = require("../../../src/model/mosaic/MosaicId");
const Deadline_1 = require("../../../src/model/transaction/Deadline");
const UInt64_1 = require("../../../src/model/UInt64");
const conf_spec_1 = require("../../conf/conf.spec");
const FeeCalculationStrategy_1 = require("../../../src/model/transaction/FeeCalculationStrategy");
const RemoveExchangeOfferTransaction_1 = require("../../../src/model/transaction/RemoveExchangeOfferTransaction");
const RemoveExchangeOffer_1 = require("../../../src/model/transaction/RemoveExchangeOffer");
describe('RemoveExchangeOfferTransaction', () => {
    let account;
    const generationHash = '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
    before(() => {
        account = conf_spec_1.TestingAccount;
    });
    it('should default maxFee field be set according to DefaultFeeCalculationStrategy', () => {
        const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
        chai_1.expect(removeExchangeOfferTransaction.maxFee.compact()).to.be.equal(removeExchangeOfferTransaction.size * FeeCalculationStrategy_1.DefaultFeeCalculationStrategy);
    });
    it('should filled maxFee override transaction maxFee', () => {
        const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST, new UInt64_1.UInt64([1, 0]));
        chai_1.expect(removeExchangeOfferTransaction.maxFee.higher).to.be.equal(0);
        chai_1.expect(removeExchangeOfferTransaction.maxFee.lower).to.be.equal(1);
    });
    it('should createComplete an RemoveExchangeOfferTransaction object and sign', () => {
        const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
            new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId('1234567890ABCDEF'), 1),
        ], NetworkType_1.NetworkType.MIJIN_TEST);
        const signedTransaction = removeExchangeOfferTransaction.signWith(account, generationHash);
        chai_1.expect(signedTransaction.payload.substring(244, signedTransaction.payload.length)).to.be.equal('01EFCDAB907856341201');
    });
    describe('size', () => {
        it('should return 123 for RemoveExchangeOfferTransaction without any offer', () => {
            const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(removeExchangeOfferTransaction.size).to.be.equal(123);
        });
        it('should return 132 for RemoveExchangeOfferTransaction with 1 offer', () => {
            const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), 1)
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(removeExchangeOfferTransaction.size).to.be.equal(132);
        });
        it('should return 150 for RemoveExchangeOfferTransaction with 3 offers', () => {
            const removeExchangeOfferTransaction = RemoveExchangeOfferTransaction_1.RemoveExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), 1),
                new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), 1),
                new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), 1)
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(removeExchangeOfferTransaction.size).to.be.equal(150);
        });
    });
});
//# sourceMappingURL=RemoveExchangeOfferTransaction.spec.js.map