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
class BlockDTOAllOf {
    static getAttributeTypeMap() {
        return BlockDTOAllOf.attributeTypeMap;
    }
}
exports.BlockDTOAllOf = BlockDTOAllOf;
BlockDTOAllOf.discriminator = undefined;
BlockDTOAllOf.attributeTypeMap = [
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    },
    {
        "name": "timestamp",
        "baseName": "timestamp",
        "type": "Array<number>"
    },
    {
        "name": "difficulty",
        "baseName": "difficulty",
        "type": "Array<number>"
    },
    {
        "name": "feeMultiplier",
        "baseName": "feeMultiplier",
        "type": "number"
    },
    {
        "name": "previousBlockHash",
        "baseName": "previousBlockHash",
        "type": "string"
    },
    {
        "name": "blockTransactionsHash",
        "baseName": "blockTransactionsHash",
        "type": "string"
    },
    {
        "name": "blockReceiptsHash",
        "baseName": "blockReceiptsHash",
        "type": "string"
    },
    {
        "name": "stateHash",
        "baseName": "stateHash",
        "type": "string"
    },
    {
        "name": "beneficiary",
        "baseName": "beneficiary",
        "type": "string"
    },
    {
        "name": "feeInterest",
        "baseName": "feeInterest",
        "type": "number"
    },
    {
        "name": "feeInterestDenominator",
        "baseName": "feeInterestDenominator",
        "type": "number"
    }
];
//# sourceMappingURL=blockDTOAllOf.js.map