"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const Metadata_1 = require("./Metadata");
/* Metadata specialization for address/account */
class AddressMetadata extends Metadata_1.Metadata {
    /**
     * Constructor
     * @param metadataId
     * @param metadataType
     * @param fields
     */
    constructor(
    /* id of the address/account this metadata is associated with */
    metadataId, 
    /* metadata type */
    metadataType, 
    /* metadata key/value array */
    fields) {
        super(metadataType, fields);
        this.metadataId = metadataId;
        this.metadataType = metadataType;
        this.fields = fields;
    }
}
exports.AddressMetadata = AddressMetadata;
//# sourceMappingURL=AddressMetadata.js.map