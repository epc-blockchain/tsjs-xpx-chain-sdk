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
/// <reference types="node" />
import http = require('http');
import { ExchangesDTO } from '../model/exchangesDTO';
import { InlineResponse200 } from '../model/inlineResponse200';
import { Authentication, Interceptor } from '../model/models';
export declare enum ExchangeRoutesApiApiKeys {
}
export declare class ExchangeRoutesApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    defaultHeaders: any;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ExchangeRoutesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Return exchange offer by account id.
     * @summary Get exchange offers by account id
     * @param accountId The public key or address of an account.
     */
    getAccountExchangeOffers(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InlineResponse200;
    }>;
    /**
     * Get exchange offer by type and mosaic id.
     * @summary Get exchange offer by type and mosaic id
     * @param offerType The type of exchange offer.
     * @param mosaicId The mosaic identifier.
     */
    getExchangeOffers(offerType: string, mosaicId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ExchangesDTO>;
    }>;
}
