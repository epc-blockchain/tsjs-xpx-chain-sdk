"use strict";
// Copyright 2020 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const conf_spec_1 = require("../conf/conf.spec");
const ExchangeHttp_1 = require("../../src/infrastructure/ExchangeHttp");
const conf_spec_2 = require("../../e2e/conf/conf.spec");
const model_1 = require("../../src/model/model");
describe('ExchangeHttp', () => {
    const exchangeHttp = new ExchangeHttp_1.ExchangeHttp(conf_spec_1.APIUrl);
    it('should get offers for an account', (done) => {
        exchangeHttp.getAccountExchanges(conf_spec_2.TestingAccount.publicAccount).subscribe(a => {
            const accountExchanges = a;
            chai_1.expect(accountExchanges).not.to.be.undefined;
            chai_1.expect(accountExchanges.owner).not.to.be.undefined;
            chai_1.expect(accountExchanges.buyOffers).not.to.be.undefined;
            chai_1.expect(accountExchanges.sellOffers).not.to.be.undefined;
            done();
        });
    });
    it('should get offers for an account, too', (done) => {
        exchangeHttp.getAccountExchanges(conf_spec_2.CosignatoryAccount.address).subscribe(a => {
            const accountExchanges = a;
            chai_1.expect(accountExchanges).not.to.be.undefined;
            chai_1.expect(accountExchanges.owner).not.to.be.undefined;
            chai_1.expect(accountExchanges.buyOffers).not.to.be.undefined;
            chai_1.expect(accountExchanges.sellOffers).not.to.be.undefined;
            done();
        });
    });
    it('should get buy offers for a mosaic', (done) => {
        exchangeHttp.getExchangeOffers(model_1.ExchangeOfferType.BUY_OFFER, conf_spec_1.ConfTestingMosaicId).subscribe(mosaicExchanges => {
            chai_1.expect(mosaicExchanges).not.to.be.undefined;
            done();
        });
    });
    it('should get sell offers for a mosaic, too', (done) => {
        exchangeHttp.getExchangeOffers(model_1.ExchangeOfferType.SELL_OFFER, conf_spec_1.ConfTestingMosaicId).subscribe(mosaicExchanges => {
            chai_1.expect(mosaicExchanges).not.to.be.undefined;
            done();
        });
    });
});
//# sourceMappingURL=ExchangeHttp.spec.js.map