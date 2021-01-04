import { createStore, combineReducers } from "redux";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { pizzaReducer } from "./state/pizza/pizzaReducer";
import { priceReducer } from "./state/price/priceReducer";
import { ordersReducer } from "./state/orders/ordersReducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./state/authorisation/authReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer,
    price: priceReducer,
    orders: ordersReducer,
    authorised: authReducer,
  }),
  enhancer
);
