import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "edux-devtools-extension/developmentOnly";

import cartitems from "./Reducers/cartItem";

const reducers = combineReducers({
  //cartReducer
  cartitems: cartitems,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
