import { combineReducers } from "redux";
import { cartProduct } from "./reducers";

const rootReducer = combineReducers({
  cart: cartProduct,
});

export default rootReducer;
