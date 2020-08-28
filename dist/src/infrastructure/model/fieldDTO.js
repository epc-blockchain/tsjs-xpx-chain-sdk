"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class FieldDTO {
    static getAttributeTypeMap() {
        return FieldDTO.attributeTypeMap;
    }
}
exports.FieldDTO = FieldDTO;
FieldDTO.discriminator = undefined;
FieldDTO.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    }
];
//# sourceMappingURL=fieldDTO.js.map