/**
 * Static class containing transaction type constants.
 */
export declare class TransactionType {
    /**
     * Transfer Transaction transaction type.
     * @type {number}
     */
    static readonly TRANSFER = 16724;
    /**
     * Register namespace transaction type.
     * @type {number}
     */
    static readonly REGISTER_NAMESPACE = 16718;
    /**
     * Address alias transaction type
     * @type {number}
     */
    static readonly ADDRESS_ALIAS = 16974;
    /**
     * Mosaic alias transaction type
     * @type {number}
     */
    static readonly MOSAIC_ALIAS = 17230;
    /**
     * Mosaic definition transaction type.
     * @type {number}
     */
    static readonly MOSAIC_DEFINITION = 16717;
    /**
     * Mosaic supply change transaction.
     * @type {number}
     */
    static readonly MOSAIC_SUPPLY_CHANGE = 16973;
    /**
     * Modify multisig account transaction type.
     * @type {number}
     */
    static readonly MODIFY_MULTISIG_ACCOUNT = 16725;
    /**
     * Aggregate complete transaction type.
     * @type {number}
     */
    static readonly AGGREGATE_COMPLETE = 16705;
    /**
     * Aggregate bonded transaction type
     */
    static readonly AGGREGATE_BONDED = 16961;
    /**
     * Lock transaction type
     * @type {number}
     */
    static readonly LOCK = 16712;
    /**
     * Secret Lock Transaction type
     * @type {number}
     */
    static readonly SECRET_LOCK = 16722;
    /**
     * Secret Proof transaction type
     * @type {number}
     */
    static readonly SECRET_PROOF = 16978;
    /**
     * Account restriction address transaction type
     * @type {number}
     */
    static readonly MODIFY_ACCOUNT_RESTRICTION_ADDRESS = 16720;
    /**
     * Account restriction mosaic transaction type
     * @type {number}
     */
    static readonly MODIFY_ACCOUNT_RESTRICTION_MOSAIC = 16976;
    /**
     * Account restriction operation transaction type
     * @type {number}
     */
    static readonly MODIFY_ACCOUNT_RESTRICTION_OPERATION = 17232;
    /**
     * Link account transaction type
     * @type {number}
     */
    static readonly LINK_ACCOUNT = 16716;
    /**
     * Modify account/address related metadata transaction type
     * @type {number}
     */
    static readonly MODIFY_ACCOUNT_METADATA = 16701;
    /**
     * Modify mosaic related metadata transaction type
     * @type {number}
     */
    static readonly MODIFY_MOSAIC_METADATA = 16957;
    /**
     * Modify namespace related metadata transaction type
     * @type {number}
     */
    static readonly MODIFY_NAMESPACE_METADATA = 17213;
    /**
     * Upgrade chain transaction type
     */
    static readonly CHAIN_UPGRADE = 16728;
    /**
     * Configure chain transaction type
     */
    static readonly CHAIN_CONFIGURE = 16729;
    /**
     * Add exchange transaction type
     */
    static readonly ADD_EXCHANGE_OFFER = 16733;
    /**
     * Exchange transaction type
     */
    static readonly EXCHANGE_OFFER = 16989;
    /**
     * Remove exchange transaction type
     */
    static readonly REMOVE_EXCHANGE_OFFER = 17245;
}
