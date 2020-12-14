const { render, fireEvent } = require("@testing-library/react");
const { RegistrationPage } = require("../RegistrationPage");
const { act } = require("react-dom/test-utils");
import { MemoryRouter } from "react-router";

describe("RegistrationPage", () => {
  it("registration form renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Пароль")).toBeInTheDocument();
    expect(getByText("Зарегистрироваться")).toBeInTheDocument();
  });

  describe("on submit", () => {
    it("collects email and password", async () => {
      const formSubmit = jest.fn().mockImplementation((data) => data);

      const { getByText, getByLabelText } = render(
        <MemoryRouter>
          <RegistrationPage formSubmit={formSubmit} />
        </MemoryRouter>
      );

      fireEvent.input(getByLabelText("Email"), {
        target: { value: "Foo@foo.com" },
      });
      fireEvent.input(getByLabelText("Пароль"), {
        target: { value: "Bar56565656" },
      });

      await act(async () => {
        fireEvent.click(getByText("Зарегистрироваться"));
      });

      expect(formSubmit).toBeCalledWith({
        email: "Foo@foo.com",
        password: "Bar56565656",
      });
    });
  });
});
