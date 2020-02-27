"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class AddExchangeOffer {
    /**
     * Constructor
     * @param type
     */
    constructor(
    /**
     * Id of the mosaic for which the offer should be added
     */
    mosaicId, 
    /**
     * Amount
     */
    mosaicAmount, 
    /**
     * Cost per mosaicAmount.
     */
    cost, 
    /**
     * Exchange offer type (buy/sell).
     */
    type, 
    /**
     * Number of blocks - how long is this offer valid.
     */
    duration) {
        this.mosaicId = mosaicId;
        this.mosaicAmount = mosaicAmount;
        this.cost = cost;
        this.type = type;
        this.duration = duration;
    }
    /**
     * @internal
     */
    toDTO() {
        return {
            mosaicId: this.mosaicId.id.toDTO(),
            mosaicAmount: this.mosaicAmount.toDTO(),
            cost: this.cost.toDTO(),
            type: this.type,
            duration: this.duration.toDTO()
        };
    }
}
exports.AddExchangeOffer = AddExchangeOffer;
//# sourceMappingURL=AddExchangeOffer.js.map