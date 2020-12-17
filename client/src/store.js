import { createStore, combineReducers } from "redux";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { pizzaReducer } from "./state/pizza/pizzaReducer";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

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
  }),
  enhancer
);
