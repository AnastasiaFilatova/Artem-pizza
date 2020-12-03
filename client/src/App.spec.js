import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { PizzaProvider } from './PizzaContext'

describe("App", () => {
  describe("registration link click", () => {
    it("navigates to registration page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <PizzaProvider>
          <Router history={history}>
            <App />
          </Router>
        </PizzaProvider>
      );

      expect(container.innerHTML).toMatch("Артем пицца");
      fireEvent.click(getByText("Регистрация"));
      expect(container.innerHTML).toMatch("Регистрация");
      expect(history.location.pathname).toEqual("/registration");
    });

    it("navigates to login page", () => {
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <PizzaProvider>
          <Router history={history}>
            <App />
          </Router>
        </PizzaProvider>
      );

      expect(container.innerHTML).toMatch("Артем пицца");
      fireEvent.click(getByText("Логин"));
      expect(container.innerHTML).toMatch("Логин");
      expect(history.location.pathname).toEqual("/login");
    });
  });

  describe("with an unsupported URL", () => {
    it("shows 404 page", () => {
      const history = createMemoryHistory();
      history.push("/some/bad/route");

      const { getByRole } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(getByRole("heading")).toHaveTextContent("Страница не найдена");
    });
  });
});