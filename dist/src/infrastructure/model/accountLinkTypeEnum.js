"use strict";
// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file
Object.defineProperty(exports, "__esModule", { value: true });
/**
* The account link types: * 0 -  Unlinked. Account is not linked to another account. * 1 -  Main. Account is a balance-holding account that is linked to a remote harvester account. * 2 -  Remote. Account is a remote harvester account that is linked to a balance-holding account. * 3 -  Remote_Unlinked. Account is a remote harvester eligible account that is unlinked.
*/
var AccountLinkTypeEnum;
(function (AccountLinkTypeEnum) {
    AccountLinkTypeEnum[AccountLinkTypeEnum["NUMBER_0"] = 0] = "NUMBER_0";
    AccountLinkTypeEnum[AccountLinkTypeEnum["NUMBER_1"] = 1] = "NUMBER_1";
    AccountLinkTypeEnum[AccountLinkTypeEnum["NUMBER_2"] = 2] = "NUMBER_2";
    AccountLinkTypeEnum[AccountLinkTypeEnum["NUMBER_3"] = 3] = "NUMBER_3";
})(AccountLinkTypeEnum = exports.AccountLinkTypeEnum || (exports.AccountLinkTypeEnum = {}));
//# sourceMappingURL=accountLinkTypeEnum.js.map