import { useState } from "react";
import { PizzaForm } from "./PizzaForm";
import { PizzaPreview } from "./PizzaPreview";
import { Route, Link, Switch } from "react-router-dom";

const Registration = () => <h1>Registration</h1>;
const Login = () => <h1>Login</h1>;
const History = () => <h1>Orders</h1>;
const OrderStatus = () => <h1>Thank you for the Order!</h1>;

function App() {
  const [pizza, setPizza] = useState();
  
  const RoutePizza = () => {
    if (pizza) {
      return <><Route path="/checkout"><h1>Ваша пицца</h1><PizzaPreview pizza={pizza} /></Route></>;
    }
    else {
      return <><Route path="/"><h1>Артем пицца</h1><PizzaForm onPizzaCreated={setPizza} /></Route></>;
    }
  };
  
  return (
    <>
      <nav>
        <p>
          <Link to="/">Артем пицца иконка</Link>
        </p>
        <p>
          <Link to="/registration">Регистрация</Link>
        </p>
        <p>
          <Link to="/login">Логин</Link>
        </p>
        <p>
          <Link to="/orders">Заказы</Link>
        </p>
        <p>
          <Link to="/checkout">Оформить заказ</Link>
        </p>
      </nav>
      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <History />
        </Route>
        <RoutePizza />
      </Switch>
    </>
  );
}

export default App;
