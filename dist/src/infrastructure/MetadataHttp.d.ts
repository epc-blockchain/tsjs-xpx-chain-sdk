import { Observable } from 'rxjs';
import { MosaicId } from '../model/mosaic/MosaicId';
import { NamespaceId } from '../model/namespace/NamespaceId';
import { Http } from './Http';
import { NetworkHttp } from './NetworkHttp';
import { MetadataRepository } from './MetadataRepository';
import { AddressMetadata } from '../model/metadata/AddressMetadata';
import { NamespaceMetadata } from '../model/metadata/NamespaceMetadata';
import { MosaicMetadata } from '../model/metadata/MosaicMetadata';
/**
 * Metadata http repository.
 *
 * @since 0.1.0
 */
export declare class MetadataHttp extends Http implements MetadataRepository {
    /**
     * Constructor
     * @param url
     * @param networkHttp
     */
    constructor(url: string, networkHttp?: NetworkHttp);
    /**
     * Gets the Metadata for a given accountId
     * @param accountId - Account address/public key
     * @returns Observable<AddressMetadata>
     */
    getAccountMetadata(accountId: string): Observable<AddressMetadata>;
    /**
     * Gets the Metadata for a given namespaceId
     * @param namespaceId - the id of the namespace
     * @returns Observable<NamespaceMetadata>
     */
    getNamespaceMetadata(namespaceId: NamespaceId): Observable<NamespaceMetadata>;
    /**
     * Gets the Metadata for a given mosaicId
     * @param mosaicId - the id of the mosaic
     * @returns Observable<MosaicMetadata>
     */
    getMosaicMetadata(mosaicId: MosaicId): Observable<MosaicMetadata>;
}
