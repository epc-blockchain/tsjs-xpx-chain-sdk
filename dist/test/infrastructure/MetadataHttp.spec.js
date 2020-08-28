"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const spies = require("chai-spies");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
const model_1 = require("../../src/model/model");
const format_1 = require("../../src/core/format");
chai.use(spies);
const expect = chai.expect;
const client = new infrastructure_1.MetadataHttp('http://nonexistent:0');
const sandbox = chai.spy.sandbox();
const networkType = model_1.NetworkType.MIJIN_TEST;
const publicAccount = model_1.PublicAccount.createFromPublicKey('6'.repeat(64), networkType);
const address = publicAccount.address;
describe('MetadataHttp', () => {
    describe('getAccountMetadata', () => {
        const dto = {
            metadata: {
                metadataId: format_1.Convert.uint8ToHex(format_1.RawAddress.stringToAddress(address.plain())),
                metadataType: 666,
                fields: [
                    {
                        key: 'some key',
                        value: 'some value'
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.metadataRoutesApi, 'getAccountMetadata', (number) => Promise.resolve({ body: dto }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getAccountMetadata(address.plain()).subscribe(response => {
                expect(response.metadataId.plain()).to.be.equal(address.plain());
                expect(response.metadataType).to.be.equal(666);
                expect(response.fields.length).to.be.equal(1);
                expect(response.fields[0].key).to.be.equal('some key');
                expect(response.fields[0].value).to.be.equal('some value');
                done();
            });
        });
    });
    describe('getNamespaceMetadata', () => {
        const namespaceId = new model_1.NamespaceId([66666, 99999]);
        const dto = {
            metadata: {
                metadataId: namespaceId.toDTO().id,
                metadataType: 666,
                fields: [
                    {
                        key: 'some key',
                        value: 'some value'
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.metadataRoutesApi, 'getNamespaceMetadata', (number) => Promise.resolve({ body: dto }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getNamespaceMetadata(namespaceId).subscribe(response => {
                expect(response.metadataId.toDTO().id[0]).to.be.equal(66666);
                expect(response.metadataId.toDTO().id[1]).to.be.equal(99999);
                expect(response.metadataType).to.be.equal(666);
                expect(response.fields.length).to.be.equal(1);
                expect(response.fields[0].key).to.be.equal('some key');
                expect(response.fields[0].value).to.be.equal('some value');
                done();
            });
        });
    });
    describe('getMosaicMetadata', () => {
        const mosaicId = new model_1.MosaicId([66666, 99999]);
        const dto = {
            metadata: {
                metadataId: mosaicId.toDTO().id,
                metadataType: 666,
                fields: [
                    {
                        key: 'some key',
                        value: 'some value'
                    }
                ]
            }
        };
        beforeEach(() => {
            sandbox.on(client.metadataRoutesApi, 'getMosaicMetadata', (number) => Promise.resolve({ body: dto }));
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should call api client', (done) => {
            client.getMosaicMetadata(mosaicId).subscribe(response => {
                expect(response.metadataId.toDTO().id[0]).to.be.equal(66666);
                expect(response.metadataId.toDTO().id[1]).to.be.equal(99999);
                expect(response.metadataType).to.be.equal(666);
                expect(response.fields.length).to.be.equal(1);
                expect(response.fields[0].key).to.be.equal('some key');
                expect(response.fields[0].value).to.be.equal('some value');
                done();
            });
        });
    });
});
//# sourceMappingURL=MetadataHttp.spec.js.map