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
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @const
 * @namespace
 */
var Catapult = Catapult || {};
/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};
/**
 * @constructor
 */
Catapult.Buffers.AliasTransactionBuffer = function () {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;
    /**
     * @type {number}
     */
    this.bb_pos = 0;
};
/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.AliasTransactionBuffer}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.__init = function (i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};
/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AliasTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AliasTransactionBuffer}
 */
Catapult.Buffers.AliasTransactionBuffer.getRootAsAliasTransactionBuffer = function (bb, obj) {
    return (obj || new Catapult.Buffers.AliasTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.size = function () {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signature = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signatureLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signatureArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signer = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signerLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.signerArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.version = function () {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.type = function () {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.maxFee = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.maxFeeLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.maxFeeArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.deadline = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.deadlineLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.deadlineArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.actionType = function () {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};
/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.namespaceId = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.namespaceIdLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.namespaceIdArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * In case of address it is 25 bytes array. In case of mosaic it is 8 byte array(or 2 uint32 array)
 *
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.aliasId = function (index) {
    var offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};
/**
 * @returns {number}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.aliasIdLength = function () {
    var offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};
/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AliasTransactionBuffer.prototype.aliasIdArray = function () {
    var offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};
/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AliasTransactionBuffer.startAliasTransactionBuffer = function (builder) {
    builder.startObject(10);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AliasTransactionBuffer.addSize = function (builder, size) {
    builder.addFieldInt32(0, size, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addSignature = function (builder, signatureOffset) {
    builder.addFieldOffset(1, signatureOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createSignatureVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startSignatureVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addSigner = function (builder, signerOffset) {
    builder.addFieldOffset(2, signerOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createSignerVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startSignerVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AliasTransactionBuffer.addVersion = function (builder, version) {
    builder.addFieldInt32(3, version, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AliasTransactionBuffer.addType = function (builder, type) {
    builder.addFieldInt16(4, type, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addMaxFee = function (builder, maxFeeOffset) {
    builder.addFieldOffset(5, maxFeeOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createMaxFeeVector = function (builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startMaxFeeVector = function (builder, numElems) {
    builder.startVector(4, numElems, 4);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addDeadline = function (builder, deadlineOffset) {
    builder.addFieldOffset(6, deadlineOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createDeadlineVector = function (builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startDeadlineVector = function (builder, numElems) {
    builder.startVector(4, numElems, 4);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} actionType
 */
Catapult.Buffers.AliasTransactionBuffer.addActionType = function (builder, actionType) {
    builder.addFieldInt8(7, actionType, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} namespaceIdOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addNamespaceId = function (builder, namespaceIdOffset) {
    builder.addFieldOffset(8, namespaceIdOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createNamespaceIdVector = function (builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startNamespaceIdVector = function (builder, numElems) {
    builder.startVector(4, numElems, 4);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} aliasIdOffset
 */
Catapult.Buffers.AliasTransactionBuffer.addAliasId = function (builder, aliasIdOffset) {
    builder.addFieldOffset(9, aliasIdOffset, 0);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createAliasIdVector = function (builder, data) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AliasTransactionBuffer.startAliasIdVector = function (builder, numElems) {
    builder.startVector(1, numElems, 1);
};
/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.endAliasTransactionBuffer = function (builder) {
    var offset = builder.endObject();
    return offset;
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AliasTransactionBuffer.finishAliasTransactionBufferBuffer = function (builder, offset) {
    builder.finish(offset);
};
/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 * @param {flatbuffers.Offset} signatureOffset
 * @param {flatbuffers.Offset} signerOffset
 * @param {number} version
 * @param {number} type
 * @param {flatbuffers.Offset} maxFeeOffset
 * @param {flatbuffers.Offset} deadlineOffset
 * @param {number} actionType
 * @param {flatbuffers.Offset} namespaceIdOffset
 * @param {flatbuffers.Offset} aliasIdOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AliasTransactionBuffer.createAliasTransactionBuffer = function (builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, actionType, namespaceIdOffset, aliasIdOffset) {
    Catapult.Buffers.AliasTransactionBuffer.startAliasTransactionBuffer(builder);
    Catapult.Buffers.AliasTransactionBuffer.addSize(builder, size);
    Catapult.Buffers.AliasTransactionBuffer.addSignature(builder, signatureOffset);
    Catapult.Buffers.AliasTransactionBuffer.addSigner(builder, signerOffset);
    Catapult.Buffers.AliasTransactionBuffer.addVersion(builder, version);
    Catapult.Buffers.AliasTransactionBuffer.addType(builder, type);
    Catapult.Buffers.AliasTransactionBuffer.addMaxFee(builder, maxFeeOffset);
    Catapult.Buffers.AliasTransactionBuffer.addDeadline(builder, deadlineOffset);
    Catapult.Buffers.AliasTransactionBuffer.addActionType(builder, actionType);
    Catapult.Buffers.AliasTransactionBuffer.addNamespaceId(builder, namespaceIdOffset);
    Catapult.Buffers.AliasTransactionBuffer.addAliasId(builder, aliasIdOffset);
    return Catapult.Buffers.AliasTransactionBuffer.endAliasTransactionBuffer(builder);
};
// Exports for Node.js and RequireJS
exports.default = Catapult;
//# sourceMappingURL=AliasTransactionBuffer.js.map