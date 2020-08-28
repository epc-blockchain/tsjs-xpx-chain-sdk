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
import { CosignatoryModificationDTO } from './cosignatoryModificationDTO';
import { EmbeddedTransactionDTO } from './embeddedTransactionDTO';
import { EntityTypeEnum } from './entityTypeEnum';
import { ModifyMultisigAccountTransactionBodyDTO } from './modifyMultisigAccountTransactionBodyDTO';

export class EmbeddedModifyMultisigAccountTransactionDTO {
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
    * The number of signatures needed to remove a cosignatory. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
    */
    'minRemovalDelta': number;
    /**
    * The number of signatures needed to approve a transaction. If we are modifying an existing multisig account, this indicates the relative change of the minimum cosignatories. 
    */
    'minApprovalDelta': number;
    /**
    * The array of cosignatory accounts to add or delete.
    */
    'modifications': Array<CosignatoryModificationDTO>;

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
            "name": "minRemovalDelta",
            "baseName": "minRemovalDelta",
            "type": "number"
        },
        {
            "name": "minApprovalDelta",
            "baseName": "minApprovalDelta",
            "type": "number"
        },
        {
            "name": "modifications",
            "baseName": "modifications",
            "type": "Array<CosignatoryModificationDTO>"
        }    ];

    static getAttributeTypeMap() {
        return EmbeddedModifyMultisigAccountTransactionDTO.attributeTypeMap;
    }
}

