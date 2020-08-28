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
const format_1 = require("../../core/format");
const utf8_1 = require("utf8");
const Address_1 = require("../../model/account/Address");
const PublicAccount_1 = require("../../model/account/PublicAccount");
const NetworkType_1 = require("../../model/blockchain/NetworkType");
const Mosaic_1 = require("../../model/mosaic/Mosaic");
const MosaicId_1 = require("../../model/mosaic/MosaicId");
const MosaicNonce_1 = require("../../model/mosaic/MosaicNonce");
const MosaicProperties_1 = require("../../model/mosaic/MosaicProperties");
const NamespaceId_1 = require("../../model/namespace/NamespaceId");
const NamespaceType_1 = require("../../model/namespace/NamespaceType");
const AccountRestrictionModification_1 = require("../../model/transaction/AccountRestrictionModification");
const AggregateTransactionCosignature_1 = require("../../model/transaction/AggregateTransactionCosignature");
const Deadline_1 = require("../../model/transaction/Deadline");
const EncryptedMessage_1 = require("../../model/transaction/EncryptedMessage");
const MessageType_1 = require("../../model/transaction/MessageType");
const MultisigCosignatoryModification_1 = require("../../model/transaction/MultisigCosignatoryModification");
const PlainMessage_1 = require("../../model/transaction/PlainMessage");
const SignedTransaction_1 = require("../../model/transaction/SignedTransaction");
const TransactionType_1 = require("../../model/transaction/TransactionType");
const UInt64_1 = require("../../model/UInt64");
const model_1 = require("../../model/model");
const AddExchangeOffer_1 = require("../../model/transaction/AddExchangeOffer");
const ExchangeOffer_1 = require("../../model/transaction/ExchangeOffer");
const RemoveExchangeOffer_1 = require("../../model/transaction/RemoveExchangeOffer");
/**
 * @internal
 * @param transactionBinary - The transaction binary data
 * @returns {Transaction}
 * @constructor
 */
exports.CreateTransactionFromPayload = (transactionBinary) => {
    // Transaction byte size data
    const sizeLength = 8;
    const signatureLength = 128;
    const publicKeyLength = 64;
    const versionLength = 8;
    const typeLength = 4;
    const feeLength = 16;
    const deadlineLength = 16;
    // Transaction byte data positions
    const signatureOffset = sizeLength;
    const publicKeyOffset = signatureOffset + signatureLength;
    const versionOffset = publicKeyOffset + publicKeyLength;
    const typeOffset = versionOffset + versionLength;
    const feeOffset = typeOffset + typeLength;
    const deadlineOffset = feeOffset + feeLength;
    const transactionOffset = deadlineOffset + deadlineLength;
    // Transaction byte data
    const networkType = extractNetwork(transactionBinary.substring(versionOffset, typeOffset));
    const type = extractNumberFromHex(transactionBinary.substring(typeOffset, feeOffset));
    const deadline = UInt64_1.UInt64.fromHex(reverse(transactionBinary.substring(deadlineOffset, transactionOffset))).toDTO();
    const transactionData = transactionBinary.substring(transactionOffset);
    return CreateTransaction(type, transactionData, networkType, deadline);
};
/**
 * @internal
 * @param type - Transaction type
 * @param transactionData - Details per specific transaction type
 * @param networkType - Network type
 * @param deadline - Deadline
 * @returns {Transaction}
 */
