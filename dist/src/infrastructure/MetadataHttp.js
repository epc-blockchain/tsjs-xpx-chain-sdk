"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const MosaicId_1 = require("../model/mosaic/MosaicId");
const NamespaceId_1 = require("../model/namespace/NamespaceId");
const Http_1 = require("./Http");
const NetworkHttp_1 = require("./NetworkHttp");
const Field_1 = require("../model/metadata/Field");
const AddressMetadata_1 = require("../model/metadata/AddressMetadata");
const model_1 = require("../model/model");
const NamespaceMetadata_1 = require("../model/metadata/NamespaceMetadata");
const MosaicMetadata_1 = require("../model/metadata/MosaicMetadata");
const metadataRoutesApi_1 = require("./api/metadataRoutesApi");
/**
 * Metadata http repository.
 *
 * @since 0.1.0
 */
class MetadataHttp extends Http_1.Http {
    /**
     * Constructor
     * @param url
     * @param networkHttp
     */
    constructor(url, networkHttp) {
        networkHttp = networkHttp == null ? new NetworkHttp_1.NetworkHttp(url) : networkHttp;
        super(networkHttp);
        this.metadataRoutesApi = new metadataRoutesApi_1.MetadataRoutesApi(url);
    }
    /**
     * Gets the Metadata for a given accountId
     * @param accountId - Account address/public key
     * @returns Observable<AddressMetadata>
     */
    getAccountMetadata(accountId) {
        return rxjs_1.from(this.metadataRoutesApi.getAccountMetadata(accountId)).pipe(operators_1.map(response => {
            const addressMetadataInfoDTO = response.body;
            return new AddressMetadata_1.AddressMetadata(model_1.Address.createFromEncoded(addressMetadataInfoDTO.metadata.metadataId), addressMetadataInfoDTO.metadata.metadataType, addressMetadataInfoDTO.metadata.fields.map(fieldDTO => new Field_1.Field(fieldDTO.key, fieldDTO.value)));
        }));
    }
    /**
     * Gets the Metadata for a given namespaceId
     * @param namespaceId - the id of the namespace
     * @returns Observable<NamespaceMetadata>
     */
    getNamespaceMetadata(namespaceId) {
        return rxjs_1.from(this.metadataRoutesApi.getNamespaceMetadata(namespaceId.id.toHex())).pipe(operators_1.map(response => {
            const namespaceMetadataInfoDTO = response.body;
            return new NamespaceMetadata_1.NamespaceMetadata(new NamespaceId_1.NamespaceId(namespaceMetadataInfoDTO.metadata.metadataId), namespaceMetadataInfoDTO.metadata.metadataType, namespaceMetadataInfoDTO.metadata.fields.map(fieldDTO => new Field_1.Field(fieldDTO.key, fieldDTO.value)));
        }));
    }
    /**
     * Gets the Metadata for a given mosaicId
     * @param mosaicId - the id of the mosaic
     * @returns Observable<MosaicMetadata>
     */
    getMosaicMetadata(mosaicId) {
        return rxjs_1.from(this.metadataRoutesApi.getMosaicMetadata(mosaicId.id.toHex())).pipe(operators_1.map(response => {
            const mosaicMetadataInfoDTO = response.body;
            return new MosaicMetadata_1.MosaicMetadata(new MosaicId_1.MosaicId(mosaicMetadataInfoDTO.metadata.metadataId), mosaicMetadataInfoDTO.metadata.metadataType, mosaicMetadataInfoDTO.metadata.fields.map(fieldDTO => new Field_1.Field(fieldDTO.key, fieldDTO.value)));
        }));
    }
}
exports.MetadataHttp = MetadataHttp;
//# sourceMappingURL=MetadataHttp.js.map