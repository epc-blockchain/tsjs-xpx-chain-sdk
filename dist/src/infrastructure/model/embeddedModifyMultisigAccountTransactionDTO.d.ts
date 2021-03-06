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
import { CosignatoryModificationDTO } from './cosignatoryModificationDTO';
import { EntityTypeEnum } from './entityTypeEnum';
export declare class EmbeddedModifyMultisigAccountTransactionDTO {
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
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
