"use strict";
/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class EmbeddedTransactionInfoDTO {
    static getAttributeTypeMap() {
        return EmbeddedTransactionInfoDTO.attributeTypeMap;
    }
}
exports.EmbeddedTransactionInfoDTO = EmbeddedTransactionInfoDTO;
EmbeddedTransactionInfoDTO.discriminator = undefined;
EmbeddedTransactionInfoDTO.attributeTypeMap = [
    {
        "name": "meta",
        "baseName": "meta",
        "type": "EmbeddedTransactionMetaDTO"
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "EmbeddedBlockchainUpgradeTransactionDTO | EmbeddedNetworkConfigTransactionDTO | EmbeddedAddressMetadataTransactionDTO | EmbeddedMosaicMetadataTransactionDTO | EmbeddedNamespaceMetadataTransactionDTO | EmbeddedMosaicDefinitionTransactionDTO | EmbeddedMosaicSupplyChangeTransactionDTO | EmbeddedRegisterNamespaceTransactionDTO | EmbeddedAddressAliasTransactionDTO | EmbeddedMosaicAliasTransactionDTO | EmbeddedTransferTransactionDTO | EmbeddedModifyMultisigAccountTransactionDTO | EmbeddedHashLockTransactionDTO | EmbeddedAccountPropertiesTransactionDTO | EmbeddedSecretLockTransactionDTO | EmbeddedSecretProofTransactionDTO | EmbeddedAccountLinkTransactionDTO"
    }
];
//# sourceMappingURL=embeddedTransactionInfoDTO.js.map