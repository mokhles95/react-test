import { ActionTypes } from "../constants/action-types";
export const getCountries = (countries) => {
    return {
      type: ActionTypes.GET_COUNTRIES,
      payload: countries
    };
  };