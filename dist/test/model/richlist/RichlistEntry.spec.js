"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Address_1 = require("../../../src/model/account/Address");
const RichlistEntry_1 = require("../../../src/model/richlist/RichlistEntry");
const UInt64_1 = require("../../../src/model/UInt64");
describe('RichlistEntry', () => {
    it('should be create richlist entry', () => {
        const address = Address_1.Address.createFromRawAddress('SCTVW23D2MN5VE4AQ4TZIDZENGNOZXPRPRLIKCF2');
        const publicKey = 'c2f93346e27ce6ad1a9f8f5e3066f8326593a406bdf357acb041e2f9ab402efe';
        const mosaicAmt = UInt64_1.UInt64.fromUint(500);
        const result = RichlistEntry_1.RichlistEntry.create(address, publicKey, mosaicAmt);
        chai_1.expect(result.address).to.be.equal(address);
        chai_1.expect(result.publicKey).to.be.equal(publicKey);
        chai_1.expect(result.amount).to.be.equal(mosaicAmt);
    });
});
//# sourceMappingURL=RichlistEntry.spec.js.map