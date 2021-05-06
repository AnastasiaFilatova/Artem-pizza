import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { PizzaPreview } from "../PizzaPreviewPage/PizzaPreview";
import { getPizza } from "../state/pizza/selectors";
import { getPrice } from "../state/price/selectors";

export const OrderPage = () => {
  const pizza = useSelector(getPizza);
  const price = useSelector(getPrice);

  if (!pizza) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Спасибо за заказ!</h1>
      <p>
        Заказ успешно оплачен, ждите
        <br /> вашу пиццу уже через час
      </p>
      <PizzaPreview pizza={pizza} />
      <p>{price}руб.</p>
    </>
  );
};
