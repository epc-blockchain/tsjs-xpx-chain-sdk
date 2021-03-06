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
class BillingHistoryDTO {
    static getAttributeTypeMap() {
        return BillingHistoryDTO.attributeTypeMap;
    }
}
exports.BillingHistoryDTO = BillingHistoryDTO;
BillingHistoryDTO.discriminator = undefined;
BillingHistoryDTO.attributeTypeMap = [
    {
        "name": "start",
        "baseName": "start",
        "type": "Array<number>"
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "Array<number>"
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentsDTO>"
    }
];
//# sourceMappingURL=billingHistoryDTO.js.map