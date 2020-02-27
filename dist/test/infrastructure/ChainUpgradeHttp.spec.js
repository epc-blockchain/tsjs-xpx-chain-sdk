"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.ChainUpgradeHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
describe('ChainUpgradeHttp', () => {
    describe('getChainUpgrade', () => {
        const dto = {
            blockchainUpgrade: {
                height: model_1.UInt64.fromUint(666).toDTO(),
                blockChainVersion: model_1.UInt64.fromUint(999).toDTO()
            }
        };
        beforeEach(() => {
            sandbox.on(client.upgradeRoutesApi, 'getUpgrade', () => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getChainUpgrade(666).subscribe(response => {
                expect(response.height.compact()).to.be.equal(666);
                expect(response.catapultVersion.compact()).to.be.equal(999);
                done();
            });
        });
    });
});
//# sourceMappingURL=ChainUpgradeHttp.spec.js.map