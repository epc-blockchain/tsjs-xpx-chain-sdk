"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigDTO {
    static getAttributeTypeMap() {
        return ConfigDTO.attributeTypeMap;
    }
}
exports.ConfigDTO = ConfigDTO;
ConfigDTO.discriminator = undefined;
ConfigDTO.attributeTypeMap = [
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    },
    {
        "name": "networkConfig",
        "baseName": "networkConfig",
        "type": "string"
    },
    {
        "name": "supportedEntityVersions",
        "baseName": "supportedEntityVersions",
        "type": "string"
    }
];
//# sourceMappingURL=configDTO.js.map