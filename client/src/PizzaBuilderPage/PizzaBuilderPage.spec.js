const { render, fireEvent } = require("@testing-library/react");
const { MemoryRouter, Router } = require("react-router-dom");
const { PizzaBuilderPage } = require("./PizzaBuilderPage");
const { setPizza } = require("./PizzaBuilderPage");
import { createMemoryHistory } from "history";
import { store } from "../store";
import { Provider } from "react-redux";

const cheese = [
  {
    id: "KJ1aL-Cn",
    name: "Моцарелла",
    slug: "mozarella",
    price: "100",
    category: "cheese",
    image: "mozarella.png",
    thumbnail: "mozarella-thumb.png",
  },
];
const meat = [
  {
    id: "Odd5HuC4",
    name: "Бекон",
    slug: "bacon",
    price: "100",
    category: "meat",
    image: "bacon.png",
    thumbnail: "bacon-thumb.png",
  },
];
const vegetables = [
  {
    id: "xXibhlsf",
    name: "Брокколи",
    slug: "broccoli",
    price: "100",
    category: "vegetables",
    image: "broccoli.png",
    thumbnail: "broccoli-thumb.png",
  },
];

const data = {
  size: "30cm",
  base: "thin",
  sauce: "tomato",
  cheese: [],
  meat: [],
  vegetables: [],
};

jest.mock("./PizzaForm", () => {
  return {
    PizzaForm: ({ onPizzaCreated, cheese, meat, vegetables }) => (
      <button onClick={() => onPizzaCreated(data)}>Заказать за 200 руб.</button>
    ),
  };
});

describe("PizzaPageBuilder", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PizzaBuilderPage />
      </Provider>
    );
    expect(getByText("Артем пицца")).toBeInTheDocument();
  });

  describe("onPizzaChange", () => {
    it("sets pizza value in pizza context", () => {
      const mockSetPizza = jest.fn();

      const { getByText } = render(
        <MemoryRouter>
          <Provider store={store}>
            <PizzaBuilderPage
              _usePizzaHook={() => ({
                setPizza: mockSetPizza,
              })}
            />
          </Provider>
        </MemoryRouter>
      );
      fireEvent.click(getByText("Заказать за 200 руб."));

      expect(mockSetPizza).toBeCalledWith(data);
    });

    it("navigates to the pizza preview when pizza exists", () => {
      const history = createMemoryHistory();
      const { getByText } = render(
        <Router history={history}>
          <Provider store={store}>
            <PizzaBuilderPage
              _usePizzaHook={() => ({
                setPizza: () => {},
              })}
            />
          </Provider>
        </Router>
      );
      fireEvent.click(getByText("Заказать за 200 руб."));
      expect(history.location.pathname).toEqual("pizza-preview");
    });
  });
});
