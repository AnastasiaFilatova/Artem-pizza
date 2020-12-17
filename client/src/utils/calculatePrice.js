import { SIZE, BASE } from "./pizzaData";

export function calculatePrice(size, base, selectedToppings, toppingsData) {
  const sizePrice = SIZE[size].price;
  const basePrice = BASE[base].price;

  const toppingsPrice = selectedToppings.reduce((price, item) => {
    const toppingData = toppingsData.find((topping) => topping.slug === item);
    return price + toppingData.price;
  }, 0);

  return sizePrice + basePrice + toppingsPrice;
}
