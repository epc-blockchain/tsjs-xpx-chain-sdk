"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
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
__export(require("./accountRoutesApi"));
const accountRoutesApi_1 = require("./accountRoutesApi");
__export(require("./blockRoutesApi"));
const blockRoutesApi_1 = require("./blockRoutesApi");
__export(require("./chainRoutesApi"));
const chainRoutesApi_1 = require("./chainRoutesApi");
__export(require("./configRoutesApi"));
const configRoutesApi_1 = require("./configRoutesApi");
__export(require("./diagnosticRoutesApi"));
const diagnosticRoutesApi_1 = require("./diagnosticRoutesApi");
__export(require("./exchangeRoutesApi"));
const exchangeRoutesApi_1 = require("./exchangeRoutesApi");
__export(require("./lockRoutesApi"));
const lockRoutesApi_1 = require("./lockRoutesApi");
__export(require("./metadataRoutesApi"));
const metadataRoutesApi_1 = require("./metadataRoutesApi");
__export(require("./mosaicRoutesApi"));
const mosaicRoutesApi_1 = require("./mosaicRoutesApi");
__export(require("./namespaceRoutesApi"));
const namespaceRoutesApi_1 = require("./namespaceRoutesApi");
__export(require("./networkRoutesApi"));
const networkRoutesApi_1 = require("./networkRoutesApi");
__export(require("./nodeRoutesApi"));
const nodeRoutesApi_1 = require("./nodeRoutesApi");
__export(require("./serviceRoutesApi"));
const serviceRoutesApi_1 = require("./serviceRoutesApi");
__export(require("./transactionRoutesApi"));
const transactionRoutesApi_1 = require("./transactionRoutesApi");
__export(require("./upgradeRoutesApi"));
const upgradeRoutesApi_1 = require("./upgradeRoutesApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountRoutesApi_1.AccountRoutesApi, blockRoutesApi_1.BlockRoutesApi, chainRoutesApi_1.ChainRoutesApi, configRoutesApi_1.ConfigRoutesApi, diagnosticRoutesApi_1.DiagnosticRoutesApi, exchangeRoutesApi_1.ExchangeRoutesApi, lockRoutesApi_1.LockRoutesApi, metadataRoutesApi_1.MetadataRoutesApi, mosaicRoutesApi_1.MosaicRoutesApi, namespaceRoutesApi_1.NamespaceRoutesApi, networkRoutesApi_1.NetworkRoutesApi, nodeRoutesApi_1.NodeRoutesApi, serviceRoutesApi_1.ServiceRoutesApi, transactionRoutesApi_1.TransactionRoutesApi, upgradeRoutesApi_1.UpgradeRoutesApi];
//# sourceMappingURL=apis.js.map