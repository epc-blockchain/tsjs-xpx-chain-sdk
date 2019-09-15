import { Observable } from 'rxjs';
import { BlockchainScore } from '../model/blockchain/BlockchainScore';
import { UInt64 } from '../model/UInt64';
import { ChainRepository } from './ChainRepository';
import { Http } from './Http';
import { Authentication } from './model/models';
/**
 * Chain http repository.
 *
 * @since 1.0
 */
export declare class ChainHttp extends Http implements ChainRepository {
    /**
     * Constructor
     * @param url
     */
    constructor(url: string, auth?: Authentication, headers?: {});
    /**
     * Gets current blockchain height
     * @returns Observable<UInt64>
     */
    getBlockchainHeight(): Observable<UInt64>;
    /**
     * Gets current blockchain score
     * @returns Observable<BlockchainScore>
     */
    getBlockchainScore(): Observable<BlockchainScore>;
}
