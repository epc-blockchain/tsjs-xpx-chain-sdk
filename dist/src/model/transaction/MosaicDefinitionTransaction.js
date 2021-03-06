"use strict";
/*
 * Copyright 2018 NEM
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
const MosaicCreationTransaction_1 = require("../../infrastructure/builders/MosaicCreationTransaction");
const Transaction_1 = require("./Transaction");
const Transaction_2 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
const TransactionVersion_1 = require("./TransactionVersion");
const FeeCalculationStrategy_1 = require("./FeeCalculationStrategy");
/**
 * Before a mosaic can be created or transferred, a corresponding definition of the mosaic has to be created and published to the network.
 * This is done via a mosaic definition transaction.
 */
class MosaicDefinitionTransaction extends Transaction_2.Transaction {
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param mosaicNonce
     * @param mosaicId
     * @param mosaicProperties
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType, version, deadline, maxFee, 
    /**
     * The mosaic nonce.
     */
    nonce, 
    /**
     * The mosaic id.
     */
    mosaicId, 
    /**
     * The mosaic properties.
     */
    mosaicProperties, signature, signer, transactionInfo) {
        super(TransactionType_1.TransactionType.MOSAIC_DEFINITION, networkType, version, deadline, maxFee, signature, signer, transactionInfo);
        this.nonce = nonce;
        this.mosaicId = mosaicId;
        this.mosaicProperties = mosaicProperties;
    }
    /**
     * Create a mosaic creation transaction object
     * @param deadline - The deadline to include the transaction.
     * @param nonce - The mosaic nonce ex: MosaicNonce.createRandom().
     * @param mosaicId - The mosaic id ex: new MosaicId([481110499, 231112638]).
     * @param mosaicProperties - The mosaic properties.
     * @param networkType - The network type.
     * @param maxFee - (Optional) Max fee defined by the sender
     * @returns {MosaicDefinitionTransaction}
     */
    static create(deadline, nonce, mosaicId, mosaicProperties, networkType, maxFee) {
        return new MosaicDefinitionTransactionBuilder()
            .networkType(networkType)
            .deadline(deadline)
            .maxFee(maxFee)
            .mosaicNonce(nonce)
            .mosaicId(mosaicId)
            .mosaicProperties(mosaicProperties)
            .build();
    }
    /**
     * @override Transaction.size()
     * @description get the byte size of a MosaicDefinitionTransaction
     * @returns {number}
     * @memberof MosaicDefinitionTransaction
     */
    get size() {
        return MosaicDefinitionTransaction.calculateSize(this.mosaicProperties.duration !== undefined);
    }
    static calculateSize(durationProvided) {
        const byteSize = Transaction_2.Transaction.getHeaderSize();
        // set static byte size fields
        const byteNonce = 4;
        const byteMosaicId = 8;
        const byteNumProps = 1;
        const byteFlags = 1;
        const byteDivisibility = 1;
        const byteDurationSize = 1;
        const byteDuration = 8;
        return byteSize + byteNonce + byteMosaicId + byteNumProps + byteFlags + byteDivisibility +
            (durationProvided ? byteDurationSize + byteDuration : 0);
    }
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof mosaicDefinitionTransaction
     */
    toJSON() {
        const parent = super.toJSON();
        return Object.assign(Object.assign({}, parent), { transaction: Object.assign(Object.assign({}, parent.transaction), { nonce: this.nonce, mosaicId: this.mosaicId.toDTO(), properties: this.mosaicProperties.toDTO() }) });
    }
    /**
     * @internal
     * @returns {VerifiableTransaction}
     */
    buildTransaction() {
        let mosaicDefinitionTransaction = new MosaicCreationTransaction_1.Builder()
            .addSize(this.size)
            .addDeadline(this.deadline.toDTO())
            .addMaxFee(this.maxFee.toDTO())
            .addVersion(this.versionToDTO())
            .addDivisibility(this.mosaicProperties.divisibility)
            .addDuration(this.mosaicProperties.duration ? this.mosaicProperties.duration.toDTO() : [])
            .addNonce(this.nonce.toDTO())
            .addMosaicId(this.mosaicId.id.toDTO());
        if (this.mosaicProperties.supplyMutable === true) {
            mosaicDefinitionTransaction = mosaicDefinitionTransaction.addSupplyMutable();
        }
        if (this.mosaicProperties.transferable === true) {
            mosaicDefinitionTransaction = mosaicDefinitionTransaction.addTransferability();
        }
        return mosaicDefinitionTransaction.build();
    }
}
exports.MosaicDefinitionTransaction = MosaicDefinitionTransaction;
class MosaicDefinitionTransactionBuilder extends Transaction_1.TransactionBuilder {
    mosaicNonce(mosaicNonce) {
        this._mosaicNonce = mosaicNonce;
        return this;
    }
    mosaicId(mosaicId) {
        this._mosaicId = mosaicId;
        return this;
    }
    mosaicProperties(mosaicProperties) {
        this._mosaicProperties = mosaicProperties;
        return this;
    }
    build() {
        return new MosaicDefinitionTransaction(this._networkType, this._version || TransactionVersion_1.TransactionVersion.MOSAIC_DEFINITION, this._deadline ? this._deadline : this._createNewDeadlineFn(), this._maxFee ? this._maxFee : FeeCalculationStrategy_1.calculateFee(MosaicDefinitionTransaction.calculateSize(this._mosaicProperties.duration !== undefined), this._feeCalculationStrategy), this._mosaicNonce, this._mosaicId, this._mosaicProperties, this._signature, this._signer, this._transactionInfo);
    }
}
exports.MosaicDefinitionTransactionBuilder = MosaicDefinitionTransactionBuilder;
//# sourceMappingURL=MosaicDefinitionTransaction.js.map