"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class NamespaceMetadataDTOAllOf {
    static getAttributeTypeMap() {
        return NamespaceMetadataDTOAllOf.attributeTypeMap;
    }
}
exports.NamespaceMetadataDTOAllOf = NamespaceMetadataDTOAllOf;
NamespaceMetadataDTOAllOf.discriminator = undefined;
NamespaceMetadataDTOAllOf.attributeTypeMap = [
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
//# sourceMappingURL=namespaceMetadataDTOAllOf.js.map