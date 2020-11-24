import { useState } from "react";
import { PizzaForm } from "./PizzaForm";
import { PizzaPreview } from "./PizzaPreview";

function App() {
  const [pizza, setPizza] = useState()

  if (pizza) {
    return (
      <>
        <h1>
          Ваша пицца
      </h1>
        <PizzaPreview pizza={pizza} />
      </>
    );
  }

  return (
    <>
      <h1>
        Артем пицца
      </h1>
      <PizzaForm onPizzaCreated={setPizza} />
    </>
  );
}

export default App;
