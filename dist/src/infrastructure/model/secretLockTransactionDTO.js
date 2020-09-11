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
* Transaction that sends mosaics to a recipient if the proof used is revealed. If the duration is reached, the locked funds go back to the sender of the transaction.
*/
class SecretLockTransactionDTO {
    static getAttributeTypeMap() {
        return SecretLockTransactionDTO.attributeTypeMap;
    }
}
exports.SecretLockTransactionDTO = SecretLockTransactionDTO;
SecretLockTransactionDTO.discriminator = undefined;
SecretLockTransactionDTO.attributeTypeMap = [
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
        "name": "duration",
        "baseName": "duration",
        "type": "Array<number>"
    },
    {
        "name": "mosaicId",
        "baseName": "mosaicId",
        "type": "Array<number>"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "Array<number>"
    },
    {
        "name": "hashAlgorithm",
        "baseName": "hashAlgorithm",
        "type": "HashAlgorithmEnum"
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    }
];
//# sourceMappingURL=secretLockTransactionDTO.js.map