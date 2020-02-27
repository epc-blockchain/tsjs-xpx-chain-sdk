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
const AddExchangeOfferTransaction_1 = require("../../../src/model/transaction/AddExchangeOfferTransaction");
const AddExchangeOffer_1 = require("../../../src/model/transaction/AddExchangeOffer");
describe('AddExchangeOfferTransaction', () => {
    let account;
    const generationHash = '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
    before(() => {
        account = conf_spec_1.TestingAccount;
    });
    it('should default maxFee field be set according to DefaultFeeCalculationStrategy', () => {
        const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
        chai_1.expect(addExchangeOfferTransaction.maxFee.compact()).to.be.equal(addExchangeOfferTransaction.size * FeeCalculationStrategy_1.DefaultFeeCalculationStrategy);
    });
    it('should filled maxFee override transaction maxFee', () => {
        const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST, new UInt64_1.UInt64([1, 0]));
        chai_1.expect(addExchangeOfferTransaction.maxFee.higher).to.be.equal(0);
        chai_1.expect(addExchangeOfferTransaction.maxFee.lower).to.be.equal(1);
    });
    it('should createComplete an AddExchangeOfferTransaction object and sign', () => {
        const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
            new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId('1234567890ABCDEF'), UInt64_1.UInt64.fromUint(333333), UInt64_1.UInt64.fromUint(666666), 1, UInt64_1.UInt64.fromUint(999999)),
        ], NetworkType_1.NetworkType.MIJIN_TEST);
        const signedTransaction = addExchangeOfferTransaction.signWith(account, generationHash);
        chai_1.expect(signedTransaction.payload.substring(244, signedTransaction.payload.length)).to.be.equal('01EFCDAB907856341215160500000000002A2C0A0000000000013F420F0000000000');
    });
    describe('size', () => {
        it('should return 123 for AddExchangeOfferTransaction without any offer', () => {
            const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(addExchangeOfferTransaction.size).to.be.equal(123);
        });
        it('should return 156 for AddExchangeOfferTransaction with 1 offer', () => {
            const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, UInt64_1.UInt64.fromUint(2))
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(addExchangeOfferTransaction.size).to.be.equal(156);
        });
        it('should return 222 for AddExchangeOfferTransaction with 3 offers', () => {
            const addExchangeOfferTransaction = AddExchangeOfferTransaction_1.AddExchangeOfferTransaction.create(Deadline_1.Deadline.create(), [
                new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, UInt64_1.UInt64.fromUint(2)),
                new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, UInt64_1.UInt64.fromUint(2)),
                new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(0).toDTO()), UInt64_1.UInt64.fromUint(0), UInt64_1.UInt64.fromUint(1), 0, UInt64_1.UInt64.fromUint(2)),
            ], NetworkType_1.NetworkType.MIJIN_TEST);
            chai_1.expect(addExchangeOfferTransaction.size).to.be.equal(222);
        });
    });
});
//# sourceMappingURL=AddExchangeOfferTransaction.spec.js.map