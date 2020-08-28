import { Observable } from 'rxjs';
import { NetworkHttp } from './NetworkHttp';
import { Http } from './Http';
import { ExchangeRepository } from './ExchangeRepository';
import { PublicAccount, ExchangeOfferType, MosaicId, Address } from '../model/model';
import { AccountExchanges } from '../model/exchange/AccountExchanges';
import { MosaicExchange } from '../model/exchange/MosaicExchange';
/**
 * Exchange http repository.
 *
 * @since 0.8.0
 */
export declare class ExchangeHttp extends Http implements ExchangeRepository {
    /**
     * Constructor
     * @param url
     * @param networkHttp
     */
    constructor(url: string, networkHttp?: NetworkHttp);
    /**
     * Gets the exchanges for a given accountId
     * @param accountId - Account public key or address
     * @returns Observable<AccountExchanges | undefined>
     */
    getAccountExchanges(accountId: Address | PublicAccount): Observable<AccountExchanges | undefined>;
    /**
     * Gets exchanges for a given mosaic id
     * @param offerType
     * @param mosaicId
     * @returns Observable<MosaicExchanges[]>
     */
    getExchangeOffers(offerType: ExchangeOfferType, mosaicId: MosaicId): Observable<MosaicExchange[]>;
}
