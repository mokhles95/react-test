import { ActionTypes } from "../constants/action-types";
const intialState = {
  countries: [],
};

export const getCountries = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COUNTRIES:
      return { ...state, countries: payload };
    default:
      return state;
  }
};