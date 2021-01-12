import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { PizzaForm } from "../PizzaForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientsByCategory,
  getIsLoading,
} from "../state/ingredients/selectors";
import { fetchIngredients } from "../state/ingredients/thunk";
import { setPizza } from "../state/pizza/actions";

export const PizzaBuilderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const sauces = useSelector(getIngredientsByCategory("sauces"));
  const cheeses = useSelector(getIngredientsByCategory("cheese"));
  const meats = useSelector(getIngredientsByCategory("meat"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));

  const onPizzaChange = (pizza) => {
    dispatch(setPizza(pizza));
    history.push("pizza-preview");
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <h1>Артем пицца</h1>
      <PizzaForm
        sauces={sauces}
        cheeses={cheeses}
        meats={meats}
        vegetables={vegetables}
        onPizzaCreated={onPizzaChange}
      />
    </>
  );
};
