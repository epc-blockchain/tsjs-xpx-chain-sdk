import { Observable } from 'rxjs';
import { MosaicExchange, AccountExchanges, MosaicId, Address, PublicAccount, ExchangeOfferType } from '../model/model';
/**
 * ExchangeRepository interface repository.
 *
 * @since 0.8.0
 */
export interface ExchangeRepository {
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
