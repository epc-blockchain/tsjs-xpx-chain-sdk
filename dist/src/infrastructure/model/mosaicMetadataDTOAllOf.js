"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class MosaicMetadataDTOAllOf {
    static getAttributeTypeMap() {
        return MosaicMetadataDTOAllOf.attributeTypeMap;
    }
}
exports.MosaicMetadataDTOAllOf = MosaicMetadataDTOAllOf;
MosaicMetadataDTOAllOf.discriminator = undefined;
MosaicMetadataDTOAllOf.attributeTypeMap = [
    {
        "name": "metadataType",
        "baseName": "metadataType",
        "type": "number"
    },
    {
        "name": "metadataId",
        "baseName": "metadataId",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=mosaicMetadataDTOAllOf.js.map