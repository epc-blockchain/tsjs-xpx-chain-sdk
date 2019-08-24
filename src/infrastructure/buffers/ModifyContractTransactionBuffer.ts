// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

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
Catapult.Buffers.CosignatoryModificationBuffer = function() {
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
 * @returns {Catapult.Buffers.CosignatoryModificationBuffer}
 */
Catapult.Buffers.CosignatoryModificationBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.CosignatoryModificationBuffer=} obj
 * @returns {Catapult.Buffers.CosignatoryModificationBuffer}
 */
Catapult.Buffers.CosignatoryModificationBuffer.getRootAsCosignatoryModificationBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.CosignatoryModificationBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.CosignatoryModificationBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.CosignatoryModificationBuffer.prototype.cosignatoryPublicKey = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.CosignatoryModificationBuffer.prototype.cosignatoryPublicKeyLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.CosignatoryModificationBuffer.prototype.cosignatoryPublicKeyArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.CosignatoryModificationBuffer.startCosignatoryModificationBuffer = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.CosignatoryModificationBuffer.addType = function(builder, type) {
  builder.addFieldInt8(0, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} cosignatoryPublicKeyOffset
 */
Catapult.Buffers.CosignatoryModificationBuffer.addCosignatoryPublicKey = function(builder, cosignatoryPublicKeyOffset) {
  builder.addFieldOffset(1, cosignatoryPublicKeyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.CosignatoryModificationBuffer.createCosignatoryPublicKeyVector = function(builder, data) {
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
Catapult.Buffers.CosignatoryModificationBuffer.startCosignatoryPublicKeyVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.CosignatoryModificationBuffer.endCosignatoryModificationBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 * @param {flatbuffers.Offset} cosignatoryPublicKeyOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.CosignatoryModificationBuffer.createCosignatoryModificationBuffer = function(builder, type, cosignatoryPublicKeyOffset) {
  Catapult.Buffers.CosignatoryModificationBuffer.startCosignatoryModificationBuffer(builder);
  Catapult.Buffers.CosignatoryModificationBuffer.addType(builder, type);
  Catapult.Buffers.CosignatoryModificationBuffer.addCosignatoryPublicKey(builder, cosignatoryPublicKeyOffset);
  return Catapult.Buffers.CosignatoryModificationBuffer.endCosignatoryModificationBuffer(builder);
}

/**
 * @constructor
 */
Catapult.Buffers.ModifyContractTransactionBuffer = function() {
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
 * @returns {Catapult.Buffers.ModifyContractTransactionBuffer}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.ModifyContractTransactionBuffer=} obj
 * @returns {Catapult.Buffers.ModifyContractTransactionBuffer}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.getRootAsModifyContractTransactionBuffer = function(bb, obj) {
  return (obj || new Catapult.Buffers.ModifyContractTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.size = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signature = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signatureLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signatureArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signer = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signerLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.signerArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.version = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.maxFee = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.maxFeeLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.maxFeeArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.deadline = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.deadlineLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.deadlineArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.durationDelta = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.durationDeltaLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.durationDeltaArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.hash = function(index) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.hashLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.hashArray = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.numCustomers = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.numExecutors = function() {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.numVerifiers = function() {
  var offset = this.bb.__offset(this.bb_pos, 26);
  return offset ? this.bb.readUint8(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.CosignatoryModificationBuffer=} obj
 * @returns {Catapult.Buffers.CosignatoryModificationBuffer}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.customers = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 28);
  return offset ? (obj || new Catapult.Buffers.CosignatoryModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.customersLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 28);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.CosignatoryModificationBuffer=} obj
 * @returns {Catapult.Buffers.CosignatoryModificationBuffer}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.executors = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 30);
  return offset ? (obj || new Catapult.Buffers.CosignatoryModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.executorsLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 30);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @param {Catapult.Buffers.CosignatoryModificationBuffer=} obj
 * @returns {Catapult.Buffers.CosignatoryModificationBuffer}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.verifiers = function(index, obj) {
  var offset = this.bb.__offset(this.bb_pos, 32);
  return offset ? (obj || new Catapult.Buffers.CosignatoryModificationBuffer).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.prototype.verifiersLength = function() {
  var offset = this.bb.__offset(this.bb_pos, 32);
  return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.ModifyContractTransactionBuffer.startModifyContractTransactionBuffer = function(builder) {
  builder.startObject(15);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addSize = function(builder, size) {
  builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addSignature = function(builder, signatureOffset) {
  builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createSignatureVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startSignatureVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addSigner = function(builder, signerOffset) {
  builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createSignerVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startSignerVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addVersion = function(builder, version) {
  builder.addFieldInt32(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addType = function(builder, type) {
  builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} maxFeeOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addMaxFee = function(builder, maxFeeOffset) {
  builder.addFieldOffset(5, maxFeeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createMaxFeeVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startMaxFeeVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addDeadline = function(builder, deadlineOffset) {
  builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createDeadlineVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startDeadlineVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} durationDeltaOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addDurationDelta = function(builder, durationDeltaOffset) {
  builder.addFieldOffset(7, durationDeltaOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createDurationDeltaVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startDurationDeltaVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} hashOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addHash = function(builder, hashOffset) {
  builder.addFieldOffset(8, hashOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createHashVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startHashVector = function(builder, numElems) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numCustomers
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addNumCustomers = function(builder, numCustomers) {
  builder.addFieldInt8(9, numCustomers, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numExecutors
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addNumExecutors = function(builder, numExecutors) {
  builder.addFieldInt8(10, numExecutors, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numVerifiers
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addNumVerifiers = function(builder, numVerifiers) {
  builder.addFieldInt8(11, numVerifiers, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} customersOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addCustomers = function(builder, customersOffset) {
  builder.addFieldOffset(12, customersOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createCustomersVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startCustomersVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} executorsOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addExecutors = function(builder, executorsOffset) {
  builder.addFieldOffset(13, executorsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createExecutorsVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startExecutorsVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} verifiersOffset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.addVerifiers = function(builder, verifiersOffset) {
  builder.addFieldOffset(14, verifiersOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<flatbuffers.Offset>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createVerifiersVector = function(builder, data) {
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
Catapult.Buffers.ModifyContractTransactionBuffer.startVerifiersVector = function(builder, numElems) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.endModifyContractTransactionBuffer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.ModifyContractTransactionBuffer.finishModifyContractTransactionBufferBuffer = function(builder, offset) {
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
 * @param {flatbuffers.Offset} durationDeltaOffset
 * @param {flatbuffers.Offset} hashOffset
 * @param {number} numCustomers
 * @param {number} numExecutors
 * @param {number} numVerifiers
 * @param {flatbuffers.Offset} customersOffset
 * @param {flatbuffers.Offset} executorsOffset
 * @param {flatbuffers.Offset} verifiersOffset
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.ModifyContractTransactionBuffer.createModifyContractTransactionBuffer = function(builder, size, signatureOffset, signerOffset, version, type, maxFeeOffset, deadlineOffset, durationDeltaOffset, hashOffset, numCustomers, numExecutors, numVerifiers, customersOffset, executorsOffset, verifiersOffset) {
  Catapult.Buffers.ModifyContractTransactionBuffer.startModifyContractTransactionBuffer(builder);
  Catapult.Buffers.ModifyContractTransactionBuffer.addSize(builder, size);
  Catapult.Buffers.ModifyContractTransactionBuffer.addSignature(builder, signatureOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addSigner(builder, signerOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addVersion(builder, version);
  Catapult.Buffers.ModifyContractTransactionBuffer.addType(builder, type);
  Catapult.Buffers.ModifyContractTransactionBuffer.addMaxFee(builder, maxFeeOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addDeadline(builder, deadlineOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addDurationDelta(builder, durationDeltaOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addHash(builder, hashOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addNumCustomers(builder, numCustomers);
  Catapult.Buffers.ModifyContractTransactionBuffer.addNumExecutors(builder, numExecutors);
  Catapult.Buffers.ModifyContractTransactionBuffer.addNumVerifiers(builder, numVerifiers);
  Catapult.Buffers.ModifyContractTransactionBuffer.addCustomers(builder, customersOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addExecutors(builder, executorsOffset);
  Catapult.Buffers.ModifyContractTransactionBuffer.addVerifiers(builder, verifiersOffset);
  return Catapult.Buffers.ModifyContractTransactionBuffer.endModifyContractTransactionBuffer(builder);
}

// Exports for Node.js and RequireJS
export default Catapult;
