"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class RemoveExchangeOffer {
    /**
     * Constructor
     * @param mosaicId
     * @param offerType
     */
    constructor(
    /**
     * Id of the mosaic for which the offer should be removed.
     */
    mosaicId, 
    /**
     * Exchange offer type (buy/sell).
     */
    offerType) {
        this.mosaicId = mosaicId;
        this.offerType = offerType;
    }
    /**
     * @internal
     */
    toDTO() {
        return {
            mosaicId: this.mosaicId.id.toDTO(),
            offerType: this.offerType,
        };
    }
}
exports.RemoveExchangeOffer = RemoveExchangeOffer;
//# sourceMappingURL=RemoveExchangeOffer.js.map