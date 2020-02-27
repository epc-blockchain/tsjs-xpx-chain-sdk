import { NetworkType } from "../blockchain/NetworkType";
import { TransferTransactionBuilder } from './TransferTransaction';
import { AccountLinkTransactionBuilder } from './AccountLinkTransaction';
import { MosaicDefinitionTransactionBuilder } from './MosaicDefinitionTransaction';
import { AccountAddressRestrictionModificationTransactionBuilder } from "./AccountAddressRestrictionModificationTransaction";
import { AccountMosaicRestrictionModificationTransactionBuilder } from "./AccountMosaicRestrictionModificationTransaction";
import { AccountOperationRestrictionModificationTransactionBuilder } from "./AccountOperationRestrictionModificationTransaction";
import { AddressAliasTransactionBuilder } from "./AddressAliasTransaction";
import { AggregateBondedTransactionBuilder, AggregateCompleteTransactionBuilder } from "./AggregateTransaction";
import { ChainConfigTransactionBuilder } from "./ChainConfigTransaction";
import { ChainUpgradeTransactionBuilder } from "./ChainUpgradeTransaction";
import { LockFundsTransactionBuilder } from "./LockFundsTransaction";
import { HashLockTransactionBuilder } from "./HashLockTransaction";
import { ModifyContractTransactionBuilder } from "./ModifyContractTransaction";
import { ModifyAccountMetadataTransactionBuilder, ModifyMosaicMetadataTransactionBuilder, ModifyNamespaceMetadataTransactionBuilder } from "./ModifyMetadataTransaction";
import { ModifyMultisigAccountTransactionBuilder } from "./ModifyMultisigAccountTransaction";
import { MosaicAliasTransactionBuilder } from "./MosaicAliasTransaction";
import { MosaicSupplyChangeTransactionBuilder } from "./MosaicSupplyChangeTransaction";
import { RegisterRootNamespaceTransactionBuilder, RegisterSubNamespaceTransactionBuilder } from "./RegisterNamespaceTransaction";
import { SecretLockTransactionBuilder } from "./SecretLockTransaction";
import { SecretProofTransactionBuilder } from "./SecretProofTransaction";
import { Deadline } from "./Deadline";
import { FeeCalculationStrategy } from "./FeeCalculationStrategy";
import { ExchangeOfferTransactionBuilder } from "./ExchangeOfferTransaction";
import { AddExchangeOfferTransactionBuilder } from "./AddExchangeOfferTransaction";
import { RemoveExchangeOfferTransactionBuilder } from "./RemoveExchangeOfferTransaction";
export declare class TransactionBuilderFactory {
    private _networkType;
    private _generationHash;
    private _feeCalculationStrategy;
    private _createNewDeadlineFn;
    constructor();
    networkType: NetworkType;
    generationHash: string;
    feeCalculationStrategy: FeeCalculationStrategy;
    setDefaultFeeCalculationStrategy(): void;
    createNewDeadlineFn: () => Deadline;
    private configureBuilder;
    accountLink(): AccountLinkTransactionBuilder;
    transfer(): TransferTransactionBuilder;
    mosaicDefinition(): MosaicDefinitionTransactionBuilder;
    accountRestrictionAddress(): AccountAddressRestrictionModificationTransactionBuilder;
    accountRestrictionMosaic(): AccountMosaicRestrictionModificationTransactionBuilder;
    accountRestrictionOperation(): AccountOperationRestrictionModificationTransactionBuilder;
    addressAlias(): AddressAliasTransactionBuilder;
    aggregateBonded(): AggregateBondedTransactionBuilder;
    aggregateComplete(): AggregateCompleteTransactionBuilder;
    chainConfig(): ChainConfigTransactionBuilder;
    chainUpgrade(): ChainUpgradeTransactionBuilder;
    lockFunds(): LockFundsTransactionBuilder;
    hashLock(): HashLockTransactionBuilder;
    modifyContract(): ModifyContractTransactionBuilder;
    accountMetadata(): ModifyAccountMetadataTransactionBuilder;
    mosaicMetadata(): ModifyMosaicMetadataTransactionBuilder;
    namespaceMetadata(): ModifyNamespaceMetadataTransactionBuilder;
    modifyMultisig(): ModifyMultisigAccountTransactionBuilder;
    mosaicAlias(): MosaicAliasTransactionBuilder;
    mosaicSupplyChange(): MosaicSupplyChangeTransactionBuilder;
    registerRootNamespace(): RegisterRootNamespaceTransactionBuilder;
    registerSubNamespace(): RegisterSubNamespaceTransactionBuilder;
    secretLock(): SecretLockTransactionBuilder;
    secretProof(): SecretProofTransactionBuilder;
    addExchangeOffer(): AddExchangeOfferTransactionBuilder;
    exchangeOffer(): ExchangeOfferTransactionBuilder;
    removeExchangeOffer(): RemoveExchangeOfferTransactionBuilder;
}
