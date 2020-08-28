"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class UpgradeDTO {
    static getAttributeTypeMap() {
        return UpgradeDTO.attributeTypeMap;
    }
}
exports.UpgradeDTO = UpgradeDTO;
UpgradeDTO.discriminator = undefined;
UpgradeDTO.attributeTypeMap = [
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    },
    {
        "name": "blockChainVersion",
        "baseName": "blockChainVersion",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=upgradeDTO.js.map