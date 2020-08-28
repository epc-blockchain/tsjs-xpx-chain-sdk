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
/**
* The type of the receipt: * 0x134D (4941 decimal) - Mosaic_Rental_Fee. * 0x124E (4686 decimal) - Namespace_Rental_Fee. * 0x2143 (8515 decimal) - Harvest_Fee. * 0x2248 (8776 decimal) - LockHash_Completed. * 0x2348 (9032 decimal) - LockHash_Expired. * 0x2252 (8786 decimal) - LockSecret_Completed. * 0x2352 (9042 decimal) - LockSecret_Expired. * 0x3148 (12616 decimal) - LockHash_Created. * 0x3152 (12626 decimal) - LockSecret_Created. * 0x414D (16717 decimal) - Mosaic_Expired. * 0x414E (16718 decimal) - Namespace_Expired. * 0x5143 (20803 decimal) - Inflation. * 0xE134 (57652 decimal) - Transaction_Group. * 0xF143 (61763 decimal) - Address_Alias_Resolution. * 0xF243 (62019 decimal) - Mosaic_Alias_Resolution.
*/
var ReceiptTypeEnum;
(function (ReceiptTypeEnum) {
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_4685"] = 4685] = "NUMBER_4685";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_4941"] = 4941] = "NUMBER_4941";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_4686"] = 4686] = "NUMBER_4686";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_8515"] = 8515] = "NUMBER_8515";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_8776"] = 8776] = "NUMBER_8776";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_9042"] = 9042] = "NUMBER_9042";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_12616"] = 12616] = "NUMBER_12616";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_12626"] = 12626] = "NUMBER_12626";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_16717"] = 16717] = "NUMBER_16717";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_16718"] = 16718] = "NUMBER_16718";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_20803"] = 20803] = "NUMBER_20803";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_57652"] = 57652] = "NUMBER_57652";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_61763"] = 61763] = "NUMBER_61763";
    ReceiptTypeEnum[ReceiptTypeEnum["NUMBER_62019"] = 62019] = "NUMBER_62019";
})(ReceiptTypeEnum = exports.ReceiptTypeEnum || (exports.ReceiptTypeEnum = {}));
//# sourceMappingURL=receiptTypeEnum.js.map