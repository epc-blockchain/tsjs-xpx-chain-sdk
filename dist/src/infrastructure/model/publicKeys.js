"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class PublicKeys {
    static getAttributeTypeMap() {
        return PublicKeys.attributeTypeMap;
    }
}
exports.PublicKeys = PublicKeys;
PublicKeys.discriminator = undefined;
PublicKeys.attributeTypeMap = [
    {
        "name": "publicKeys",
        "baseName": "publicKeys",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=publicKeys.js.map