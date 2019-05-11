import { Observable } from 'rxjs';
import { BlockchainScore } from '../model/blockchain/BlockchainScore';
import { BlockchainStorageInfo } from '../model/blockchain/BlockchainStorageInfo';
import { BlockInfo } from '../model/blockchain/BlockInfo';
import { Transaction } from '../model/transaction/Transaction';
import { UInt64 } from '../model/UInt64';
import { BlockchainRepository } from './BlockchainRepository';
import { Http } from './Http';
import { QueryParams } from './QueryParams';
import { NetworkHttp } from './NetworkHttp';
import { Authentications } from '../model/model';
/**
 * Blockchain http repository.
 *
 * @since 1.0
 */
export declare class BlockchainHttp extends Http implements BlockchainRepository {
    /**
     * @internal
     * Nem2 Library blockchain routes api
     */
    private blockchainRoutesApi;
    /**
     * Constructor
     * @param url
     */
    constructor(url: string, networkHttp?: NetworkHttp, authentications?: Authentications, defaultHeaders?: object);
    /**
     * Gets a BlockInfo for a given block height
     * @param height - Block height
     * @returns Observable<BlockInfo>
     */
    getBlockByHeight(height: number): Observable<BlockInfo>;
    /**
     * Gets array of transactions included in a block for a block height
     * @param height - Block height
     * @param queryParams - (Optional) Query params
     * @returns Observable<Transaction[]>
     */
    getBlockTransactions(height: number, queryParams?: QueryParams): Observable<Transaction[]>;
    /**
     * Gets array of BlockInfo for a block height with limit
     * @param height - Block height from which will be the first block in the array
     * @param limit - Number of blocks returned
     * @returns Observable<BlockInfo[]>
     */
    getBlocksByHeightWithLimit(height: number, limit?: number): Observable<BlockInfo[]>;
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
    /**
     * Gets blockchain storage info.
     * @returns Observable<BlockchainStorageInfo>
     */
    getDiagnosticStorage(): Observable<BlockchainStorageInfo>;
}
