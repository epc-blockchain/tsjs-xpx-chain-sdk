"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const rxjs_1 = require("rxjs");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.ExchangeHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
describe('ExchangeHttp', () => {
    describe('getAccountExchanges', () => {
        const offerDto = {
            mosaicId: [666, 777],
            amount: model_1.UInt64.fromUint(22222).toDTO(),
            price: 888,
            initialAmount: model_1.UInt64.fromUint(33333).toDTO(),
            initialCost: model_1.UInt64.fromUint(44444).toDTO(),
            deadline: [888, 999],
        };
        const dto = {
            exchange: {
                owner: 'a'.repeat(64),
                buyOffers: [offerDto],
                sellOffers: [offerDto, offerDto]
            }
        };
        beforeEach(() => {
            sandbox.on(client.exchangeRoutesApi, 'getAccountExchangeOffers', (number) => Promise.resolve({ body: dto }));
            sandbox.on(client, 'getNetworkTypeObservable', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountExchanges(model_1.PublicAccount.createFromPublicKey('a'.repeat(64), model_1.NetworkType.MIJIN_TEST)).subscribe(response => {
                expect(response).not.to.be.undefined;
                const r = response;
                expect(r.owner.publicKey).to.be.equal('a'.repeat(64));
                expect(r.buyOffers.length).to.be.equal(1);
                expect(r.sellOffers.length).to.be.equal(2);
                expect(r.buyOffers[0].mosaicId.toDTO().id[0]).to.be.equal(666);
                expect(r.buyOffers[0].mosaicId.toDTO().id[1]).to.be.equal(777);
                expect(r.buyOffers[0].amount.compact()).to.be.equal(22222);
                expect(r.buyOffers[0].price).to.be.equal(888);
                expect(r.buyOffers[0].initialAmount.compact()).to.be.equal(33333);
                expect(r.buyOffers[0].initialCost.compact()).to.be.equal(44444);
                expect(r.buyOffers[0].deadline.toDTO()[0]).to.be.equal(888);
                expect(r.buyOffers[0].deadline.toDTO()[1]).to.be.equal(999);
                expect(r.sellOffers[0].mosaicId.toDTO().id[0]).to.be.equal(666);
                expect(r.sellOffers[0].mosaicId.toDTO().id[1]).to.be.equal(777);
                expect(r.sellOffers[0].amount.compact()).to.be.equal(22222);
                expect(r.sellOffers[0].price).to.be.equal(888);
                expect(r.sellOffers[0].initialAmount.compact()).to.be.equal(33333);
                expect(r.sellOffers[0].initialCost.compact()).to.be.equal(44444);
                expect(r.sellOffers[0].deadline.toDTO()[0]).to.be.equal(888);
                expect(r.sellOffers[0].deadline.toDTO()[1]).to.be.equal(999);
                expect(r.sellOffers[1].mosaicId.toDTO().id[0]).to.be.equal(666);
                expect(r.sellOffers[1].mosaicId.toDTO().id[1]).to.be.equal(777);
                expect(r.sellOffers[1].amount.compact()).to.be.equal(22222);
                expect(r.sellOffers[1].price).to.be.equal(888);
                expect(r.sellOffers[1].initialAmount.compact()).to.be.equal(33333);
                expect(r.sellOffers[1].initialCost.compact()).to.be.equal(44444);
                expect(r.sellOffers[1].deadline.toDTO()[0]).to.be.equal(888);
                expect(r.sellOffers[1].deadline.toDTO()[1]).to.be.equal(999);
                done();
            });
        });
    });
    describe('getExchangeOffers', () => {
        const dto = [{
                mosaicId: [666, 777],
                owner: 'a'.repeat(64),
                amount: model_1.UInt64.fromUint(22222).toDTO(),
                price: 888,
                initialAmount: model_1.UInt64.fromUint(33333).toDTO(),
                initialCost: model_1.UInt64.fromUint(44444).toDTO(),
                deadline: [888, 999],
            }];
        beforeEach(() => {
            sandbox.on(client.exchangeRoutesApi, 'getExchangeOffers', (number) => Promise.resolve({ body: dto }));
            sandbox.on(client, 'getNetworkTypeObservable', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getExchangeOffers(model_1.ExchangeOfferType.BUY_OFFER, new model_1.MosaicId([666, 999])).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0].mosaicId.toDTO().id[0]).to.be.equal(666);
                expect(response[0].mosaicId.toDTO().id[1]).to.be.equal(777);
                expect(response[0].owner.publicKey).to.be.equal('a'.repeat(64));
                expect(response[0].amount.compact()).to.be.equal(22222);
                expect(response[0].price).to.be.equal(888);
                expect(response[0].initialAmount.compact()).to.be.equal(33333);
                expect(response[0].initialCost.compact()).to.be.equal(44444);
                expect(response[0].deadline.toDTO()[0]).to.be.equal(888);
                expect(response[0].deadline.toDTO()[1]).to.be.equal(999);
                done();
            });
        });
    });
});
//# sourceMappingURL=ExchangeHttp.spec.js.map