"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const assert_1 = require("assert");
const createFromDto = require("../../src/infrastructure/transaction/CreateTransactionFromDTO");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.TransactionHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
describe('TransactionHttp', () => {
    describe('getTransaction', () => {
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'getTransaction', (tx) => Promise.resolve('api called'));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            const txId = 'some-txid';
            client.getTransaction(txId).subscribe(response => {
                expect(response).to.be.equal('deserialization called');
                done();
            });
        });
    });
    describe('getTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'getTransactions', (tx) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            const txId = 'some-txid';
            client.getTransactions([txId]).subscribe(response => {
                assert_1.deepEqual(response, ['deserialization called']);
                done();
            });
        });
    });
    describe('getTransactionStatus', () => {
        const dto = {
            status: 'some status',
            group: 'some group',
            hash: 'some hash',
            deadline: undefined,
            height: undefined
        };
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'getTransactionStatus', (txId) => Promise.resolve(dto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            const txId = 'some-txid';
            client.getTransactionStatus(txId).subscribe(response => {
                assert_1.deepEqual(response, dto);
                done();
            });
        });
    });
    describe('getTransactionsStatuses', () => {
        const dto = {
            status: 'some status',
            group: 'some group',
            hash: 'some hash',
            deadline: undefined,
            height: undefined
        };
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'getTransactionsStatuses', (txId) => Promise.resolve([dto]));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            const txId = 'some-txid';
            client.getTransactionsStatuses([txId]).subscribe(response => {
                assert_1.deepEqual(response, [dto]);
                done();
            });
        });
    });
    describe('announce', () => {
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'announceTransaction', (tx) => Promise.resolve({ message: 'some message' }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.announce({}).subscribe(response => {
                expect(response.message).to.be.equal('some message');
                done();
            });
        });
    });
    describe('announceAggregateBonded', () => {
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'announcePartialTransaction', (tx) => {
                return Promise.resolve({ message: 'some message' });
            });
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should throw if not aggregate bonded', (done) => {
            client.announceAggregateBonded({ type: model_1.TransactionType.AGGREGATE_COMPLETE }).subscribe(_ => done('failed'), error => {
                expect(error).to.be.equal('Only Transaction Type 0x4241 is allowed for announce aggregate bonded');
                done();
            });
        });
        it('should call api client', (done) => {
            client.announceAggregateBonded({ type: model_1.TransactionType.AGGREGATE_BONDED }).subscribe(response => {
                expect(response.message).to.be.equal('some message');
                done();
            });
        });
    });
    describe('announceAggregateBondedCosignature', () => {
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'announceCosignatureTransaction', (tx) => Promise.resolve({ message: 'some message' }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.announceAggregateBondedCosignature({}).subscribe(response => {
                expect(response.message).to.be.equal('some message');
                done();
            });
        });
    });
    describe('getTransactionEffectiveFee', () => {
        const tx = {
            transactionInfo: {
                height: model_1.UInt64.fromUint(666666)
            },
            size: 999
        };
        const blockDto = {
            block: {
                feeMultiplier: 2
            }
        };
        beforeEach(() => {
            sandbox.on(client.transactionRoutesApi, 'getTransaction', (tx) => Promise.resolve('api called'));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? tx : { not: 'ok' });
            sandbox.on(client.blockRoutesApi, 'getBlockByHeight', (number) => Promise.resolve(blockDto));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            const txId = 'some-txid';
            client.getTransactionEffectiveFee(txId).subscribe(response => {
                expect(response).to.be.equal(1998);
                done();
            });
        });
    });
});
//# sourceMappingURL=TransactionHttp.spec.js.map