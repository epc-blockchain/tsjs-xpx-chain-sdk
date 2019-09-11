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
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const localVarRequest = require("request");
const models_1 = require("../model/models");
let defaultBasePath = 'http://localhost:3000';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var TransactionRoutesApiApiKeys;
(function (TransactionRoutesApiApiKeys) {
})(TransactionRoutesApiApiKeys = exports.TransactionRoutesApiApiKeys || (exports.TransactionRoutesApiApiKeys = {}));
class TransactionRoutesApi {
    constructor(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    set useQuerystring(value) {
        this._useQuerystring = value;
    }
    set basePath(basePath) {
        this._basePath = basePath;
    }
    get basePath() {
        return this._basePath;
    }
    setDefaultAuthentication(auth) {
        this.authentications.default = auth;
    }
    setApiKey(key, value) {
        this.authentications[TransactionRoutesApiApiKeys[key]].apiKey = value;
    }
    /**
     * Announces a [cosignature transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#cosignature-transaction) to the network.
     * @summary Announce a cosignature transaction
     * @param cosignature
     */
    announceCosignatureTransaction(cosignature, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction/cosignature';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'cosignature' is not null or undefined
            if (cosignature === null || cosignature === undefined) {
                throw new Error('Required parameter cosignature was null or undefined when calling announceCosignatureTransaction.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(cosignature, "Cosignature")
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "AnnounceTransactionInfoDTO");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Announces an [aggregate bonded transaction](https://nemtech.github.io/concepts/aggregate-transaction.html#aggregate-bonded) to the network.
     * @summary Announce an aggregate bonded transaction
     * @param transactionPayload
     */
    announcePartialTransaction(transactionPayload, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction/partial';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'transactionPayload' is not null or undefined
            if (transactionPayload === null || transactionPayload === undefined) {
                throw new Error('Required parameter transactionPayload was null or undefined when calling announcePartialTransaction.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(transactionPayload, "TransactionPayload")
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "AnnounceTransactionInfoDTO");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Announces a transaction to the network. It is recommended to use the NEM2-SDK to announce transactions as they should be [serialized](https://nemtech.github.io/concepts/transaction.html#defining-a-transaction).
     * @summary Announce a new transaction
     * @param transactionPayload
     */
    announceTransaction(transactionPayload, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'transactionPayload' is not null or undefined
            if (transactionPayload === null || transactionPayload === undefined) {
                throw new Error('Required parameter transactionPayload was null or undefined when calling announceTransaction.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'PUT',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(transactionPayload, "TransactionPayload")
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "AnnounceTransactionInfoDTO");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns transaction information given a transactionId or hash.
     * @summary Get transaction information
     * @param transactionId The transaction id or hash.
     */
    getTransaction(transactionId, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction/{transactionId}'
                .replace('{' + 'transactionId' + '}', encodeURIComponent(String(transactionId)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'transactionId' is not null or undefined
            if (transactionId === null || transactionId === undefined) {
                throw new Error('Required parameter transactionId was null or undefined when calling getTransaction.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "TransactionInfoDTO");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns the transaction status for a given hash.
     * @summary Get transaction status
     * @param hash The transaction hash.
     */
    getTransactionStatus(hash, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction/{hash}/status'
                .replace('{' + 'hash' + '}', encodeURIComponent(String(hash)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'hash' is not null or undefined
            if (hash === null || hash === undefined) {
                throw new Error('Required parameter hash was null or undefined when calling getTransactionStatus.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'GET',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "TransactionStatusDTO");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns transactions information for a given array of transactionIds.
     * @summary Get transactions information
     * @param transactionIds
     */
    getTransactions(transactionIds, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'transactionIds' is not null or undefined
            if (transactionIds === null || transactionIds === undefined) {
                throw new Error('Required parameter transactionIds was null or undefined when calling getTransactions.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(transactionIds, "TransactionIds")
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
    /**
     * Returns an array of transaction statuses for a given array of transaction hashes.
     * @summary Get transactions status.
     * @param transactionHashes
     */
    getTransactionsStatuses(transactionHashes, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/transaction/statuses';
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'transactionHashes' is not null or undefined
            if (transactionHashes === null || transactionHashes === undefined) {
                throw new Error('Required parameter transactionHashes was null or undefined when calling getTransactionsStatuses.');
            }
            Object.assign(localVarHeaderParams, options.headers);
            let localVarUseFormData = false;
            let localVarRequestOptions = {
                method: 'POST',
                qs: localVarQueryParameters,
                headers: localVarHeaderParams,
                uri: localVarPath,
                useQuerystring: this._useQuerystring,
                json: true,
                body: models_1.ObjectSerializer.serialize(transactionHashes, "TransactionHashes")
            };
            this.authentications.default.applyToRequest(localVarRequestOptions);
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    localVarRequestOptions.formData = localVarFormParams;
                }
                else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        body = models_1.ObjectSerializer.deserialize(body, "Array<TransactionStatusDTO>");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve(body);
                        }
                        else {
                            reject({
                                statusCode: response.statusCode,
                                statusMessage: response.statusMessage
                            });
                        }
                    }
                });
            });
        });
    }
}
exports.TransactionRoutesApi = TransactionRoutesApi;
//# sourceMappingURL=transactionRoutesApi.js.map