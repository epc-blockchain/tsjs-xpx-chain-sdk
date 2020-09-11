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
* Native currency mosaics were created due to inflation.
*/
class InflationReceiptDTO {
    static getAttributeTypeMap() {
        return InflationReceiptDTO.attributeTypeMap;
    }
}
exports.InflationReceiptDTO = InflationReceiptDTO;
InflationReceiptDTO.discriminator = undefined;
InflationReceiptDTO.attributeTypeMap = [
    {
        "name": "version",
        "baseName": "version",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ReceiptTypeEnum"
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
    }
];
//# sourceMappingURL=inflationReceiptDTO.js.map