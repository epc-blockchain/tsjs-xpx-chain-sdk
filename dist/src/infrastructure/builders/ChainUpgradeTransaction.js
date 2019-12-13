"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module transactions/ChainUpgradeTransaction
 */
const TransactionType_1 = require("../../model/transaction/TransactionType");
const ChainUpgradeTransactionBuffer_1 = require("../buffers/ChainUpgradeTransactionBuffer");
const ChainUpgradeTransactionSchema_1 = require("../schemas/ChainUpgradeTransactionSchema");
const VerifiableTransaction_1 = require("./VerifiableTransaction");
const { CatapultUpgradeTransactionBuffer, } = ChainUpgradeTransactionBuffer_1.default.Buffers;
const flatbuffers_1 = require("flatbuffers");
class ChainUpgradeTransaction extends VerifiableTransaction_1.VerifiableTransaction {
    constructor(bytes) {
        super(bytes, ChainUpgradeTransactionSchema_1.default);
    }
}
exports.default = ChainUpgradeTransaction;
class Builder {
    constructor() {
        this.maxFee = [0, 0];
        this.type = TransactionType_1.TransactionType.CHAIN_UPGRADE;
    }
    addSize(size) {
        this.size = size;
        return this;
    }
    addMaxFee(maxFee) {
        this.maxFee = maxFee;
        return this;
    }
    addVersion(version) {
        this.version = version;
        return this;
    }
    addType(type) {
        this.type = type;
        return this;
    }
    addDeadline(deadline) {
        this.deadline = deadline;
        return this;
    }
    addUpgradePeriod(upgradePeriod) {
        this.upgradePeriod = upgradePeriod;
        return this;
    }
    addNewBlockchainVersion(newBlockchainVersion) {
        this.newBlockchainVersion = newBlockchainVersion;
        return this;
    }
    build() {
        const builder = new flatbuffers_1.flatbuffers.Builder(1);
        const signatureVector = CatapultUpgradeTransactionBuffer
            .createSignatureVector(builder, Array(...Array(64)).map(Number.prototype.valueOf, 0));
        const signerVector = CatapultUpgradeTransactionBuffer
            .createSignerVector(builder, Array(...Array(32)).map(Number.prototype.valueOf, 0));
        const deadlineVector = CatapultUpgradeTransactionBuffer
            .createDeadlineVector(builder, this.deadline);
        const feeVector = CatapultUpgradeTransactionBuffer
            .createMaxFeeVector(builder, this.maxFee);
        const upgradePeriodVector = CatapultUpgradeTransactionBuffer
            .createUpgradePeriodVector(builder, this.upgradePeriod);
        const newBlockchainVersionVector = CatapultUpgradeTransactionBuffer
            .createNewCatapultVersionVector(builder, this.newBlockchainVersion);
        CatapultUpgradeTransactionBuffer.startCatapultUpgradeTransactionBuffer(builder);
        CatapultUpgradeTransactionBuffer.addSize(builder, this.size);
        CatapultUpgradeTransactionBuffer.addSignature(builder, signatureVector);
        CatapultUpgradeTransactionBuffer.addSigner(builder, signerVector);
        CatapultUpgradeTransactionBuffer.addVersion(builder, this.version);
        CatapultUpgradeTransactionBuffer.addType(builder, this.type);
        CatapultUpgradeTransactionBuffer.addMaxFee(builder, feeVector);
        CatapultUpgradeTransactionBuffer.addDeadline(builder, deadlineVector);
        CatapultUpgradeTransactionBuffer.addUpgradePeriod(builder, upgradePeriodVector);
        CatapultUpgradeTransactionBuffer.addNewCatapultVersion(builder, newBlockchainVersionVector);
        // Calculate size
        const codedChainUpgrade = CatapultUpgradeTransactionBuffer.endCatapultUpgradeTransactionBuffer(builder);
        builder.finish(codedChainUpgrade);
        const bytes = builder.asUint8Array();
        return new ChainUpgradeTransaction(bytes);
    }
}
exports.Builder = Builder;
//# sourceMappingURL=ChainUpgradeTransaction.js.map