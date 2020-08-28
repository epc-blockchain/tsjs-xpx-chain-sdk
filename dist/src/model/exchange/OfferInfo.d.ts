import { OfferInfoDTO } from "../../infrastructure/api";
import { UInt64 } from "../UInt64";
import { MosaicId } from "../mosaic/MosaicId";
import { Deadline } from "../transaction/Deadline";
export declare class OfferInfo {
    readonly mosaicId: MosaicId;
    readonly amount: UInt64;
    readonly price: number;
    readonly initialAmount: UInt64;
    readonly initialCost: UInt64;
    readonly deadline: Deadline;
    constructor(mosaicId: MosaicId, amount: UInt64, price: number, initialAmount: UInt64, initialCost: UInt64, deadline: Deadline);
    static createFromDTO(offerInfoDTO: OfferInfoDTO): OfferInfo;
}
