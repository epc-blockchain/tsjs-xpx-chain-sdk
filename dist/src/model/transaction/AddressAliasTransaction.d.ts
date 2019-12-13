import { Address } from '../account/Address';
import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { AliasActionType } from '../namespace/AliasActionType';
import { NamespaceId } from '../namespace/NamespaceId';
import { UInt64 } from '../UInt64';
import { Deadline } from './Deadline';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
/**
 * In case a mosaic has the flag 'supplyMutable' set to true, the creator of the mosaic can change the supply,
 * i.e. increase or decrease the supply.
 */
export declare class AddressAliasTransaction extends Transaction {
    /**
     * The alias action type.
     */
    readonly actionType: AliasActionType;
    /**
     * The namespace id that will be an alias.
     */
    readonly namespaceId: NamespaceId;
    /**
     * The mosaic id.
     */
    readonly address: Address;
    /**
     * Create a address alias transaction object
     * @param deadline - The deadline to include the transaction.
     * @param actionType - The alias action type.
     * @param namespaceId - The namespace id.
     * @param address - The address.
     * @param networkType - The network type.
     * @param maxFee - (Optional) Max fee defined by the sender
     * @returns {AddressAliasTransaction}
     */
    static create(deadline: Deadline, actionType: AliasActionType, namespaceId: NamespaceId, address: Address, networkType: NetworkType, maxFee?: UInt64): AddressAliasTransaction;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param actionType
     * @param namespaceId
     * @param address
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, 
    /**
     * The alias action type.
     */
    actionType: AliasActionType, 
    /**
     * The namespace id that will be an alias.
     */
    namespaceId: NamespaceId, 
    /**
     * The mosaic id.
     */
    address: Address, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a AddressAliasTransaction
     * @returns {number}
     * @memberof AddressAliasTransaction
     */
    readonly size: number;
    static calculateSize(): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof AddressAliasTransaction
     */
    toJSON(): {
        transaction: {
            aliasAction: AliasActionType;
            namespaceId: {
                id: number[];
                fullName: string;
            };
            address: {
                address: string;
                networkType: NetworkType;
            };
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class AddressAliasTransactionBuilder extends TransactionBuilder {
    private _actionType;
    private _namespaceId;
    private _address;
    actionType(actionType: AliasActionType): this;
    namespaceId(namespaceId: NamespaceId): this;
    address(address: Address): this;
    build(): AddressAliasTransaction;
}
