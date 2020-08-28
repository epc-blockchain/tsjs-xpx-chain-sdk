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

import { RequestFile } from '../api';
import { ResolutionStatementDTO } from './resolutionStatementDTO';
import { TransactionStatementDTO } from './transactionStatementDTO';

/**
* The collection of transaction statements and resolutions triggered for the block requested.
*/
export class StatementsDTO {
    /**
    * The array of transaction statements for the block requested.
    */
    'transactionStatements': Array<TransactionStatementDTO>;
    /**
    * The array of address resolutions for the block requested.
    */
    'addressResolutionStatements': Array<ResolutionStatementDTO>;
    /**
    * The array of mosaic resolutions for the block requested.
    */
    'mosaicResolutionStatements': Array<ResolutionStatementDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "transactionStatements",
            "baseName": "transactionStatements",
            "type": "Array<TransactionStatementDTO>"
        },
        {
            "name": "addressResolutionStatements",
            "baseName": "addressResolutionStatements",
            "type": "Array<ResolutionStatementDTO>"
        },
        {
            "name": "mosaicResolutionStatements",
            "baseName": "mosaicResolutionStatements",
            "type": "Array<ResolutionStatementDTO>"
        }    ];

    static getAttributeTypeMap() {
        return StatementsDTO.attributeTypeMap;
    }
}

