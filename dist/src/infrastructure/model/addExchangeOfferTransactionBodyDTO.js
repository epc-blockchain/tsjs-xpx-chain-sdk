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
const offerDTO_1 = require("./offerDTO");
class AddExchangeOfferTransactionBodyDTO extends offerDTO_1.OfferDTO {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AddExchangeOfferTransactionBodyDTO.attributeTypeMap);
    }
}
exports.AddExchangeOfferTransactionBodyDTO = AddExchangeOfferTransactionBodyDTO;
AddExchangeOfferTransactionBodyDTO.discriminator = undefined;
AddExchangeOfferTransactionBodyDTO.attributeTypeMap = [
    {
        "name": "duration",
        "baseName": "duration",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=addExchangeOfferTransactionBodyDTO.js.map