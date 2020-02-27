"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.NetworkHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('NetworkHttp', () => {
    describe('getNetworkType - unsupported', () => {
        const dto = {
            name: 'unsupported'
        };
        beforeEach(() => {
            sandbox.on(client.networkRoutesApi, 'getNetworkType', () => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getNetworkType().subscribe(_ => done('failed'), error => {
                expect(error.message).to.be.equal('network unsupported is not supported yet by the sdk');
                done();
            });
        });
    });
    describe('getNetworkType', () => {
        let i = 0;
        const nameValue = [
            ['mijinTest', model_1.NetworkType.MIJIN_TEST],
            ['mijin', model_1.NetworkType.MIJIN],
            ['testnet', model_1.NetworkType.TEST_NET],
            ['publicTest', model_1.NetworkType.TEST_NET],
            ['privateTest', model_1.NetworkType.PRIVATE_TEST],
            ['mainnet', model_1.NetworkType.MAIN_NET],
            ['public', model_1.NetworkType.MAIN_NET],
            ['private', model_1.NetworkType.PRIVATE]
        ];
        const getDto = (idx) => Promise.resolve({
            name: nameValue[idx][0]
        });
        beforeEach(() => {
            sandbox.on(client.networkRoutesApi, 'getNetworkType', () => Promise.resolve(getDto(i)));
        });
        afterEach(() => {
            sandbox.restore();
        });
        nameValue.forEach(value => {
            it('should call api client', (done) => {
                client.getNetworkType().subscribe(response => {
                    expect(response).to.be.equal(value[1]);
                    i += 1;
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=NetworkHttp.spec.js.map