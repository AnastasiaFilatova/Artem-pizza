import { calculatePrice } from "./calculatePrice";

const toppingsData = [
  {
    id: "Iieg-VZk",
    name: "Ветчина",
    slug: "ham",
    price: 100,
    category: "meat",
    image: "ham.png",
    thumbnail: "ham-thumb.png",
  },
  {
    id: "KJ1aL-Cn",
    name: "Моцарелла",
    slug: "mozarella",
    price: 100,
    category: "cheese",
    image: "mozarella.png",
    thumbnail: "mozarella-thumb.png",
  },
  {
    id: "szPhZsmj",
    name: "Томатный соус",
    slug: "tomato_sauce",
    price: 0,
    category: "sauces",
    image: "",
    thumbnail: "",
  },
];

describe("calculatePrice", () => {
  it("Returns the sum of all the selected ingridients", () => {
    expect(
      calculatePrice(
        "30cm",
        "thin",
        ["tomato_sauce", "mozarella", "ham"],
        toppingsData
      )
    ).toEqual(400);
  });
});
