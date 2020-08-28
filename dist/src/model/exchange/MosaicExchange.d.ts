import { MosaicId } from "../mosaic/MosaicId";
import { PublicAccount } from "../account/PublicAccount";
import { UInt64 } from "../UInt64";
import { Deadline } from "../transaction/Deadline";
import { ExchangesDTO } from "../../infrastructure/api";
import { NetworkType } from "../blockchain/NetworkType";
export declare class MosaicExchange {
    readonly mosaicId: MosaicId;
    readonly owner: PublicAccount;
    readonly amount: UInt64;
    readonly price: number;
    readonly initialAmount: UInt64;
    readonly initialCost: UInt64;
    readonly deadline: Deadline;
    constructor(mosaicId: MosaicId, owner: PublicAccount, amount: UInt64, price: number, initialAmount: UInt64, initialCost: UInt64, deadline: Deadline);
    static createFromDTO(exchangesDTO: ExchangesDTO, networkType: NetworkType): MosaicExchange;
}
