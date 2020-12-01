import { Redirect, Link } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaPreview } from "../PizzaPreview";

export const PizzaPreviewPage = ({ _usePizzaHook = usePizza }) => {
  const { pizza } = _usePizzaHook();

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Ваша пицца</h1>
      <PizzaPreview pizza={pizza} />
      <hr />
      <Redirect to={{ pathname: "/checkout", state: pizza }} />
    </>
  );
};
