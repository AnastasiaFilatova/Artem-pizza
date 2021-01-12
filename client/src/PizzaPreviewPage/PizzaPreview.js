import { SIZE, BASE } from "../utils/pizzaData";
import { useSelector } from "react-redux";
import { getIngredientsByCategory } from "../state/ingredients/selectors";

export const PizzaPreview = ({ pizza }) => {
  const saucesInfo = useSelector(getIngredientsByCategory("sauces"));
  const cheesesInfo = useSelector(getIngredientsByCategory("cheese"));
  const meatsInfo = useSelector(getIngredientsByCategory("meat"));
  const vegetablesInfo = useSelector(getIngredientsByCategory("vegetables"));

  const size = SIZE[pizza.size].name;
  const base = BASE[pizza.base].name;
  const sauces = pizza.sauces;
  const cheeses = pizza.cheeses;
  const vegetables = pizza.vegetables;
  const meats = pizza.meats;

  const selectedSauces = saucesInfo.filter(({ slug }) => sauces.includes(slug));
  const selectedCheeses = cheesesInfo.filter(({ slug }) =>
    cheeses.includes(slug)
  );
  const selectedVegetables = vegetablesInfo.filter(({ slug }) =>
    vegetables.includes(slug)
  );
  const selectedMeats = meatsInfo.filter(({ slug }) => meats.includes(slug));

  return (
    <>
      <p>
        {size}
        &nbsp;
        {base}
      </p>
      {selectedSauces && selectedSauces.map((sauce) => <p>{sauce.name}</p>)}
      {selectedCheeses && selectedCheeses.map((cheese) => <p>{cheese.name}</p>)}
      {selectedVegetables &&
        selectedVegetables.map((vegetable) => <p>{vegetable.name}</p>)}
      {selectedMeats && selectedMeats.map((meat) => <p>{meat.name}</p>)}
    </>
  );
};
