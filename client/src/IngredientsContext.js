import { useState, useContext, createContext } from "react";
import { getIngredients } from "./api";

const IngredientsContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);

  const loadIngredients = async () => {
    setIsLoading(true);
    const data = await getIngredients();
    const dataWithCorrectTypes = data.map((item) => ({
      ...item,
      price: Number(item.price),
    }));
    setIngredients(dataWithCorrectTypes);
    setIsLoading(false);
  };

  const ingredientsByCategory = (category) => {
    return ingredients.filter((ingredient) => ingredient.category === category);
  };

  return (
    <IngredientsContext.Provider
      value={{
        isLoading,
        loadIngredients,
        ingredients,
        ingredientsByCategory,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientsContext);
