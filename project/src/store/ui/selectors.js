import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getActiveSortType = (state) => state[NameSpace.UI].activeSortType;
export const getActiveOfferId = (state) => state[NameSpace.UI].activeOfferId;
