/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AliasDTO } from './aliasDTO';
import { NamespaceTypeEnum } from './namespaceTypeEnum';
export declare class NamespaceDTO {
    /**
    * The public key of the owner of the namespace.
    */
    'owner': string;
    /**
    * The address of the owner of the namespace in hexadecimal.
    */
    'ownerAddress': string;
    'startHeight': Array<number>;
    'endHeight': Array<number>;
    /**
    * The level of the namespace.
    */
    'depth': number;
    'level0': Array<number>;
    'level1'?: Array<number>;
    'level2'?: Array<number>;
    'type': NamespaceTypeEnum;
    'alias': AliasDTO;
    'parentId': Array<number>;
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
