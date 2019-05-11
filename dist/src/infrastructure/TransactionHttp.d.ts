import { Observable } from 'rxjs';
import { CosignatureSignedTransaction } from '../model/transaction/CosignatureSignedTransaction';
import { SignedTransaction } from '../model/transaction/SignedTransaction';
import { Transaction } from '../model/transaction/Transaction';
import { TransactionAnnounceResponse } from '../model/transaction/TransactionAnnounceResponse';
import { TransactionStatus } from '../model/transaction/TransactionStatus';
import { Http } from './Http';
import { TransactionRepository } from './TransactionRepository';
import { Authentications } from '../model/model';
/**
 * Transaction http repository.
 *
 * @since 1.0
 */
export declare class TransactionHttp extends Http implements TransactionRepository {
    /**
     * @internal
     * Nem2 Library transaction routes api
     */
    private transactionRoutesApi;
    /**
     * @internal
     * Nem2 Library blockchain routes api
     */
    private blockchainRoutesApi;
    /**
     * Constructor
     * @param url
     */
    constructor(url: string, authentications?: Authentications, defaultHeaders?: object);
    /**
     * Gets a transaction for a transactionId
     * @param transactionId - Transaction id or hash.
     * @returns Observable<Transaction>
     */
    getTransaction(transactionId: string): Observable<Transaction>;
    /**
     * Gets an array of transactions for different transaction ids
     * @param transactionIds - Array of transactions id and/or hash.
     * @returns Observable<Transaction[]>
     */
    getTransactions(transactionIds: string[]): Observable<Transaction[]>;
    /**
     * Gets a transaction status for a transaction hash
     * @param hash - Transaction hash.
     * @returns Observable<TransactionStatus>
     */
    getTransactionStatus(transactionHash: string): Observable<TransactionStatus>;
    /**
     * Gets an array of transaction status for different transaction hashes
     * @param transactionHashes - Array of transaction hash
     * @returns Observable<TransactionStatus[]>
     */
    getTransactionsStatuses(transactionHashes: string[]): Observable<TransactionStatus[]>;
    /**
     * Send a signed transaction
     * @param signedTransaction - Signed transaction
     * @returns Observable<TransactionAnnounceResponse>
     */
    announce(signedTransaction: SignedTransaction): Observable<TransactionAnnounceResponse>;
    /**
     * Send a signed transaction with missing signatures
     * @param signedTransaction - Signed transaction
     * @returns Observable<TransactionAnnounceResponse>
     */
    announceAggregateBonded(signedTransaction: SignedTransaction): Observable<TransactionAnnounceResponse>;
    /**
     * Send a cosignature signed transaction of an already announced transaction
     * @param cosignatureSignedTransaction - Cosignature signed transaction
     * @returns Observable<TransactionAnnounceResponse>
     */
    announceAggregateBondedCosignature(cosignatureSignedTransaction: CosignatureSignedTransaction): Observable<TransactionAnnounceResponse>;
    announceSync(signedTx: SignedTransaction): Observable<Transaction>;
    /**
     * Gets a transaction's effective paid fee
     * @param transactionId - Transaction id or hash.
     * @returns Observable<number>
     */
    getTransactionEffectiveFee(transactionId: string): Observable<number>;
}
