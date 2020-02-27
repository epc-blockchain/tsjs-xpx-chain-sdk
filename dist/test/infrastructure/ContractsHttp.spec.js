"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const assert_1 = require("assert");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.ContractHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('ContractHttp', () => {
    describe('getAccountContract', () => {
        const dto = {
            contract: {
                multisig: 'some multisig',
                multisigAddress: 'some multisig address',
                start: model_1.UInt64.fromUint(666).toDTO(),
                duration: model_1.UInt64.fromUint(999).toDTO(),
                hash: 'some hash',
                customers: ['some customer'],
                executors: ['some executor'],
                verifiers: ['some verifier']
            }
        };
        beforeEach(() => {
            sandbox.on(client.contractRoutesApi, 'getAccountContract', () => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountContract(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                assert_1.deepEqual(Object.assign(Object.assign({}, response[0]), { start: response[0].start.toDTO(), duration: response[0].duration.toDTO() }), dto.contract);
                done();
            });
        });
    });
    describe('getAccountsContracts', () => {
        const dto = {
            contract: {
                multisig: 'some multisig',
                multisigAddress: 'some multisig address',
                start: model_1.UInt64.fromUint(666).toDTO(),
                duration: model_1.UInt64.fromUint(999).toDTO(),
                hash: 'some hash',
                customers: ['some customer'],
                executors: ['some executor'],
                verifiers: ['some verifier']
            }
        };
        beforeEach(() => {
            sandbox.on(client.contractRoutesApi, 'getAccountContracts', () => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountsContracts([publicAccount]).subscribe(response => {
                expect(response.length).to.be.equal(1);
                assert_1.deepEqual(Object.assign(Object.assign({}, response[0]), { start: response[0].start.toDTO(), duration: response[0].duration.toDTO() }), dto.contract);
                done();
            });
        });
    });
    describe('getContract', () => {
        const dto = {
            contract: {
                multisig: 'some multisig',
                multisigAddress: 'some multisig address',
                start: model_1.UInt64.fromUint(666).toDTO(),
                duration: model_1.UInt64.fromUint(999).toDTO(),
                hash: 'some hash',
                customers: ['some customer'],
                executors: ['some executor'],
                verifiers: ['some verifier']
            }
        };
        beforeEach(() => {
            sandbox.on(client.contractRoutesApi, 'getContract', () => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getContract(address).subscribe(response => {
                assert_1.deepEqual(Object.assign(Object.assign({}, response), { start: response.start.toDTO(), duration: response.duration.toDTO() }), dto.contract);
                done();
            });
        });
    });
    describe('getContracts', () => {
        const dto = {
            contract: {
                multisig: 'some multisig',
                multisigAddress: 'some multisig address',
                start: model_1.UInt64.fromUint(666).toDTO(),
                duration: model_1.UInt64.fromUint(999).toDTO(),
                hash: 'some hash',
                customers: ['some customer'],
                executors: ['some executor'],
                verifiers: ['some verifier']
            }
        };
        beforeEach(() => {
            sandbox.on(client.contractRoutesApi, 'getContracts', () => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getContracts([address]).subscribe(response => {
                expect(response.length).to.be.equal(1);
                assert_1.deepEqual(Object.assign(Object.assign({}, response[0]), { start: response[0].start.toDTO(), duration: response[0].duration.toDTO() }), dto.contract);
                done();
            });
        });
    });
});
//# sourceMappingURL=ContractsHttp.spec.js.map