"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
const TransactionType_1 = require("./TransactionType");
const ChainConfigTransaction_1 = require("../../infrastructure/builders/ChainConfigTransaction");
const TransactionVersion_1 = require("./TransactionVersion");
const FeeCalculationStrategy_1 = require("./FeeCalculationStrategy");
class ChainConfigTransaction extends Transaction_1.Transaction {
    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param maxFee
     * @param applyHeightDelta
     * @param networkConfig,
     * @param supportedEntityVersions,
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType, version, deadline, maxFee, applyHeightDelta, networkConfig, supportedEntityVersions, signature, signer, transactionInfo) {
        super(TransactionType_1.TransactionType.CHAIN_CONFIGURE, networkType, version, deadline, maxFee, signature, signer, transactionInfo);
        this.applyHeightDelta = applyHeightDelta;
        this.networkConfig = networkConfig;
        this.supportedEntityVersions = supportedEntityVersions;
    }
    static create(deadline, applyHeightDelta, networkConfig, supportedEntityVersions, networkType, maxFee) {
        return new ChainConfigTransactionBuilder()
            .networkType(networkType)
            .deadline(deadline)
            .maxFee(maxFee)
            .applyHeightDelta(applyHeightDelta)
            .networkConfig(networkConfig)
            .supportedEntityVersions(supportedEntityVersions)
            .build();
    }
    /**
     * @override Transaction.size()
     * @description get the byte size of a transaction
     * @returns {number}
     * @memberof Transaction
     */
    get size() {
        return ChainConfigTransaction.calculateSize(this.networkConfig.length, this.supportedEntityVersions.length);
    }
    static calculateSize(networkConfigLength, supportedEntityVersionsLength) {
        const byteSize = Transaction_1.Transaction.getHeaderSize()
            + 8 // applyHeightDelta
            + 2 // networkConfigSize
            + 2 // supportedEntityVersionsSize
            + networkConfigLength //networkConfig
            + supportedEntityVersionsLength; // supportedEntityVersions
        return byteSize;
    }
    /**
     * @override Transaction.toJSON()
     * @description Serialize a transaction object - add own fields to the result of Transaction.toJSON()
     * @return {Object}
     * @memberof ChainConfigTransaction
     */
    toJSON() {
        const parent = super.toJSON();
        return Object.assign(Object.assign({}, parent), { transaction: Object.assign(Object.assign({}, parent.transaction), { applyHeightDelta: this.applyHeightDelta.toDTO(), networkConfig: this.networkConfig, supportedEntityVersions: this.supportedEntityVersions }) });
    }
    /**
    * @internal
    * @returns {VerifiableTransaction}
    */
    buildTransaction() {
        return new ChainConfigTransaction_1.Builder()
            .addSize(this.size)
            .addDeadline(this.deadline.toDTO())
            .addMaxFee(this.maxFee.toDTO())
            .addVersion(this.versionToDTO())
            .addApplyHeightDelta(this.applyHeightDelta.toDTO())
            .addNetworkConfig(this.networkConfig)
            .addSupportedEntityVersions(this.supportedEntityVersions)
            .build();
    }
}
exports.ChainConfigTransaction = ChainConfigTransaction;
class ChainConfigTransactionBuilder extends Transaction_1.TransactionBuilder {
    constructor() {
        super();
        this._feeCalculationStrategy = FeeCalculationStrategy_1.FeeCalculationStrategy.ZeroFeeCalculationStrategy;
    }
    applyHeightDelta(applyHeightDelta) {
        this._applyHeightDelta = applyHeightDelta;
        return this;
    }
    networkConfig(networkConfig) {
        this._networkConfig = networkConfig;
        return this;
    }
    supportedEntityVersions(supportedEntityVersions) {
        this._supportedEntityVersions = supportedEntityVersions;
        return this;
    }
    build() {
        return new ChainConfigTransaction(this._networkType, TransactionVersion_1.TransactionVersion.CHAIN_CONFIG, this._deadline ? this._deadline : this._createNewDeadlineFn(), this._maxFee ? this._maxFee : FeeCalculationStrategy_1.calculateFee(ChainConfigTransaction.calculateSize(this._networkConfig.length, this._supportedEntityVersions.length), this._feeCalculationStrategy), this._applyHeightDelta, this._networkConfig, this._supportedEntityVersions, this._signature, this._signer, this._transactionInfo);
    }
}
exports.ChainConfigTransactionBuilder = ChainConfigTransactionBuilder;
//# sourceMappingURL=ChainConfigTransaction.js.map