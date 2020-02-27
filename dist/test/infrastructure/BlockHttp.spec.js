"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const createFromDto = require("../../src/infrastructure/transaction/CreateTransactionFromDTO");
const model_1 = require("../../src/model/model");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.BlockHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('BlockHttp', () => {
    describe('getBlockTransactions', () => {
        beforeEach(() => {
            sandbox.on(client.blockRoutesApi, 'getBlockTransactions', (number) => Promise.resolve(['api called']));
            sandbox.on(createFromDto, 'CreateTransactionFromDTO', (dto) => dto === 'api called' ? 'deserialization called' : 'not ok');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getBlockTransactions(666).subscribe(response => {
                expect(response.length).to.be.equal(1);
                expect(response[0]).to.be.equal('deserialization called');
                done();
            });
        });
    });
});
//# sourceMappingURL=BlockHttp.spec.js.map