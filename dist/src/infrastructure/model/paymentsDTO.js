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
class PaymentsDTO {
    static getAttributeTypeMap() {
        return PaymentsDTO.attributeTypeMap;
    }
}
exports.PaymentsDTO = PaymentsDTO;
PaymentsDTO.discriminator = undefined;
PaymentsDTO.attributeTypeMap = [
    {
        "name": "receiver",
        "baseName": "receiver",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "Array<number>"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=paymentsDTO.js.map