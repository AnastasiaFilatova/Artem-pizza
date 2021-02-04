import { SIZE, DOUGH, SAUCE } from "../utils/pizzaData";
import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../state/ingredients/selectors";

export const PizzaPreview = ({ pizza }) => {
  const cheeseInfo = useSelector(getIngredientsByCategory("cheese"));
  const meatInfo = useSelector(getIngredientsByCategory("meat"));
  const vegetablesInfo = useSelector(getIngredientsByCategory("vegetables"));

  const size = SIZE[pizza.size].name;
  const dough = DOUGH[pizza.dough].name;
  const sauce = SAUCE[pizza.sauce].name;
  const cheese = pizza.cheese;
  const vegetables = pizza.vegetables;
  const meat = pizza.meat;

  const selectedCheese = cheeseInfo.filter(({ slug }) => cheese.includes(slug));
  const selectedVegetables = vegetablesInfo.filter(({ slug }) =>
    vegetables.includes(slug)
  );
  const selectedMeat = meatInfo.filter(({ slug }) => meat.includes(slug));

  return (
    <>
      <p>
        {size}
        &nbsp;
        {dough}
      </p>
      <p>{sauce}</p>
      {selectedCheese && selectedCheese.map((cheese) => <p>{cheese.name}</p>)}
      {selectedVegetables &&
        selectedVegetables.map((vegetable) => <p>{vegetable.name}</p>)}
      {selectedMeat && selectedMeat.map((meat) => <p>{meat.name}</p>)}
    </>
  );
};