const CreateTransaction = (type, transactionData, networkType, deadline) => {
    const factory = new model_1.TransactionBuilderFactory();
    factory.networkType = networkType;
    factory.createNewDeadlineFn = () => Deadline_1.Deadline.createFromDTO(deadline);
    switch (type) {
        case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_ADDRESS:
        case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_OPERATION:
        case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_MOSAIC:
            const propertyTypeLength = 2;
            const modificationCountOffset = propertyTypeLength;
            const modificationArrayOffset = modificationCountOffset + propertyTypeLength;
            // read bytes
            const propertyType = transactionData.substring(0, propertyTypeLength);
            const modifications = transactionData.substring(modificationArrayOffset, transactionData.length);
            const modificationArray = modifications.match(/.{1,52}/g);
            switch (type) {
                case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_ADDRESS:
                    return factory.accountRestrictionAddress()
                        .restrictionType(extractNumberFromHex(propertyType))
                        .modifications(modificationArray ? modificationArray.map((modification) => new AccountRestrictionModification_1.AccountRestrictionModification(extractNumberFromHex(modification.substring(0, 2)), Address_1.Address.createFromEncoded(modification.substring(2, modification.length)).plain())) : [])
                        .build();
                case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_MOSAIC:
                    return factory.accountRestrictionMosaic()
                        .restrictionType(extractNumberFromHex(propertyType))
                        .modifications(modificationArray ? modificationArray.map((modification) => new AccountRestrictionModification_1.AccountRestrictionModification(extractNumberFromHex(modification.substring(0, 2)), UInt64_1.UInt64.fromHex(reverse(modification.substring(2, modification.length))).toDTO())) : [])
                        .build();
                case TransactionType_1.TransactionType.MODIFY_ACCOUNT_RESTRICTION_OPERATION:
                    return factory.accountRestrictionOperation()
                        .restrictionType(extractNumberFromHex(propertyType))
                        .modifications(modificationArray ? modificationArray.map((modification) => new AccountRestrictionModification_1.AccountRestrictionModification(extractNumberFromHex(modification.substring(0, 2)), extractNumberFromHex(modification.substring(2, modification.length)))) : [])
                        .build();
            }
            throw new Error('Account restriction transaction type not recognised.');
        case TransactionType_1.TransactionType.LINK_ACCOUNT:
            // read bytes
            const remoteAccountKey = transactionData.substring(0, 64);
            const linkAction = transactionData.substring(64, 66);
            return factory.accountLink()
                .remoteAccountKey(remoteAccountKey)
                .linkAction(extractNumberFromHex(linkAction))
                .build();
        case TransactionType_1.TransactionType.ADDRESS_ALIAS:
            // read bytes
            const addressAliasAction = transactionData.substring(0, 2);
            const addressAliasNamespaceId = transactionData.substring(2, 18);
            const addressAliasAddress = transactionData.substring(18);
            return factory.addressAlias()
                .actionType(extractNumberFromHex(addressAliasAction))
                .namespaceId(new NamespaceId_1.NamespaceId(UInt64_1.UInt64.fromHex(reverse(addressAliasNamespaceId)).toDTO()))
                .address(Address_1.Address.createFromEncoded(addressAliasAddress))
                .build();
        case TransactionType_1.TransactionType.MOSAIC_ALIAS:
            const mosaicAliasActionLength = 2;
            // read bytes
            const mosaicAliasAction = transactionData.substring(0, mosaicAliasActionLength);
            const mosaicAliasNamespaceId = transactionData.substring(mosaicAliasActionLength, 18);
            const mosaicAliasMosaicId = transactionData.substring(18);
            return factory.mosaicAlias()
                .actionType(extractNumberFromHex(mosaicAliasAction))
                .namespaceId(new NamespaceId_1.NamespaceId(UInt64_1.UInt64.fromHex(reverse(mosaicAliasNamespaceId)).toDTO()))
                .mosaicId(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(mosaicAliasMosaicId)).toDTO()))
                .build();
        case TransactionType_1.TransactionType.MOSAIC_DEFINITION:
            const mosaicDefMosaicNonceLength = 8;
            const mosaicDefMosaicIdLength = 16;
            const mosaicDefPropsNumLength = 2;
            const mosaicDefPropsFlagsLength = 2;
            const mosaicDefDivisibilityLength = 2;
            const mosaicDefDurationIndLength = 2;
            const mosaicDefDurationLength = 16;
            const mosaicIdOffset = mosaicDefMosaicNonceLength;
            const propsOffset = mosaicIdOffset + mosaicDefMosaicIdLength;
            const flagsOffset = propsOffset + mosaicDefPropsNumLength;
            const divisibilityOffset = flagsOffset + mosaicDefPropsFlagsLength;
            const durationIndOffset = divisibilityOffset + mosaicDefDivisibilityLength;
            const durationOffset = durationIndOffset + mosaicDefDurationIndLength;
            // read bytes
            const mosaicNonce = transactionData.substring(0, mosaicDefMosaicNonceLength);
            const mosaicId = transactionData.substring(mosaicIdOffset, propsOffset);
            const props = transactionData.substring(propsOffset, flagsOffset);
            const flags = extractNumberFromHex(transactionData.substring(flagsOffset, divisibilityOffset));
            const divisibility = transactionData.substring(divisibilityOffset, durationIndOffset);
            const durationInd = transactionData.substring(durationIndOffset, durationOffset);
            const duration = transactionData.substring(durationOffset);
            const regexArray = mosaicNonce.match(/.{1,2}/g);
            const nonceArray = regexArray ? regexArray.map((n) => {
                return extractNumberFromHex(n);
            }) : [];
            return factory.mosaicDefinition()
                .mosaicNonce(new MosaicNonce_1.MosaicNonce(new Uint8Array(nonceArray)))
                .mosaicId(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(mosaicId)).toDTO()))
                .mosaicProperties(MosaicProperties_1.MosaicProperties.create({
                supplyMutable: (flags & 1) === 1,
                transferable: (flags & 2) === 2,
                divisibility: extractNumberFromHex(divisibility),
                duration: duration ? UInt64_1.UInt64.fromHex(reverse(duration)) : undefined,
            }))
                .build();
        case TransactionType_1.TransactionType.MOSAIC_SUPPLY_CHANGE:
            // read bytes
            const mosaicSupMosaicId = transactionData.substring(0, 16);
            const mosaicSupDirection = transactionData.substring(16, 18);
            const delta = transactionData.substring(18, 34);
            return factory.mosaicSupplyChange()
                .mosaicId(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(mosaicSupMosaicId)).toDTO()))
                .direction(extractNumberFromHex(mosaicSupDirection))
                .delta(UInt64_1.UInt64.fromHex(reverse(delta)))
                .build();
        case TransactionType_1.TransactionType.REGISTER_NAMESPACE:
            // read bytes
            const namespaceType = extractNumberFromHex(transactionData.substring(0, 2));
            const nameSpaceDurationParentId = transactionData.substring(2, 18);
            const nameSpaceId = transactionData.substring(18, 34);
            const nameSize = transactionData.substring(34, 36);
            const nameSpaceName = transactionData.substring(36);
            return namespaceType === NamespaceType_1.NamespaceType.RootNamespace ?
                factory.registerRootNamespace()
                    .namespaceName(decodeHexUtf8(nameSpaceName))
                    .duration(UInt64_1.UInt64.fromHex(reverse(nameSpaceDurationParentId)))
                    .build()
                : factory.registerSubNamespace()
                    .namespaceName(decodeHexUtf8(nameSpaceName))
                    .parentNamespace(new NamespaceId_1.NamespaceId(UInt64_1.UInt64.fromHex(reverse(nameSpaceDurationParentId)).toDTO()))
                    .build();
        case TransactionType_1.TransactionType.TRANSFER:
            // read bytes
            const transferRecipient = transactionData.substring(0, 50);
            const transferMessageSize = extractNumberFromHex(transactionData.substring(50, 54));
            const transferMessageAndMosaicSubString = transactionData.substring(56);
            const transferMessageType = extractNumberFromHex(transferMessageAndMosaicSubString.substring(0, 2));
            const transferMessage = transferMessageAndMosaicSubString.substring(2, (transferMessageSize - 1) * 2 + 2);
            const transferMosaic = transferMessageAndMosaicSubString.substring(transferMessageSize * 2);
            const transferMosaicArray = transferMosaic.match(/.{1,32}/g);
            return factory.transfer()
                .recipient(Address_1.Address.createFromEncoded(transferRecipient))
                .mosaics(transferMosaicArray ? transferMosaicArray.map((mosaic) => new Mosaic_1.Mosaic(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(mosaic.substring(0, 16))).toDTO()), UInt64_1.UInt64.fromHex(reverse(mosaic.substring(16))))) : [])
                .message(extractMessage(transferMessageType, transferMessage))
                .build();
        case TransactionType_1.TransactionType.SECRET_LOCK:
            // read bytes
            const secretLockMosaic = transactionData.substring(0, 32);
            const secretLockDuration = transactionData.substring(32, 48);
            const secretLockHashAlgorithm = extractNumberFromHex(transactionData.substring(48, 50));
            const secretLockSecret = transactionData.substring(50, transactionData.length - 50);
            const secretLockRecipient = transactionData.substring(transactionData.length - 50);
            return factory.secretLock()
                .mosaic(new Mosaic_1.Mosaic(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(secretLockMosaic.substring(0, 16))).toDTO()), UInt64_1.UInt64.fromHex(reverse(secretLockMosaic.substring(16)))))
                .duration(UInt64_1.UInt64.fromHex(reverse(secretLockDuration)))
                .hashType(secretLockHashAlgorithm)
                .secret(secretLockSecret)
                .recipient(Address_1.Address.createFromEncoded(secretLockRecipient))
                .build();
        case TransactionType_1.TransactionType.SECRET_PROOF:
            // read bytes
            const secretProofHashAlgorithm = extractNumberFromHex(transactionData.substring(0, 2));
            const secretProofSecretLength = 64;
            const secretProofSecret = transactionData.substring(2, 66);
            const secretProofRecipient = transactionData.substring(66, 116);
            const secretProofSize = transactionData.substring(116, 120);
            const secretProofProof = transactionData.substring(120);
            return factory.secretProof()
                .hashType(secretProofHashAlgorithm)
                .secret(secretProofSecret)
                .recipient(Address_1.Address.createFromEncoded(secretProofRecipient))
                .proof(secretProofProof)
                .build();
        case TransactionType_1.TransactionType.MODIFY_MULTISIG_ACCOUNT:
            // read bytes
            const minRemovalDelta = extractNumberFromHex(transactionData.substring(0, 2));
            const minApprovalDelta = extractNumberFromHex(transactionData.substring(2, 4));
            const modificationsCount = extractNumberFromHex(transactionData.substring(4, 6));
            const multiSigModificationSubString = transactionData.substring(6);
            const multiSigModificationArray = multiSigModificationSubString.match(/.{1,66}/g);
            return factory.modifyMultisig()
                .minApprovalDelta(minApprovalDelta)
                .minRemovalDelta(minRemovalDelta)
                .modifications(multiSigModificationArray ? multiSigModificationArray.map((modification) => new MultisigCosignatoryModification_1.MultisigCosignatoryModification(extractNumberFromHex(modification.substring(0, 2)), PublicAccount_1.PublicAccount.createFromPublicKey(modification.substring(2), networkType))) : [])
                .build();
        case TransactionType_1.TransactionType.LOCK:
            // read bytes
            const hashLockMosaic = transactionData.substring(0, 32);
            const hashLockDuration = transactionData.substring(32, 48);
            const hashLockHash = transactionData.substring(48);
            return factory.lockFunds()
                .mosaic(new Mosaic_1.Mosaic(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(hashLockMosaic.substring(0, 16))).toDTO()), UInt64_1.UInt64.fromHex(reverse(hashLockMosaic.substring(16)))))
                .duration(UInt64_1.UInt64.fromHex(reverse(hashLockDuration)))
                .signedTransaction(new SignedTransaction_1.SignedTransaction('', hashLockHash, '', TransactionType_1.TransactionType.AGGREGATE_BONDED, networkType))
                .build();
        case TransactionType_1.TransactionType.AGGREGATE_COMPLETE:
            // read bytes
            const payloadSize = extractNumberFromHex(transactionData.substring(0, 8)) * 2;
            const cosignatures = transactionData.substring(payloadSize + 8);
            const innerTransactionArray = parseInnerTransactionFromBinary(transactionData.substring(8, payloadSize + 8));
            const consignatureArray = cosignatures.match(/.{1,192}/g);
            return factory.aggregateComplete()
                .innerTransactions(innerTransactionArray.map((innerTransaction) => {
                const txType = extractNumberFromHex(innerTransaction.substring(72, 76));
                const transaction = CreateTransaction(txType, innerTransaction.substring(76), networkType, deadline);
                return transaction.toAggregate(PublicAccount_1.PublicAccount.createFromPublicKey(innerTransaction.substring(0, 64), networkType));
            }))
                .cosignatures(consignatureArray ? consignatureArray.map((cosignature) => new AggregateTransactionCosignature_1.AggregateTransactionCosignature(cosignature.substring(64, 192), PublicAccount_1.PublicAccount.createFromPublicKey(cosignature.substring(0, 64), networkType))) : [])
                .build();
        case TransactionType_1.TransactionType.AGGREGATE_BONDED:
            const bondedPayloadSize = extractNumberFromHex(transactionData.substring(0, 8)) * 2;
            const bondedCosignatures = transactionData.substring(bondedPayloadSize + 8);
            const bondedInnerTransactionArray = parseInnerTransactionFromBinary(transactionData.substring(8, bondedPayloadSize + 8));
            const bondedConsignatureArray = bondedCosignatures.match(/.{1,192}/g);
            return factory.aggregateBonded()
                .innerTransactions(bondedInnerTransactionArray.map((innerTransaction) => {
                const txType = extractNumberFromHex(innerTransaction.substring(72, 76));
                const transaction = CreateTransaction(txType, innerTransaction.substring(76), networkType, deadline);
                return transaction.toAggregate(PublicAccount_1.PublicAccount.createFromPublicKey(innerTransaction.substring(0, 64), networkType));
            }))
                .cosignatures(bondedConsignatureArray ? bondedConsignatureArray.map((cosignature) => new AggregateTransactionCosignature_1.AggregateTransactionCosignature(cosignature.substring(64, 192), PublicAccount_1.PublicAccount.createFromPublicKey(cosignature.substring(0, 64), networkType))) : [])
                .build();
        case TransactionType_1.TransactionType.MODIFY_ACCOUNT_METADATA:
        case TransactionType_1.TransactionType.MODIFY_MOSAIC_METADATA:
        case TransactionType_1.TransactionType.MODIFY_NAMESPACE_METADATA:
            const metadataType = extractNumberFromHex(transactionData.substring(0, 2));
            const metadataIdLength = type === TransactionType_1.TransactionType.MODIFY_ACCOUNT_METADATA ? 25 : 8;
            const metadataId = transactionData.substring(2, 2 + metadataIdLength * 2);
            const metadataModifications = extractMetadataModifications(transactionData.substring(2 + metadataIdLength * 2));
            if (type === TransactionType_1.TransactionType.MODIFY_ACCOUNT_METADATA) {
                return factory.accountMetadata()
                    .address(Address_1.Address.createFromEncoded(metadataId))
                    .modifications(metadataModifications)
                    .build();
            }
            else if (type === TransactionType_1.TransactionType.MODIFY_MOSAIC_METADATA) {
                return factory.mosaicMetadata()
                    .mosaicId(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(metadataId)).toDTO()))
                    .modifications(metadataModifications)
                    .build();
            }
            else { // if type === TransactionType.MODIFY_NAMESPACE_METADATA
                return factory.namespaceMetadata()
                    .namespaceId(new NamespaceId_1.NamespaceId(UInt64_1.UInt64.fromHex(reverse(metadataId)).toDTO()))
                    .modifications(metadataModifications)
                    .build();
            }
        case TransactionType_1.TransactionType.CHAIN_CONFIGURE:
            const applyHeightDelta = transactionData.substring(0, 16);
            const networkConfigLength = extractNumberFromHex(transactionData.substring(16, 20));
            const supportedEntityVersionsLength = extractNumberFromHex(transactionData.substring(20, 24));
            const networkConfig = transactionData.substring(24, 24 + networkConfigLength * 2);
            const supportedEntityVersions = transactionData.substring(24 + networkConfigLength * 2, 24 + networkConfigLength * 2 + supportedEntityVersionsLength * 2);
            return factory.chainConfig()
                .applyHeightDelta(UInt64_1.UInt64.fromHex(reverse(applyHeightDelta)))
                .networkConfig(decodeHexRaw(networkConfig))
                .supportedEntityVersions(decodeHexRaw(supportedEntityVersions))
                .build();
        case TransactionType_1.TransactionType.CHAIN_UPGRADE:
            const upgradePeriod = transactionData.substring(0, 16);
            const newBlockchainVersion = transactionData.substring(16, 32);
            return factory.chainUpgrade()
                .upgradePeriod(UInt64_1.UInt64.fromHex(reverse(upgradePeriod)))
                .newBlockchainVersion(UInt64_1.UInt64.fromHex(reverse(newBlockchainVersion)))
                .build();
        case TransactionType_1.TransactionType.ADD_EXCHANGE_OFFER:
            // const numOffers = extractNumberFromHex(transactionData.substring(0, 2));
            const addOffersArray = transactionData.substr(2).match(/.{66}/g) || [];
            return factory.addExchangeOffer()
                .offers(addOffersArray.map(o => {
                const id = o.substring(0, 16);
                const amount = o.substring(16, 32);
                const cost = o.substring(32, 48);
                const type = extractNumberFromHex(o.substring(48, 50));
                const duration = o.substring(50, 66);
                return new AddExchangeOffer_1.AddExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(id)).toDTO()), UInt64_1.UInt64.fromHex(reverse(amount)), UInt64_1.UInt64.fromHex(reverse(cost)), type, UInt64_1.UInt64.fromHex(reverse(duration)));
            }))
                .build();
        case TransactionType_1.TransactionType.EXCHANGE_OFFER:
            // const numOffers = extractNumberFromHex(transactionData.substring(0, 2));
            const offersArray = transactionData.substr(2).match(/.{114}/g) || [];
            return factory.exchangeOffer()
                .offers(offersArray.map(o => {
                const id = o.substring(0, 16);
                const amount = o.substring(16, 32);
                const cost = o.substring(32, 48);
                const type = extractNumberFromHex(o.substring(48, 50));
                const owner = o.substring(50, 114);
                return new ExchangeOffer_1.ExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(id)).toDTO()), UInt64_1.UInt64.fromHex(reverse(amount)), UInt64_1.UInt64.fromHex(reverse(cost)), type, PublicAccount_1.PublicAccount.createFromPublicKey(owner, networkType));
            }))
                .build();
        case TransactionType_1.TransactionType.REMOVE_EXCHANGE_OFFER:
            // const numOffers = extractNumberFromHex(transactionData.substring(0, 2));
            const removeOffersArray = transactionData.substr(2).match(/.{18}/g) || [];
            return factory.removeExchangeOffer()
                .offers(removeOffersArray.map(o => {
                const id = o.substring(0, 16);
                const offerType = extractNumberFromHex(o.substring(16, 18));
                return new RemoveExchangeOffer_1.RemoveExchangeOffer(new MosaicId_1.MosaicId(UInt64_1.UInt64.fromHex(reverse(id)).toDTO()), offerType);
            }))
                .build();
        default:
            throw new Error('Transaction type not implemented yet.');
    }
};
/**
 * @internal
 * @param modificationsStringHex
 * @returns {MetadataModification[]}
 */
