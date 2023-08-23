import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer } from "./features/cart";
import { restaurantReducer } from "./features/restaurant";
import { loggerMiddleware } from "./middlewares/logger";
import { dishReducer } from "./features/dish";
import { reviewReducer } from "./features/review";
import { userReducer } from "./features/user";
import { authorizationReducer } from "./features/Authorization";
import { checkAuthorization } from "./middlewares/check-authorization";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
  authorization: authorizationReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, checkAuthorization)
);

console.log(store.getState());
