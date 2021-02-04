import { useHistory } from "react-router-dom";

export const CheckoutErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <h1>Оплата не прошла</h1>
      <p>
        Попробуйте еще раз или
        <br /> используйте другую карту
      </p>
      <button onClick={() => history.push("checkout")}>
        Попробовать еще раз
      </button>
    </>
  );
};