const extractMetadataModifications = (modificationsStringHex) => {
    let modificationArr = [];
    let offset = 0;
    while (offset < modificationsStringHex.length) {
        const modificationSize = extractNumberFromHex(modificationsStringHex.substring(offset, offset + 8));
        const modificationType = extractNumberFromHex(modificationsStringHex.substring(offset + 8, offset + 10));
        const keyLength = extractNumberFromHex(modificationsStringHex.substring(offset + 10, offset + 12));
        const valueLength = extractNumberFromHex(modificationsStringHex.substring(offset + 12, offset + 16));
        const keyHex = modificationsStringHex.substring(offset + 16, offset + 16 + keyLength * 2);
        const valueHex = modificationsStringHex.substring(offset + 16 + keyLength * 2, offset + 16 + keyLength * 2 + valueLength * 2);
        if (modificationSize !== 8 + keyLength + valueLength) {
            throw new Error('MetadataModification parse error');
        }
        modificationArr.push(new model_1.MetadataModification(modificationType, decodeHexUtf8(keyHex), decodeHexUtf8(valueHex)));
        offset += modificationSize * 2;
    }
    return modificationArr;
};
/**
 * @internal
 * @param hexValue - Hex representation of the number
 * @returns {number}
 */
const extractNumberFromHex = (hexValue) => {
    return parseInt(format_1.Convert.uint8ToHex(format_1.Convert.hexToUint8(hexValue).reverse()), 16);
};
/**
 * @internal
 * @param versionHex - Transaction version in hex
 * @returns {NetworkType}
 */
