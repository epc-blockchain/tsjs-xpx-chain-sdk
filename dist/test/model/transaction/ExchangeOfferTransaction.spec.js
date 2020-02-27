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
const ExchangeOfferTransaction_1 = require("../../../src/model/transaction/ExchangeOfferTransaction");
const ExchangeOffer_1 = require("../../../src/model/transaction/ExchangeOffer");
const model_1 = require("../../../src/model/model");
describe('ExchangeOfferTransaction', () => {
    let account;
    const generationHash = '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
    before(() => {
        account = conf_spec_1.TestingAccount;
    });
    it('should default maxFee field be set according to DefaultFeeCalculationStrategy', () => {
        const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
        chai_1.expect(exchangeOfferTransaction.maxFee.compact()).to.be.equal(exchangeOfferTransaction.size * FeeCalculationStrategy_1.DefaultFeeCalculationStrategy);
    });
    it('should filled maxFee override transaction maxFee', () => {
        const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST, new UInt64_1.UInt64([1, 0]));
        chai_1.expect(exchangeOfferTransaction.maxFee.higher).to.be.equal(0);
        chai_1.expect(exchangeOfferTransaction.maxFee.lower).to.be.equal(1);
    });
    it('should createComplete an ExchangeOfferTransaction object and sign', () => {
        const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
            new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId('1234567890ABCDEF'), UInt64_1.UInt64.fromUint(333333), UInt64_1.UInt64.fromUint(666666), 1, model_1.PublicAccount.createFromPublicKey('B'.repeat(64), NetworkType_1.NetworkType.MIJIN_TEST)),
        ], NetworkType_1.NetworkType.MIJIN_TEST);
        const signedTransaction = exchangeOfferTransaction.signWith(account, generationHash);
        chai_1.expect(signedTransaction.payload.substring(244, signedTransaction.payload.length)).to.be.equal('01EFCDAB907856341215160500000000002A2C0A000000000001' + 'B'.repeat(64));
    });
    describe('size', () => {
        it('should return 123 for ExchangeOfferTransaction without any offer', () => {
            const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(exchangeOfferTransaction.size).to.be.equal(123);
        });
        it('should return 180 for ExchangeOfferTransaction with 1 offer', () => {
            const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, model_1.PublicAccount.createFromPublicKey('B'.repeat(64), NetworkType_1.NetworkType.MIJIN_TEST))
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(exchangeOfferTransaction.size).to.be.equal(180);
        });
        it('should return 294 for ExchangeOfferTransaction with 3 offers', () => {
            const exchangeOfferTransaction = ExchangeOfferTransaction_1.ExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, model_1.PublicAccount.createFromPublicKey('B'.repeat(64), NetworkType_1.NetworkType.MIJIN_TEST)),
                new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, model_1.PublicAccount.createFromPublicKey('B'.repeat(64), NetworkType_1.NetworkType.MIJIN_TEST)),
                new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, model_1.PublicAccount.createFromPublicKey('B'.repeat(64), NetworkType_1.NetworkType.MIJIN_TEST))
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(exchangeOfferTransaction.size).to.be.equal(294);
        });
    });
});
//# sourceMappingURL=ExchangeOfferTransaction.spec.js.map