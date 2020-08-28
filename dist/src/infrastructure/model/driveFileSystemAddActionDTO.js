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
class DriveFileSystemAddActionDTO {
    static getAttributeTypeMap() {
        return DriveFileSystemAddActionDTO.attributeTypeMap;
    }
}
exports.DriveFileSystemAddActionDTO = DriveFileSystemAddActionDTO;
DriveFileSystemAddActionDTO.discriminator = undefined;
DriveFileSystemAddActionDTO.attributeTypeMap = [
    {
        "name": "fileHash",
        "baseName": "fileHash",
        "type": "string"
    },
    {
        "name": "fileSize",
        "baseName": "fileSize",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=driveFileSystemAddActionDTO.js.map