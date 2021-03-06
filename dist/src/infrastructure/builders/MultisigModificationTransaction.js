"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const format_1 = require("../../core/format");
const TransactionType_1 = require("../../model/transaction/TransactionType");
const MultisigModificationTransactionBuffer_1 = require("../buffers/MultisigModificationTransactionBuffer");
const MultisigModificationTransactionSchema_1 = require("../schemas/MultisigModificationTransactionSchema");
const VerifiableTransaction_1 = require("./VerifiableTransaction");
const flatbuffers_1 = require("flatbuffers");
const { ModifyMultisigAccountTransactionBuffer, CosignatoryModificationBuffer, } = MultisigModificationTransactionBuffer_1.default.Buffers;
/**
 * @module transactions/MultisigModificationTransaction
 */
class MultisigModificationTransaction extends VerifiableTransaction_1.VerifiableTransaction {
    constructor(bytes) {
        super(bytes, MultisigModificationTransactionSchema_1.default);
    }
}
exports.default = MultisigModificationTransaction;
// tslint:disable-next-line:max-classes-per-file
class Builder {
    constructor() {
        this.maxFee = [0, 0];
        this.type = TransactionType_1.TransactionType.MODIFY_MULTISIG_ACCOUNT;
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
    addMinRemovalDelta(minRemovalDelta) {
        this.minRemovalDelta = minRemovalDelta;
        return this;
    }
    addMinApprovalDelta(minApprovalDelta) {
        this.minApprovalDelta = minApprovalDelta;
        return this;
    }
    addModifications(modifications) {
        this.modifications = modifications;
        return this;
    }
    build() {
        const builder = new flatbuffers_1.flatbuffers.Builder(1);
        // Create modifications
        const modificationsArray = [];
        this.modifications.forEach((modification) => {
            const cosignatoryPublicKeyVector = CosignatoryModificationBuffer
                .createCosignatoryPublicKeyVector(builder, format_1.Convert.hexToUint8(modification.cosignatoryPublicKey));
            CosignatoryModificationBuffer.startCosignatoryModificationBuffer(builder);
            CosignatoryModificationBuffer.addType(builder, modification.type);
            CosignatoryModificationBuffer.addCosignatoryPublicKey(builder, cosignatoryPublicKeyVector);
            modificationsArray.push(CosignatoryModificationBuffer.endCosignatoryModificationBuffer(builder));
        });
        // Create vectors
        const signatureVector = ModifyMultisigAccountTransactionBuffer
            .createSignatureVector(builder, Array(...Array(64)).map(Number.prototype.valueOf, 0));
        const signerVector = ModifyMultisigAccountTransactionBuffer
            .createSignerVector(builder, Array(...Array(32)).map(Number.prototype.valueOf, 0));
        const deadlineVector = ModifyMultisigAccountTransactionBuffer
            .createDeadlineVector(builder, this.deadline);
        const feeVector = ModifyMultisigAccountTransactionBuffer
            .createMaxFeeVector(builder, this.maxFee);
        const modificationsVector = ModifyMultisigAccountTransactionBuffer
            .createModificationsVector(builder, modificationsArray);
        ModifyMultisigAccountTransactionBuffer.startModifyMultisigAccountTransactionBuffer(builder);
        ModifyMultisigAccountTransactionBuffer.addSize(builder, this.size);
        ModifyMultisigAccountTransactionBuffer.addSignature(builder, signatureVector);
        ModifyMultisigAccountTransactionBuffer.addSigner(builder, signerVector);
        ModifyMultisigAccountTransactionBuffer.addVersion(builder, this.version);
        ModifyMultisigAccountTransactionBuffer.addType(builder, this.type);
        ModifyMultisigAccountTransactionBuffer.addMaxFee(builder, feeVector);
        ModifyMultisigAccountTransactionBuffer.addDeadline(builder, deadlineVector);
        ModifyMultisigAccountTransactionBuffer.addMinRemovalDelta(builder, this.minRemovalDelta);
        ModifyMultisigAccountTransactionBuffer.addMinApprovalDelta(builder, this.minApprovalDelta);
        ModifyMultisigAccountTransactionBuffer.addNumModifications(builder, this.modifications.length);
        ModifyMultisigAccountTransactionBuffer.addModifications(builder, modificationsVector);
        // Calculate size
        const codedMultisigAggregate = ModifyMultisigAccountTransactionBuffer
            .endModifyMultisigAccountTransactionBuffer(builder);
        builder.finish(codedMultisigAggregate);
        const bytes = builder.asUint8Array();
        return new MultisigModificationTransaction(bytes);
    }
}
exports.Builder = Builder;
//# sourceMappingURL=MultisigModificationTransaction.js.map