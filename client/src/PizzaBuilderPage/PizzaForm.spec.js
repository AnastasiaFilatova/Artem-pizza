const { PizzaForm } = require("./PizzaForm");
const { fireEvent, render } = require("@testing-library/react");
import { createStore } from "redux";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
//import { priceReducer } from "../state/price/priceReducer";
import { store } from "../store";

//const store = createStore(priceReducer, { price: 200 });
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

const renderComponent = (cheese = [], meat = [], vegetables = []) =>
  render(
    <Provider store={store}>
      <PizzaForm cheese={cheese} meat={meat} vegetables={vegetables} />
    </Provider>
  );

describe("PizzaForm", () => {
  it("renders correctly", () => {
    const { getByText } = renderComponent();
    expect(getByText("Размер")).toBeInTheDocument();
    expect(getByText("Тесто")).toBeInTheDocument();
    expect(getByText("Выберите соус")).toBeInTheDocument();
    expect(getByText("Добавьте сыр")).toBeInTheDocument();
  });

  describe("with all additions unchecked", () => {
    it("shows minimum price", () => {
      const { getByText } = renderComponent();
      expect(getByText("Заказать за 200 руб.")).toBeInTheDocument();
    });
  });

  // describe("with some additions checked", () => {
  //   it("shows calculted price", async () => {
  //     const { getByText, getByLabelText } = renderComponent(
  //       (cheese = cheese),
  //       (meat = meat),
  //       (vegetables = vegetables)
  //     );
  //     await act(async () => {
  //       fireEvent.click(getByLabelText("Бекон"));
  //     });
  //     expect(getByText("Бекон")).toBeInTheDocument();

  //     expect(
  //       getByText((content) => {
  //         return content.includes("300");
  //       })
  //     );
  //   });
  // });

  // describe("on pizza submit", () => {
  //   it("passes constructed pizza", async () => {
  //     const onPizzaCreated = jest.fn();
  //     const { getByText } = render(
  //       <Provider store={store}>
  //         <PizzaForm
  //           cheese={[]}
  //           meat={[]}
  //           vegetables={[]}
  //           onPizzaCreated={onPizzaCreated}
  //         />
  //       </Provider>
  //     );
  //     await act(async () => {
  //       fireEvent.click(getByText("Заказать за 200 руб."));
  //     });

  //     expect(onPizzaCreated).toBeCalledWith({
  //       size: "30cm",
  //       base: "thin",
  //       sauce: "tomato",
  //       cheese: cheese,
  //       meat: meat,
  //       vegetables: vegetables,
  //     });
  //   });
  // });
});
