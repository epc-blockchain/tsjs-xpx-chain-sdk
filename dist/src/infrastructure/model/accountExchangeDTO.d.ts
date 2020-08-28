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
import { OfferInfoDTO } from './offerInfoDTO';
export declare class AccountExchangeDTO {
    /**
    * The public key (accountId) of the owner.
    */
    'owner': string;
    /**
    * The address of the owner.
    */
    'ownerAddress': string;
    'buyOffers': Array<OfferInfoDTO>;
    'sellOffers': Array<OfferInfoDTO>;
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