const extractNetwork = (versionHex) => {
    const networkType = format_1.Convert.hexToUint8(versionHex)[3];
    if (networkType === NetworkType_1.NetworkType.MAIN_NET) {
        return NetworkType_1.NetworkType.MAIN_NET;
    }
    else if (networkType === NetworkType_1.NetworkType.TEST_NET) {
        return NetworkType_1.NetworkType.TEST_NET;
    }
    else if (networkType === NetworkType_1.NetworkType.MIJIN) {
        return NetworkType_1.NetworkType.MIJIN;
    }
    else if (networkType === NetworkType_1.NetworkType.MIJIN_TEST) {
        return NetworkType_1.NetworkType.MIJIN_TEST;
    }
    else if (networkType === NetworkType_1.NetworkType.PRIVATE) {
        return NetworkType_1.NetworkType.PRIVATE;
    }
    else if (networkType === NetworkType_1.NetworkType.PRIVATE_TEST) {
        return (NetworkType_1.NetworkType.PRIVATE_TEST);
    }
    throw new Error('Unimplemented network type');
};
/**
 * @internal
 * @param hex
 * @returns {string}
 */
const reverse = (hex) => {
    return format_1.Convert.uint8ToHex(format_1.Convert.hexToUint8(hex).reverse());
};
/**
 * @internal
 * @param innerTransactionBinary - Inner transaction binary data
 * @returns {Array}
 */
