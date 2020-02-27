"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.ChainHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
describe('ChainHttp', () => {
    describe('getBlockchainHeight', () => {
        const dto = {
            height: model_1.UInt64.fromUint(666).toDTO(),
        };
        beforeEach(() => {
            sandbox.on(client.chainRoutesApi, 'getBlockchainHeight', () => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getBlockchainHeight().subscribe(response => {
                expect(response.compact()).to.be.equal(666);
                done();
            });
        });
    });
    describe('getBlockchainScore', () => {
        const dto = {
            scoreLow: model_1.UInt64.fromUint(666).toDTO(),
            scoreHigh: model_1.UInt64.fromUint(999).toDTO(),
        };
        beforeEach(() => {
            sandbox.on(client.chainRoutesApi, 'getBlockchainScore', () => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getBlockchainScore().subscribe(response => {
                expect(response.scoreLow.compact()).to.be.equal(666);
                expect(response.scoreHigh.compact()).to.be.equal(999);
                done();
            });
        });
    });
});
//# sourceMappingURL=ChainHttp.spec.js.map