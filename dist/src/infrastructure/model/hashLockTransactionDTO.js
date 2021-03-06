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
* Transaction to lock funds before sending an aggregate bonded transaction.
*/
class HashLockTransactionDTO {
    static getAttributeTypeMap() {
        return HashLockTransactionDTO.attributeTypeMap;
    }
}
exports.HashLockTransactionDTO = HashLockTransactionDTO;
HashLockTransactionDTO.discriminator = undefined;
HashLockTransactionDTO.attributeTypeMap = [
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
        "name": "mosaic",
        "baseName": "mosaic",
        "type": "MosaicDTO"
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "MosaicDTO"
    },
    {
        "name": "hash",
        "baseName": "hash",
        "type": "string"
    }
];
//# sourceMappingURL=hashLockTransactionDTO.js.map