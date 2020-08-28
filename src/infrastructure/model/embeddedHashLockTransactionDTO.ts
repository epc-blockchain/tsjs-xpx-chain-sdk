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
import { EmbeddedTransactionDTO } from './embeddedTransactionDTO';
import { EntityTypeEnum } from './entityTypeEnum';
import { HashLockTransactionDTO } from './hashLockTransactionDTO';
import { MosaicDTO } from './mosaicDTO';

export class EmbeddedHashLockTransactionDTO {
    /**
    * The public key of the entity signer formatted as hexadecimal.
    */
    'signer': string;
    /**
    * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
    */
    'version': number;
    'type': EntityTypeEnum;
    'maxFee': Array<number>;
    'deadline': Array<number>;
    /**
    * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    */
    'signature': string;
    'mosaic': MosaicDTO;
    'duration': MosaicDTO;
    /**
    * The aggregate bonded transaction hash that has to be confirmed before unlocking the mosaics. 
    */
    'hash': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signer",
            "baseName": "signer",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EntityTypeEnum"
        },
        {
            "name": "maxFee",
            "baseName": "max_fee",
            "type": "Array<number>"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "Array<number>"
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "mosaic",
            "baseName": "mosaic",
            "type": "MosaicDTO"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "MosaicDTO"
        },
        {
            "name": "hash",
            "baseName": "hash",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmbeddedHashLockTransactionDTO.attributeTypeMap;
    }
}

