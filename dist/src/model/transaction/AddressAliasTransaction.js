"use strict";
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AddressAliasTransaction_1 = require("../../infrastructure/builders/AddressAliasTransaction");
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
const TransactionVersion_1 = require("./TransactionVersion");
const FeeCalculationStrategy_1 = require("./FeeCalculationStrategy");
/**
 * In case a mosaic has the flag 'supplyMutable' set to true, the creator of the mosaic can change the supply,
 * i.e. increase or decrease the supply.
 */
class AddressAliasTransaction extends Transaction_1.Transaction {
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
    constructor(networkType, version, deadline, maxFee, 
    /**
     * The alias action type.
     */
    actionType, 
    /**
     * The namespace id that will be an alias.
     */
    namespaceId, 
    /**
     * The mosaic id.
     */
    address, signature, signer, transactionInfo) {
        super(TransactionType_1.TransactionType.ADDRESS_ALIAS, networkType, version, deadline, maxFee, signature, signer, transactionInfo);
        this.actionType = actionType;
        this.namespaceId = namespaceId;
        this.address = address;
    }
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
    static create(deadline, actionType, namespaceId, address, networkType, maxFee) {
        return new AddressAliasTransactionBuilder()
            .networkType(networkType)
            .deadline(deadline)
            .maxFee(maxFee)
            .actionType(actionType)
            .namespaceId(namespaceId)
            .address(address)
            .build();
    }
    /**
     * @override Transaction.size()
     * @description get the byte size of a AddressAliasTransaction
     * @returns {number}
     * @memberof AddressAliasTransaction
     */
    get size() {
        return AddressAliasTransaction.calculateSize();
    }
    static calculateSize() {
        const byteSize = Transaction_1.Transaction.getHeaderSize();
        // set static byte size fields
        const byteActionType = 1;
        const byteNamespaceId = 8;
        const byteAddress = 25;
        return byteSize + byteActionType + byteNamespaceId + byteAddress;
    }
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof AddressAliasTransaction
     */
    toJSON() {
        const parent = super.toJSON();
        return Object.assign(Object.assign({}, parent), { transaction: Object.assign(Object.assign({}, parent.transaction), { aliasAction: this.actionType, namespaceId: this.namespaceId.toDTO(), address: this.address.toDTO() }) });
    }
    /**
     * @internal
     * @returns {VerifiableTransaction}
     */
    buildTransaction() {
        return new AddressAliasTransaction_1.Builder()
            .addSize(this.size)
            .addDeadline(this.deadline.toDTO())
            .addMaxFee(this.maxFee.toDTO())
            .addVersion(this.versionToDTO())
            .addActionType(this.actionType)
            .addNamespaceId(this.namespaceId.id.toDTO())
            .addAddress(this.address.plain())
            .build();
    }
}
exports.AddressAliasTransaction = AddressAliasTransaction;
class AddressAliasTransactionBuilder extends Transaction_1.TransactionBuilder {
    actionType(actionType) {
        this._actionType = actionType;
        return this;
    }
    namespaceId(namespaceId) {
        this._namespaceId = namespaceId;
        return this;
    }
    address(address) {
        this._address = address;
        return this;
    }
    build() {
        return new AddressAliasTransaction(this._networkType, this._version || TransactionVersion_1.TransactionVersion.ADDRESS_ALIAS, this._deadline ? this._deadline : this._createNewDeadlineFn(), this._maxFee ? this._maxFee : FeeCalculationStrategy_1.calculateFee(AddressAliasTransaction.calculateSize(), this._feeCalculationStrategy), this._actionType, this._namespaceId, this._address, this._signature, this._signer, this._transactionInfo);
    }
}
exports.AddressAliasTransactionBuilder = AddressAliasTransactionBuilder;
//# sourceMappingURL=AddressAliasTransaction.js.map