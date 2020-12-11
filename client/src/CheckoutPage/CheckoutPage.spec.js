const { render, fireEvent } = require("@testing-library/react");
const { PizzaPreview } = require("../PizzaPreview");
const { CheckoutPage } = require("./CheckoutPage");

describe("CheckoutPage", () => {
  describe("Form renders correctly", () => {
    it("renders correctly", () => {
      const pizzaData = {
        size: "30cm",
        base: "thin",
        sauces: ["tomato"],
        cheeses: ["mozarella"],
        vegetables: ["pepper"],
        meats: ["ham"],
      };
      const { container } = render(<PizzaPreview pizza={pizzaData} />);
      expect(container.innerHTML).toContain("Ветчина");

      const { getByText, getByLabelText } = render(<CheckoutPage />);
      expect(getByLabelText("Адрес доставки")).toBeInTheDocument();
      expect(getByLabelText("Подъезд")).toBeInTheDocument();
      expect(getByLabelText("Данные для оплаты")).toBeInTheDocument();
    });

    describe("on submit", () => {
      it("collects data correctly", async () => {
        const onSubmit = jest.fn().mockImplementation((data) => data);

        const { getByText, getByLabelText } = render(
          <CheckoutPage onSubmit={onSubmit} />
        );

        fireEvent.input(getByLabelText("Адрес доставки"), {
          target: { value: "Foo" },
        });
        fireEvent.input(getByLabelText("Подъезд"), {
          target: { value: "Bar" },
        });

        await act(async () => {
          fireEvent.click(getByText("Оплатить"));
        });

        expect(onSubmit).toBeCalledWith({
          adress: "Foo",
          porch: "Bar",
        });
      });
    });
  });
});
