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
import { NodeInfoDTO } from '../model/nodeInfoDTO';
import { NodeTimeDTO } from '../model/nodeTimeDTO';
import { Authentication, Interceptor } from '../model/models';
export declare enum NodeRoutesApiApiKeys {
}
export declare class NodeRoutesApi {
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
    setApiKey(key: NodeRoutesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Supplies additional information about the application running on a node.
     * @summary Get the node information
     */
    getNodeInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NodeInfoDTO;
    }>;
    /**
     * Gets the node time at the moment the reply was sent and received.
     * @summary Get the node time
     */
    getNodeTime(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NodeTimeDTO;
    }>;
}
