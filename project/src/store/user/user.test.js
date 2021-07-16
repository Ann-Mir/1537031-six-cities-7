import {user} from './user';

import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';


describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        user: {
          avatarUrl: '',
          email: '',
          id: null,
          isPro: false,
          name: '',
        },
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update user state with the passed data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {
        avatarUrl: '',
        email: '',
        id: null,
        isPro: false,
        name: '',
      },
    };

    const userData = {
      avatarUrl: '/img/1.png',
      email: 'ted@mail.cpm',
      id: 1,
      isPro: true,
      name: 'Ted',
    };

    const setUserAction = {
      type: ActionType.SET_USER,
      payload: userData,
    };

    expect(user(state, setUserAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: '/img/1.png',
          email: 'ted@mail.cpm',
          id: 1,
          isPro: true,
          name: 'Ted',
        },
      });
  });

    it('should clean out user data upon logout', () => {
      const state = {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: '/img/1.png',
          email: 'ted@mail.cpm',
          id: 1,
          isPro: true,
          name: 'Ted',
        },
      };

      const logoutAction = {
        type: ActionType.LOGOUT,
      };

      expect(user(state, logoutAction))
        .toEqual({
          authorizationStatus: AuthorizationStatus.NO_AUTH,
          user: {
            avatarUrl: '',
            email: '',
            id: null,
            isPro: false,
            name: '',
          },
        });
    });
});
