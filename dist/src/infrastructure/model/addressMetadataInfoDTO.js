"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
class AddressMetadataInfoDTO {
    static getAttributeTypeMap() {
        return AddressMetadataInfoDTO.attributeTypeMap;
    }
}
exports.AddressMetadataInfoDTO = AddressMetadataInfoDTO;
AddressMetadataInfoDTO.discriminator = undefined;
AddressMetadataInfoDTO.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "AddressMetadataDTO"
    }
];
//# sourceMappingURL=addressMetadataInfoDTO.js.map