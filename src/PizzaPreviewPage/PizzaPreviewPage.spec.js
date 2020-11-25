const { render, fireEvent } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { PizzaPreviewPage } = require("./PizzaPreviewPage")
const { pizza } = require("./PizzaPreviewPage")

describe("PizzaPreviewPage", () => {
    it("renders correctly", () => {
        const { getByText } = render(
          <MemoryRouter>
            <PizzaPreviewPage
              _usePizzaHook={() => ({
                pizza: {
                    size: "30cm",
                    base: "thin",
                    sauces: ["tomato"],
                    cheeses: ["mozarella"],
                    meats: [],
                    vegetables: [],
                  },
              })}
            />
          </MemoryRouter>
        );
        expect(getByText("Ваша пицца")).toBeInTheDocument();
        expect(getByText("Оформить заказ")).toBeInTheDocument();
      });
})