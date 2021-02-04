import { SIZE, DOUGH, SAUCE } from "./pizzaData";

export function calculatePrice(
  size,
  dough,
  sauce,
  selectedToppings,
  toppingsData
) {
  const sizePrice = SIZE[size].price;
  const doughPrice = DOUGH[dough].price;
  const saucePrice = SAUCE[sauce].price;

  const toppingsPrice = selectedToppings.reduce((price, item) => {
    const toppingData = toppingsData.find((topping) => topping.slug === item);
    return price + toppingData.price;
  }, 0);

  return sizePrice + doughPrice + saucePrice + toppingsPrice;
}
