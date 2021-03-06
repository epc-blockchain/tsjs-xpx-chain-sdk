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

import { RequestFile } from '../api';
import { DriveFileSystemAddActionDTO } from './driveFileSystemAddActionDTO';

export class DriveFileSystemTransactionBodyDTO {
    'driveKey': string;
    'rootHash': string;
    'xorRootHash': string;
    'addActionsCount': number;
    'removeActionsCount': number;
    'addActions': Array<DriveFileSystemAddActionDTO>;
    'removeActions': Array<DriveFileSystemAddActionDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "driveKey",
            "baseName": "driveKey",
            "type": "string"
        },
        {
            "name": "rootHash",
            "baseName": "rootHash",
            "type": "string"
        },
        {
            "name": "xorRootHash",
            "baseName": "xorRootHash",
            "type": "string"
        },
        {
            "name": "addActionsCount",
            "baseName": "addActionsCount",
            "type": "number"
        },
        {
            "name": "removeActionsCount",
            "baseName": "removeActionsCount",
            "type": "number"
        },
        {
            "name": "addActions",
            "baseName": "addActions",
            "type": "Array<DriveFileSystemAddActionDTO>"
        },
        {
            "name": "removeActions",
            "baseName": "removeActions",
            "type": "Array<DriveFileSystemAddActionDTO>"
        }    ];

    static getAttributeTypeMap() {
        return DriveFileSystemTransactionBodyDTO.attributeTypeMap;
    }
}

