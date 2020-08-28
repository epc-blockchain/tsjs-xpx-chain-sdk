/// <reference types="node" />
export * from './accountRoutesApi';
import { AccountRoutesApi } from './accountRoutesApi';
export * from './blockRoutesApi';
import { BlockRoutesApi } from './blockRoutesApi';
export * from './chainRoutesApi';
import { ChainRoutesApi } from './chainRoutesApi';
export * from './configRoutesApi';
import { ConfigRoutesApi } from './configRoutesApi';
export * from './diagnosticRoutesApi';
import { DiagnosticRoutesApi } from './diagnosticRoutesApi';
export * from './exchangeRoutesApi';
import { ExchangeRoutesApi } from './exchangeRoutesApi';
export * from './lockRoutesApi';
import { LockRoutesApi } from './lockRoutesApi';
export * from './metadataRoutesApi';
import { MetadataRoutesApi } from './metadataRoutesApi';
export * from './mosaicRoutesApi';
import { MosaicRoutesApi } from './mosaicRoutesApi';
export * from './namespaceRoutesApi';
import { NamespaceRoutesApi } from './namespaceRoutesApi';
export * from './networkRoutesApi';
import { NetworkRoutesApi } from './networkRoutesApi';
export * from './nodeRoutesApi';
import { NodeRoutesApi } from './nodeRoutesApi';
export * from './serviceRoutesApi';
import { ServiceRoutesApi } from './serviceRoutesApi';
export * from './transactionRoutesApi';
import { TransactionRoutesApi } from './transactionRoutesApi';
export * from './upgradeRoutesApi';
import { UpgradeRoutesApi } from './upgradeRoutesApi';
import * as fs from 'fs';
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number | undefined;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number | undefined);
}
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare const APIS: (typeof AccountRoutesApi | typeof BlockRoutesApi | typeof ChainRoutesApi | typeof ConfigRoutesApi | typeof DiagnosticRoutesApi | typeof ExchangeRoutesApi | typeof LockRoutesApi | typeof MetadataRoutesApi | typeof MosaicRoutesApi | typeof NamespaceRoutesApi | typeof NetworkRoutesApi | typeof NodeRoutesApi | typeof ServiceRoutesApi | typeof TransactionRoutesApi | typeof UpgradeRoutesApi)[];
