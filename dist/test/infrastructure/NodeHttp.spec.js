"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const assert_1 = require("assert");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.NodeHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('NodeHttp', () => {
    describe('getNodeInfo', () => {
        const dto = {
            publicKey: 'some public key',
            port: 7890,
            networkIdentifier: model_1.NetworkType.MIJIN_TEST,
            version: 666,
            roles: 3,
            host: 'some host',
            friendlyName: 'some friendly name',
        };
        beforeEach(() => {
            sandbox.on(client.nodeRoutesApi, 'getNodeInfo', () => Promise.resolve({ body: dto }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getNodeInfo().subscribe(result => {
                assert_1.deepEqual(result, dto);
                done();
            });
        });
    });
    describe('getNodeTime', () => {
        const dto = {
            communicationTimestamps: {
                sendTimestamp: [666666, 999999],
                receiveTimestamp: [777777, 888888]
            }
        };
        beforeEach(() => {
            sandbox.on(client.nodeRoutesApi, 'getNodeTime', () => Promise.resolve({ body: dto }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getNodeTime().subscribe(result => {
                assert_1.deepEqual(result.sendTimeStamp, dto.communicationTimestamps.sendTimestamp);
                assert_1.deepEqual(result.receiveTimeStamp, dto.communicationTimestamps.receiveTimestamp);
                done();
            });
        });
    });
});
//# sourceMappingURL=NodeHttp.spec.js.map