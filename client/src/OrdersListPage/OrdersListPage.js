import { getOrders, getIsLoading } from "../state/orders/selectors";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../state/orders/thunk";
import { getAuthorisation } from "../state/authorisation/selectors";
import { getIngredients } from "../state/ingredients/selectors";

export const OrdersListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isAuthorised = useSelector(getAuthorisation);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(getOrders);

  if (!isAuthorised) {
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return <>Заказы загружаются...</>;
  }

  if (!orders) {
    return <h1>У вас нет заказов</h1>;
  }

  return (
    <>
      <h1>Заказы</h1>
      {orders.map((order) => (
        <div>
          <p>{order.name}</p>
          <p>{order.card_number}</p>
          <p>
            {order.ingredients &&
              order.ingredients.map((item) => <p>{item}</p>)}
          </p>
          <hr />
        </div>
      ))}
    </>
  );
};
