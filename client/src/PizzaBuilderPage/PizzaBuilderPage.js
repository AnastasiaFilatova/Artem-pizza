import { useHistory } from "react-router-dom";
import { usePizza } from "../PizzaContext";
import { PizzaForm } from "../PizzaForm";

export const PizzaBuilderPage = ({_usePizzaHook=usePizza}) => {
    const {setPizza} =  _usePizzaHook();
    const history = useHistory();
    
    const onPizzaChange = (pizza) => {
        setPizza(pizza)
        history.push("pizza-preview")
    }

    return <><h1>Артем пицца</h1><PizzaForm onPizzaCreated={onPizzaChange} /></>
}