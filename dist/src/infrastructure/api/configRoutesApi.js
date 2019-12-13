"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const localVarRequest = require("request");
const models_1 = require("../model/models");
let defaultBasePath = 'http://localhost:3000';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var ConfigRoutesApiApiKeys;
(function (ConfigRoutesApiApiKeys) {
})(ConfigRoutesApiApiKeys = exports.ConfigRoutesApiApiKeys || (exports.ConfigRoutesApiApiKeys = {}));
class ConfigRoutesApi {
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
        this.authentications[ConfigRoutesApiApiKeys[key]].apiKey = value;
    }
    /**
     * Gets config of network at height.
     * @summary Get config of network
     * @param height The height of the blockchain to get config.
     */
    getConfig(height, options = { headers: {} }) {
        return __awaiter(this, void 0, void 0, function* () {
            const localVarPath = this.basePath + '/config/{height}'
                .replace('{' + 'height' + '}', encodeURIComponent(String(height)));
            let localVarQueryParameters = {};
            let localVarHeaderParams = Object.assign({}, this.defaultHeaders);
            let localVarFormParams = {};
            // verify required parameter 'height' is not null or undefined
            if (height === null || height === undefined) {
                throw new Error('Required parameter height was null or undefined when calling getConfig.');
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
                        body = models_1.ObjectSerializer.deserialize(body, "NetworkConfigDTO");
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
exports.ConfigRoutesApi = ConfigRoutesApi;
//# sourceMappingURL=configRoutesApi.js.map