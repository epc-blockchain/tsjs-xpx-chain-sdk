"use strict";
// Copyright 2020 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const apis_1 = require("./api/apis");
const NetworkHttp_1 = require("./NetworkHttp");
const Http_1 = require("./Http");
const model_1 = require("../model/model");
const AccountExchanges_1 = require("../model/exchange/AccountExchanges");
const MosaicExchange_1 = require("../model/exchange/MosaicExchange");
/**
 * Exchange http repository.
 *
 * @since 0.8.0
 */
class ExchangeHttp extends Http_1.Http {
    /**
     * Constructor
     * @param url
     * @param networkHttp
     */
    constructor(url, networkHttp) {
        networkHttp = networkHttp == null ? new NetworkHttp_1.NetworkHttp(url) : networkHttp;
        super(networkHttp);
        this.exchangeRoutesApi = new apis_1.ExchangeRoutesApi(url);
    }
    /**
     * Gets the exchanges for a given accountId
     * @param accountId - Account public key or address
     * @returns Observable<AccountExchanges | undefined>
     */
    getAccountExchanges(accountId) {
        const accountIdArg = (accountId instanceof model_1.PublicAccount) ? accountId.publicKey : accountId.plain();
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap(networkType => rxjs_1.from(this.exchangeRoutesApi.getAccountExchangeOffers(accountIdArg)).pipe(operators_1.map(response => AccountExchanges_1.AccountExchanges.createFromDTO(response.body.exchange, networkType)))));
    }
    /**
     * Gets exchanges for a given mosaic id
     * @param offerType
     * @param mosaicId
     * @returns Observable<MosaicExchanges[]>
     */
    getExchangeOffers(offerType, mosaicId) {
        const offerTypeArg = offerType === model_1.ExchangeOfferType.BUY_OFFER ? "buy" : "sell";
        const mosaicIdArg = mosaicId.toHex();
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap(networkType => rxjs_1.from(this.exchangeRoutesApi.getExchangeOffers(offerTypeArg, mosaicIdArg)).pipe(operators_1.map(response => response.body.map(exchangesDTO => MosaicExchange_1.MosaicExchange.createFromDTO(exchangesDTO, networkType))))));
    }
}
exports.ExchangeHttp = ExchangeHttp;
//# sourceMappingURL=ExchangeHttp.js.map