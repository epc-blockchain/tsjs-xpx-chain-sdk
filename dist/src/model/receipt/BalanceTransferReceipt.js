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
const Receipt_1 = require("./Receipt");
/**
 * Balance Transfer: A mosaic transfer was triggered.
 */
class BalanceTransferReceipt extends Receipt_1.Receipt {
    /**
     * Balance transfer expiry receipt
     * @param sender - The public account of the sender.
     * @param recipient - The mosaic recipient address.
     * @param mosaicId - The mosaic id.
     * @param amount - The amount of mosaic.
     * @param version - The receipt version
     * @param type - The receipt type
     * @param size - the receipt size
     */
    constructor(
    /**
     * The public account of the sender.
     */
    sender, 
    /**
     * The mosaic recipient address.
     */
    recipient, 
    /**
     * The mosaic id.
     */
    mosaicId, 
    /**
     * The amount of mosaic.
     */
    amount, version, type, size) {
        super(version, type, size);
        this.sender = sender;
        this.recipient = recipient;
        this.mosaicId = mosaicId;
        this.amount = amount;
    }
}
exports.BalanceTransferReceipt = BalanceTransferReceipt;
//# sourceMappingURL=BalanceTransferReceipt.js.map