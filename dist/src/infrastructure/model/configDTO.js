"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
class ConfigDTO {
    static getAttributeTypeMap() {
        return ConfigDTO.attributeTypeMap;
    }
}
ConfigDTO.discriminator = undefined;
ConfigDTO.attributeTypeMap = [
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    },
    {
        "name": "blockChainConfig",
        "baseName": "blockChainConfig",
        "type": "string"
    },
    {
        "name": "supportedEntityVersions",
        "baseName": "supportedEntityVersions",
        "type": "string"
    }
];
exports.ConfigDTO = ConfigDTO;
//# sourceMappingURL=configDTO.js.map