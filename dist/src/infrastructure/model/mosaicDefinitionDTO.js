"use strict";
/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
class MosaicDefinitionDTO {
    static getAttributeTypeMap() {
        return MosaicDefinitionDTO.attributeTypeMap;
    }
}
exports.MosaicDefinitionDTO = MosaicDefinitionDTO;
MosaicDefinitionDTO.discriminator = undefined;
MosaicDefinitionDTO.attributeTypeMap = [
    {
        "name": "mosaicId",
        "baseName": "mosaicId",
        "type": "Array<number>"
    },
    {
        "name": "supply",
        "baseName": "supply",
        "type": "Array<number>"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "Array<number>"
    },
    {
        "name": "owner",
        "baseName": "owner",
        "type": "string"
    },
    {
        "name": "revision",
        "baseName": "revision",
        "type": "number"
    },
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<MosaicPropertyDTO>"
    }
];
//# sourceMappingURL=mosaicDefinitionDTO.js.map