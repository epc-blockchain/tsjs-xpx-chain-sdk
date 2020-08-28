"use strict";
// Copyright 2020 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const MosaicId_1 = require("../mosaic/MosaicId");
const PublicAccount_1 = require("../account/PublicAccount");
const UInt64_1 = require("../UInt64");
const Deadline_1 = require("../transaction/Deadline");
class MosaicExchange {
    constructor(mosaicId, owner, amount, price, initialAmount, initialCost, deadline) {
        this.mosaicId = mosaicId;
        this.owner = owner;
        this.amount = amount;
        this.price = price;
        this.initialAmount = initialAmount;
        this.initialCost = initialCost;
        this.deadline = deadline;
    }
    static createFromDTO(exchangesDTO, networkType) {
        const owner = PublicAccount_1.PublicAccount.createFromPublicKey(exchangesDTO.owner, networkType);
        return new MosaicExchange(new MosaicId_1.MosaicId(exchangesDTO.mosaicId), owner, new UInt64_1.UInt64(exchangesDTO.amount), exchangesDTO.price, new UInt64_1.UInt64(exchangesDTO.initialAmount), new UInt64_1.UInt64(exchangesDTO.initialCost), Deadline_1.Deadline.createFromDTO(exchangesDTO.deadline));
    }
}
exports.MosaicExchange = MosaicExchange;
//# sourceMappingURL=MosaicExchange.js.map