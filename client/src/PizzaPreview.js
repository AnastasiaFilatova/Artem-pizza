import {
  SIZE,
  BASE,
  SAUCES,
  CHEESES,
  MEATS,
  VEGETABLES,
} from "./utils/pizzaData";

import { calculatePrice } from "./utils/calculatePrice";

export const PizzaPreview = ({ pizza }) => {
  const sauces = pizza.sauces;
  const cheeses = pizza.cheeses;
  const vegetables = pizza.vegetables;
  const meats = pizza.meats;

  return (
    <>
      <li>
        {SIZE[pizza.size].name} {BASE[pizza.base].name}
      </li>
      {sauces.length > 0 && (
        <li>{sauces.map((sauce) => SAUCES[sauce].name).join(", ")}</li>
      )}
      {cheeses.length > 0 && (
        <li>{cheeses.map((cheese) => CHEESES[cheese].name).join(", ")}</li>
      )}
      {vegetables.length > 0 && (
        <li>
          {vegetables.map((vegetable) => VEGETABLES[vegetable].name).join(", ")}
        </li>
      )}
      {meats.length > 0 && (
        <li>{meats.map((meat) => MEATS[meat].name).join(", ")}</li>
      )}
      <p>{calculatePrice(pizza)} руб.</p>
    </>
  );
};
