export const ActionType = {
  SET_CITY: 'cities/setCity',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
};
