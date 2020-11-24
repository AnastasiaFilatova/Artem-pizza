import { Redirect, Link } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaPreview } from "../PizzaPreview";

export const PizzaPreviewPage = () => {
  const { pizza } = usePizza();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Ваша пицца</h1>
      <PizzaPreview pizza={pizza} />
      <hr />
      <Link to="/checkout">Оформить заказ</Link>
    </>
  );
};