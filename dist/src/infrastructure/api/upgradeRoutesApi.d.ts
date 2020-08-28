/// <reference types="node" />
import http = require('http');
import { BlockchainUpgradeDTO } from '../model/blockchainUpgradeDTO';
import { Authentication, Interceptor } from '../model/models';
export declare enum UpgradeRoutesApiApiKeys {
}
export declare class UpgradeRoutesApi {
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
    setApiKey(key: UpgradeRoutesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Get software info of network at height.
     * @summary Get software info of network
     * @param height The height of the blockchain to get software info.
     */
    getUpgrade(height: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BlockchainUpgradeDTO;
    }>;
}
