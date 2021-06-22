import {ActionType} from "../store/action";
import {SortTypes} from "../const";
import {setClass} from "leaflet/src/dom/DomUtil";
import offers from "../mocks/offers";

export const mapOffersByCity = (offers) => {
  const offersByCity = new Map();
  offers.forEach((offer) => {
    const currentCity = offer.city.name;
    if (offersByCity.has(currentCity)) {
      offersByCity.get(currentCity).push(offer);
    } else {
      const currentOffers = [offer];
      offersByCity.set(currentCity, currentOffers);
    }
  });
  return offersByCity;
};

export const getSortedOffers = (offers, sortingType) => {
  switch (sortingType){
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.LOW:
      return offers
            .slice()
            .sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price);
    case SortTypes.HIGH:
      return offers
            .slice()
            .sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price);
    case SortTypes.TOP:
      return offers
            .slice()
            .sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating);
    default:
      return offers;
  }
};
