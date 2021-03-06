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
class AddressAliasTransactionBodyDTO {
    static getAttributeTypeMap() {
        return AddressAliasTransactionBodyDTO.attributeTypeMap;
    }
}
exports.AddressAliasTransactionBodyDTO = AddressAliasTransactionBodyDTO;
AddressAliasTransactionBodyDTO.discriminator = undefined;
AddressAliasTransactionBodyDTO.attributeTypeMap = [
    {
        "name": "aliasAction",
        "baseName": "aliasAction",
        "type": "AliasActionEnum"
    },
    {
        "name": "namespaceId",
        "baseName": "namespaceId",
        "type": "Array<number>"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    }
];
//# sourceMappingURL=addressAliasTransactionBodyDTO.js.map