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
import { EntityTypeEnum } from './entityTypeEnum';
export declare class EntityDTO {
    /**
    * The public key of the entity signer formatted as hexadecimal.
    */
    'signer': string;
    /**
    * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network.
    */
    'version': number;
    'type': EntityTypeEnum;
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
