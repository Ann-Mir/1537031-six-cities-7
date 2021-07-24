import {NameSpace} from '../root-reducer';


export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserAvatar = (state) => state[NameSpace.USER].user.avatarUrl;
export const getUserEmail = (state) => state[NameSpace.USER].user.email;
