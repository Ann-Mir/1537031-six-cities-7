import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
export const getIsDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getIsOfferLoadedStatus = (state) => state[NameSpace.DATA].isOfferLoaded;
export const getAreReviewsLoadedStatus = (state) => state[NameSpace.DATA].areReviewsLoaded;
export const getAreLoadedOffersNearbyStatus = (state) => state[NameSpace.DATA].areLoadedOffersNearby;
