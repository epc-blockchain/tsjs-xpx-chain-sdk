"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NetworkMosaic_1 = require("./NetworkMosaic");
/**
 * NetworkHarvestMosaic mosaic
 *
 * This represents the per-network harvest mosaic. This mosaicId is aliased
 * with namespace name `besc.epcc` from EpccMosaicProperties definition by default.
 *
 * @since 0.10.2
 */
class NetworkHarvestMosaic extends NetworkMosaic_1.NetworkMosaic {
    /**
     * constructor
     * @param owner
     * @param amount
     */
    constructor(amount, networkMosaicProperties) {
        super(amount, networkMosaicProperties);
    }
    /**
     * Create NetworkHarvestMosaic with using NetworkHarvestMosaic as unit.
     *
     * @param amount
     * @returns {NetworkHarvestMosaic}
     */
    static createRelative(amount, networkMosaicProperties = NetworkMosaic_1.EpccMosaicProperties) {
        return new NetworkHarvestMosaic(NetworkMosaic_1.NetworkMosaic.createRelativeAmount(amount, networkMosaicProperties.MOSAIC_PROPERTIES.divisibility), networkMosaicProperties);
    }
    /**
     * Create NetworkHarvestMosaic with using micro NetworkHarvestMosaic as unit,
     * 1 NetworkHarvestMosaic = 1000000 micro NetworkHarvestMosaic.
     *
     * @param amount
     * @returns {NetworkHarvestMosaic}
     */
    static createAbsolute(amount, networkMosaicProperties = NetworkMosaic_1.EpccMosaicProperties) {
        return new NetworkHarvestMosaic(NetworkMosaic_1.NetworkMosaic.createAbsoluteAmount(amount), networkMosaicProperties);
    }
}
exports.NetworkHarvestMosaic = NetworkHarvestMosaic;
//# sourceMappingURL=NetworkHarvestMosaic.js.map