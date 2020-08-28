"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(require("./accountDTO"));
__export(require("./accountExchangeDTO"));
__export(require("./accountIds"));
__export(require("./accountInfoDTO"));
__export(require("./accountLinkTransactionBodyDTO"));
__export(require("./accountLinkTransactionDTO"));
__export(require("./accountLinkTypeEnum"));
__export(require("./accountMetaDTO"));
__export(require("./accountNamesDTO"));
__export(require("./accountPropertiesDTO"));
__export(require("./accountPropertiesInfoDTO"));
__export(require("./accountPropertiesModificationDTO"));
__export(require("./accountPropertiesModificationTypeEnum"));
__export(require("./accountPropertiesTransactionBodyDTO"));
__export(require("./accountPropertiesTransactionDTO"));
__export(require("./accountPropertyDTO"));
__export(require("./accountPropertyTypeEnum"));
__export(require("./addExchangeOfferTransactionBodyDTO"));
__export(require("./addExchangeOfferTransactionDTO"));
__export(require("./addressAliasTransactionBodyDTO"));
__export(require("./addressAliasTransactionDTO"));
__export(require("./addressMetadataBodyDTO"));
__export(require("./addressMetadataDTO"));
__export(require("./addressMetadataDTOAllOf"));
__export(require("./addressMetadataInfoDTO"));
__export(require("./addressMetadataTransactionDTO"));
__export(require("./aggregateTransactionBodyDTO"));
__export(require("./aggregateTransactionDTO"));
__export(require("./aliasActionEnum"));
__export(require("./aliasDTO"));
__export(require("./aliasTypeEnum"));
__export(require("./announceTransactionInfoDTO"));
__export(require("./artifactExpiryReceiptDTO"));
__export(require("./artifactExpiryReceiptDTOAllOf"));
__export(require("./balanceChangeReceiptDTO"));
__export(require("./balanceChangeReceiptDTOAllOf"));
__export(require("./balanceTransferReceiptDTO"));
__export(require("./balanceTransferReceiptDTOAllOf"));
__export(require("./billingHistoryDTO"));
__export(require("./blockDTO"));
__export(require("./blockDTOAllOf"));
__export(require("./blockInfoDTO"));
__export(require("./blockMetaDTO"));
__export(require("./blockchainScoreDTO"));
__export(require("./blockchainUpgradeBodyDTO"));
__export(require("./blockchainUpgradeDTO"));
__export(require("./blockchainUpgradeTransactionDTO"));
__export(require("./communicationTimestamps"));
__export(require("./configDTO"));
__export(require("./cosignatoryModificationDTO"));
__export(require("./cosignature"));
__export(require("./cosignatureDTO"));
__export(require("./cosignatureDTOAllOf"));
__export(require("./driveDTO"));
__export(require("./driveFileSystemAddActionDTO"));
__export(require("./driveFileSystemTransactionBodyDTO"));
__export(require("./driveFileSystemTransactionDTO"));
__export(require("./driveFilesRewardTransactionDTO"));
__export(require("./embeddedAccountLinkTransactionDTO"));
__export(require("./embeddedAccountPropertiesTransactionDTO"));
__export(require("./embeddedAddressAliasTransactionDTO"));
__export(require("./embeddedAddressMetadataTransactionDTO"));
__export(require("./embeddedBlockchainUpgradeTransactionDTO"));
__export(require("./embeddedHashLockTransactionDTO"));
__export(require("./embeddedModifyMultisigAccountTransactionDTO"));
__export(require("./embeddedMosaicAliasTransactionDTO"));
__export(require("./embeddedMosaicDefinitionTransactionDTO"));
__export(require("./embeddedMosaicMetadataTransactionDTO"));
__export(require("./embeddedMosaicSupplyChangeTransactionDTO"));
__export(require("./embeddedNamespaceMetadataTransactionDTO"));
__export(require("./embeddedNetworkConfigTransactionDTO"));
__export(require("./embeddedRegisterNamespaceTransactionDTO"));
__export(require("./embeddedSecretLockTransactionDTO"));
__export(require("./embeddedSecretProofTransactionDTO"));
__export(require("./embeddedTransactionDTO"));
__export(require("./embeddedTransactionInfoDTO"));
__export(require("./embeddedTransactionMetaDTO"));
__export(require("./embeddedTransferTransactionDTO"));
__export(require("./endDriveTransactionDTO"));
__export(require("./endDriveVerificationTransactionDTO"));
__export(require("./entityDTO"));
__export(require("./entityTypeEnum"));
__export(require("./exchangeOfferTransactionBodyDTO"));
__export(require("./exchangeOfferTransactionDTO"));
__export(require("./exchangesDTO"));
__export(require("./failureVerificationDTO"));
__export(require("./fieldDTO"));
__export(require("./fileDTO"));
__export(require("./fileDepositDTO"));
__export(require("./filesDepositTransactionBodyDTO"));
__export(require("./filesDepositTransactionDTO"));
__export(require("./hashAlgorithmEnum"));
__export(require("./hashLockInfoDTO"));
__export(require("./hashLockTransactionBodyDTO"));
__export(require("./hashLockTransactionDTO"));
__export(require("./hashLockWithMeta"));
__export(require("./heightInfoDTO"));
__export(require("./inflationReceiptDTO"));
__export(require("./inflationReceiptDTOAllOf"));
__export(require("./inlineResponse200"));
__export(require("./inlineResponse2001"));
__export(require("./joinToDriveTransactionDTO"));
__export(require("./linkActionEnum"));
__export(require("./merklePathItem"));
__export(require("./merkleProofInfo"));
__export(require("./merkleProofInfoDTO"));
__export(require("./messageDTO"));
__export(require("./messageTypeEnum"));
__export(require("./metaLockDTO"));
__export(require("./metadataDTO"));
__export(require("./metadataIds"));
__export(require("./metadataModificationDTO"));
__export(require("./metadataModificationTypeEnum"));
__export(require("./metadataTypeEnum"));
__export(require("./modifyMultisigAccountTransactionBodyDTO"));
__export(require("./modifyMultisigAccountTransactionDTO"));
__export(require("./mosaicAliasTransactionBodyDTO"));
__export(require("./mosaicAliasTransactionDTO"));
__export(require("./mosaicDTO"));
__export(require("./mosaicDefinitionDTO"));
__export(require("./mosaicDefinitionTransactionBodyDTO"));
__export(require("./mosaicDefinitionTransactionDTO"));
__export(require("./mosaicDirectionEnum"));
__export(require("./mosaicIds"));
__export(require("./mosaicInfoDTO"));
__export(require("./mosaicMetaDTO"));
__export(require("./mosaicMetadataBodyDTO"));
__export(require("./mosaicMetadataDTO"));
__export(require("./mosaicMetadataDTOAllOf"));
__export(require("./mosaicMetadataInfoDTO"));
__export(require("./mosaicMetadataTransactionDTO"));
__export(require("./mosaicNamesDTO"));
__export(require("./mosaicPropertyDTO"));
__export(require("./mosaicPropertyIdEnum"));
__export(require("./mosaicRichListDTO"));
__export(require("./mosaicSupplyChangeTransactionBodyDTO"));
__export(require("./mosaicSupplyChangeTransactionDTO"));
__export(require("./multisigAccountGraphInfoDTO"));
__export(require("./multisigAccountInfoDTO"));
__export(require("./multisigDTO"));
__export(require("./multisigModificationTypeEnum"));
__export(require("./namespaceDTO"));
__export(require("./namespaceIds"));
__export(require("./namespaceInfoDTO"));
__export(require("./namespaceMetaDTO"));
__export(require("./namespaceMetadataBodyDTO"));
__export(require("./namespaceMetadataDTO"));
__export(require("./namespaceMetadataDTOAllOf"));
__export(require("./namespaceMetadataInfoDTO"));
__export(require("./namespaceMetadataTransactionDTO"));
__export(require("./namespaceNameDTO"));
__export(require("./namespaceTypeEnum"));
__export(require("./networkConfigBodyDTO"));
__export(require("./networkConfigDTO"));
__export(require("./networkConfigTransactionDTO"));
__export(require("./networkTypeDTO"));
__export(require("./nodeInfoDTO"));
__export(require("./nodeTimeDTO"));
__export(require("./offerDTO"));
__export(require("./offerInfoDTO"));
__export(require("./offerTypeEnum"));
__export(require("./paymentsDTO"));
__export(require("./prepareDriveTransactionBodyDTO"));
__export(require("./prepareDriveTransactionDTO"));
__export(require("./publicKeys"));
__export(require("./receiptDTO"));
__export(require("./receiptTypeEnum"));
__export(require("./registerNamespaceTransactionBodyDTO"));
__export(require("./registerNamespaceTransactionDTO"));
__export(require("./removeExchangeOfferTransactionBodyDTO"));
__export(require("./removeExchangeOfferTransactionDTO"));
__export(require("./replicatorsDTO"));
__export(require("./resolutionEntryDTO"));
__export(require("./resolutionStatementDTO"));
__export(require("./rolesTypeEnum"));
__export(require("./secretLockInfoDTO"));
__export(require("./secretLockTransactionBodyDTO"));
__export(require("./secretLockTransactionDTO"));
__export(require("./secretLockWithMeta"));
__export(require("./secretProofTransactionBodyDTO"));
__export(require("./secretProofTransactionDTO"));
__export(require("./serverDTO"));
__export(require("./serverInfoDTO"));
__export(require("./sourceDTO"));
__export(require("./startDriveVerificationTransactionDTO"));
__export(require("./statementsDTO"));
__export(require("./storageInfoDTO"));
__export(require("./transactionBodyDTO"));
__export(require("./transactionDTO"));
__export(require("./transactionHashes"));
__export(require("./transactionIds"));
__export(require("./transactionInfoDTO"));
__export(require("./transactionMetaDTO"));
__export(require("./transactionPayload"));
__export(require("./transactionStatementDTO"));
__export(require("./transactionStatusDTO"));
__export(require("./transactionStatusTypeEnum"));
__export(require("./transferTransactionBodyDTO"));
__export(require("./transferTransactionDTO"));
__export(require("./upgradeDTO"));
__export(require("./uploadInfoDTO"));
__export(require("./verifiableEntityDTO"));
const accountDTO_1 = require("./accountDTO");
const accountExchangeDTO_1 = require("./accountExchangeDTO");
const accountIds_1 = require("./accountIds");
const accountInfoDTO_1 = require("./accountInfoDTO");
const accountLinkTransactionBodyDTO_1 = require("./accountLinkTransactionBodyDTO");
const accountLinkTransactionDTO_1 = require("./accountLinkTransactionDTO");
const accountLinkTypeEnum_1 = require("./accountLinkTypeEnum");
const accountMetaDTO_1 = require("./accountMetaDTO");
const accountNamesDTO_1 = require("./accountNamesDTO");
const accountPropertiesDTO_1 = require("./accountPropertiesDTO");
const accountPropertiesInfoDTO_1 = require("./accountPropertiesInfoDTO");
const accountPropertiesModificationDTO_1 = require("./accountPropertiesModificationDTO");
const accountPropertiesModificationTypeEnum_1 = require("./accountPropertiesModificationTypeEnum");
const accountPropertiesTransactionBodyDTO_1 = require("./accountPropertiesTransactionBodyDTO");
const accountPropertiesTransactionDTO_1 = require("./accountPropertiesTransactionDTO");
const accountPropertyDTO_1 = require("./accountPropertyDTO");
const accountPropertyTypeEnum_1 = require("./accountPropertyTypeEnum");
const addExchangeOfferTransactionBodyDTO_1 = require("./addExchangeOfferTransactionBodyDTO");
const addExchangeOfferTransactionDTO_1 = require("./addExchangeOfferTransactionDTO");
const addressAliasTransactionBodyDTO_1 = require("./addressAliasTransactionBodyDTO");
const addressAliasTransactionDTO_1 = require("./addressAliasTransactionDTO");
const addressMetadataBodyDTO_1 = require("./addressMetadataBodyDTO");
const addressMetadataDTO_1 = require("./addressMetadataDTO");
const addressMetadataDTOAllOf_1 = require("./addressMetadataDTOAllOf");
const addressMetadataInfoDTO_1 = require("./addressMetadataInfoDTO");
const addressMetadataTransactionDTO_1 = require("./addressMetadataTransactionDTO");
const aggregateTransactionBodyDTO_1 = require("./aggregateTransactionBodyDTO");
const aggregateTransactionDTO_1 = require("./aggregateTransactionDTO");
const aliasActionEnum_1 = require("./aliasActionEnum");
const aliasDTO_1 = require("./aliasDTO");
const aliasTypeEnum_1 = require("./aliasTypeEnum");
const announceTransactionInfoDTO_1 = require("./announceTransactionInfoDTO");
const artifactExpiryReceiptDTO_1 = require("./artifactExpiryReceiptDTO");
const artifactExpiryReceiptDTOAllOf_1 = require("./artifactExpiryReceiptDTOAllOf");
const balanceChangeReceiptDTO_1 = require("./balanceChangeReceiptDTO");
const balanceChangeReceiptDTOAllOf_1 = require("./balanceChangeReceiptDTOAllOf");
const balanceTransferReceiptDTO_1 = require("./balanceTransferReceiptDTO");
const balanceTransferReceiptDTOAllOf_1 = require("./balanceTransferReceiptDTOAllOf");
const billingHistoryDTO_1 = require("./billingHistoryDTO");
const blockDTO_1 = require("./blockDTO");
const blockDTOAllOf_1 = require("./blockDTOAllOf");
const blockInfoDTO_1 = require("./blockInfoDTO");
const blockMetaDTO_1 = require("./blockMetaDTO");
const blockchainScoreDTO_1 = require("./blockchainScoreDTO");
const blockchainUpgradeBodyDTO_1 = require("./blockchainUpgradeBodyDTO");
const blockchainUpgradeDTO_1 = require("./blockchainUpgradeDTO");
const blockchainUpgradeTransactionDTO_1 = require("./blockchainUpgradeTransactionDTO");
const communicationTimestamps_1 = require("./communicationTimestamps");
const configDTO_1 = require("./configDTO");
const cosignatoryModificationDTO_1 = require("./cosignatoryModificationDTO");
const cosignature_1 = require("./cosignature");
const cosignatureDTO_1 = require("./cosignatureDTO");
const cosignatureDTOAllOf_1 = require("./cosignatureDTOAllOf");
const driveDTO_1 = require("./driveDTO");
const driveFileSystemAddActionDTO_1 = require("./driveFileSystemAddActionDTO");
const driveFileSystemTransactionBodyDTO_1 = require("./driveFileSystemTransactionBodyDTO");
const driveFileSystemTransactionDTO_1 = require("./driveFileSystemTransactionDTO");
const driveFilesRewardTransactionDTO_1 = require("./driveFilesRewardTransactionDTO");
const embeddedAccountLinkTransactionDTO_1 = require("./embeddedAccountLinkTransactionDTO");
const embeddedAccountPropertiesTransactionDTO_1 = require("./embeddedAccountPropertiesTransactionDTO");
const embeddedAddressAliasTransactionDTO_1 = require("./embeddedAddressAliasTransactionDTO");
const embeddedAddressMetadataTransactionDTO_1 = require("./embeddedAddressMetadataTransactionDTO");
const embeddedBlockchainUpgradeTransactionDTO_1 = require("./embeddedBlockchainUpgradeTransactionDTO");
const embeddedHashLockTransactionDTO_1 = require("./embeddedHashLockTransactionDTO");
const embeddedModifyMultisigAccountTransactionDTO_1 = require("./embeddedModifyMultisigAccountTransactionDTO");
const embeddedMosaicAliasTransactionDTO_1 = require("./embeddedMosaicAliasTransactionDTO");
const embeddedMosaicDefinitionTransactionDTO_1 = require("./embeddedMosaicDefinitionTransactionDTO");
const embeddedMosaicMetadataTransactionDTO_1 = require("./embeddedMosaicMetadataTransactionDTO");
const embeddedMosaicSupplyChangeTransactionDTO_1 = require("./embeddedMosaicSupplyChangeTransactionDTO");
const embeddedNamespaceMetadataTransactionDTO_1 = require("./embeddedNamespaceMetadataTransactionDTO");
const embeddedNetworkConfigTransactionDTO_1 = require("./embeddedNetworkConfigTransactionDTO");
const embeddedRegisterNamespaceTransactionDTO_1 = require("./embeddedRegisterNamespaceTransactionDTO");
const embeddedSecretLockTransactionDTO_1 = require("./embeddedSecretLockTransactionDTO");
const embeddedSecretProofTransactionDTO_1 = require("./embeddedSecretProofTransactionDTO");
const embeddedTransactionDTO_1 = require("./embeddedTransactionDTO");
const embeddedTransactionInfoDTO_1 = require("./embeddedTransactionInfoDTO");
const embeddedTransactionMetaDTO_1 = require("./embeddedTransactionMetaDTO");
const embeddedTransferTransactionDTO_1 = require("./embeddedTransferTransactionDTO");
const endDriveTransactionDTO_1 = require("./endDriveTransactionDTO");
const endDriveVerificationTransactionDTO_1 = require("./endDriveVerificationTransactionDTO");
const entityDTO_1 = require("./entityDTO");
const entityTypeEnum_1 = require("./entityTypeEnum");
const exchangeOfferTransactionBodyDTO_1 = require("./exchangeOfferTransactionBodyDTO");
const exchangeOfferTransactionDTO_1 = require("./exchangeOfferTransactionDTO");
const exchangesDTO_1 = require("./exchangesDTO");
const failureVerificationDTO_1 = require("./failureVerificationDTO");
const fieldDTO_1 = require("./fieldDTO");
const fileDTO_1 = require("./fileDTO");
const fileDepositDTO_1 = require("./fileDepositDTO");
const filesDepositTransactionBodyDTO_1 = require("./filesDepositTransactionBodyDTO");
const filesDepositTransactionDTO_1 = require("./filesDepositTransactionDTO");
const hashAlgorithmEnum_1 = require("./hashAlgorithmEnum");
const hashLockInfoDTO_1 = require("./hashLockInfoDTO");
const hashLockTransactionBodyDTO_1 = require("./hashLockTransactionBodyDTO");
const hashLockTransactionDTO_1 = require("./hashLockTransactionDTO");
const hashLockWithMeta_1 = require("./hashLockWithMeta");
const heightInfoDTO_1 = require("./heightInfoDTO");
const inflationReceiptDTO_1 = require("./inflationReceiptDTO");
const inflationReceiptDTOAllOf_1 = require("./inflationReceiptDTOAllOf");
const inlineResponse200_1 = require("./inlineResponse200");
const inlineResponse2001_1 = require("./inlineResponse2001");
const joinToDriveTransactionDTO_1 = require("./joinToDriveTransactionDTO");
const linkActionEnum_1 = require("./linkActionEnum");
const merklePathItem_1 = require("./merklePathItem");
const merkleProofInfo_1 = require("./merkleProofInfo");
const merkleProofInfoDTO_1 = require("./merkleProofInfoDTO");
const messageDTO_1 = require("./messageDTO");
const messageTypeEnum_1 = require("./messageTypeEnum");
const metaLockDTO_1 = require("./metaLockDTO");
const metadataDTO_1 = require("./metadataDTO");
const metadataIds_1 = require("./metadataIds");
const metadataModificationDTO_1 = require("./metadataModificationDTO");
const metadataModificationTypeEnum_1 = require("./metadataModificationTypeEnum");
const metadataTypeEnum_1 = require("./metadataTypeEnum");
const modifyMultisigAccountTransactionBodyDTO_1 = require("./modifyMultisigAccountTransactionBodyDTO");
const modifyMultisigAccountTransactionDTO_1 = require("./modifyMultisigAccountTransactionDTO");
const mosaicAliasTransactionBodyDTO_1 = require("./mosaicAliasTransactionBodyDTO");
const mosaicAliasTransactionDTO_1 = require("./mosaicAliasTransactionDTO");
const mosaicDTO_1 = require("./mosaicDTO");
const mosaicDefinitionDTO_1 = require("./mosaicDefinitionDTO");
const mosaicDefinitionTransactionBodyDTO_1 = require("./mosaicDefinitionTransactionBodyDTO");
const mosaicDefinitionTransactionDTO_1 = require("./mosaicDefinitionTransactionDTO");
const mosaicDirectionEnum_1 = require("./mosaicDirectionEnum");
const mosaicIds_1 = require("./mosaicIds");
const mosaicInfoDTO_1 = require("./mosaicInfoDTO");
const mosaicMetaDTO_1 = require("./mosaicMetaDTO");
const mosaicMetadataBodyDTO_1 = require("./mosaicMetadataBodyDTO");
const mosaicMetadataDTO_1 = require("./mosaicMetadataDTO");
const mosaicMetadataDTOAllOf_1 = require("./mosaicMetadataDTOAllOf");
const mosaicMetadataInfoDTO_1 = require("./mosaicMetadataInfoDTO");
const mosaicMetadataTransactionDTO_1 = require("./mosaicMetadataTransactionDTO");
const mosaicNamesDTO_1 = require("./mosaicNamesDTO");
const mosaicPropertyDTO_1 = require("./mosaicPropertyDTO");
const mosaicPropertyIdEnum_1 = require("./mosaicPropertyIdEnum");
const mosaicRichListDTO_1 = require("./mosaicRichListDTO");
const mosaicSupplyChangeTransactionBodyDTO_1 = require("./mosaicSupplyChangeTransactionBodyDTO");
const mosaicSupplyChangeTransactionDTO_1 = require("./mosaicSupplyChangeTransactionDTO");
const multisigAccountGraphInfoDTO_1 = require("./multisigAccountGraphInfoDTO");
const multisigAccountInfoDTO_1 = require("./multisigAccountInfoDTO");
const multisigDTO_1 = require("./multisigDTO");
const multisigModificationTypeEnum_1 = require("./multisigModificationTypeEnum");
const namespaceDTO_1 = require("./namespaceDTO");
const namespaceIds_1 = require("./namespaceIds");
const namespaceInfoDTO_1 = require("./namespaceInfoDTO");
const namespaceMetaDTO_1 = require("./namespaceMetaDTO");
const namespaceMetadataBodyDTO_1 = require("./namespaceMetadataBodyDTO");
const namespaceMetadataDTO_1 = require("./namespaceMetadataDTO");
const namespaceMetadataDTOAllOf_1 = require("./namespaceMetadataDTOAllOf");
const namespaceMetadataInfoDTO_1 = require("./namespaceMetadataInfoDTO");
const namespaceMetadataTransactionDTO_1 = require("./namespaceMetadataTransactionDTO");
const namespaceNameDTO_1 = require("./namespaceNameDTO");
const namespaceTypeEnum_1 = require("./namespaceTypeEnum");
const networkConfigBodyDTO_1 = require("./networkConfigBodyDTO");
const networkConfigDTO_1 = require("./networkConfigDTO");
const networkConfigTransactionDTO_1 = require("./networkConfigTransactionDTO");
const networkTypeDTO_1 = require("./networkTypeDTO");
const nodeInfoDTO_1 = require("./nodeInfoDTO");
const nodeTimeDTO_1 = require("./nodeTimeDTO");
const offerDTO_1 = require("./offerDTO");
const offerInfoDTO_1 = require("./offerInfoDTO");
const offerTypeEnum_1 = require("./offerTypeEnum");
const paymentsDTO_1 = require("./paymentsDTO");
const prepareDriveTransactionBodyDTO_1 = require("./prepareDriveTransactionBodyDTO");
const prepareDriveTransactionDTO_1 = require("./prepareDriveTransactionDTO");
const publicKeys_1 = require("./publicKeys");
const receiptDTO_1 = require("./receiptDTO");
const receiptTypeEnum_1 = require("./receiptTypeEnum");
const registerNamespaceTransactionBodyDTO_1 = require("./registerNamespaceTransactionBodyDTO");
const registerNamespaceTransactionDTO_1 = require("./registerNamespaceTransactionDTO");
const removeExchangeOfferTransactionBodyDTO_1 = require("./removeExchangeOfferTransactionBodyDTO");
const removeExchangeOfferTransactionDTO_1 = require("./removeExchangeOfferTransactionDTO");
const replicatorsDTO_1 = require("./replicatorsDTO");
const resolutionEntryDTO_1 = require("./resolutionEntryDTO");
const resolutionStatementDTO_1 = require("./resolutionStatementDTO");
const rolesTypeEnum_1 = require("./rolesTypeEnum");
const secretLockInfoDTO_1 = require("./secretLockInfoDTO");
const secretLockTransactionBodyDTO_1 = require("./secretLockTransactionBodyDTO");
const secretLockTransactionDTO_1 = require("./secretLockTransactionDTO");
const secretLockWithMeta_1 = require("./secretLockWithMeta");
const secretProofTransactionBodyDTO_1 = require("./secretProofTransactionBodyDTO");
const secretProofTransactionDTO_1 = require("./secretProofTransactionDTO");
const serverDTO_1 = require("./serverDTO");
const serverInfoDTO_1 = require("./serverInfoDTO");
const sourceDTO_1 = require("./sourceDTO");
const startDriveVerificationTransactionDTO_1 = require("./startDriveVerificationTransactionDTO");
const statementsDTO_1 = require("./statementsDTO");
const storageInfoDTO_1 = require("./storageInfoDTO");
const transactionBodyDTO_1 = require("./transactionBodyDTO");
const transactionDTO_1 = require("./transactionDTO");
const transactionHashes_1 = require("./transactionHashes");
const transactionIds_1 = require("./transactionIds");
const transactionInfoDTO_1 = require("./transactionInfoDTO");
const transactionMetaDTO_1 = require("./transactionMetaDTO");
const transactionPayload_1 = require("./transactionPayload");
const transactionStatementDTO_1 = require("./transactionStatementDTO");
const transactionStatusDTO_1 = require("./transactionStatusDTO");
const transactionStatusTypeEnum_1 = require("./transactionStatusTypeEnum");
const transferTransactionBodyDTO_1 = require("./transferTransactionBodyDTO");
const transferTransactionDTO_1 = require("./transferTransactionDTO");
const upgradeDTO_1 = require("./upgradeDTO");
const uploadInfoDTO_1 = require("./uploadInfoDTO");
const verifiableEntityDTO_1 = require("./verifiableEntityDTO");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "AccountLinkTypeEnum": accountLinkTypeEnum_1.AccountLinkTypeEnum,
    "AccountPropertiesModificationTypeEnum": accountPropertiesModificationTypeEnum_1.AccountPropertiesModificationTypeEnum,
    "AccountPropertyTypeEnum": accountPropertyTypeEnum_1.AccountPropertyTypeEnum,
    "AliasActionEnum": aliasActionEnum_1.AliasActionEnum,
    "AliasTypeEnum": aliasTypeEnum_1.AliasTypeEnum,
    "EntityTypeEnum": entityTypeEnum_1.EntityTypeEnum,
    "HashAlgorithmEnum": hashAlgorithmEnum_1.HashAlgorithmEnum,
    "LinkActionEnum": linkActionEnum_1.LinkActionEnum,
    "MessageTypeEnum": messageTypeEnum_1.MessageTypeEnum,
    "MetadataModificationTypeEnum": metadataModificationTypeEnum_1.MetadataModificationTypeEnum,
    "MetadataTypeEnum": metadataTypeEnum_1.MetadataTypeEnum,
    "MosaicDirectionEnum": mosaicDirectionEnum_1.MosaicDirectionEnum,
    "MosaicPropertyIdEnum": mosaicPropertyIdEnum_1.MosaicPropertyIdEnum,
    "MultisigModificationTypeEnum": multisigModificationTypeEnum_1.MultisigModificationTypeEnum,
    "NamespaceTypeEnum": namespaceTypeEnum_1.NamespaceTypeEnum,
    "OfferTypeEnum": offerTypeEnum_1.OfferTypeEnum,
    "ReceiptTypeEnum": receiptTypeEnum_1.ReceiptTypeEnum,
    "RolesTypeEnum": rolesTypeEnum_1.RolesTypeEnum,
    "TransactionStatusTypeEnum": transactionStatusTypeEnum_1.TransactionStatusTypeEnum,
};
let typeMap = {
    "AccountDTO": accountDTO_1.AccountDTO,
    "AccountExchangeDTO": accountExchangeDTO_1.AccountExchangeDTO,
    "AccountIds": accountIds_1.AccountIds,
    "AccountInfoDTO": accountInfoDTO_1.AccountInfoDTO,
    "AccountLinkTransactionBodyDTO": accountLinkTransactionBodyDTO_1.AccountLinkTransactionBodyDTO,
    "AccountLinkTransactionDTO": accountLinkTransactionDTO_1.AccountLinkTransactionDTO,
    "AccountMetaDTO": accountMetaDTO_1.AccountMetaDTO,
    "AccountNamesDTO": accountNamesDTO_1.AccountNamesDTO,
    "AccountPropertiesDTO": accountPropertiesDTO_1.AccountPropertiesDTO,
    "AccountPropertiesInfoDTO": accountPropertiesInfoDTO_1.AccountPropertiesInfoDTO,
    "AccountPropertiesModificationDTO": accountPropertiesModificationDTO_1.AccountPropertiesModificationDTO,
    "AccountPropertiesTransactionBodyDTO": accountPropertiesTransactionBodyDTO_1.AccountPropertiesTransactionBodyDTO,
    "AccountPropertiesTransactionDTO": accountPropertiesTransactionDTO_1.AccountPropertiesTransactionDTO,
    "AccountPropertyDTO": accountPropertyDTO_1.AccountPropertyDTO,
    "AddExchangeOfferTransactionBodyDTO": addExchangeOfferTransactionBodyDTO_1.AddExchangeOfferTransactionBodyDTO,
    "AddExchangeOfferTransactionDTO": addExchangeOfferTransactionDTO_1.AddExchangeOfferTransactionDTO,
    "AddressAliasTransactionBodyDTO": addressAliasTransactionBodyDTO_1.AddressAliasTransactionBodyDTO,
    "AddressAliasTransactionDTO": addressAliasTransactionDTO_1.AddressAliasTransactionDTO,
    "AddressMetadataBodyDTO": addressMetadataBodyDTO_1.AddressMetadataBodyDTO,
    "AddressMetadataDTO": addressMetadataDTO_1.AddressMetadataDTO,
    "AddressMetadataDTOAllOf": addressMetadataDTOAllOf_1.AddressMetadataDTOAllOf,
    "AddressMetadataInfoDTO": addressMetadataInfoDTO_1.AddressMetadataInfoDTO,
    "AddressMetadataTransactionDTO": addressMetadataTransactionDTO_1.AddressMetadataTransactionDTO,
    "AggregateTransactionBodyDTO": aggregateTransactionBodyDTO_1.AggregateTransactionBodyDTO,
    "AggregateTransactionDTO": aggregateTransactionDTO_1.AggregateTransactionDTO,
    "AliasDTO": aliasDTO_1.AliasDTO,
    "AnnounceTransactionInfoDTO": announceTransactionInfoDTO_1.AnnounceTransactionInfoDTO,
    "ArtifactExpiryReceiptDTO": artifactExpiryReceiptDTO_1.ArtifactExpiryReceiptDTO,
    "ArtifactExpiryReceiptDTOAllOf": artifactExpiryReceiptDTOAllOf_1.ArtifactExpiryReceiptDTOAllOf,
    "BalanceChangeReceiptDTO": balanceChangeReceiptDTO_1.BalanceChangeReceiptDTO,
    "BalanceChangeReceiptDTOAllOf": balanceChangeReceiptDTOAllOf_1.BalanceChangeReceiptDTOAllOf,
    "BalanceTransferReceiptDTO": balanceTransferReceiptDTO_1.BalanceTransferReceiptDTO,
    "BalanceTransferReceiptDTOAllOf": balanceTransferReceiptDTOAllOf_1.BalanceTransferReceiptDTOAllOf,
    "BillingHistoryDTO": billingHistoryDTO_1.BillingHistoryDTO,
    "BlockDTO": blockDTO_1.BlockDTO,
    "BlockDTOAllOf": blockDTOAllOf_1.BlockDTOAllOf,
    "BlockInfoDTO": blockInfoDTO_1.BlockInfoDTO,
    "BlockMetaDTO": blockMetaDTO_1.BlockMetaDTO,
    "BlockchainScoreDTO": blockchainScoreDTO_1.BlockchainScoreDTO,
    "BlockchainUpgradeBodyDTO": blockchainUpgradeBodyDTO_1.BlockchainUpgradeBodyDTO,
    "BlockchainUpgradeDTO": blockchainUpgradeDTO_1.BlockchainUpgradeDTO,
    "BlockchainUpgradeTransactionDTO": blockchainUpgradeTransactionDTO_1.BlockchainUpgradeTransactionDTO,
    "CommunicationTimestamps": communicationTimestamps_1.CommunicationTimestamps,
    "ConfigDTO": configDTO_1.ConfigDTO,
    "CosignatoryModificationDTO": cosignatoryModificationDTO_1.CosignatoryModificationDTO,
    "Cosignature": cosignature_1.Cosignature,
    "CosignatureDTO": cosignatureDTO_1.CosignatureDTO,
    "CosignatureDTOAllOf": cosignatureDTOAllOf_1.CosignatureDTOAllOf,
    "DriveDTO": driveDTO_1.DriveDTO,
    "DriveFileSystemAddActionDTO": driveFileSystemAddActionDTO_1.DriveFileSystemAddActionDTO,
    "DriveFileSystemTransactionBodyDTO": driveFileSystemTransactionBodyDTO_1.DriveFileSystemTransactionBodyDTO,
    "DriveFileSystemTransactionDTO": driveFileSystemTransactionDTO_1.DriveFileSystemTransactionDTO,
    "DriveFilesRewardTransactionDTO": driveFilesRewardTransactionDTO_1.DriveFilesRewardTransactionDTO,
    "EmbeddedAccountLinkTransactionDTO": embeddedAccountLinkTransactionDTO_1.EmbeddedAccountLinkTransactionDTO,
    "EmbeddedAccountPropertiesTransactionDTO": embeddedAccountPropertiesTransactionDTO_1.EmbeddedAccountPropertiesTransactionDTO,
    "EmbeddedAddressAliasTransactionDTO": embeddedAddressAliasTransactionDTO_1.EmbeddedAddressAliasTransactionDTO,
    "EmbeddedAddressMetadataTransactionDTO": embeddedAddressMetadataTransactionDTO_1.EmbeddedAddressMetadataTransactionDTO,
    "EmbeddedBlockchainUpgradeTransactionDTO": embeddedBlockchainUpgradeTransactionDTO_1.EmbeddedBlockchainUpgradeTransactionDTO,
    "EmbeddedHashLockTransactionDTO": embeddedHashLockTransactionDTO_1.EmbeddedHashLockTransactionDTO,
    "EmbeddedModifyMultisigAccountTransactionDTO": embeddedModifyMultisigAccountTransactionDTO_1.EmbeddedModifyMultisigAccountTransactionDTO,
    "EmbeddedMosaicAliasTransactionDTO": embeddedMosaicAliasTransactionDTO_1.EmbeddedMosaicAliasTransactionDTO,
    "EmbeddedMosaicDefinitionTransactionDTO": embeddedMosaicDefinitionTransactionDTO_1.EmbeddedMosaicDefinitionTransactionDTO,
    "EmbeddedMosaicMetadataTransactionDTO": embeddedMosaicMetadataTransactionDTO_1.EmbeddedMosaicMetadataTransactionDTO,
    "EmbeddedMosaicSupplyChangeTransactionDTO": embeddedMosaicSupplyChangeTransactionDTO_1.EmbeddedMosaicSupplyChangeTransactionDTO,
    "EmbeddedNamespaceMetadataTransactionDTO": embeddedNamespaceMetadataTransactionDTO_1.EmbeddedNamespaceMetadataTransactionDTO,
    "EmbeddedNetworkConfigTransactionDTO": embeddedNetworkConfigTransactionDTO_1.EmbeddedNetworkConfigTransactionDTO,
    "EmbeddedRegisterNamespaceTransactionDTO": embeddedRegisterNamespaceTransactionDTO_1.EmbeddedRegisterNamespaceTransactionDTO,
    "EmbeddedSecretLockTransactionDTO": embeddedSecretLockTransactionDTO_1.EmbeddedSecretLockTransactionDTO,
    "EmbeddedSecretProofTransactionDTO": embeddedSecretProofTransactionDTO_1.EmbeddedSecretProofTransactionDTO,
    "EmbeddedTransactionDTO": embeddedTransactionDTO_1.EmbeddedTransactionDTO,
    "EmbeddedTransactionInfoDTO": embeddedTransactionInfoDTO_1.EmbeddedTransactionInfoDTO,
    "EmbeddedTransactionMetaDTO": embeddedTransactionMetaDTO_1.EmbeddedTransactionMetaDTO,
    "EmbeddedTransferTransactionDTO": embeddedTransferTransactionDTO_1.EmbeddedTransferTransactionDTO,
    "EndDriveTransactionDTO": endDriveTransactionDTO_1.EndDriveTransactionDTO,
    "EndDriveVerificationTransactionDTO": endDriveVerificationTransactionDTO_1.EndDriveVerificationTransactionDTO,
    "EntityDTO": entityDTO_1.EntityDTO,
    "ExchangeOfferTransactionBodyDTO": exchangeOfferTransactionBodyDTO_1.ExchangeOfferTransactionBodyDTO,
    "ExchangeOfferTransactionDTO": exchangeOfferTransactionDTO_1.ExchangeOfferTransactionDTO,
    "ExchangesDTO": exchangesDTO_1.ExchangesDTO,
    "FailureVerificationDTO": failureVerificationDTO_1.FailureVerificationDTO,
    "FieldDTO": fieldDTO_1.FieldDTO,
    "FileDTO": fileDTO_1.FileDTO,
    "FileDepositDTO": fileDepositDTO_1.FileDepositDTO,
    "FilesDepositTransactionBodyDTO": filesDepositTransactionBodyDTO_1.FilesDepositTransactionBodyDTO,
    "FilesDepositTransactionDTO": filesDepositTransactionDTO_1.FilesDepositTransactionDTO,
    "HashLockInfoDTO": hashLockInfoDTO_1.HashLockInfoDTO,
    "HashLockTransactionBodyDTO": hashLockTransactionBodyDTO_1.HashLockTransactionBodyDTO,
    "HashLockTransactionDTO": hashLockTransactionDTO_1.HashLockTransactionDTO,
    "HashLockWithMeta": hashLockWithMeta_1.HashLockWithMeta,
    "HeightInfoDTO": heightInfoDTO_1.HeightInfoDTO,
    "InflationReceiptDTO": inflationReceiptDTO_1.InflationReceiptDTO,
    "InflationReceiptDTOAllOf": inflationReceiptDTOAllOf_1.InflationReceiptDTOAllOf,
    "InlineResponse200": inlineResponse200_1.InlineResponse200,
    "InlineResponse2001": inlineResponse2001_1.InlineResponse2001,
    "JoinToDriveTransactionDTO": joinToDriveTransactionDTO_1.JoinToDriveTransactionDTO,
    "MerklePathItem": merklePathItem_1.MerklePathItem,
    "MerkleProofInfo": merkleProofInfo_1.MerkleProofInfo,
    "MerkleProofInfoDTO": merkleProofInfoDTO_1.MerkleProofInfoDTO,
    "MessageDTO": messageDTO_1.MessageDTO,
    "MetaLockDTO": metaLockDTO_1.MetaLockDTO,
    "MetadataDTO": metadataDTO_1.MetadataDTO,
    "MetadataIds": metadataIds_1.MetadataIds,
    "MetadataModificationDTO": metadataModificationDTO_1.MetadataModificationDTO,
    "ModifyMultisigAccountTransactionBodyDTO": modifyMultisigAccountTransactionBodyDTO_1.ModifyMultisigAccountTransactionBodyDTO,
    "ModifyMultisigAccountTransactionDTO": modifyMultisigAccountTransactionDTO_1.ModifyMultisigAccountTransactionDTO,
    "MosaicAliasTransactionBodyDTO": mosaicAliasTransactionBodyDTO_1.MosaicAliasTransactionBodyDTO,
    "MosaicAliasTransactionDTO": mosaicAliasTransactionDTO_1.MosaicAliasTransactionDTO,
    "MosaicDTO": mosaicDTO_1.MosaicDTO,
    "MosaicDefinitionDTO": mosaicDefinitionDTO_1.MosaicDefinitionDTO,
    "MosaicDefinitionTransactionBodyDTO": mosaicDefinitionTransactionBodyDTO_1.MosaicDefinitionTransactionBodyDTO,
    "MosaicDefinitionTransactionDTO": mosaicDefinitionTransactionDTO_1.MosaicDefinitionTransactionDTO,
    "MosaicIds": mosaicIds_1.MosaicIds,
    "MosaicInfoDTO": mosaicInfoDTO_1.MosaicInfoDTO,
    "MosaicMetaDTO": mosaicMetaDTO_1.MosaicMetaDTO,
    "MosaicMetadataBodyDTO": mosaicMetadataBodyDTO_1.MosaicMetadataBodyDTO,
    "MosaicMetadataDTO": mosaicMetadataDTO_1.MosaicMetadataDTO,
    "MosaicMetadataDTOAllOf": mosaicMetadataDTOAllOf_1.MosaicMetadataDTOAllOf,
    "MosaicMetadataInfoDTO": mosaicMetadataInfoDTO_1.MosaicMetadataInfoDTO,
    "MosaicMetadataTransactionDTO": mosaicMetadataTransactionDTO_1.MosaicMetadataTransactionDTO,
    "MosaicNamesDTO": mosaicNamesDTO_1.MosaicNamesDTO,
    "MosaicPropertyDTO": mosaicPropertyDTO_1.MosaicPropertyDTO,
    "MosaicRichListDTO": mosaicRichListDTO_1.MosaicRichListDTO,
    "MosaicSupplyChangeTransactionBodyDTO": mosaicSupplyChangeTransactionBodyDTO_1.MosaicSupplyChangeTransactionBodyDTO,
    "MosaicSupplyChangeTransactionDTO": mosaicSupplyChangeTransactionDTO_1.MosaicSupplyChangeTransactionDTO,
    "MultisigAccountGraphInfoDTO": multisigAccountGraphInfoDTO_1.MultisigAccountGraphInfoDTO,
    "MultisigAccountInfoDTO": multisigAccountInfoDTO_1.MultisigAccountInfoDTO,
    "MultisigDTO": multisigDTO_1.MultisigDTO,
    "NamespaceDTO": namespaceDTO_1.NamespaceDTO,
    "NamespaceIds": namespaceIds_1.NamespaceIds,
    "NamespaceInfoDTO": namespaceInfoDTO_1.NamespaceInfoDTO,
    "NamespaceMetaDTO": namespaceMetaDTO_1.NamespaceMetaDTO,
    "NamespaceMetadataBodyDTO": namespaceMetadataBodyDTO_1.NamespaceMetadataBodyDTO,
    "NamespaceMetadataDTO": namespaceMetadataDTO_1.NamespaceMetadataDTO,
    "NamespaceMetadataDTOAllOf": namespaceMetadataDTOAllOf_1.NamespaceMetadataDTOAllOf,
    "NamespaceMetadataInfoDTO": namespaceMetadataInfoDTO_1.NamespaceMetadataInfoDTO,
    "NamespaceMetadataTransactionDTO": namespaceMetadataTransactionDTO_1.NamespaceMetadataTransactionDTO,
    "NamespaceNameDTO": namespaceNameDTO_1.NamespaceNameDTO,
    "NetworkConfigBodyDTO": networkConfigBodyDTO_1.NetworkConfigBodyDTO,
    "NetworkConfigDTO": networkConfigDTO_1.NetworkConfigDTO,
    "NetworkConfigTransactionDTO": networkConfigTransactionDTO_1.NetworkConfigTransactionDTO,
    "NetworkTypeDTO": networkTypeDTO_1.NetworkTypeDTO,
    "NodeInfoDTO": nodeInfoDTO_1.NodeInfoDTO,
    "NodeTimeDTO": nodeTimeDTO_1.NodeTimeDTO,
    "OfferDTO": offerDTO_1.OfferDTO,
    "OfferInfoDTO": offerInfoDTO_1.OfferInfoDTO,
    "PaymentsDTO": paymentsDTO_1.PaymentsDTO,
    "PrepareDriveTransactionBodyDTO": prepareDriveTransactionBodyDTO_1.PrepareDriveTransactionBodyDTO,
    "PrepareDriveTransactionDTO": prepareDriveTransactionDTO_1.PrepareDriveTransactionDTO,
    "PublicKeys": publicKeys_1.PublicKeys,
    "ReceiptDTO": receiptDTO_1.ReceiptDTO,
    "RegisterNamespaceTransactionBodyDTO": registerNamespaceTransactionBodyDTO_1.RegisterNamespaceTransactionBodyDTO,
    "RegisterNamespaceTransactionDTO": registerNamespaceTransactionDTO_1.RegisterNamespaceTransactionDTO,
    "RemoveExchangeOfferTransactionBodyDTO": removeExchangeOfferTransactionBodyDTO_1.RemoveExchangeOfferTransactionBodyDTO,
    "RemoveExchangeOfferTransactionDTO": removeExchangeOfferTransactionDTO_1.RemoveExchangeOfferTransactionDTO,
    "ReplicatorsDTO": replicatorsDTO_1.ReplicatorsDTO,
    "ResolutionEntryDTO": resolutionEntryDTO_1.ResolutionEntryDTO,
    "ResolutionStatementDTO": resolutionStatementDTO_1.ResolutionStatementDTO,
    "SecretLockInfoDTO": secretLockInfoDTO_1.SecretLockInfoDTO,
    "SecretLockTransactionBodyDTO": secretLockTransactionBodyDTO_1.SecretLockTransactionBodyDTO,
    "SecretLockTransactionDTO": secretLockTransactionDTO_1.SecretLockTransactionDTO,
    "SecretLockWithMeta": secretLockWithMeta_1.SecretLockWithMeta,
    "SecretProofTransactionBodyDTO": secretProofTransactionBodyDTO_1.SecretProofTransactionBodyDTO,
    "SecretProofTransactionDTO": secretProofTransactionDTO_1.SecretProofTransactionDTO,
    "ServerDTO": serverDTO_1.ServerDTO,
    "ServerInfoDTO": serverInfoDTO_1.ServerInfoDTO,
    "SourceDTO": sourceDTO_1.SourceDTO,
    "StartDriveVerificationTransactionDTO": startDriveVerificationTransactionDTO_1.StartDriveVerificationTransactionDTO,
    "StatementsDTO": statementsDTO_1.StatementsDTO,
    "StorageInfoDTO": storageInfoDTO_1.StorageInfoDTO,
    "TransactionBodyDTO": transactionBodyDTO_1.TransactionBodyDTO,
    "TransactionDTO": transactionDTO_1.TransactionDTO,
    "TransactionHashes": transactionHashes_1.TransactionHashes,
    "TransactionIds": transactionIds_1.TransactionIds,
    "TransactionInfoDTO": transactionInfoDTO_1.TransactionInfoDTO,
    "TransactionMetaDTO": transactionMetaDTO_1.TransactionMetaDTO,
    "TransactionPayload": transactionPayload_1.TransactionPayload,
    "TransactionStatementDTO": transactionStatementDTO_1.TransactionStatementDTO,
    "TransactionStatusDTO": transactionStatusDTO_1.TransactionStatusDTO,
    "TransferTransactionBodyDTO": transferTransactionBodyDTO_1.TransferTransactionBodyDTO,
    "TransferTransactionDTO": transferTransactionDTO_1.TransferTransactionDTO,
    "UpgradeDTO": upgradeDTO_1.UpgradeDTO,
    "UploadInfoDTO": uploadInfoDTO_1.UploadInfoDTO,
    "VerifiableEntityDTO": verifiableEntityDTO_1.VerifiableEntityDTO,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map