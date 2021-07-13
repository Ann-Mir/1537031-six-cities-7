import {setActiveOffer, setCity, setHasPostedComment, setSortType} from '../action';
import {ui} from './ui';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, SortTypes} from "../../const";


describe('Reducer: ui', () => {
  it('without additional parameters should return initial state', () => {
      expect(ui(undefined, {}))
        .toEqual({
          city: DEFAULT_CITY,
          activeSortType: DEFAULT_SORT_TYPE,
          activeOfferId: null,
          hasPostedComment: {
            hasPosted: true,
            comment: '',
            rating: 0,
          },
        });
    }
  );

  it('should replace current city with a given value', () => {
    const state = {
      city: DEFAULT_CITY,
      activeSortType: DEFAULT_SORT_TYPE,
      activeOfferId: null,
      hasPostedComment: {
        hasPosted: true,
        comment: '',
        rating: 0,
      },
  };

    expect(ui(state, setCity('Amsterdam')))
      .toEqual({
        city: 'Amsterdam',
        activeSortType: DEFAULT_SORT_TYPE,
        activeOfferId: null,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      });
  })

  it('should set sort type to a given value', () => {
    const state = {
      city: 'Amsterdam',
      activeSortType: DEFAULT_SORT_TYPE,
      activeOfferId: null,
      hasPostedComment: {
        hasPosted: true,
        comment: '',
        rating: 0,
      },
    };

    expect(ui(state, setSortType(SortTypes.HIGH)))
      .toEqual({
        city: 'Amsterdam',
        activeSortType: SortTypes.HIGH,
        activeOfferId: null,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      });
  })

  it('should set posted state to a given value', () => {
    const state = {
      city: 'Amsterdam',
      activeSortType: DEFAULT_SORT_TYPE,
      activeOfferId: null,
      hasPostedComment: {
        hasPosted: false,
        comment: '',
        rating: 0,
      },
    };

    expect(ui(state, setHasPostedComment({
      hasPosted: true,
      comment: '',
      rating: 0,
    })))
      .toEqual({
        city: 'Amsterdam',
        activeSortType: DEFAULT_SORT_TYPE,
        activeOfferId: null,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      });
  })

  it('should set active offer to a given value', () => {
    const state = {
      city: 'Amsterdam',
      activeSortType: DEFAULT_SORT_TYPE,
      activeOfferId: null,
      hasPostedComment: {
        hasPosted: true,
        comment: '',
        rating: 0,
      },
    };

    expect(ui(state, setActiveOffer(10)))
      .toEqual({
        city: 'Amsterdam',
        activeSortType: DEFAULT_SORT_TYPE,
        activeOfferId: 10,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      });

    expect(ui(state, setActiveOffer(null)))
      .toEqual({
        city: 'Amsterdam',
        activeSortType: DEFAULT_SORT_TYPE,
        activeOfferId: null,
        hasPostedComment: {
          hasPosted: true,
          comment: '',
          rating: 0,
        },
      });
  })
});