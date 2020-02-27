"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = require("./Schema");
/**
 * @module schema/RemoveExchangeOfferTransactionSchema
 */
/**
 * RemoveExchangeOffer transaction schema
 * @const {module:schema/Schema}
 */
exports.default = new Schema_1.Schema([
    Schema_1.uint('size'),
    Schema_1.array('signature'),
    Schema_1.array('signer'),
    Schema_1.uint('version'),
    Schema_1.ushort('type'),
    Schema_1.array('fee', Schema_1.TypeSize.INT),
    Schema_1.array('deadline', Schema_1.TypeSize.INT),
    Schema_1.ubyte('offersCount'),
    Schema_1.tableArray('offers', [
        Schema_1.array('mosaicId', Schema_1.TypeSize.INT),
        Schema_1.ubyte('type'),
    ])
]);
//# sourceMappingURL=RemoveExchangeOfferTransactionSchema.js.map