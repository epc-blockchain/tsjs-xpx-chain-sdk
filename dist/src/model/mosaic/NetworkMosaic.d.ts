import { NamespaceId } from '../namespace/NamespaceId';
import { UInt64 } from '../UInt64';
import { Mosaic } from './Mosaic';
import { MosaicId } from './MosaicId';
import { MosaicProperties } from './MosaicProperties';
export declare class KnownMosaicProperties {
    readonly ID: NamespaceId | MosaicId;
    readonly INITIAL_SUPPLY: UInt64;
    readonly MOSAIC_PROPERTIES: MosaicProperties;
    constructor(ID: NamespaceId | MosaicId, INITIAL_SUPPLY: UInt64, MOSAIC_PROPERTIES: MosaicProperties);
}
export declare const XpxMosaicProperties: KnownMosaicProperties;
/**
 * NetworkMosaic mosaic
 *
 * This represents the per-network mosaic. This mosaicId is aliased
 * with namespace name `prx.xpx` by default.
 *
 */
export declare class NetworkMosaic extends Mosaic {
    private _networkMosaicProperties;
    protected constructor(amount: UInt64, networkMosaicProperties: KnownMosaicProperties);
    readonly ID: MosaicId | NamespaceId;
    readonly DIVISIBILITY: number;
    readonly INITIAL_SUPPLY: UInt64;
    readonly TRANSFERABLE: boolean;
    readonly SUPPLY_MUTABLE: boolean;
    static createRelativeAmount(amount: UInt64 | number, divisibility: number): UInt64;
    static createAbsoluteAmount(amount: UInt64 | number): UInt64;
}
