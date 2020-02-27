"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const rxjs_1 = require("rxjs");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.MosaicHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('MosaicHttp', () => {
    describe('getMosaic', () => {
        const mosaicId = new model_1.MosaicId([66666, 99999]);
        const dto = {
            meta: {
                id: 'some meta id'
            },
            mosaic: {
                mosaicId: mosaicId.toDTO().id,
                supply: model_1.UInt64.fromUint(1000000).toDTO(),
                height: model_1.UInt64.fromUint(666).toDTO(),
                owner: publicAccount.publicKey,
                revision: 33333,
                properties: [{
                        value: model_1.UInt64.fromUint(3).toDTO(),
                    }, {
                        value: model_1.UInt64.fromUint(5).toDTO(),
                    }, {
                        value: model_1.UInt64.fromUint(12345).toDTO() // duration
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.mosaicRoutesApi, 'getMosaic', () => Promise.resolve(dto));
            sandbox.on(client, 'getNetworkTypeObservable', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMosaic(mosaicId).subscribe(response => {
                expect(response.metaId).to.be.equal('some meta id');
                expect(response.divisibility).to.be.equal(5);
                expect(response.isSupplyMutable()).to.be.equal(true);
                expect(response.isTransferable()).to.be.equal(true);
                expect(response.duration.compact()).to.be.equal(12345);
                expect(response.height.compact()).to.be.equal(666);
                expect(response.mosaicId.toDTO().id[0]).to.be.equal(66666);
                expect(response.mosaicId.toDTO().id[1]).to.be.equal(99999);
                expect(response.owner.publicKey).to.be.equal(publicAccount.publicKey);
                expect(response.revision).to.be.equal(33333);
                expect(response.supply.compact()).to.be.equal(1000000);
                done();
            });
        });
    });
    describe('getMosaics', () => {
        const mosaicId = new model_1.MosaicId([66666, 99999]);
        const dto = {
            meta: {
                id: 'some meta id'
            },
            mosaic: {
                mosaicId: mosaicId.toDTO().id,
                supply: model_1.UInt64.fromUint(1000000).toDTO(),
                height: model_1.UInt64.fromUint(666).toDTO(),
                owner: publicAccount.publicKey,
                revision: 33333,
                properties: [{
                        value: model_1.UInt64.fromUint(3).toDTO(),
                    }, {
                        value: model_1.UInt64.fromUint(5).toDTO(),
                    }, {
                        value: model_1.UInt64.fromUint(12345).toDTO() // duration
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.mosaicRoutesApi, 'getMosaics', () => Promise.resolve([dto]));
            sandbox.on(client, 'getNetworkTypeObservable', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMosaics([mosaicId]).subscribe(responses => {
                expect(responses.length).to.be.equal(1);
                responses.forEach(response => {
                    expect(response.metaId).to.be.equal('some meta id');
                    expect(response.divisibility).to.be.equal(5);
                    expect(response.isSupplyMutable()).to.be.equal(true);
                    expect(response.isTransferable()).to.be.equal(true);
                    expect(response.duration.compact()).to.be.equal(12345);
                    expect(response.height.compact()).to.be.equal(666);
                    expect(response.mosaicId.toDTO().id[0]).to.be.equal(66666);
                    expect(response.mosaicId.toDTO().id[1]).to.be.equal(99999);
                    expect(response.owner.publicKey).to.be.equal(publicAccount.publicKey);
                    expect(response.revision).to.be.equal(33333);
                    expect(response.supply.compact()).to.be.equal(1000000);
                });
                done();
            });
        });
    });
    describe('getMosaicsNames', () => {
        const mosaicId = new model_1.MosaicId([66666, 99999]);
        const dto = {
            mosaicId: mosaicId.toDTO().id,
            names: [
                'some.name',
                'some.other.name'
            ]
        };
        beforeEach(() => {
            sandbox.on(client.mosaicRoutesApi, 'getMosaicsNames', () => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMosaicsNames([mosaicId]).subscribe(responses => {
                expect(responses.length).to.be.equal(1);
                responses.forEach(response => {
                    expect(response.mosaicId.toDTO().id[0]).to.be.equal(66666);
                    expect(response.mosaicId.toDTO().id[1]).to.be.equal(99999);
                    expect(response.names.length).to.be.equal(2);
                    expect(response.names[0].name).to.be.equal('some.name');
                    expect(response.names[1].name).to.be.equal('some.other.name');
                });
                done();
            });
        });
    });
});
//# sourceMappingURL=MosaicHttp.spec.js.map