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
class DriveDTO {
    static getAttributeTypeMap() {
        return DriveDTO.attributeTypeMap;
    }
}
exports.DriveDTO = DriveDTO;
DriveDTO.discriminator = undefined;
DriveDTO.attributeTypeMap = [
    {
        "name": "multisig",
        "baseName": "multisig",
        "type": "string"
    },
    {
        "name": "multisigAddress",
        "baseName": "multisigAddress",
        "type": "string"
    },
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
        "name": "state",
        "baseName": "state",
        "type": "number"
    },
    {
        "name": "owner",
        "baseName": "owner",
        "type": "string"
    },
    {
        "name": "rootHash",
        "baseName": "rootHash",
        "type": "string"
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "Array<number>"
    },
    {
        "name": "billingPeriod",
        "baseName": "billingPeriod",
        "type": "Array<number>"
    },
    {
        "name": "billingPrice",
        "baseName": "billingPrice",
        "type": "Array<number>"
    },
    {
        "name": "size",
        "baseName": "size",
        "type": "Array<number>"
    },
    {
        "name": "occupiedSpace",
        "baseName": "occupiedSpace",
        "type": "Array<number>"
    },
    {
        "name": "replicas",
        "baseName": "replicas",
        "type": "number"
    },
    {
        "name": "minReplicators",
        "baseName": "minReplicators",
        "type": "number"
    },
    {
        "name": "percentApprovers",
        "baseName": "percentApprovers",
        "type": "number"
    },
    {
        "name": "billingHistory",
        "baseName": "billingHistory",
        "type": "Array<BillingHistoryDTO>"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<FileDTO>"
    },
    {
        "name": "replicators",
        "baseName": "replicators",
        "type": "Array<ReplicatorsDTO>"
    },
    {
        "name": "removedReplicators",
        "baseName": "removedReplicators",
        "type": "Array<object>"
    },
    {
        "name": "uploadPayments",
        "baseName": "uploadPayments",
        "type": "Array<PaymentsDTO>"
    }
];
//# sourceMappingURL=driveDTO.js.map