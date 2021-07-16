import {
  ActionType,
  loadComments, loadFavoriteOffers,
  loadOffer,
  loadOffers, loadOffersNearby,
  logout,
  redirectToRoute,
  setActiveOffer, setAreLoadedOffersNearby, setAreReviewsLoaded,
  setCity, setFavoriteOffersLoadingStatus, setHasPostedComment, setIsDataLoaded, setOfferLoadingStatus,
  setSortType,
  setUser, updateOffer
} from './action';


describe('Actions', () => {
  it('action creator for setting city returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: 'Paris',
    };

    expect(setCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for setting sort type returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: 'low',
    };

    expect(setSortType('low')).toEqual(expectedAction);
  });

  it('action creator for setting active offer returns correct action', () => {

    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER,
      payload: 1,
    };

    expect(setActiveOffer(1)).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const offers = [
      {
        id: 1,
        city: 'Paris',
        price: 300,
      },
      {
        id: 2,
        city: 'Amsterdam',
        price: 200,
      },
      {
        id: 3,
        city: 'Paris',
        price: 500,
      }
    ];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offer returns correct action', () => {
    const offer = {
        id: 1,
        city: 'Paris',
        price: 300,
      };

    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for logging out returns correct action', () => {

    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const url = '/hotels';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for setting user returns correct action', () => {
    const user = {
      username: 'Alex',
      email: 'alex@mail.ru',
      id: 1
    };

    const expectedAction = {
      type: ActionType.SET_USER,
      payload: user,
    };

    expect(setUser(user)).toEqual(expectedAction);
  });

  it('action creator for loading comments returns correct action', () => {
    const comments = [
      {
        rating: 5,
        text: 'rihri84h4fnh48',
      },
      {
        rating: 4,
        text: 'fhierhiehgie',
      },
      {
        rating: 2,
        text: 'nhufhuvu',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby returns correct action', () => {
    const offers = [
      {
        id: 1,
        city: 'Paris',
        price: 300,
      },
      {
        id: 2,
        city: 'Amsterdam',
        price: 200,
      },
      {
        id: 3,
        city: 'Paris',
        price: 500,
      }
    ];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(loadOffersNearby(offers)).toEqual(expectedAction);
  });

  it('action creator for setting is data loaded status returns correct action', () => {
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: isLoaded,
    };

    expect(setIsDataLoaded(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting is offer loaded status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_IS_OFFER_LOADED,
      payload: isLoaded,
    };

    expect(setOfferLoadingStatus(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting reviews loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_REVIEWS_LOADED,
      payload: isLoaded,
    };

    expect(setAreReviewsLoaded(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting offers nearby loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_LOADED_OFFERS_NEARBY,
      payload: isLoaded,
    };

    expect(setAreLoadedOffersNearby(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting has posted comment status returns correct action', () => {
    const hasPosted = {
      status: true,
    };

    const expectedAction = {
      type: ActionType.SET_HAS_POSTED_COMMENT,
      payload: hasPosted,
    };

    expect(setHasPostedComment(hasPosted)).toEqual(expectedAction);
  });

  it('action creator for updating offer returns correct action', () => {
    const offer = {
      id: 5,
      isFavorite: false,
      city: 'Amsterdam',
    };

    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading favorite offers returns correct action', () => {
    const offers = [
      {
        id: 1,
        city: 'Paris',
        price: 300,
      },
      {
        id: 2,
        city: 'Amsterdam',
        price: 200,
      },
      {
        id: 3,
        city: 'Paris',
        price: 500,
      }
    ];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };

    expect(loadFavoriteOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for setting favorite offers loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_FAVORITE_OFFERS_LOADED,
      payload: isLoaded,
    };

    expect(setFavoriteOffersLoadingStatus(isLoaded)).toEqual(expectedAction);
  });
});
