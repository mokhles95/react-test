import { combineReducers } from "redux";
import { getCountries} from "./countryReducer";
const reducers = combineReducers({
  allCountries: getCountries
});
export default reducers;