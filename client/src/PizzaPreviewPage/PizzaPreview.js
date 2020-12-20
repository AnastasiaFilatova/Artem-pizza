import {
  SIZE,
  BASE,
  SAUCES,
  CHEESES,
  VEGETABLES,
  MEATS,
} from "../utils/pizzaData";
import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../state/ingredients/selectors";

export const PizzaPreview = ({ pizza }) => {
  // Use ingredients info for rendering instead of pizzaData
  // const saucesInfo = useSelector(getIngredientsByCategory("sauces"));
  // const cheesesInfo = useSelector(getIngredientsByCategory("cheeses"));
  // const meatsInfo = useSelector(getIngredientsByCategory("meats"));
  // const vegetablesInfo = useSelector(getIngredientsByCategory("vegetables"));

  const size = SIZE[pizza.size].name;
  const base = BASE[pizza.base].name;
  const sauces = pizza.sauces;
  const cheeses = pizza.cheeses;
  const vegetables = pizza.vegetables;
  const meats = pizza.meats;

  return (
    <>
      <p>
        {size}
        &nbsp;
        {base}
      </p>
      {sauces && sauces.map((sauce) => <p>{SAUCES[sauce].name}</p>)}
      {cheeses && cheeses.map((cheese) => <p>{CHEESES[cheese].name}</p>)}
      {vegetables &&
        vegetables.map((vegetable) => <p>{VEGETABLES[vegetable].name}</p>)}
      {meats && meats.map((meat) => <p>{MEATS[meat].name}</p>)}
    </>
  );
};
