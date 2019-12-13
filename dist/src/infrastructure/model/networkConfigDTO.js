"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class NetworkConfigDTO {
    static getAttributeTypeMap() {
        return NetworkConfigDTO.attributeTypeMap;
    }
}
exports.NetworkConfigDTO = NetworkConfigDTO;
NetworkConfigDTO.discriminator = undefined;
NetworkConfigDTO.attributeTypeMap = [
    {
        "name": "networkConfig",
        "baseName": "networkConfig",
        "type": "ConfigDTO"
    }
];
//# sourceMappingURL=networkConfigDTO.js.map