import { useState, useContext, createContext } from "react";
import { getOrders } from "./api";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    setIsLoading(true);
    const data = await getOrders();
    console.log("in orders context , data ", data);
    setOrders(data);
    setIsLoading(false);
  };

  return (
    <OrdersContext.Provider
      value={{
        isLoading,
        loadOrders,
        orders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
