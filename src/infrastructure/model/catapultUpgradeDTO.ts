// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

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

import { UpgradeDTO } from './upgradeDTO';

export class CatapultUpgradeDTO {
    'catapultUpgrade'?: UpgradeDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "catapultUpgrade",
            "baseName": "catapultUpgrade",
            "type": "UpgradeDTO"
        }    ];

    static getAttributeTypeMap() {
        return CatapultUpgradeDTO.attributeTypeMap;
    }
}

