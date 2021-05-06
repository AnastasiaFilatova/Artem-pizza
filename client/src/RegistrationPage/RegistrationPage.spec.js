import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, fireEvent } from "@testing-library/react";
import { RegistrationPage } from "../RegistrationPage";
import { act } from "react-dom/test-utils";
import { authReducer } from "../state/authorisation/authReducer";

const store = createStore(authReducer, { value: false });

describe("RegistrationPage", () => {
  it("registration form renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <RegistrationPage />
        </Provider>
      </MemoryRouter>
    );
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Пароль")).toBeInTheDocument();
    expect(getByText("Зарегистрироваться")).toBeInTheDocument();
  });

  // describe("on submit", () => {
  //   it("collects email and password", async () => {
  //     const formSubmit = jest.fn().mockImplementation((data) => data);

  //     const { getByText, getByLabelText } = render(
  //       <MemoryRouter>
  //         <Provider store={store}>
  //           <RegistrationPage onSubmit={formSubmit} />
  //         </Provider>
  //       </MemoryRouter>
  //     );

  //     fireEvent.input(getByLabelText("Email"), {
  //       target: { value: "Foo@foo.com" },
  //     });
  //     fireEvent.input(getByLabelText("Пароль"), {
  //       target: { value: "Bar56565656" },
  //     });

  //     await act(async () => {
  //       fireEvent.submit(getByText("Зарегистрироваться"));
  //     });

  //     expect(formSubmit).toBeCalledWith({
  //       email: "Foo@foo.com",
  //       password: "Bar56565656",
  //     });
  //   });
  // });
});
