const { PizzaPreview } = require(".PizzaPreview");
const { render } = require("@testing-library/react");

describe("PizzaPreview", () => {
  it.todo("the form renders correctly");

  const { getByText } = render(
    <PizzaPreview
      pizza={{
        size: "30cm",
        base: "thin",
        sauces: ["tomato"],
        cheeses: ["mozarella"],
        vegetables: ["pepper"],
        meats: ["ham"],
      }}
    />
  );

  expect(getByText("30см на тонком тесте")).toBeInTheDocument();
  expect(getByText("Томатный соус")).toBeInTheDocument();
  expect(getByText("Моцарелла")).toBeInTheDocument();
  expect(getByText("Перец")).toBeInTheDocument();
  expect(getByText("Ветчина")).toBeInTheDocument();
  expect(getByText("Ветчина")).toBeInTheDocument();
});
