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
import { AccountLinkTypeEnum } from './accountLinkTypeEnum';
import { MosaicDTO } from './mosaicDTO';
export declare class AccountDTO {
    /**
    * The account unique address in hexadecimal.
    */
    'address': string;
    'addressHeight': Array<number>;
    /**
    * The public key of an account can be used to verify signatures of the account. Only accounts that have already published a transaction have a public key assigned to the account. Otherwise, the field is null.
    */
    'publicKey': string;
    'publicKeyHeight': Array<number>;
    /**
    * The list of mosaics the account owns. The amount is represented in absolute amount. Thus a balance of 123456789 for a mosaic with divisibility 6 (absolute) means the account owns 123.456789 instead.
    */
    'mosaics': Array<MosaicDTO>;
    'accountType': AccountLinkTypeEnum;
    /**
    * The public key of a linked account. The linked account can use|provide balance for delegated harvesting.
    */
    'linkedAccountKey': string;
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
