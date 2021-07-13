import {data} from './data';
import {ui} from "../ui/ui";
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, SortTypes} from "../../const";
import {ActionType, setActiveOffer, setCity, setHasPostedComment, setSortType, updateOffer} from "../action";


const offers = [
  {
    id: 0,
    city: 'Paris',
    price: 300,
    isFavorite: false,
  },
  {
    id: 1,
    city: 'Amsterdam',
    price: 200,
    isFavorite: false,
  },
  {
    id: 2,
    city: 'Brussels',
    price: 500,
    isFavorite: false,
  },
  {
    id: 3,
    city: 'Paris',
    price: 300,
    isFavorite: true,
  },
  {
    id: 4,
    city: 'Paris',
    price: 200,
    isFavorite: true,
  },
  {
    id: 5,
    city: 'Brussels',
    price: 500,
    isFavorite: true,
  },
];

const comments = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 0,
    rating: 5,
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-08-08T14:13:56.569Z',
    id: 1,
    rating: 4,
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2020-08-08T14:13:56.569Z',
    id: 2,
    rating: 3,
  },
];

const offer = {
  id: 0,
  city: 'Paris',
  price: 300,
  isFavorite: false,
};

const favoriteOffer = {
  id: 1,
  city: 'Amsterdam',
  price: 200,
  isFavorite: true,
};

const offerToUpdate = {
  id: 1,
  city: 'Amsterdam',
  price: 200,
  isFavorite: false,
}

const favoriteOffers = [
  {
    id: 3,
    city: 'Paris',
    price: 300,
    isFavorite: true,
  },
  {
    id: 4,
    city: 'Amsterdam',
    price: 200,
    isFavorite: true,
  },
  {
    id: 5,
    city: 'Brussels',
    price: 500,
    isFavorite: true,
  },
];

const nearbyOffers = [
  {
    id: 3,
    city: 'Paris',
    price: 300,
    isFavorite: true,
  },
  {
    id: 4,
    city: 'Paris',
    price: 200,
    isFavorite: true,
  },
  {
    id: 1,
    city: 'Amsterdam',
    price: 200,
    isFavorite: false,
  },
];

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(data(state, loadOffersAction))
      .toEqual({
        offers: offers,
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: true,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should update comments by load comments', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(data(state, loadCommentsAction))
      .toEqual({
        offers: [],
        comments: comments,
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should update nearby offers by load offers nearby', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: nearbyOffers,
    };

    expect(data(state, loadOffersNearbyAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: nearbyOffers,
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should update current offer by load offer', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(data(state, loadOfferAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: offer,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should set isDataLoaded status to the given value', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const setIsDataLoadedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: true,
    };

    expect(data(state, setIsDataLoadedAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: true,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should set offer loading status to the given value', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const setIsOfferLoadedAction = {
      type: ActionType.SET_IS_OFFER_LOADED,
      payload: true,
    };

    expect(data(state, setIsOfferLoadedAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: true,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should set areReviewsLoaded status to the given value', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const setAreReviewsLoadedAction = {
      type: ActionType.SET_ARE_REVIEWS_LOADED,
      payload: true,
    };

    expect(data(state, setAreReviewsLoadedAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: true,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should set areLoadedOffersNearby status to the given value', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const setAreLoadedOffersNearbyAction = {
      type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
      payload: true,
    };

    expect(data(state, setAreLoadedOffersNearbyAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: false,
      });
  });

  it('should update offers with the given favorite offer', () => {
    const state = {
      offers: offers,
      comments: comments,
      offersNearby: nearbyOffers,
      favoriteOffers: favoriteOffers,
      currentOffer: offerToUpdate,
      isDataLoaded: true,
      isOfferLoaded: true,
      areReviewsLoaded: true,
      areLoadedOffersNearby: true,
      areFavoriteOffersLoaded: true,
    };

    const updatedOffers = [
      {
        id: 0,
        city: 'Paris',
        price: 300,
        isFavorite: false,
      },
      {
        id: 1,
        city: 'Amsterdam',
        price: 200,
        isFavorite: true,
      },
      {
        id: 2,
        city: 'Brussels',
        price: 500,
        isFavorite: false,
      },
      {
        id: 3,
        city: 'Paris',
        price: 300,
        isFavorite: true,
      },
      {
        id: 4,
        city: 'Paris',
        price: 200,
        isFavorite: true,
      },
      {
        id: 5,
        city: 'Brussels',
        price: 500,
        isFavorite: true,
      },
    ];

    const updatedFavoriteOffers = [
      {
        id: 3,
        city: 'Paris',
        price: 300,
        isFavorite: true,
      },
      {
        id: 4,
        city: 'Amsterdam',
        price: 200,
        isFavorite: true,
      },
      {
        id: 5,
        city: 'Brussels',
        price: 500,
        isFavorite: true,
      },
      {
        id: 1,
        city: 'Amsterdam',
        price: 200,
        isFavorite: true,
      }
    ];

    const updatedNearbyOffers = [
      {
        id: 3,
        city: 'Paris',
        price: 300,
        isFavorite: true,
      },
      {
        id: 4,
        city: 'Paris',
        price: 200,
        isFavorite: true,
      },
      {
        id: 1,
        city: 'Amsterdam',
        price: 200,
        isFavorite: true,
      },
    ];

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: favoriteOffer,
    };

    expect(data(state, updateOfferAction))
      .toEqual({
        offers: updatedOffers,
        comments: comments,
        offersNearby: updatedNearbyOffers,
        favoriteOffers: updatedFavoriteOffers,
        currentOffer: favoriteOffer,
        isDataLoaded: true,
        isOfferLoaded: true,
        areReviewsLoaded: true,
        areLoadedOffersNearby: true,
        areFavoriteOffersLoaded: true,
      });
  });

  it('should update favorite offers by load favorite offers', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const loadFavoriteOffersAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    };

    expect(data(state, loadFavoriteOffersAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: favoriteOffers,
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: true,
      });
  });

  it('should set areFavoriteOffersLoaded status to the given value', () => {
    const state = {
      offers: [],
      comments: [],
      offersNearby: [],
      favoriteOffers: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoaded: false,
      areReviewsLoaded: false,
      areLoadedOffersNearby: false,
      areFavoriteOffersLoaded: false,
    };

    const setAreFavoriteOffersLoadedAction = {
      type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
      payload: true,
    };

    expect(data(state, setAreFavoriteOffersLoadedAction))
      .toEqual({
        offers: [],
        comments: [],
        offersNearby: [],
        favoriteOffers: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoaded: false,
        areReviewsLoaded: false,
        areLoadedOffersNearby: false,
        areFavoriteOffersLoaded: true,
      });
  });
});
