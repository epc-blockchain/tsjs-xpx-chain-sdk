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
import { MessageDTO } from './messageDTO';
import { MosaicDTO } from './mosaicDTO';

export class TransferTransactionBodyDTO {
    /**
    * If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1.
    */
    'recipient': string;
    /**
    * The array of mosaics sent to the recipient. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of a instead of a mosaicId corresponds to a mosaicId.
    */
    'mosaics': Array<MosaicDTO>;
    'message': MessageDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "mosaics",
            "baseName": "mosaics",
            "type": "Array<MosaicDTO>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "MessageDTO"
        }    ];

    static getAttributeTypeMap() {
        return TransferTransactionBodyDTO.attributeTypeMap;
    }
}

