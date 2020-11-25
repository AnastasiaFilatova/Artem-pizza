const { render, fireEvent } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom")
const { PizzaBuilderPage } = require("./PizzaBuilderPage")
const { setPizza } = require("./PizzaBuilderPage")

jest.mock("../PizzaForm", () => {
  return {
    PizzaForm: ({ onPizzaCreated }) => (
        <button
          onClick={() =>
            onPizzaCreated({
              size: "30cm",
              base: "thin",
              sauces: [],
              cheeses: [],
              meats: [],
              vegetables: [],
            })
          }
        >
          Заказать за 200 руб.
        </button>
    ),
  };
});

describe("PizzaPageBuilder", () => {
    it("renders correctly", () => {
      const { getByText } = render(
        <MemoryRouter>
          <PizzaBuilderPage
            _usePizzaHook={() => ({
              setPizza: () => {},
            })}
          />
        </MemoryRouter>
      );
      expect(getByText("Артем пицца")).toBeInTheDocument();
    });



    describe("onPizzaChange", () => {
        it("sets pizza value in pizza context", () => {
            const mockSetPizza = jest.fn();

            const { getByText } = render(
                <MemoryRouter>
                  <PizzaBuilderPage
                    _usePizzaHook={() => ({
                      setPizza: mockSetPizza,
                    })}
                  />
                </MemoryRouter>
              );
            fireEvent.click(getByText("Заказать за 200 руб."));
            
            expect(mockSetPizza).toBeCalledWith({
                size: "30cm",
                base: "thin",
                sauces: [],
                cheeses: [],
                meats: [],
                vegetables: [],
              })

        });


        it.todo("navigates to the pizza preview when pizza exists")
    })
})