const parseInnerTransactionFromBinary = (innerTransactionBinary) => {
    const embeddedTransaction = [];
    let innerBinary = innerTransactionBinary;
    while (innerBinary.length) {
        const payloadSize = extractNumberFromHex(innerBinary.substring(0, 8)) * 2;
        const innerTransaction = innerBinary.substring(8, payloadSize);
        embeddedTransaction.push(innerTransaction);
        innerBinary = innerBinary.substring(payloadSize);
    }
    return embeddedTransaction;
};
/**
 * @internal
 * @param hex - Hex input
 * @returns {string}
 */
const decodeHexUtf8 = (hex) => {
    const str = decodeHexRaw(hex);
    try {
        return utf8_1.decode(str);
    }
    catch (e) {
        return str;
    }
};
/**
 * @internal
 * @param hex - Hex input
 * @returns {string}
 */
const decodeHexRaw = (hex) => {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
};
/**
 * @internal
 * @param messageType - Message Type
 * @param payload - Message Payload
 * @returns {Message}
 */
const extractMessage = (messageType, payload) => {
    if (messageType === MessageType_1.MessageType.PlainMessage) {
        return PlainMessage_1.PlainMessage.createFromPayload(payload);
    }
    else if (messageType === MessageType_1.MessageType.EncryptedMessage) {
        return EncryptedMessage_1.EncryptedMessage.createFromPayload(payload);
    }
    else {
        throw new Error('Invalid message type');
    }
};
//# sourceMappingURL=CreateTransactionFromPayload.js.map