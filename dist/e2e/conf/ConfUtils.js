"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_spec_1 = require("./conf.spec");
const model_1 = require("../../src/model/model");
const rxjs_1 = require("rxjs");
const infrastructure_1 = require("../../src/infrastructure/infrastructure");
class ConfUtils {
    static waitForConfirmation(listener, onAddress, callback, hash) {
        const status = listener.status(onAddress).subscribe(error => {
            console.log(error);
            if (error && error.hash && error.hash === hash) {
                throw new Error(error.status);
            }
        });
        const sub = listener.confirmed(onAddress).subscribe(tx => {
            if (hash) {
                if (tx && tx.transactionInfo && tx.transactionInfo.hash === hash) {
                    sub.unsubscribe();
                    status.unsubscribe();
                    callback();
                }
            }
            else {
                sub.unsubscribe();
                status.unsubscribe();
                callback();
            }
        }, error => {
            console.log(error);
        });
    }
    static prepareE2eTestData() {
        return Promise.all(Array.from(conf_spec_1.AllTestingAccounts.values()).filter(ta => ta.conf.seed).map(ta => ConfUtils.seed(ta).then(accInfo => ConfUtils.checkIfNeedPubKey(ta, accInfo)))).then(accInfos => {
            // get all the msig roots; will traverse them with bfs, so all other in the middle nodes will be processed automatically
            const msigAccounts = Array.from(conf_spec_1.AllTestingAccounts.values()).filter(ta => ta.hasCosignatories() && !ta.isCosignatory());
            let idx = 0;
            while (idx < msigAccounts.length) {
                Array.prototype.push.apply(msigAccounts, msigAccounts[idx].cosignatories.filter(ta => ta.hasCosignatories()));
                idx += 1;
            }
            return msigAccounts.reduce((prev, curr) => {
                return prev.then(() => {
                    return ConfUtils.convertToMultisigIfNotConvertedYet(curr);
                });
            }, Promise.resolve());
        }).then(() => {
            return ConfUtils.checkOrCreateRootNamespace(conf_spec_1.ConfTestingNamespaceId);
        }).then(() => {
            return ConfUtils.checkOrCreateMosaic(conf_spec_1.ConfTestingMosaicId);
        }).then(() => {
            return ConfUtils.simpleAccountRestrictionBLockAddress(conf_spec_1.TestingAccount, conf_spec_1.TestingRecipient.address);
        });
    }
    static convertToMultisigIfNotConvertedYet(ta) {
        const accountHttp = conf_spec_1.ConfAccountHttp;
        return accountHttp.getMultisigAccountInfo(ta.acc.address).toPromise().then(msigInfo => {
            if (msigInfo.cosignatories && msigInfo.cosignatories.length > 0) {
                console.log(ta.conf.alias + " already is msig");
                return Promise.resolve();
            }
            else { // it is not msig just yet, we need to convert it now
                return ConfUtils.convertToMultisig(ta);
            }
        }, error => {
            return ConfUtils.convertToMultisig(ta);
        });
    }
    static checkIfNeedPubKey(ta, accountInfo) {
        const accountHttp = conf_spec_1.ConfAccountHttp;
        if (ta.isCosignatory() && accountInfo.publicKey.match('0'.repeat(64))) {
            console.log(ta.conf.alias + " need pubkey");
            return ConfUtils.simpleCreateAndAnnounceWaitForConfirmation(ta.acc.address, 1, ta.acc, '')
                .then(() => {
                return accountHttp.getAccountInfo(ta.acc.address).toPromise();
            });
        }
        else {
            return Promise.resolve().then(() => {
                return accountInfo;
            });
        }
    }
    static seed(ta) {
        const accountHttp = conf_spec_1.ConfAccountHttp;
        return ConfUtils.getOrCreate(ta).then(info => {
            const m = info.mosaics.find(mos => mos.id.equals(conf_spec_1.ConfNetworkMosaic));
            if (!m || m.amount.compact() < (ta.conf.seed * 1000000)) {
                console.log(ta.conf.alias + " not enough funds, gonna add " + (ta.conf.seed * 1000000 - (m ? m.amount.compact() : 0)));
                return ConfUtils.simpleCreateAndAnnounceWaitForConfirmation(ta.acc.address, ta.conf.seed * 1000000 - (m ? m.amount.compact() : 0))
                    .then(() => {
                    return accountHttp.getAccountInfo(ta.acc.address).toPromise();
                });
            }
            else {
                console.log(ta.conf.alias + " good to go.");
                return info;
            }
        });
    }
    static getOrCreate(ta) {
        const accountHttp = conf_spec_1.ConfAccountHttp;
        return new Promise((resolve, reject) => {
            accountHttp.getAccountInfo(ta.acc.address).subscribe(accInfo => {
                console.log(ta.conf.alias + " exists.");
                resolve(accInfo);
            }, error => {
                // assume it doesn't exist - seed it
                console.log(ta.conf.alias + " initial seed.");
                const seed = ta.conf.seed ? ta.conf.seed * 1000000 : 1;
                ConfUtils.simpleCreateAndAnnounceWaitForConfirmation(ta.acc.address, seed, conf_spec_1.SeedAccount, 'Good luck!')
                    .then(() => {
                    accountHttp.getAccountInfo(ta.acc.address).subscribe(accInfo => {
                        if (ta.conf.alias === 'testing') {
                            //initiate 20 more txs.
                            rxjs_1.forkJoin(new Array(20).fill(0).map(n => ConfUtils.simpleCreateAndAnnounceWaitForConfirmation(ta.acc.address, 1, ta.acc))).toPromise().then(() => {
                                resolve(accInfo);
                            }).catch(() => {
                                resolve(accInfo); //continue anyway
                            });
                        }
                        else {
                            resolve(accInfo);
                        }
                    }, error => {
                        reject(error);
                    });
                }, reason => {
                    reject(reason);
                });
            });
        });
    }
    static simpleCreateAndAnnounceWaitForConfirmation(address, absoluteAmount, from = conf_spec_1.SeedAccount, message = '') {
        const transactionHttp = conf_spec_1.ConfTransactionHttp;
        return conf_spec_1.Configuration.getTransactionBuilderFactory().then(factory => {
            return new Promise((resolve, reject) => {
                const listener = new infrastructure_1.Listener(conf_spec_1.APIUrl);
                listener.open().then(() => {
                    const transferTransaction = factory.transfer()
                        .recipient(address)
                        .mosaics([new model_1.Mosaic(conf_spec_1.ConfNetworkMosaic, model_1.UInt64.fromUint(absoluteAmount))])
                        .message(model_1.PlainMessage.create(message))
                        .build();
                    const signedTransaction = from.sign(transferTransaction, factory.generationHash);
                    this.waitForConfirmation(listener, address, () => {
                        listener.close();
                        resolve();
                    }, signedTransaction.hash);
                    transactionHttp.announce(signedTransaction).subscribe(result => {
                        console.log(result);
                    }, error => {
                        console.error(error);
                    });
                });
            });
        });
    }
    static convertToMultisig(ta) {
        const transactionHttp = conf_spec_1.ConfTransactionHttp;
        return conf_spec_1.Configuration.getTransactionBuilderFactory().then(factory => {
            return new Promise((resolve, reject) => {
                const listener = new infrastructure_1.Listener(conf_spec_1.APIUrl);
                listener.open().then(() => {
                    const convertIntoMultisigTransaction = factory.modifyMultisig()
                        .minApprovalDelta(ta.cosignatories.length <= 1 ? 1 : ta.cosignatories.length - 1)
                        .minRemovalDelta(ta.cosignatories.length)
                        .modifications(ta.cosignatories.map(cos => new model_1.MultisigCosignatoryModification(model_1.MultisigCosignatoryModificationType.Add, cos.acc.publicAccount)))
                        .build();
                    const aggregateBonded = factory.aggregateBonded()
                        .innerTransactions([convertIntoMultisigTransaction.toAggregate(ta.acc.publicAccount)])
                        .build();
                    const signedAggregateBonded = aggregateBonded.signWith(ta.acc, factory.generationHash);
                    const lockFunds = factory.lockFunds()
                        .mosaic(new model_1.Mosaic(conf_spec_1.ConfNetworkMosaic, model_1.UInt64.fromUint(10 * 1000000)))
                        .duration(model_1.UInt64.fromUint(50))
                        .signedTransaction(signedAggregateBonded)
                        .build();
                    const signedLockFunds = lockFunds.signWith(ta.acc, factory.generationHash);
                    listener.cosignatureAdded(ta.acc.address).subscribe(tx => {
                        console.log(tx);
                    });
                    listener.aggregateBondedAdded(ta.acc.address).subscribe(aggtx => {
                        console.log(aggtx);
                        //for (const a of ta.cosignatories) {
                        //    if (! aggtx.signedByAccount(a.acc.publicAccount)) {
                        //        const cosTx = CosignatureTransaction.create(aggtx);
                        //        const signedCosTx = a.acc.signCosignatureTransaction(cosTx);
                        //        transactionHttp.announceAggregateBondedCosignature(signedCosTx);
                        //    }
                        //}
                        const accountHttp = new infrastructure_1.AccountHttp(conf_spec_1.APIUrl);
                        accountHttp.aggregateBondedTransactions(ta.acc.publicAccount).subscribe(aggTxs => {
                            aggTxs.forEach(aggTx => {
                                const cosTx = model_1.CosignatureTransaction.create(aggTx);
                                ta.cosignatories.forEach(c => {
                                    if (!aggTx.signedByAccount(c.acc.publicAccount)) {
                                        const signedCosTx = c.acc.signCosignatureTransaction(cosTx);
                                        transactionHttp.announceAggregateBondedCosignature(signedCosTx);
                                    }
                                });
                            });
                        });
                    });
                    this.waitForConfirmation(listener, ta.acc.address, () => {
                        this.waitForConfirmation(listener, ta.acc.address, () => {
                            console.log(ta.conf.alias + " converted to msig.");
                            resolve();
                        }, signedAggregateBonded.hash);
                        transactionHttp.announceAggregateBonded(signedAggregateBonded);
                    }, signedLockFunds.hash);
                    transactionHttp.announce(signedLockFunds);
                });
            });
        });
    }
    static simpleAccountRestrictionBLockAddress(account, blockAddress, transactionHttp = new infrastructure_1.TransactionHttp(conf_spec_1.APIUrl)) {
        return conf_spec_1.Configuration.getTransactionBuilderFactory().then(factory => {
            return new Promise((resolve, reject) => {
                const listener = new infrastructure_1.Listener(conf_spec_1.APIUrl);
                listener.open().then(() => {
                    const modifyAccountRestrictionAddressTransaction = factory.accountRestrictionAddress()
                        .restrictionType(model_1.RestrictionType.BlockAddress)
                        .modifications([new model_1.AccountRestrictionModification(model_1.RestrictionModificationType.Add, blockAddress.plain())])
                        .build();
                    const signedTransaction = account.sign(modifyAccountRestrictionAddressTransaction, factory.generationHash);
                    this.waitForConfirmation(listener, account.address, () => {
                        listener.close();
                        resolve();
                    }, signedTransaction.hash);
                    return transactionHttp.announce(signedTransaction);
                });
            });
        });
    }
    static checkOrCreateRootNamespace(namespaceId) {
        const namespaceHttp = conf_spec_1.ConfNamespaceHttp;
        const transactionHttp = conf_spec_1.ConfTransactionHttp;
        return conf_spec_1.Configuration.getTransactionBuilderFactory().then(factory => {
            return new Promise((resolve, reject) => {
                namespaceHttp.getNamespace(namespaceId).subscribe(namespaceInfo => {
                    resolve();
                }, error => {
                    const listener = new infrastructure_1.Listener(conf_spec_1.APIUrl);
                    listener.open().then(() => {
                        model_1.RegisterNamespaceTransaction;
                        const registerNamespaceTransaction = factory.registerRootNamespace()
                            .namespaceName('testing')
                            .duration(model_1.UInt64.fromUint(1000))
                            .build();
                        const signedRegisterNamespaceTransaction = registerNamespaceTransaction.signWith(conf_spec_1.TestingAccount, factory.generationHash);
                        this.waitForConfirmation(listener, conf_spec_1.TestingAccount.address, () => {
                            listener.close();
                            resolve();
                        }, signedRegisterNamespaceTransaction.hash);
                        transactionHttp.announce(signedRegisterNamespaceTransaction);
                    });
                });
            });
        });
    }
    static checkOrCreateMosaic(mosaicId) {
        const mosaicHttp = conf_spec_1.ConfMosaicHttp;
        const transactionHttp = conf_spec_1.ConfTransactionHttp;
        return conf_spec_1.Configuration.getTransactionBuilderFactory().then(factory => {
            return new Promise((resolve, reject) => {
                mosaicHttp.getMosaic(mosaicId).subscribe(mosaicInfo => {
                    resolve();
                }, error => {
                    const listener = new infrastructure_1.Listener(conf_spec_1.APIUrl);
                    listener.open().then(() => {
                        const mosaicDefinitionTransaction = factory.mosaicDefinition()
                            .mosaicNonce(conf_spec_1.ConfTestingMosaicNonce)
                            .mosaicId(conf_spec_1.ConfTestingMosaicId)
                            .mosaicProperties(conf_spec_1.ConfTestingMosaicProperties)
                            .build();
                        const signedMosaicDefinitionTransaction = mosaicDefinitionTransaction.signWith(conf_spec_1.TestingAccount, factory.generationHash);
                        this.waitForConfirmation(listener, conf_spec_1.TestingAccount.address, () => {
                            const mosaicSupplyChangeTransaction = factory.mosaicSupplyChange()
                                .mosaicId(conf_spec_1.ConfTestingMosaicId)
                                .direction(model_1.MosaicSupplyType.Increase)
                                .delta(model_1.UInt64.fromUint(1000000000 * 10 ^ conf_spec_1.ConfTestingMosaicProperties.divisibility))
                                .build();
                            const signedMosaicSupplyChangeTransaction = mosaicSupplyChangeTransaction.signWith(conf_spec_1.TestingAccount, factory.generationHash);
                            this.waitForConfirmation(listener, conf_spec_1.TestingAccount.address, () => {
                                listener.close();
                                resolve();
                            }, signedMosaicSupplyChangeTransaction.hash);
                            transactionHttp.announce(signedMosaicSupplyChangeTransaction);
                        }, signedMosaicDefinitionTransaction.hash);
                        transactionHttp.announce(signedMosaicDefinitionTransaction);
                    });
                });
            });
        });
    }
    ;
}
exports.ConfUtils = ConfUtils;
//# sourceMappingURL=ConfUtils.js.map