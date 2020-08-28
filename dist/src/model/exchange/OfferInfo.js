"use strict";
// Copyright 2020 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const UInt64_1 = require("../UInt64");
const MosaicId_1 = require("../mosaic/MosaicId");
const Deadline_1 = require("../transaction/Deadline");
class OfferInfo {
    constructor(mosaicId, amount, price, initialAmount, initialCost, deadline) {
        this.mosaicId = mosaicId;
        this.amount = amount;
        this.price = price;
        this.initialAmount = initialAmount;
        this.initialCost = initialCost;
        this.deadline = deadline;
    }
    static createFromDTO(offerInfoDTO) {
        return new OfferInfo(new MosaicId_1.MosaicId(offerInfoDTO.mosaicId), new UInt64_1.UInt64(offerInfoDTO.amount), offerInfoDTO.price, new UInt64_1.UInt64(offerInfoDTO.initialAmount), new UInt64_1.UInt64(offerInfoDTO.initialCost), Deadline_1.Deadline.createFromDTO(offerInfoDTO.deadline));
    }
}
exports.OfferInfo = OfferInfo;
//# sourceMappingURL=OfferInfo.js.map