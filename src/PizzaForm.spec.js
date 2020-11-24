const { PizzaForm } = require("./PizzaForm");
const { fireEvent, render } = require("@testing-library/react");

describe("PizzaForm", () => {
    it("renders correctly", () => {
      const { getByText } = render(<PizzaForm />);
      expect(getByText("Размер")).toBeInTheDocument();
      expect(getByText("Тесто")).toBeInTheDocument();
      expect(getByText("Выберите соус")).toBeInTheDocument();
      expect(getByText("Добавьте сыр")).toBeInTheDocument();
    });
  
    describe("with all additions unchecked", () => {
      it("shows minimum price", () => {
        const { getByText } = render(<PizzaForm />);
        expect(getByText("Заказать за 200 руб.")).toBeInTheDocument();
      });
    });
  
    describe("with some additions checked", () => {
      it("shows calculted price", () => {
        const { getByText } = render(<PizzaForm />);
        fireEvent.click(getByText("Томатный"));

        fireEvent.click(getByText("Моцарелла"));
        fireEvent.click(getByText("Чеддер"));
        fireEvent.click(getByText("Дор Блю"));

        fireEvent.click(getByText("Помидор"));
        fireEvent.click(getByText("Грибы"));
        fireEvent.click(getByText("Перец"));
        fireEvent.click(getByText("Ананасы"));
        fireEvent.click(getByText("Оливки"));
  
        expect(getByText("Заказать за 403 руб.")).toBeInTheDocument();
      });
    });
  
    describe("on pizza submit", () => {
      it("passes constructed pizza", () => {
        const onPizzaCreated = jest.fn();
        const { getByText } = render(
          <PizzaForm onPizzaCreated={onPizzaCreated} />
        );

        fireEvent.click(getByText("Заказать за 200 руб."));
  
        expect(onPizzaCreated).toBeCalledWith({
            size: "30cm",
            base: "thin",
            sauces: [],
            cheeses: [],
            meats: [],
            vegetables: []
        });
      });
    });
  });