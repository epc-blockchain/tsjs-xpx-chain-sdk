"use strict";
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const js_sha3_1 = require("js-sha3");
const format_1 = require("../../src/core/format");
const Address_1 = require("../../src/model/account/Address");
const PublicAccount_1 = require("../../src/model/account/PublicAccount");
const RestrictionModificationType_1 = require("../../src/model/account/RestrictionModificationType");
const RestrictionType_1 = require("../../src/model/account/RestrictionType");
const NetworkType_1 = require("../../src/model/blockchain/NetworkType");
const MosaicId_1 = require("../../src/model/mosaic/MosaicId");
const MosaicNonce_1 = require("../../src/model/mosaic/MosaicNonce");
const MosaicProperties_1 = require("../../src/model/mosaic/MosaicProperties");
const MosaicSupplyType_1 = require("../../src/model/mosaic/MosaicSupplyType");
const NetworkCurrencyMosaic_1 = require("../../src/model/mosaic/NetworkCurrencyMosaic");
const AliasActionType_1 = require("../../src/model/namespace/AliasActionType");
const NamespaceId_1 = require("../../src/model/namespace/NamespaceId");
const AccountLinkTransaction_1 = require("../../src/model/transaction/AccountLinkTransaction");
const AccountRestrictionModification_1 = require("../../src/model/transaction/AccountRestrictionModification");
const AccountRestrictionTransaction_1 = require("../../src/model/transaction/AccountRestrictionTransaction");
const AddressAliasTransaction_1 = require("../../src/model/transaction/AddressAliasTransaction");
const AggregateTransaction_1 = require("../../src/model/transaction/AggregateTransaction");
const Deadline_1 = require("../../src/model/transaction/Deadline");
const HashType_1 = require("../../src/model/transaction/HashType");
const LinkAction_1 = require("../../src/model/transaction/LinkAction");
const LockFundsTransaction_1 = require("../../src/model/transaction/LockFundsTransaction");
const ModifyMultisigAccountTransaction_1 = require("../../src/model/transaction/ModifyMultisigAccountTransaction");
const MosaicAliasTransaction_1 = require("../../src/model/transaction/MosaicAliasTransaction");
const MosaicDefinitionTransaction_1 = require("../../src/model/transaction/MosaicDefinitionTransaction");
const MosaicSupplyChangeTransaction_1 = require("../../src/model/transaction/MosaicSupplyChangeTransaction");
const MultisigCosignatoryModification_1 = require("../../src/model/transaction/MultisigCosignatoryModification");
const MultisigCosignatoryModificationType_1 = require("../../src/model/transaction/MultisigCosignatoryModificationType");
const PlainMessage_1 = require("../../src/model/transaction/PlainMessage");
const RegisterNamespaceTransaction_1 = require("../../src/model/transaction/RegisterNamespaceTransaction");
const SecretLockTransaction_1 = require("../../src/model/transaction/SecretLockTransaction");
const SecretProofTransaction_1 = require("../../src/model/transaction/SecretProofTransaction");
const TransactionType_1 = require("../../src/model/transaction/TransactionType");
const TransferTransaction_1 = require("../../src/model/transaction/TransferTransaction");
const UInt64_1 = require("../../src/model/UInt64");
const conf_spec_1 = require("../conf/conf.spec");
const assert_1 = require("assert");
const model_1 = require("../../src/model/model");
describe('SerializeTransactionToJSON', () => {
    let account;
    before(() => {
        account = conf_spec_1.TestingAccount;
    });
    it('should create AccountLinkTransaction', () => {
        const accountLinkTransaction = AccountLinkTransaction_1.AccountLinkTransaction.create(Deadline_1.Deadline.create(), account.publicKey, LinkAction_1.LinkAction.Link, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = accountLinkTransaction.toJSON();
        chai_1.expect(json.transaction.remoteAccountKey).to.be.equal(account.publicKey);
        chai_1.expect(json.transaction.action).to.be.equal(LinkAction_1.LinkAction.Link);
    });
    it('should create AccountRestrictionAddressTransaction', () => {
        const address = Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC');
        const addressRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForAddress(RestrictionModificationType_1.RestrictionModificationType.Add, address);
        const addressRestrictionTransaction = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createAddressRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.AllowAddress, [addressRestrictionFilter], NetworkType_1.NetworkType.MIJIN_TEST);
        const json = addressRestrictionTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_ADDRESS);
        chai_1.expect(json.transaction.restrictionType).to.be.equal(RestrictionType_1.RestrictionType.AllowAddress);
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(RestrictionModificationType_1.RestrictionModificationType.Add);
        chai_1.expect(json.transaction.modifications[0].value).to.be.equal(address.plain());
    });
    it('should create AccountRestrictionMosaicTransaction', () => {
        const mosaicId = new MosaicId_1.MosaicId([2262289484, 3405110546]);
        const mosaicRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForMosaic(RestrictionModificationType_1.RestrictionModificationType.Add, mosaicId);
        const mosaicRestrictionTransaction = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createMosaicRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.AllowMosaic, [mosaicRestrictionFilter], NetworkType_1.NetworkType.MIJIN_TEST);
        const json = mosaicRestrictionTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_MOSAIC);
        chai_1.expect(json.transaction.restrictionType).to.be.equal(RestrictionType_1.RestrictionType.AllowMosaic);
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(RestrictionModificationType_1.RestrictionModificationType.Add);
        assert_1.deepEqual(json.transaction.modifications[0].value, mosaicId.id.toDTO());
    });
    it('should create AccountRestrictionOperationTransaction', () => {
        const operation = TransactionType_1.TransactionType.ADDRESS_ALIAS;
        const operationRestrictionFilter = AccountRestrictionModification_1.AccountRestrictionModification.createForOperation(RestrictionModificationType_1.RestrictionModificationType.Add, operation);
        const operationRestrictionTransaction = AccountRestrictionTransaction_1.AccountRestrictionTransaction.createOperationRestrictionModificationTransaction(Deadline_1.Deadline.create(), RestrictionType_1.RestrictionType.AllowTransaction, [operationRestrictionFilter], NetworkType_1.NetworkType.MIJIN_TEST);
        const json = operationRestrictionTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_OPERATION);
        chai_1.expect(json.transaction.restrictionType).to.be.equal(RestrictionType_1.RestrictionType.AllowTransaction);
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(RestrictionModificationType_1.RestrictionModificationType.Add);
        chai_1.expect(json.transaction.modifications[0].value).to.be.equal(operation);
    });
    it('should create AddressAliasTransaction', () => {
        const namespaceId = new NamespaceId_1.NamespaceId([33347626, 3779697293]);
        const address = Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC');
        const addressAliasTransaction = AddressAliasTransaction_1.AddressAliasTransaction.create(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Link, namespaceId, address, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = addressAliasTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.ADDRESS_ALIAS);
        chai_1.expect(json.transaction.aliasAction).to.be.equal(AliasActionType_1.AliasActionType.Link);
        assert_1.deepEqual(json.transaction.namespaceId.id, namespaceId.id.toDTO());
        chai_1.expect(json.transaction.address.address).to.be.equal(address.plain());
    });
    it('should create MosaicAliasTransaction', () => {
        const namespaceId = new NamespaceId_1.NamespaceId([33347626, 3779697293]);
        const mosaicId = new MosaicId_1.MosaicId([2262289484, 3405110546]);
        const mosaicAliasTransaction = MosaicAliasTransaction_1.MosaicAliasTransaction.create(Deadline_1.Deadline.create(), AliasActionType_1.AliasActionType.Link, namespaceId, mosaicId, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = mosaicAliasTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MOSAIC_ALIAS);
        chai_1.expect(json.transaction.aliasAction).to.be.equal(AliasActionType_1.AliasActionType.Link);
        assert_1.deepEqual(json.transaction.namespaceId.id, namespaceId.id.toDTO());
        assert_1.deepEqual(json.transaction.mosaicId.id, mosaicId.id.toDTO());
    });
    it('should create MosaicDefinitionTransaction', () => {
        const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), new MosaicNonce_1.MosaicNonce(new Uint8Array([0xE6, 0xDE, 0x84, 0xB8])), // nonce
        new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(1).toDTO()), // ID
        MosaicProperties_1.MosaicProperties.create({
            supplyMutable: false,
            transferable: false,
            divisibility: 3,
            duration: UInt64_1.UInt64.fromUint(1000),
        }), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = mosaicDefinitionTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MOSAIC_DEFINITION);
        chai_1.expect(json.transaction.properties.length).to.be.equal(3);
        chai_1.expect(new UInt64_1.UInt64(json.transaction.properties[1].value).compact()).to.be.equal(UInt64_1.UInt64.fromUint(3).compact());
        chai_1.expect(new UInt64_1.UInt64(json.transaction.properties[2].value).compact()).to.be.equal(UInt64_1.UInt64.fromUint(1000).compact());
        chai_1.expect(new UInt64_1.UInt64(json.transaction.properties[2].value).lower).to.be.equal(UInt64_1.UInt64.fromUint(1000).lower);
    });
    it('should create MosaicDefinitionTransaction without duration', () => {
        const mosaicDefinitionTransaction = MosaicDefinitionTransaction_1.MosaicDefinitionTransaction.create(Deadline_1.Deadline.create(), new MosaicNonce_1.MosaicNonce(new Uint8Array([0xE6, 0xDE, 0x84, 0xB8])), // nonce
        new MosaicId_1.MosaicId(UInt64_1.UInt64.fromUint(1).toDTO()), // ID
        MosaicProperties_1.MosaicProperties.create({
            supplyMutable: false,
            transferable: false,
            divisibility: 3,
        }), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = mosaicDefinitionTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MOSAIC_DEFINITION);
        chai_1.expect(json.transaction.properties.length).to.be.equal(2);
    });
    it('should create MosaicSupplyChangeTransaction', () => {
        const mosaicId = new MosaicId_1.MosaicId([2262289484, 3405110546]);
        const mosaicSupplyChangeTransaction = MosaicSupplyChangeTransaction_1.MosaicSupplyChangeTransaction.create(Deadline_1.Deadline.create(), mosaicId, MosaicSupplyType_1.MosaicSupplyType.Increase, UInt64_1.UInt64.fromUint(10), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = mosaicSupplyChangeTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MOSAIC_SUPPLY_CHANGE);
        chai_1.expect(json.transaction.direction).to.be.equal(MosaicSupplyType_1.MosaicSupplyType.Increase);
        assert_1.deepEqual(json.transaction.delta, UInt64_1.UInt64.fromUint(10).toDTO());
    });
    it('should create TransferTransaction with an address', () => {
        const address = Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC');
        const mosaic = NetworkCurrencyMosaic_1.NetworkCurrencyMosaic.createRelative(100);
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), address, [
            mosaic,
        ], PlainMessage_1.PlainMessage.create('test-message'), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = transferTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.TRANSFER);
        chai_1.expect(json.transaction.recipient.address).to.be.equal(address.plain());
        chai_1.expect(json.transaction.message.payload).to.be.equal('746573742d6d657373616765');
        chai_1.expect(json.transaction.message.type).to.be.equal(0);
        chai_1.expect(json.transaction.mosaics.length).to.be.equal(1);
        assert_1.deepEqual(json.transaction.mosaics[0].id, mosaic.id.id.toDTO());
        assert_1.deepEqual(json.transaction.mosaics[0].amount, mosaic.amount.toDTO());
    });
    it('should create TransferTransaction with a namespace', () => {
        const namespaceId = new NamespaceId_1.NamespaceId('some-namespace');
        const mosaic = NetworkCurrencyMosaic_1.NetworkCurrencyMosaic.createRelative(100);
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), namespaceId, [
            mosaic,
        ], PlainMessage_1.PlainMessage.create('test-message'), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = transferTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.TRANSFER);
        chai_1.expect(json.transaction.recipient.fullName).to.be.equal('some-namespace');
        assert_1.deepEqual(json.transaction.recipient.id, namespaceId.id.toDTO());
        chai_1.expect(json.transaction.message.payload).to.be.equal('746573742d6d657373616765');
        chai_1.expect(json.transaction.message.type).to.be.equal(0);
        chai_1.expect(json.transaction.mosaics.length).to.be.equal(1);
        assert_1.deepEqual(json.transaction.mosaics[0].id, mosaic.id.id.toDTO());
        assert_1.deepEqual(json.transaction.mosaics[0].amount, mosaic.amount.toDTO());
    });
    it('should create SecretLockTransaction', () => {
        const mosaic = NetworkCurrencyMosaic_1.NetworkCurrencyMosaic.createAbsolute(10);
        const proof = 'B778A39A3663719DFC5E48C9D78431B1E45C2AF9DF538782BF199C189DABEAC7';
        const secret = js_sha3_1.sha3_256.create().update(format_1.Convert.hexToUint8(proof)).hex();
        const recipient = Address_1.Address.createFromRawAddress('SDBDG4IT43MPCW2W4CBBCSJJT42AYALQN7A4VVWL');
        const secretLockTransaction = SecretLockTransaction_1.SecretLockTransaction.create(Deadline_1.Deadline.create(), mosaic, UInt64_1.UInt64.fromUint(100), HashType_1.HashType.Op_Sha3_256, secret, recipient, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = secretLockTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.SECRET_LOCK);
        assert_1.deepEqual(json.transaction.mosaicId, mosaic.id.id.toDTO());
        assert_1.deepEqual(json.transaction.amount, UInt64_1.UInt64.fromUint(10).toDTO());
        assert_1.deepEqual(json.transaction.duration, UInt64_1.UInt64.fromUint(100).toDTO());
        chai_1.expect(json.transaction.hashAlgorithm).to.be.equal(HashType_1.HashType.Op_Sha3_256);
        chai_1.expect(json.transaction.secret).to.be.equal(secret);
        chai_1.expect(json.transaction.recipient.address).to.be.equal(recipient.plain());
    });
    it('should create SecretProofTransaction', () => {
        const proof = 'B778A39A3663719DFC5E48C9D78431B1E45C2AF9DF538782BF199C189DABEAC7';
        const secretProofTransaction = SecretProofTransaction_1.SecretProofTransaction.create(Deadline_1.Deadline.create(), HashType_1.HashType.Op_Sha3_256, js_sha3_1.sha3_256.create().update(format_1.Convert.hexToUint8(proof)).hex(), account.address, proof, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = secretProofTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.SECRET_PROOF);
        chai_1.expect(json.transaction.hashAlgorithm).to.be.equal(HashType_1.HashType.Op_Sha3_256);
        chai_1.expect(json.transaction.secret).to.be.equal(js_sha3_1.sha3_256.create().update(format_1.Convert.hexToUint8(proof)).hex());
        chai_1.expect(json.transaction.proof).to.be.equal(proof);
        chai_1.expect(json.transaction.recipient.address).to.be.equal(account.address.plain());
    });
    it('should create ModifyMultiSigTransaction', () => {
        const publicKey = 'B0F93CBEE49EEB9953C6F3985B15A4F238E205584D8F924C621CBE4D7AC6EC24';
        const modifyMultisigAccountTransaction = ModifyMultisigAccountTransaction_1.ModifyMultisigAccountTransaction.create(Deadline_1.Deadline.create(), 2, 1, [new MultisigCosignatoryModification_1.MultisigCosignatoryModification(MultisigCosignatoryModificationType_1.MultisigCosignatoryModificationType.Add, PublicAccount_1.PublicAccount.createFromPublicKey(publicKey, NetworkType_1.NetworkType.MIJIN_TEST))], NetworkType_1.NetworkType.MIJIN_TEST);
        const json = modifyMultisigAccountTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_MULTISIG_ACCOUNT);
        chai_1.expect(json.transaction.minApprovalDelta).to.be.equal(2);
        chai_1.expect(json.transaction.minRemovalDelta).to.be.equal(1);
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(MultisigCosignatoryModificationType_1.MultisigCosignatoryModificationType.Add);
        chai_1.expect(json.transaction.modifications[0].cosignatoryPublicKey).to.be.equal(publicKey);
    });
    it('should create AggregatedTransaction - Complete', () => {
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC'), [], PlainMessage_1.PlainMessage.create('test-message'), NetworkType_1.NetworkType.MIJIN_TEST);
        const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createComplete(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(account.publicAccount)], NetworkType_1.NetworkType.MIJIN_TEST, []);
        const json = aggregateTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.AGGREGATE_COMPLETE);
        chai_1.expect(json.transaction.transactions.length).to.be.equal(1);
        chai_1.expect(json.transaction.transactions[0].transaction.type).to.be.equal(TransactionType_1.TransactionType.TRANSFER);
    });
    it('should create AggregatedTransaction - Bonded', () => {
        const transferTransaction = TransferTransaction_1.TransferTransaction.create(Deadline_1.Deadline.create(), Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC'), [], PlainMessage_1.PlainMessage.create('test-message'), NetworkType_1.NetworkType.MIJIN_TEST);
        const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [transferTransaction.toAggregate(account.publicAccount)], NetworkType_1.NetworkType.MIJIN_TEST, []);
        const json = aggregateTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.AGGREGATE_BONDED);
        chai_1.expect(json.transaction.transactions.length).to.be.equal(1);
        chai_1.expect(json.transaction.transactions[0].transaction.type).to.be.equal(TransactionType_1.TransactionType.TRANSFER);
    });
    it('should create LockFundTransaction', () => {
        const generationHash = '57F7DA205008026C776CB6AED843393F04CD458E0AA2D9F1D5F31A402072B2D6';
        const mosaic = NetworkCurrencyMosaic_1.NetworkCurrencyMosaic.createRelative(10);
        const aggregateTransaction = AggregateTransaction_1.AggregateTransaction.createBonded(Deadline_1.Deadline.create(), [], NetworkType_1.NetworkType.MIJIN_TEST, []);
        const signedTransaction = account.sign(aggregateTransaction, generationHash);
        const lockTransaction = LockFundsTransaction_1.LockFundsTransaction.create(Deadline_1.Deadline.create(), mosaic, UInt64_1.UInt64.fromUint(10), signedTransaction, NetworkType_1.NetworkType.MIJIN_TEST);
        const json = lockTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.LOCK);
        chai_1.expect(json.transaction.hash).to.be.equal(signedTransaction.hash);
        assert_1.deepEqual(json.transaction.mosaicId, mosaic.id.id.toDTO());
        assert_1.deepEqual(json.transaction.amount, mosaic.amount.toDTO());
        assert_1.deepEqual(json.transaction.duration, UInt64_1.UInt64.fromUint(10).toDTO());
    });
    it('should create RegisterNamespaceTransaction - Root', () => {
        const registerNamespaceTransaction = RegisterNamespaceTransaction_1.RegisterNamespaceTransaction.createRootNamespace(Deadline_1.Deadline.create(), 'root-test-namespace', UInt64_1.UInt64.fromUint(1000), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = registerNamespaceTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.REGISTER_NAMESPACE);
        chai_1.expect(json.transaction.namespaceType).to.be.equal(model_1.NamespaceType.RootNamespace);
        chai_1.expect(json.transaction.namespaceName).to.be.equal('root-test-namespace');
    });
    it('should create RegisterNamespaceTransaction - Sub', () => {
        const registerNamespaceTransaction = RegisterNamespaceTransaction_1.RegisterNamespaceTransaction.createSubNamespace(Deadline_1.Deadline.create(), 'sub-test-namespace', 'parent-test-namespace', NetworkType_1.NetworkType.MIJIN_TEST);
        const json = registerNamespaceTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.REGISTER_NAMESPACE);
        chai_1.expect(json.transaction.namespaceType).to.be.equal(model_1.NamespaceType.SubNamespace);
        chai_1.expect(json.transaction.namespaceName).to.be.equal('sub-test-namespace');
    });
    it('should create ModifyMetadataTransaction with address', () => {
        const address = Address_1.Address.createFromRawAddress('SBILTA367K2LX2FEXG5TFWAS7GEFYAGY7QLFBYKC');
        const key = 'someKey';
        const value = 'someValue';
        const modification = new model_1.MetadataModification(model_1.MetadataModificationType.REMOVE, key, value);
        const modifyMetadataTransaction = model_1.ModifyMetadataTransaction.createWithAddress(NetworkType_1.NetworkType.MIJIN_TEST, Deadline_1.Deadline.create(), address, [modification]);
        const json = modifyMetadataTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_ACCOUNT_METADATA);
        chai_1.expect(json.transaction.metadataType).to.be.equal(model_1.MetadataType.ADDRESS);
        chai_1.expect(json.transaction.metadataId).to.be.equal(address.plain());
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].key).to.be.equal(key);
        chai_1.expect(json.transaction.modifications[0].value).to.be.equal(value);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(model_1.MetadataModificationType.REMOVE);
    });
    it('should create ModifyMetadataTransaction with mosaic', () => {
        const mosaic = NetworkCurrencyMosaic_1.NetworkCurrencyMosaic.createRelative(10);
        const key = 'someKey';
        const value = 'someValue';
        const modification = new model_1.MetadataModification(model_1.MetadataModificationType.REMOVE, key, value);
        const modifyMetadataTransaction = model_1.ModifyMetadataTransaction.createWithMosaicId(NetworkType_1.NetworkType.MIJIN_TEST, Deadline_1.Deadline.create(), mosaic.id, [modification]);
        const json = modifyMetadataTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_MOSAIC_METADATA);
        chai_1.expect(json.transaction.metadataType).to.be.equal(model_1.MetadataType.MOSAIC);
        chai_1.expect(json.transaction.metadataId).to.be.equal(mosaic.id.toHex());
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].key).to.be.equal(key);
        chai_1.expect(json.transaction.modifications[0].value).to.be.equal(value);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(model_1.MetadataModificationType.REMOVE);
    });
    it('should create ModifyMetadataTransaction with namespace', () => {
        const namespaceId = new NamespaceId_1.NamespaceId('some-namespace');
        const key = 'someKey';
        const value = 'someValue';
        const modification = new model_1.MetadataModification(model_1.MetadataModificationType.REMOVE, key, value);
        const modifyMetadataTransaction = model_1.ModifyMetadataTransaction.createWithNamespaceId(NetworkType_1.NetworkType.MIJIN_TEST, Deadline_1.Deadline.create(), namespaceId, [modification]);
        const json = modifyMetadataTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.MODIFY_NAMESPACE_METADATA);
        chai_1.expect(json.transaction.metadataType).to.be.equal(model_1.MetadataType.NAMESPACE);
        chai_1.expect(json.transaction.metadataId).to.be.equal(namespaceId.toHex());
        chai_1.expect(json.transaction.modifications.length).to.be.equal(1);
        chai_1.expect(json.transaction.modifications[0].key).to.be.equal(key);
        chai_1.expect(json.transaction.modifications[0].value).to.be.equal(value);
        chai_1.expect(json.transaction.modifications[0].type).to.be.equal(model_1.MetadataModificationType.REMOVE);
    });
    it('should create ChainConfigTransaction', () => {
        const chainConfigureTransaction = model_1.ChainConfigTransaction.create(Deadline_1.Deadline.create(), UInt64_1.UInt64.fromUint(12345678901234567890), 'some-network-config', 'some-supported-entity-versions', NetworkType_1.NetworkType.MIJIN_TEST);
        const json = chainConfigureTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.CHAIN_CONFIGURE);
        assert_1.deepEqual(json.transaction.applyHeightDelta, UInt64_1.UInt64.fromUint(12345678901234567890).toDTO());
        chai_1.expect(json.transaction.networkConfig).to.be.equal('some-network-config');
        chai_1.expect(json.transaction.supportedEntityVersions).to.be.equal('some-supported-entity-versions');
    });
    it('should create ChainUpgradeTransaction', () => {
        const chainUpgradeTransaction = model_1.ChainUpgradeTransaction.create(Deadline_1.Deadline.create(), UInt64_1.UInt64.fromUint(1234), UInt64_1.UInt64.fromUint(12345678901234567890), NetworkType_1.NetworkType.MIJIN_TEST);
        const json = chainUpgradeTransaction.toJSON();
        chai_1.expect(json.transaction.type).to.be.equal(TransactionType_1.TransactionType.CHAIN_UPGRADE);
        assert_1.deepEqual(json.transaction.upgradePeriod, UInt64_1.UInt64.fromUint(1234).toDTO());
        assert_1.deepEqual(json.transaction.newBlockchainVersion, UInt64_1.UInt64.fromUint(12345678901234567890).toDTO());
    });
});
//# sourceMappingURL=SerializeTransactionToJSON.spec.js.map