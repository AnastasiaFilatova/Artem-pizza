import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PizzaProvider } from "./IngredientsContext";
import { store } from "./store";
import { Provider } from "react-redux";
import { OrdersProvider } from "./OrdersContext";

ReactDOM.render(
  <React.StrictMode>
    <PizzaProvider>
      <OrdersProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </OrdersProvider>
    </PizzaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
