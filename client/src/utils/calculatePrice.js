import { SIZE, BASE, SAUCES, CHEESES, MEATS, VEGETABLES } from "./pizzaData";

export function calculatePrice({size, base, sauces, cheeses, vegetables, meats}) {
    const sizePrice = SIZE[size].price;
    const basePrice = BASE[base].price;
    const saucesPrice = sauces.reduce(
            (price, sauce) => price + SAUCES[sauce].price, 0
        )
    const cheesesPrice = cheeses.reduce(
            (price, cheese) => price + CHEESES[cheese].price, 0
        )
    const vegetablesPrice = vegetables.reduce(
            (price, vegetable) => price + VEGETABLES[vegetable].price, 0
        )
    const meatsPrice = meats.reduce(
            (price, meat) => price + MEATS[meat].price, 0
        )

    return sizePrice + basePrice + saucesPrice + cheesesPrice + vegetablesPrice + meatsPrice
}