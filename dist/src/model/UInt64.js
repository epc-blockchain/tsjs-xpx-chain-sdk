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
const format_1 = require("../core/format");
/**
 * UInt64 data model
 */
class UInt64 {
    /**
     * Constructor
     * @param uintArray
     */
    constructor(uintArray) {
        // TODO: temporary hack to get around maxFee as string ("0") in i.e. /block/1/transactions
        if (typeof uintArray === 'string' || uintArray instanceof String) {
            const i = UInt64.fromUint(Number.parseInt(uintArray));
            this.lower = i.lower;
            this.higher = i.higher;
            return;
        }
        if (!uintArray || uintArray.length !== 2 || uintArray[0] < 0 || uintArray[1] < 0) {
            throw new Error('uintArray must be be an array of two uint numbers');
        }
        this.lower = uintArray[0];
        this.higher = uintArray[1];
    }
    /**
     * Create from uint value
     * @param value
     * @returns {UInt64}
     */
    static fromUint(value) {
        if (value < 0) {
            throw new Error('Unsigned integer cannot be negative');
        }
        return new UInt64(format_1.RawUInt64.fromUint(value));
    }
    /**
     * Parses a hex string into a UInt64.
     * @param {string} input A hex encoded string.
     * @returns {module:coders/uint64~uint64} The uint64 representation of the input.
     */
    static fromHex(input) {
        const dto = format_1.RawUInt64.fromHex(input);
        return new UInt64(dto);
    }
    /**
     * Get DTO representation with format: `[lower, higher]`
     *
     * @internal
     * @returns {[number,number]}
     */
    toDTO() {
        return [this.lower, this.higher];
    }
    /**
     * Get hexadecimal representation
     *
     * @return {string}
     */
    toHex() {
        return format_1.RawUInt64.toHex(this.toDTO());
    }
    /**
     * Compact higher and lower uint parts into a uint
     * @returns {number}
     */
    compact() {
        return format_1.RawUInt64.compact(this.toDTO());
    }
    /**
     * Compares for equality
     * @param other
     * @returns {boolean}
     */
    equals(other) {
        return this.lower === other.lower && this.higher === other.higher;
    }
}
exports.UInt64 = UInt64;
//# sourceMappingURL=UInt64.js.map