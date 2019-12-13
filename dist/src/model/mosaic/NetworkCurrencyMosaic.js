"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NetworkMosaic_1 = require("./NetworkMosaic");
/**
 * NetworkCurrencyMosaic mosaic
 *
 * This represents the per-network currency mosaic. This mosaicId is aliased
 * with namespace name `prx.xpx` from XpxMosaicProperties definition by default.
 *
 * @since 0.10.2
 */
class NetworkCurrencyMosaic extends NetworkMosaic_1.NetworkMosaic {
    /**
     * constructor
     * @param owner
     * @param amount
     */
    constructor(amount, networkMosaicProperties) {
        super(amount, networkMosaicProperties);
    }
    /**
     * Create NetworkCurrencyMosaic with using NetworkCurrencyMosaic as unit.
     *
     * @param amount
     * @returns {NetworkCurrencyMosaic}
     */
    static createRelative(amount, networkMosaicProperties = NetworkMosaic_1.XpxMosaicProperties) {
        return new NetworkCurrencyMosaic(NetworkMosaic_1.NetworkMosaic.createRelativeAmount(amount, networkMosaicProperties.MOSAIC_PROPERTIES.divisibility), networkMosaicProperties);
    }
    /**
     * Create NetworkCurrencyMosaic with using micro NetworkCurrencyMosaic as unit,
     * 1 NetworkCurrencyMosaic = 1000000 micro NetworkCurrencyMosaic.
     *
     * @param amount
     * @returns {NetworkCurrencyMosaic}
     */
    static createAbsolute(amount, networkMosaicProperties = NetworkMosaic_1.XpxMosaicProperties) {
        return new NetworkCurrencyMosaic(NetworkMosaic_1.NetworkMosaic.createAbsoluteAmount(amount), networkMosaicProperties);
    }
}
exports.NetworkCurrencyMosaic = NetworkCurrencyMosaic;
//# sourceMappingURL=NetworkCurrencyMosaic.js.map