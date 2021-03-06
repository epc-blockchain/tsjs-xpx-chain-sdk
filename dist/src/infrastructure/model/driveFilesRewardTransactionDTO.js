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
const transactionDTO_1 = require("./transactionDTO");
class DriveFilesRewardTransactionDTO extends transactionDTO_1.TransactionDTO {
    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DriveFilesRewardTransactionDTO.attributeTypeMap);
    }
}
exports.DriveFilesRewardTransactionDTO = DriveFilesRewardTransactionDTO;
DriveFilesRewardTransactionDTO.discriminator = undefined;
DriveFilesRewardTransactionDTO.attributeTypeMap = [
    {
        "name": "uploadInfos",
        "baseName": "uploadInfos",
        "type": "Array<UploadInfoDTO>"
    }
];
//# sourceMappingURL=driveFilesRewardTransactionDTO.js.map