import { Route, Link, Switch } from "react-router-dom";
import { PizzaBuilderPage } from "./PizzaBuilderPage";
import { PizzaPreviewPage } from "./PizzaPreviewPage";
import { CheckoutPage } from "./CheckoutPage";
import { CheckoutErrorPage } from "./CheckoutErrorPage";
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegistrationPage";
import { NotFoundPage } from "./NotFoundPage";
import { OrderPage } from "./OrderPage/OrderPage";
import { OrdersListPage } from "./OrdersListPage/OrdersListPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <PizzaBuilderPage />
      </Route>
      <Route path="/pizza-preview">
        <PizzaPreviewPage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/checkout-error">
        <CheckoutErrorPage />
      </Route>
      <Route path="/registration">
        <RegistrationPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/order">
        <OrderPage />
      </Route>
      <Route path="/orders">
        <OrdersListPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
