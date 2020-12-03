import { SIZE, BASE, SAUCES, CHEESES, MEATS, VEGETABLES } from "./utils/pizzaData";
import { calculatePrice } from "./utils/calculatePrice";


export const PizzaPreview = (pizza) => {
    const sauces = pizza.pizza.sauces;
    const cheeses = pizza.pizza.cheeses;
    const vegetables = pizza.pizza.vegetables;
    const meats = pizza.pizza.meats;

  return (
    <>
      <li>
        {SIZE[pizza.pizza.size].name} {BASE[pizza.pizza.base].name}
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
      <p>{calculatePrice(pizza.pizza)} руб.</p>
    </>
  );
};
