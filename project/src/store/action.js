export const ActionType = {
  SET_CITY: 'cities/setCity',
  SET_SORT_TYPE: 'setSortType',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  })
};
