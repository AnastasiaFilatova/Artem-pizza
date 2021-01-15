import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { render, fireEvent } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { act } from "react-dom/test-utils";
import { authReducer } from "../state/authorisation/authReducer";
import { getAuthorisation } from "../state/authorisation/selectors";

const store = createStore(authReducer, { value: false });

describe("LoginPage", () => {
  it("login page renders correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Пароль")).toBeInTheDocument();
    expect(getByText("Войти")).toBeInTheDocument();
  });

  //   it("it sets authorised to true on form submition", async () => {
  //     const formSubmit = jest.fn().mockImplementation((data) => data);

  //     const { getByLabelText, getByText } = render(
  //       <MemoryRouter>
  //         <Provider store={store}>
  //           <LoginPage onSubmit={formSubmit} />
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
  //       fireEvent.submit(getByText("Войти"));
  //     });
  //     expect(formSubmit).toBeCalledWith({
  //       email: "Foo@foo.com",
  //       password: "Bar56565656",
  //     });
  //   });
});
