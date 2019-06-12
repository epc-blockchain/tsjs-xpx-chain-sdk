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
Catapult.Buffers.PropertyMosaicModificationBuffer = function() {
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
 * @returns {Catapult.Buffers.PropertyMosaicModificationBuffer}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.PropertyMosaicModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyMosaicModificationBuffer}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.getRootAsPropertyMosaicModificationBuffer = function(bb, obj) {
    return (obj || new Catapult.Buffers.PropertyMosaicModificationBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.prototype.modificationType = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.prototype.value = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.prototype.valueLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.prototype.valueArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.startPropertyMosaicModificationBuffer = function(builder) {
    builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.addModificationType = function(builder, type) {
    builder.addFieldInt8(0, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} valueOffset
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.addValue = function(builder, valueOffset) {
    builder.addFieldOffset(1, valueOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.createValueVector = function(builder, data) {
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
Catapult.Buffers.PropertyMosaicModificationBuffer.startValueVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.PropertyMosaicModificationBuffer.endPropertyMosaicModificationBuffer = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @constructor
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer = function() {
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
 * @returns {Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.__init = function(i, bb) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.getRootAsAccountPropertiesMosaicTransactionBuffer = function(bb, obj) {
    return (obj || new Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.size = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signature = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signatureLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signatureArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signer = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signerLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.signerArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.version = function() {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.type = function() {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.fee = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.feeLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.feeArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.deadline = function(index) {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.deadlineLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.deadlineArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.propertyType = function() {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};


/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.modificationCount = function() {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.PropertyMosaicModificationBuffer=} obj
 * @returns {Catapult.Buffers.PropertyMosaicModificationBuffer}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.modifications = function(index, obj) {
    var offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? (obj || new Catapult.Buffers.PropertyMosaicModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.prototype.modificationsLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 22);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startAccountPropertiesMosaicTransactionBuffer = function(builder) {
    builder.startObject(11);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addSize = function(builder, size) {
    builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addSignature = function(builder, signatureOffset) {
    builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.createSignatureVector = function(builder, data) {
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
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startSignatureVector = function(builder, numElems) {
    builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addSigner = function(builder, signerOffset) {
    builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.createSignerVector = function(builder, data) {
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
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startSignerVector = function(builder, numElems) {
    builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addVersion = function(builder, version) {
    builder.addFieldInt16(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addType = function(builder, type) {
    builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addFee = function(builder, feeOffset) {
    builder.addFieldOffset(5, feeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.createFeeVector = function(builder, data) {
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
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startFeeVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
    builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.createDeadlineVector = function(builder, data) {
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
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startDeadlineVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} propertyType
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addPropertyType = function(builder, propertyType) {
    builder.addFieldInt8(7, propertyType, 0);
};


/**
 * @param {flatbuffers.Builder} builder
 * @param {number} modificationCount
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addModificationCount = function(builder, modificationCount) {
    builder.addFieldInt8(8, modificationCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} modificationsOffset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.addModifications = function(builder, modificationsOffset) {
    builder.addFieldOffset(9, modificationsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.createModificationsVector = function(builder, data) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addOffset(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.startModificationsVector = function(builder, numElems) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.endAccountPropertiesMosaicTransactionBuffer = function(builder) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AccountPropertiesMosaicTransactionBuffer.finishAccountPropertiesMosaicTransactionBufferBuffer = function(builder, offset) {
    builder.finish(offset);
};

// Exports for Node.js and RequireJS
export default Catapult;
