"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class BlockchainUpgradeDTO {
    static getAttributeTypeMap() {
        return BlockchainUpgradeDTO.attributeTypeMap;
    }
}
exports.BlockchainUpgradeDTO = BlockchainUpgradeDTO;
BlockchainUpgradeDTO.discriminator = undefined;
BlockchainUpgradeDTO.attributeTypeMap = [
    {
        "name": "blockchainUpgrade",
        "baseName": "blockchainUpgrade",
        "type": "UpgradeDTO"
    }
];
//# sourceMappingURL=blockchainUpgradeDTO.js.map