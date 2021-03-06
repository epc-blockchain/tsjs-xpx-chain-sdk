"use strict";
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
class ModifyMultisigAccountTransactionBodyDTO {
    static getAttributeTypeMap() {
        return ModifyMultisigAccountTransactionBodyDTO.attributeTypeMap;
    }
}
exports.ModifyMultisigAccountTransactionBodyDTO = ModifyMultisigAccountTransactionBodyDTO;
ModifyMultisigAccountTransactionBodyDTO.discriminator = undefined;
ModifyMultisigAccountTransactionBodyDTO.attributeTypeMap = [
    {
        "name": "minRemovalDelta",
        "baseName": "minRemovalDelta",
        "type": "number"
    },
    {
        "name": "minApprovalDelta",
        "baseName": "minApprovalDelta",
        "type": "number"
    },
    {
        "name": "modifications",
        "baseName": "modifications",
        "type": "Array<CosignatoryModificationDTO>"
    }
];
//# sourceMappingURL=modifyMultisigAccountTransactionBodyDTO.js.map