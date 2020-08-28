"use strict";
// Copyright 2020 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const PublicAccount_1 = require("../account/PublicAccount");
const OfferInfo_1 = require("./OfferInfo");
class AccountExchanges {
    constructor(owner, buyOffers, sellOffers) {
        this.owner = owner;
        this.buyOffers = buyOffers;
        this.sellOffers = sellOffers;
    }
    static createFromDTO(exchangeDTO, networkType) {
        return exchangeDTO ? new AccountExchanges(PublicAccount_1.PublicAccount.createFromPublicKey(exchangeDTO.owner, networkType), exchangeDTO.buyOffers.map(buyOffer => OfferInfo_1.OfferInfo.createFromDTO(buyOffer)), exchangeDTO.sellOffers.map(sellOffer => OfferInfo_1.OfferInfo.createFromDTO(sellOffer))) : undefined;
    }
}
exports.AccountExchanges = AccountExchanges;
//# sourceMappingURL=AccountExchanges.js.map