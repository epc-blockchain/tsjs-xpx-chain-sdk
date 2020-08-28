"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The richlist entry describes the account details and its specific mosaic ownership.
 */
class RichlistEntry {
    /**
     * @internal
     * @param address
     * @param publicKey
     * @param amount
     */
    constructor(
    /**
     * The account address.
     */
    address, 
    /**
     * The account public key.
     */
    publicKey, 
    /**
     * The mosaic amount
     */
    amount) {
        this.address = address;
        this.publicKey = publicKey;
        this.amount = amount;
    }
    /**
     * Create a Richlist Entry
     * @param address - Address of the account
     * @param publicKey - Public Key of the account
     * @param amount - The mosaic amount
     * @return {RichlistEntry}
     */
    static create(address, publicKey, amount) {
        return new RichlistEntry(address, publicKey, amount);
    }
}
exports.RichlistEntry = RichlistEntry;
//# sourceMappingURL=RichlistEntry.js.map