"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const assert_1 = require("assert");
const createFromDto = require("../../src/infrastructure/transaction/CreateTransactionFromDTO");
const dtoMapping = require("../../src/core/utils/DtoMapping");
const model_1 = require("../../src/model/model");
const format_1 = require("../../src/core/format");
const rxjs_1 = require("rxjs");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.AccountHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('AccountHttp', () => {
    describe('getAccountInfo', () => {
        const dto = {
            meta: 'some-meta',
            account: {
                address: format_1.Convert.uint8ToHex(format_1.RawAddress.stringToAddress(address.plain())),
                addressHeight: model_1.UInt64.fromUint(666).toDTO(),
                publicKey: publicAccount.publicKey,
                publicKeyHeight: model_1.UInt64.fromUint(777).toDTO(),
                mosaics: [
                    {
                        id: model_1.UInt64.fromUint(888).toDTO(),
                        amount: model_1.UInt64.fromUint(999).toDTO()
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountInfo', (tx) => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountInfo(address).subscribe(response => {
                expect(response.meta).to.be.equal(dto.meta);
                expect(response.address.plain()).to.be.equal(model_1.Address.createFromRawAddress(format_1.RawAddress.addressToString(format_1.Convert.hexToUint8(dto.account.address))).plain());
                assert_1.deepEqual(response.addressHeight.toDTO(), dto.account.addressHeight);
                expect(response.publicKey).to.be.equal(dto.account.publicKey);
                expect(response.publicAccount.publicKey).to.be.equal(dto.account.publicKey);
                assert_1.deepEqual(response.publicKeyHeight.toDTO(), dto.account.publicKeyHeight);
                expect(response.mosaics.length).to.be.equal(dto.account.mosaics.length);
                assert_1.deepEqual(response.mosaics[0].id.toDTO().id, dto.account.mosaics[0].id);
                assert_1.deepEqual(response.mosaics[0].amount.toDTO(), dto.account.mosaics[0].amount);
                done();
            });
        });
    });
    describe('getAccountsInfo', () => {
        const dto = {
            meta: 'some-meta',
            account: {
                address: format_1.Convert.uint8ToHex(format_1.RawAddress.stringToAddress(address.plain())),
                addressHeight: model_1.UInt64.fromUint(666).toDTO(),
                publicKey: publicAccount.publicKey,
                publicKeyHeight: model_1.UInt64.fromUint(777).toDTO(),
                mosaics: [
                    {
                        id: model_1.UInt64.fromUint(888).toDTO(),
                        amount: model_1.UInt64.fromUint(999).toDTO()
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountsInfo', (tx) => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountsInfo([address]).subscribe(responses => {
                expect(responses.length).to.be.equal(1);
                responses.forEach(response => {
                    expect(response.meta).to.be.equal(dto.meta);
                    expect(response.address.plain()).to.be.equal(model_1.Address.createFromRawAddress(format_1.RawAddress.addressToString(format_1.Convert.hexToUint8(dto.account.address))).plain());
                    assert_1.deepEqual(response.addressHeight.toDTO(), dto.account.addressHeight);
                    expect(response.publicKey).to.be.equal(dto.account.publicKey);
                    expect(response.publicAccount.publicKey).to.be.equal(dto.account.publicKey);
                    assert_1.deepEqual(response.publicKeyHeight.toDTO(), dto.account.publicKeyHeight);
                    expect(response.mosaics.length).to.be.equal(dto.account.mosaics.length);
                    assert_1.deepEqual(response.mosaics[0].id.toDTO().id, dto.account.mosaics[0].id);
                    assert_1.deepEqual(response.mosaics[0].amount.toDTO(), dto.account.mosaics[0].amount);
                });
                done();
            });
        });
    });
    describe('getAccountRestrictions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountRestrictions', (tx) => Promise.resolve('api called'));
            sandbox.on(dtoMapping.DtoMapping, 'extractAccountRestrictionFromDto', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountRestrictions(address).subscribe(response => {
                expect(response).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('getAccountRestrictionsFromAccounts', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountRestrictionsFromAccounts', (tx) => Promise.resolve(['api called']));
            sandbox.on(dtoMapping.DtoMapping, 'extractAccountRestrictionFromDto', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountRestrictionsFromAccounts([address]).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('getAccountsNames', () => {
        const dto = {
            address: format_1.Convert.uint8ToHex(format_1.RawAddress.stringToAddress(address.plain())),
            names: ['some.name']
        };
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountsNames', (tx) => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountsNames([address]).subscribe(responses => {
                expect(responses.length).to.be.equal(1);
                responses.forEach(response => {
                    expect(response.address.plain()).to.be.equal(model_1.Address.createFromRawAddress(format_1.RawAddress.addressToString(format_1.Convert.hexToUint8(dto.address))).plain());
                    expect(response.names.length).to.be.equal(1);
                    expect(response.names[0].name).to.be.equal('some.name');
                });
                done();
            });
        });
    });
    describe('getMultisigAccountInfo', () => {
        const dto = {
            multisig: {
                account: publicAccount.publicKey,
                minApproval: 2,
                minRemoval: 3,
                cosignatories: [publicAccount.publicKey],
                multisigAccounts: [publicAccount.publicKey]
            }
        };
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountMultisig', (tx) => Promise.resolve(dto));
            sandbox.on(client.networkHttp, 'getNetworkType', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMultisigAccountInfo(address).subscribe(response => {
                expect(response.account.publicKey).to.be.equal(dto.multisig.account);
                expect(response.minApproval).to.be.equal(dto.multisig.minApproval);
                expect(response.minRemoval).to.be.equal(dto.multisig.minRemoval);
                expect(response.cosignatories.length).to.be.equal(1);
                expect(response.cosignatories[0].publicKey).to.be.equal(dto.multisig.cosignatories[0]);
                expect(response.multisigAccounts.length).to.be.equal(1);
                expect(response.multisigAccounts[0].publicKey).to.be.equal(dto.multisig.multisigAccounts[0]);
                done();
            });
        });
    });
    describe('getMultisigAccountGraphInfo', () => {
        const dto = {
            level: 666,
            multisigEntries: [{
                    multisig: {
                        account: publicAccount.publicKey,
                        minApproval: 2,
                        minRemoval: 3,
                        cosignatories: [publicAccount.publicKey],
                        multisigAccounts: [publicAccount.publicKey]
                    }
                }]
        };
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'getAccountMultisigGraph', (tx) => Promise.resolve([dto]));
            sandbox.on(client.networkHttp, 'getNetworkType', () => rxjs_1.of(model_1.NetworkType.MIJIN_TEST));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMultisigAccountGraphInfo(address).subscribe(responses => {
                expect(responses.multisigAccounts.size).to.be.equal(1);
                expect(responses.multisigAccounts.get(666)).not.to.be.undefined;
                responses.multisigAccounts.get(666).forEach(response => {
                    expect(dto.multisigEntries.length).to.be.equal(1);
                    expect(response.account.publicKey).to.be.equal(dto.multisigEntries[0].multisig.account);
                    expect(response.minApproval).to.be.equal(dto.multisigEntries[0].multisig.minApproval);
                    expect(response.minRemoval).to.be.equal(dto.multisigEntries[0].multisig.minRemoval);
                    expect(response.cosignatories.length).to.be.equal(1);
                    expect(response.cosignatories[0].publicKey).to.be.equal(dto.multisigEntries[0].multisig.cosignatories[0]);
                    expect(response.multisigAccounts.length).to.be.equal(1);
                    expect(response.multisigAccounts[0].publicKey).to.be.equal(dto.multisigEntries[0].multisig.multisigAccounts[0]);
                });
                done();
            });
        });
    });
    describe('transactions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'transactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.transactions(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('incomingTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'incomingTransactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.incomingTransactions(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('outgoingTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'outgoingTransactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.outgoingTransactions(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('unconfirmedTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'unconfirmedTransactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.unconfirmedTransactions(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('aggregateBondedTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.accountRoutesApi, 'partialTransactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.aggregateBondedTransactions(publicAccount).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
});
//# sourceMappingURL=AccountHttp.spec.js.map