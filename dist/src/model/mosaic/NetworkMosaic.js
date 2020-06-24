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
const NamespaceId_1 = require("../namespace/NamespaceId");
const UInt64_1 = require("../UInt64");
const Mosaic_1 = require("./Mosaic");
const MosaicId_1 = require("./MosaicId");
const MosaicProperties_1 = require("./MosaicProperties");
class KnownMosaicProperties {
    constructor(ID, INITIAL_SUPPLY, MOSAIC_PROPERTIES) {
        this.ID = ID;
        this.INITIAL_SUPPLY = INITIAL_SUPPLY;
        this.MOSAIC_PROPERTIES = MOSAIC_PROPERTIES;
    }
}
exports.KnownMosaicProperties = KnownMosaicProperties;
exports.XpxMosaicProperties = new KnownMosaicProperties(new NamespaceId_1.NamespaceId('prx.xpx'), UInt64_1.UInt64.fromUint(9000000000), // initial supply
MosaicProperties_1.MosaicProperties.create({
    supplyMutable: false,
    transferable: true,
    divisibility: 6
}));
exports.EpccMosaicProperties = new KnownMosaicProperties(new NamespaceId_1.NamespaceId('besc.epcc'), UInt64_1.UInt64.fromUint(9000000000), // initial supply
MosaicProperties_1.MosaicProperties.create({
    supplyMutable: false,
    transferable: true,
    divisibility: 6
}));
exports.StableCoinMosaicProperties = new KnownMosaicProperties(new MosaicId_1.MosaicId("41ff162249ade073"), UInt64_1.UInt64.fromUint(9000000000), // initial supply
MosaicProperties_1.MosaicProperties.create({
    supplyMutable: false,
    transferable: true,
    divisibility: 6
}));
/**
 * NetworkMosaic mosaic
 *
 * This represents the per-network mosaic. This mosaicId is aliased
 * with namespace name `prx.xpx` by default.
 *
 */
class NetworkMosaic extends Mosaic_1.Mosaic {
    constructor(amount, networkMosaicProperties) {
        super(networkMosaicProperties.ID, amount);
        this._networkMosaicProperties = networkMosaicProperties;
    }
    get ID() {
        return this.id;
    }
    get DIVISIBILITY() {
        return this._networkMosaicProperties.MOSAIC_PROPERTIES.divisibility;
    }
    get INITIAL_SUPPLY() {
        return this._networkMosaicProperties.INITIAL_SUPPLY;
    }
    get TRANSFERABLE() {
        return this._networkMosaicProperties.MOSAIC_PROPERTIES.transferable;
    }
    get SUPPLY_MUTABLE() {
        return this._networkMosaicProperties.MOSAIC_PROPERTIES.supplyMutable;
    }
    static createRelativeAmount(amount, divisibility) {
        if (typeof amount === 'number') {
            return UInt64_1.UInt64.fromUint(amount * Math.pow(10, divisibility));
        }
        return UInt64_1.UInt64.fromUint(amount.compact() * Math.pow(10, divisibility));
    }
    static createAbsoluteAmount(amount) {
        if (typeof amount === 'number') {
            return UInt64_1.UInt64.fromUint(amount);
        }
        return amount;
    }
}
exports.NetworkMosaic = NetworkMosaic;
//# sourceMappingURL=NetworkMosaic.js.map