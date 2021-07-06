import {NameSpace} from '../root-reducer';


export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserAvatar = (state) => state[NameSpace.USER].user.avatarUrl;
export const getUserEmail = (state) => state[NameSpace.USER].user.email;
export const getUserId = (state) => state[NameSpace.USER].user.id;
export const getUserIsProStatus = (state) => state[NameSpace.USER].user.isPro;
export const getUserName = (state) => state[NameSpace.USER].user.name;
