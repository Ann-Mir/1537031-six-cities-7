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
