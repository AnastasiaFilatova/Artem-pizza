import { Route, Link, Switch } from "react-router-dom";
import { AddIngredientPage } from "./AddIngredientPage";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AddIngredientPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
