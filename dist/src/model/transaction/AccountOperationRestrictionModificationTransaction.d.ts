import { PublicAccount } from '../account/PublicAccount';
import { RestrictionType } from '../account/RestrictionType';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { AccountRestrictionModification } from './AccountRestrictionModification';
import { Deadline } from './Deadline';
import { Transaction, TransactionBuilder } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
import { TransactionType } from './TransactionType';
export declare class AccountOperationRestrictionModificationTransaction extends Transaction {
    readonly restrictionType: RestrictionType;
    readonly modifications: Array<AccountRestrictionModification<TransactionType>>;
    /**
     * Create a modify account operation restriction type transaction object
     * @param deadline - The deadline to include the transaction.
     * @param restrictionType - The account restriction type.
     * @param modifications - The array of modifications.
     * @param networkType - The network type.
     * @param maxFee - (Optional) Max fee defined by the sender
     * @returns {AccountOperationRestrictionModificationTransaction}
     */
    static create(deadline: Deadline, restrictionType: RestrictionType, modifications: Array<AccountRestrictionModification<TransactionType>>, networkType: NetworkType, maxFee?: UInt64): AccountOperationRestrictionModificationTransaction;
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param restrictionType
     * @param modifications
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType, version: number, deadline: Deadline, maxFee: UInt64, restrictionType: RestrictionType, modifications: Array<AccountRestrictionModification<TransactionType>>, signature?: string, signer?: PublicAccount, transactionInfo?: TransactionInfo);
    /**
     * @override Transaction.size()
     * @description get the byte size of a AccountOperationRestrictionModificationTransaction
     * @returns {number}
     * @memberof AccountOperationRestrictionModificationTransaction
     */
    readonly size: number;
    static calculateSize(modificationCount: number): number;
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof AccountOperationRestrictionModificationTransaction
     */
    toJSON(): {
        transaction: {
            restrictionType: RestrictionType;
            modifications: {
                value: TransactionType;
                type: import("../model").RestrictionModificationType;
            }[];
            type: number;
            networkType: NetworkType;
            version: number;
            maxFee: number[];
            deadline: number[];
            signature: string;
        };
    };
}
export declare class AccountOperationRestrictionModificationTransactionBuilder extends TransactionBuilder {
    private _modifications;
    private _restrictionType;
    restrictionType(restrictionType: RestrictionType): this;
    modifications(modifications: Array<AccountRestrictionModification<TransactionType>>): this;
    build(): AccountOperationRestrictionModificationTransaction;
}
