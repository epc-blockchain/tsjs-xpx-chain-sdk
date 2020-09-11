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
class MosaicDefinitionTransactionBodyDTO {
    static getAttributeTypeMap() {
        return MosaicDefinitionTransactionBodyDTO.attributeTypeMap;
    }
}
exports.MosaicDefinitionTransactionBodyDTO = MosaicDefinitionTransactionBodyDTO;
MosaicDefinitionTransactionBodyDTO.discriminator = undefined;
MosaicDefinitionTransactionBodyDTO.attributeTypeMap = [
    {
        "name": "mosaicNonce",
        "baseName": "mosaicNonce",
        "type": "number"
    },
    {
        "name": "mosaicId",
        "baseName": "mosaicId",
        "type": "Array<number>"
    },
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<MosaicPropertyDTO>"
    }
];
//# sourceMappingURL=mosaicDefinitionTransactionBodyDTO.js.map