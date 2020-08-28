/// <reference types="node" />
import http = require('http');
import { AddressMetadataInfoDTO } from '../model/addressMetadataInfoDTO';
import { MetadataIds } from '../model/metadataIds';
import { MosaicMetadataInfoDTO } from '../model/mosaicMetadataInfoDTO';
import { NamespaceMetadataInfoDTO } from '../model/namespaceMetadataInfoDTO';
import { Authentication, Interceptor } from '../model/models';
export declare enum MetadataRoutesApiApiKeys {
}
export declare class MetadataRoutesApi {
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
    setApiKey(key: MetadataRoutesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Gets the metadata for a given accountId.
     * @summary Get metadata of account
     * @param accountId The account identifier.
     */
    getAccountMetadata(accountId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AddressMetadataInfoDTO;
    }>;
    /**
     * Gets the metadata(AccountMetadataIndo, MosaicMetadataInfo or NamespaceMetadataInfo) for a given metadataId.
     * @summary Get metadata of namespace/mosaic/account
     * @param metadataId The metadata identifier.
     */
    getMetadata(metadataId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NamespaceMetadataInfoDTO;
    }>;
    /**
     * Gets an array of metadata.
     * @summary Get metadatas(namespace/mosaic/account) for an array of metadataids
     * @param metadataIds
     */
    getMetadatas(metadataIds?: MetadataIds, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<AddressMetadataInfoDTO>;
    }>;
    /**
     * Gets the metadata for a given mosaicId.
     * @summary Get metadata of mosaic
     * @param mosaicId The mosaic identifier.
     */
    getMosaicMetadata(mosaicId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MosaicMetadataInfoDTO;
    }>;
    /**
     * Gets the metadata for a given namespaceId.
     * @summary Get metadata of namespace
     * @param namespaceId The namespace identifier.
     */
    getNamespaceMetadata(namespaceId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NamespaceMetadataInfoDTO;
    }>;
}
