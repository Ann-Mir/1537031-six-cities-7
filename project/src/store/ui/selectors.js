import {NameSpace} from '../root-reducer';

export const getCity = (state) => state[NameSpace.UI].city;
export const getActiveSortType = (state) => state[NameSpace.UI].activeSortType;
export const getActiveOfferId = (state) => state[NameSpace.UI].activeOfferId;
export const getHasPostedComment = (state) => state[NameSpace.UI].hasPostedComment;
export const getHasPostedCommentStatus = (state) => state[NameSpace.UI].hasPostedComment.hasPosted;
export const getPostedComment = (state) => state[NameSpace.UI].hasPostedComment.comment;
export const getPostedRating = (state) => state[NameSpace.UI].hasPostedComment.rating;
