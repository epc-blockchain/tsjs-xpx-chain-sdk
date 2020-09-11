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
/**
* Transaction that updates config.
*/
class NetworkConfigTransactionDTO {
    static getAttributeTypeMap() {
        return NetworkConfigTransactionDTO.attributeTypeMap;
    }
}
exports.NetworkConfigTransactionDTO = NetworkConfigTransactionDTO;
NetworkConfigTransactionDTO.discriminator = undefined;
NetworkConfigTransactionDTO.attributeTypeMap = [
    {
        "name": "signature",
        "baseName": "signature",
        "type": "string"
    },
    {
        "name": "signer",
        "baseName": "signer",
        "type": "string"
    },
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EntityTypeEnum"
    },
    {
        "name": "maxFee",
        "baseName": "max_fee",
        "type": "Array<number>"
    },
    {
        "name": "deadline",
        "baseName": "deadline",
        "type": "Array<number>"
    },
    {
        "name": "applyHeightDelta",
        "baseName": "applyHeightDelta",
        "type": "Array<number>"
    },
    {
        "name": "networkConfig",
        "baseName": "networkConfig",
        "type": "string"
    },
    {
        "name": "supportedEntityVersions",
        "baseName": "supportedEntityVersions",
        "type": "string"
    }
];
//# sourceMappingURL=networkConfigTransactionDTO.js.map