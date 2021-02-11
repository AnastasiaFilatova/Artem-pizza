import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { PizzaForm } from "./PizzaForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientsByCategory,
  getIsLoading,
} from "../state/ingredients/selectors";
import { fetchIngredients } from "../state/ingredients/thunk";
import { setPizza } from "../state/pizza/actions";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 375px;
  margin: 0 20px;
  overflow: auto;
`;

export const PizzaBuilderPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const cheese = useSelector(getIngredientsByCategory("cheese"));
  const meat = useSelector(getIngredientsByCategory("meat"));
  const vegetables = useSelector(getIngredientsByCategory("vegetables"));

  const onPizzaChange = (pizza) => {
    dispatch(setPizza(pizza));
    history.push("pizza-preview");
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <PageContainer>
      <h1>Артем пицца</h1>
      <PizzaForm
        cheese={cheese}
        meat={meat}
        vegetables={vegetables}
        onPizzaCreated={onPizzaChange}
      />
    </PageContainer>
  );
};
