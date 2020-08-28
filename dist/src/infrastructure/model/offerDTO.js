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
class OfferDTO {
    static getAttributeTypeMap() {
        return OfferDTO.attributeTypeMap;
    }
}
exports.OfferDTO = OfferDTO;
OfferDTO.discriminator = undefined;
OfferDTO.attributeTypeMap = [
    {
        "name": "mosaicId",
        "baseName": "mosaicId",
        "type": "Array<number>"
    },
    {
        "name": "mosaicAmount",
        "baseName": "mosaicAmount",
        "type": "Array<number>"
    },
    {
        "name": "cost",
        "baseName": "cost",
        "type": "Array<number>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "OfferTypeEnum"
    }
];
//# sourceMappingURL=offerDTO.js.map