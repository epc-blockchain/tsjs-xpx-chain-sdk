import { Observable } from 'rxjs';
import { MosaicId } from '../model/mosaic/MosaicId';
import { MosaicInfo } from '../model/mosaic/MosaicInfo';
import { MosaicNames } from '../model/mosaic/MosaicNames';
import { PageQueryParams } from './PageQueryParams';
import { RichlistEntry } from '../model/model';
/**
 * Mosaic interface repository.
 *
 * @since 1.0
 */
export interface MosaicRepository {
    /**
     * Gets a MosaicInfo for a given mosaicId
     * @param mosaicId - Mosaic id
     * @returns Observable<MosaicInfo>
     */
    getMosaic(mosaicId: MosaicId): Observable<MosaicInfo>;
    /**
     * Gets MosaicInfo for different mosaicIds.
     * @param mosaicIds - Array of mosaic ids
     * @returns Observable<MosaicInfo[]>
     */
    getMosaics(mosaicIds: MosaicId[]): Observable<MosaicInfo[]>;
    /**
     * Get readable names for a set of mosaics
     * Returns friendly names for mosaics.
     * @param mosaicIds - Array of mosaic ids
     * @return Observable<MosaicNames[]>
     */
    getMosaicsNames(mosaicIds: MosaicId[]): Observable<MosaicNames[]>;
    /**
     * Get mosaic richlist
     * @returns Observable<RichlistEntry[]>
     */
    getMosaicRichlist(mosaicId: MosaicId, queryParams?: PageQueryParams): Observable<RichlistEntry[]>;
}
