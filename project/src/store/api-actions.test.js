import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  fetchOffers,
  fetchOffer,
  fetchComments,
  fetchOffersNearby,
  sendComment,
  addToFavorites,
  fetchFavoriteOffers
} from './api-actions';
import {APIRoute} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../adapter/adapter';

let api = null;

const review = {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: '2019-05-08T14:13:56.569Z',
  id: 1,
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  host: {
    avatar_url: 'img/1.png',
    id: 3,
    is_pro: true,
    name: 'Angelina'
  },
  id: 5,
  images: ['img/1.png', 'img/2.png'],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  max_adults: 4,
  preview_image: 'img/1.png',
  price: 120,
  rating: 4.8,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment'
};

const comment = 'a great place!';
const rating = 5;

const fakeReview = {
  comment: 'A great place!',
  date: '2021-07-15T14:13:56.569Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 4,
    isPro: false,
    name: 'Max',
  },
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const offerLoader = fetchOffer(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}${offerId}`)
      .reply(200, fakeOffer);

    return offerLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_OFFER_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: adaptOfferToClient(fakeOffer),
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_OFFER_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [fakeOffer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOfferToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const commentsLoader = fetchComments(offerId);

    apiMock
      .onGet(`${APIRoute.REVIEWS}${offerId}`)
      .reply(200, [review]);

    return commentsLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptCommentToClient(review)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ARE_REVIEWS_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const offersNearbyLoader = fetchOffersNearby(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}${offerId}${APIRoute.NEARBY}`)
      .reply(200, [fakeOffer]);

    return offersNearbyLoader(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [adaptOfferToClient(fakeOffer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
          payload: true,
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const reviewSender = sendComment({id: offerId, comment: comment, rating: rating});

    apiMock
      .onPost(`${APIRoute.REVIEWS}${offerId}`, {comment, rating})
      .reply(200, [fakeReview]);

    return reviewSender(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptCommentToClient(fakeReview)],
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 5;
    const status = 0;
    const addToFavoritesSender = addToFavorites({offerId, status});

    apiMock
      .onPost(`${APIRoute.FAVORITE}${offerId}/${status}`)
      .reply(200, fakeOffer);

    return addToFavoritesSender(dispatch, () => {}, api)

      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOfferToClient(fakeOffer),
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesOffersLoader = fetchFavoriteOffers();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, [fakeOffer]);

    return favoritesOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [adaptOfferToClient(fakeOffer)],
        });
      });
  });
});
