"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.ChainConfigHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
describe('ChainConfigHttp', () => {
    describe('getChainConfig', () => {
        const dto = {
            networkConfig: {
                height: model_1.UInt64.fromUint(666).toDTO(),
                networkConfig: 'some network config',
                supportedEntityVersions: 'some supported entity versions'
            }
        };
        beforeEach(() => {
            sandbox.on(client.configRoutesApi, 'getConfig', (number) => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getChainConfig(666).subscribe(response => {
                expect(response.height.compact()).to.be.equal(666);
                expect(response.networkConfig).to.be.equal('some network config');
                expect(response.supportedEntityVersions).to.be.equal('some supported entity versions');
                done();
            });
        });
    });
});
//# sourceMappingURL=ChainConfigHttp.spec.js.map