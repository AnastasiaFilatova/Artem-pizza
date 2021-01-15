const { PizzaForm } = require("./PizzaForm");
const { fireEvent, render } = require("@testing-library/react");
import { createStore } from "redux";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { priceReducer } from "./state/price/priceReducer";

const store = createStore(priceReducer, { price: 200 });
const sauces = [
  {
    id: "szPhZsm0",
    name: "Белый соус",
    slug: "white_sauce",
    price: "0",
    category: "sauces",
    image: "",
    thumbnail: "",
  },
];
const cheeses = [
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
const meats = [
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

describe("PizzaForm", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <PizzaForm
          sauces={sauces}
          cheeses={cheeses}
          meats={meats}
          vegetables={vegetables}
        />
      </Provider>
    );
    expect(getByText("Размер")).toBeInTheDocument();
    expect(getByText("Тесто")).toBeInTheDocument();
    expect(getByText("Выберите соус")).toBeInTheDocument();
    expect(getByText("Добавьте сыр")).toBeInTheDocument();
  });

  // describe("with all additions unchecked", () => {
  //   it("shows minimum price", () => {
  //     const { getByText } = render(
  //       <PizzaForm sauces={[]} cheeses={[]} meats={[]} vegetables={[]} />
  //     );
  //     expect(getByText("Заказать за 200 руб.")).toBeInTheDocument();
  //   });
  // });

  // describe("with some additions checked", () => {
  //   it("shows calculted price", () => {
  //     const { getByText } = render(<PizzaForm />);
  //     fireEvent.click(getByText("Томатный"));
  //     fireEvent.click(getByText("Моцарелла"));
  //     fireEvent.click(getByText("Чеддер"));
  //     fireEvent.click(getByText("Дор Блю"));
  //     fireEvent.click(getByText("Помидор"));
  //     fireEvent.click(getByText("Грибы"));
  //     fireEvent.click(getByText("Перец"));
  //     fireEvent.click(getByText("Ананасы"));
  //     fireEvent.click(getByText("Оливки"));

  //     expect(
  //       getByText((content) => {
  //         return content.includes("432");
  //       })
  //     );
  //   });
  // });

  describe("on pizza submit", () => {
    it("passes constructed pizza", async () => {
      const onPizzaCreated = jest.fn();
      const { getByText } = render(
        <Provider store={store}>
          <PizzaForm
            sauces={sauces}
            cheeses={cheeses}
            meats={meats}
            vegetables={vegetables}
            onPizzaCreated={onPizzaCreated}
          />
        </Provider>
      );
      await act(async () => {
        fireEvent.click(getByText("Заказать за 200 руб."));
      });

      expect(onPizzaCreated).toBeCalledWith({
        size: "30cm",
        base: "thin",
        sauces: [],
        cheeses: [],
        meats: [],
        vegetables: [],
      });
    });
  });
});
