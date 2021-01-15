import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { PizzaProvider } from "./IngredientsContext";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ingredientsReducer } from "./state/ingredients/ingredientsReducer";
import { pizzaReducer } from "./state/pizza/pizzaReducer";
import { priceReducer } from "./state/price/priceReducer";
import { ordersReducer } from "./state/orders/ordersReducer";
import { authReducer } from "./state/authorisation/authReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  combineReducers({
    ingredients: ingredientsReducer,
    pizza: pizzaReducer,
    price: priceReducer,
    orders: ordersReducer,
    authorised: authReducer,
  }),
  enhancer
);

describe("App", () => {
  describe("registration link click", () => {
    it("navigates to registration page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <PizzaProvider>
          <Router history={history}>
            <Provider store={store}>
              <App />
            </Provider>
          </Router>
        </PizzaProvider>
      );

      expect(container.innerHTML).toMatch("Артем пицца");
      fireEvent.click(getByText("Регистрация"));
      expect(container.innerHTML).toMatch("Регистрация");
      expect(history.location.pathname).toEqual("/registration");
    });

    it("navigates to login page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <PizzaProvider>
          <Router history={history}>
            <Provider store={store}>
              <App />
            </Provider>
          </Router>
        </PizzaProvider>
      );

      expect(container.innerHTML).toMatch("Артем пицца");
      fireEvent.click(getByText("Логин"));
      expect(container.innerHTML).toMatch("Логин");
      expect(history.location.pathname).toEqual("/login");
    });
  });

  describe("with an unsupported URL", () => {
    it("shows 404 page", () => {
      const history = createMemoryHistory();
      history.push("/some/bad/route");
      const { getByRole } = render(
        <Router history={history}>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      );

      expect(getByRole("heading")).toHaveTextContent("Страница не найдена");
    });
  });
});
