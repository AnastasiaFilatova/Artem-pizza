import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaForm } from "../PizzaForm";

export const PizzaBuilderPage = () => {
    const {setPizza} = usePizza();
    const history = useHistory();
    
    const onPizzaChange = (pizza) => {
        setPizza(pizza)
        history.push("pizza-preview")
    }

    return <><h1>Артем пицца</h1><PizzaForm onPizzaCreated={onPizzaChange} /></>
}