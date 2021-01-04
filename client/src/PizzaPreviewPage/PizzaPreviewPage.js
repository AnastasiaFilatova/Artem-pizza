import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PizzaPreview } from "./PizzaPreview";
import { getPizza } from "../state/pizza/selectors";

export const PizzaPreviewPage = () => {
  const pizza = useSelector(getPizza);

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Ваша пицца</h1>
      <PizzaPreview pizza={pizza} />
      <hr />
      <Redirect to="/checkout" />
    </>
  );
};
