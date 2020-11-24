import { Route, Link, Switch } from "react-router-dom";
import { PizzaBuilderPage } from "./PizzaBuilderPage";
import { PizzaPreviewPage } from "./PizzaPreviewPage";
import { CheckoutPage } from "./CheckoutPage";
import { LoginPage } from "./LoginPage";
import { RegistrationPage } from "./RegistrationPage";
import { HistoryPage } from "./HistoryPage"; 
import { NotFoundPage } from "./NotFoundPage";

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Артем пицца</Link>
          </li>
          <li>
            <Link to="/pizza-preview">Просмотр пиццы</Link>
          </li>
          <li>
            <Link to="/checkout">Оформить заказ</Link>
          </li>          
          <li>
            <Link to="/registration">Регистрация</Link>
          </li>
          <li>
            <Link to="/login">Логин</Link>
          </li>
          <li>
            <Link to="/history">Список заказов</Link>
          </li>
        </ul>
      </nav>
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
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
