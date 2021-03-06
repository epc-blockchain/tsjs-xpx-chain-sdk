import { Address } from '../account/Address';
import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { HashType } from './HashType';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
export declare class SecretProofTransaction extends Transaction {
    readonly hashType: HashType;
    readonly secret: string;
    readonly recipient: Address;
    readonly proof: string;
    /**
     * Create a secret proof transaction object.
     *
     * @param deadline - The deadline to include the transaction.
     * @param hashType - The hash algorithm secret is generated with.
     * @param secret - The seed proof hashed.
     * @param recipient - UnresolvedAddress
     * @param proof - The seed proof.
     * @param networkType - The network type.
     * @param maxFee - (Optional) Max fee defined by the sender
     *
     * @return a SecretProofTransaction instance
     */
    static create(deadline: Deadline, hashType: HashType, secret: string, recipient: Address, proof: string, networkType: NetworkType, maxFee?: UInt64): SecretProofTransaction;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param hashType
     * @param secret
     * @param recipient
     * @param proof
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, hashType: HashType, secret: string, recipient: Address, proof: string, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a SecretProofTransaction
     * @returns {number}
     * @memberof SecretProofTransaction
     */
    readonly size: number;
    static calculateSize(proof: string): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof SecretProofTransaction
     */
    toJSON(): {
        transaction: {
            hashAlgorithm: HashType;
            secret: string;
            recipient: {
                address: string;
                networkType: NetworkType;
            };
            proof: string;
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class SecretProofTransactionBuilder extends TransactionBuilder {
    private _hashType;
    private _secret;
    private _recipient;
    private _proof;
    hashType(hashType: HashType): this;
    secret(secret: string): this;
    recipient(recipient: Address): this;
    proof(proof: string): this;
    build(): SecretProofTransaction;
}
