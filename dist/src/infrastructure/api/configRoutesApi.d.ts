/// <reference types="node" />
import http = require('http');
import { NetworkConfigDTO } from '../model/networkConfigDTO';
import { Authentication, Interceptor } from '../model/models';
export declare enum ConfigRoutesApiApiKeys {
}
export declare class ConfigRoutesApi {
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
    setApiKey(key: ConfigRoutesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Gets config of network at height.
     * @summary Get config of network
     * @param height The height of the blockchain to get config.
     */
    getConfig(height: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NetworkConfigDTO;
    }>;
}
