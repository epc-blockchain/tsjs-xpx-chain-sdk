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
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const BlockchainStorageInfo_1 = require("../model/blockchain/BlockchainStorageInfo");
const ServerInfo_1 = require("../model/diagnostic/ServerInfo");
const api_1 = require("./api");
const Http_1 = require("./Http");
/**
 * Diagnostic http repository.
 *
 * @since 1.0
 */
class DiagnosticHttp extends Http_1.Http {
    /**
     * Constructor
     * @param url
     */
    constructor(url) {
        super();
        this.diagnosticRoutesApi = new api_1.DiagnosticRoutesApi(url);
    }
    /**
     * Gets blockchain storage info.
     * @returns Observable<BlockchainStorageInfo>
     */
    getDiagnosticStorage() {
        return rxjs_1.from(this.diagnosticRoutesApi.getDiagnosticStorage()).pipe(operators_1.map(response => {
            const blockchainStorageInfoDTO = response.body;
            return new BlockchainStorageInfo_1.BlockchainStorageInfo(blockchainStorageInfoDTO.numBlocks, blockchainStorageInfoDTO.numTransactions, blockchainStorageInfoDTO.numAccounts);
        }));
    }
    /**
     * Gets blockchain server info.
     * @returns Observable<Server>
     */
    getServerInfo() {
        return rxjs_1.from(this.diagnosticRoutesApi.getServerInfo()).pipe(operators_1.map(response => {
            const serverDTO = response.body;
            return new ServerInfo_1.ServerInfo(serverDTO.serverInfo.restVersion, serverDTO.serverInfo.sdkVersion);
        }));
    }
}
exports.DiagnosticHttp = DiagnosticHttp;
//# sourceMappingURL=DiagnosticHttp.js.map