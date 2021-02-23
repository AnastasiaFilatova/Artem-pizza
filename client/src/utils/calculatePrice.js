import { SIZE, DOUGH, SAUCE } from "./pizzaData";

export function calculatePrice(selectedToppings, toppingsData) {
  const sizePrice = SIZE[selectedToppings[0]]?.price;
  const doughPrice = DOUGH[selectedToppings[1]]?.price;
  const saucePrice = SAUCE[selectedToppings[2]]?.price;

  console.log(sizePrice, doughPrice, saucePrice);
  const onlyToppings = selectedToppings.splice(3);
  let toppingsPrice = 0;

  onlyToppings.forEach((item) => {
    toppingsPrice += toppingsData.find((topping) => topping.slug === item)
      ?.price;
  });
  console.log(toppingsPrice);

  if (!toppingsPrice) {
    return sizePrice + doughPrice + saucePrice;
  }
  return sizePrice + doughPrice + saucePrice + toppingsPrice;
}
