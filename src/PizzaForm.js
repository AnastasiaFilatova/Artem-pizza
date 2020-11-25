import { useState } from "react";
import { calculatePrice } from "./utils/calculatePrice"
import { useArray } from "./utils/useArray";

export const PizzaForm = ({ onPizzaCreated }) => {
  const [size, setSize] = useState("30cm");
  const [base, setBase] = useState("thin");
  const [sauces, addSauce, removeSauce] = useArray([]);
  const [cheeses, addCheese, removeCheese] = useArray([]);
  const [vegetables, addVegetable, removeVegetable] = useArray([]);
  const [meats, addMeat, removeMeat] = useArray([]);
  
  const price = calculatePrice({
    size,
    base,
    sauces,
    cheeses,
    vegetables,
    meats,
  });

  console.log("Size: ", size);
  console.log("Base: ", base);
  console.log("Sauces: ", sauces);
  console.log("Cheeses: ", cheeses);
  console.log("Vegetables: ", vegetables);
  console.log("Meats ", meats);

  const updateSize = (event) => {
    setSize(event.target.value);
  };

  const updateBase = (event) => {
    setBase(event.target.value);
  };

  const updateSauces = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addSauce(value);
    } else {
      removeSauce(value);
    }
  };

  const updateCheeses = (event) => {
    const { value, checked } = event.target;

    if (checked) {
        addCheese(value);
    } else {
        removeCheese(value);
    }
  };

  const updateVegetables = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addVegetable(value);
    } else {
      removeVegetable(value);
    }
  };

  const updateMeats = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      addMeat(value);
    } else {
      removeMeat(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onPizzaCreated({
      size,
      base,
      sauces,
      cheeses,
      vegetables,
      meats,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input
              type="radio"
              value="30cm"
              name="size"
              onChange={updateSize}
              checked={size === "30cm"}
            />
            30см
          </label>
          <label>
            <input
              type="radio"
              value="35cm"
              name="size"
              onChange={updateSize}
              checked={size === "35cm"}
            />
            35см
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input
              type="radio"
              value="thin"
              name="base"
              onChange={updateBase}
              checked={base === "thin"}
            />
            Тонкое
          </label>
          <label>
            <input
              type="radio"
              value="thick"
              name="base"
              onChange={updateBase}
              checked={base === "thick"}
            />
            Пышное
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <label>
            <input
              type="checkbox"
              value="tomato"
              name="sauce"
              onChange={updateSauces}
              checked={sauces.includes("tomato")}
            />
            Томатный
          </label>
          <label>
            <input
              type="checkbox"
              value="white"
              name="sauce"
              onChange={updateSauces}
              checked={sauces.includes("white")}
            />
            Белый
          </label>
          <label>
            <input
              type="checkbox"
              value="spicy"
              name="sauce"
              onChange={updateSauces}
              checked={sauces.includes("spicy")}
            />
            Острый
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          <label>
            <input
              type="checkbox"
              value="mozarella"
              name="cheese"
              onChange={updateCheeses}
              checked={cheeses.includes("mozarella")}
            />
            Моцарелла
          </label>
          <label>
            <input
              type="checkbox"
              value="chedder"
              name="cheese"
              onChange={updateCheeses}
              checked={cheeses.includes("chedder")}
            />
            Чеддер
          </label>
          <label>
            <input
              type="checkbox"
              value="dor blue"
              name="cheese"
              onChange={updateCheeses}
              checked={cheeses.includes("dor blue")}
            />
            Дор Блю
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи</legend>
          <label>
            <input
              type="checkbox"
              value="tomato"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("tomato")}
            />
            Помидор
          </label>
          <label>
            <input
              type="checkbox"
              value="mushrooms"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("mushrooms")}
            />
            Грибы
          </label>
          <label>
            <input
              type="checkbox"
              value="pepper"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("pepper")}
            />
            Перец
          </label>
          <label>
            <input
              type="checkbox"
              value="pineapple"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("pineapple")}
            />
            Ананасы
          </label>
          <label>
            <input
              type="checkbox"
              value="olives"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("olives")}
            />
            Оливки
          </label>
          <label>
            <input
              type="checkbox"
              value="onion"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("onion")}
            />
            Лук
          </label>
          <label>
            <input
              type="checkbox"
              value="broccoli"
              name="vegetable"
              onChange={updateVegetables}
              checked={vegetables.includes("broccoli")}
            />
            Брокколи
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо</legend>
          <label>
            <input
              type="checkbox"
              value="bacon"
              name="meat"
              onChange={updateMeats}
              checked={meats.includes("bacon")}
            />
            Бекон
          </label>
          <label>
            <input
              type="checkbox"
              value="pepperoni"
              name="meat"
              onChange={updateMeats}
              checked={meats.includes("pepperoni")}
            />
            Пепперони
          </label>
          <label>
            <input
              type="checkbox"
              value="ham"
              name="meat"
              onChange={updateMeats}
              checked={meats.includes("ham")}
            />
            Ветчина
          </label>
          <label>
            <input
              type="checkbox"
              value="chicken"
              name="meat"
              onChange={updateMeats}
              checked={meats.includes("chicken")}
            />
            Курица
          </label>
          <label>
            <input
              type="checkbox"
              value="salami"
              name="meat"
              onChange={updateMeats}
              checked={meats.includes("salami")}
            />
            Салями
          </label>
        </fieldset>
        <button>Заказать за {price} руб.</button>
      </form>
    </>
  );
};
