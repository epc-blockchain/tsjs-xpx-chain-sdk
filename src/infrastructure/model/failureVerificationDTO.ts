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

export class FailureVerificationDTO {
    'replicator': string;
    'blockHashes': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "replicator",
            "baseName": "replicator",
            "type": "string"
        },
        {
            "name": "blockHashes",
            "baseName": "blockHashes",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return FailureVerificationDTO.attributeTypeMap;
    }
}

