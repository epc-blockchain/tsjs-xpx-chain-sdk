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
class AddressMetadataBodyDTO {
    static getAttributeTypeMap() {
        return AddressMetadataBodyDTO.attributeTypeMap;
    }
}
exports.AddressMetadataBodyDTO = AddressMetadataBodyDTO;
AddressMetadataBodyDTO.discriminator = undefined;
AddressMetadataBodyDTO.attributeTypeMap = [
    {
        "name": "metadataId",
        "baseName": "metadataId",
        "type": "string"
    },
    {
        "name": "metadataType",
        "baseName": "metadataType",
        "type": "MetadataTypeEnum"
    },
    {
        "name": "modifications",
        "baseName": "modifications",
        "type": "Array<MetadataModificationDTO>"
    }
];
//# sourceMappingURL=addressMetadataBodyDTO.js.map