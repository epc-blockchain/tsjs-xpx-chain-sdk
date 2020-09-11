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
class AccountExchangeDTO {
    static getAttributeTypeMap() {
        return AccountExchangeDTO.attributeTypeMap;
    }
}
exports.AccountExchangeDTO = AccountExchangeDTO;
AccountExchangeDTO.discriminator = undefined;
AccountExchangeDTO.attributeTypeMap = [
    {
        "name": "owner",
        "baseName": "owner",
        "type": "string"
    },
    {
        "name": "ownerAddress",
        "baseName": "ownerAddress",
        "type": "string"
    },
    {
        "name": "buyOffers",
        "baseName": "buyOffers",
        "type": "Array<OfferInfoDTO>"
    },
    {
        "name": "sellOffers",
        "baseName": "sellOffers",
        "type": "Array<OfferInfoDTO>"
    }
];
//# sourceMappingURL=accountExchangeDTO.js.map