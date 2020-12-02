import { calculatePrice } from "./utils/calculatePrice";
import { useForm } from "react-hook-form";

export const PizzaForm = ({ onPizzaCreated }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "30cm",
      base: "thin",
      sauces: [],
      cheeses: [],
      vegetables: [],
      meats: [],
    },
  });

  const values = watch();
  console.log("-------- ", values);
  const price = calculatePrice(values);

  const onSubmit = (data) => {
    onPizzaCreated(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Размер</legend>
          <label>
            <input type="radio" value="30cm" name="size" ref={register} />
            30см
          </label>
          <label>
            <input type="radio" value="35cm" name="size" ref={register} />
            35см
          </label>
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <label>
            <input type="radio" value="thin" name="base" ref={register} />
            Тонкое
          </label>
          <label>
            <input type="radio" value="thick" name="base" ref={register} />
            Пышное
          </label>
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <label>
            <input
              type="checkbox"
              value="tomato"
              name="sauces"
              ref={register}
            />
            Томатный
          </label>
          <label>
            <input type="checkbox" value="white" name="sauces" ref={register} />
            Белый
          </label>
          <label>
            <input type="checkbox" value="spicy" name="sauces" ref={register} />
            Острый
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          <label>
            <input
              type="checkbox"
              value="mozarella"
              name="cheeses"
              ref={register}
            />
            Моцарелла
          </label>
          <label>
            <input
              type="checkbox"
              value="chedder"
              name="cheeses"
              ref={register}
            />
            Чеддер
          </label>
          <label>
            <input
              type="checkbox"
              value="dor blue"
              name="cheeses"
              ref={register}
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
              name="vegetables"
              ref={register}
            />
            Помидор
          </label>
          <label>
            <input
              type="checkbox"
              value="mushrooms"
              name="vegetables"
              ref={register}
            />
            Грибы
          </label>
          <label>
            <input
              type="checkbox"
              value="pepper"
              name="vegetables"
              ref={register}
            />
            Перец
          </label>
          <label>
            <input
              type="checkbox"
              value="pineapple"
              name="vegetables"
              ref={register}
            />
            Ананасы
          </label>
          <label>
            <input
              type="checkbox"
              value="olives"
              name="vegetables"
              ref={register}
            />
            Оливки
          </label>
          <label>
            <input
              type="checkbox"
              value="onion"
              name="vegetables"
              ref={register}
            />
            Лук
          </label>
          <label>
            <input
              type="checkbox"
              value="broccoli"
              name="vegetables"
              ref={register}
            />
            Брокколи
          </label>
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо</legend>
          <label>
            <input type="checkbox" value="bacon" name="meats" ref={register} />
            Бекон
          </label>
          <label>
            <input
              type="checkbox"
              value="pepperoni"
              name="meats"
              ref={register}
            />
            Пепперони
          </label>
          <label>
            <input type="checkbox" value="ham" name="meats" ref={register} />
            Ветчина
          </label>
          <label>
            <input
              type="checkbox"
              value="chicken"
              name="meats"
              ref={register}
            />
            Курица
          </label>
          <label>
            <input type="checkbox" value="salami" name="meats" ref={register} />
            Салями
          </label>
        </fieldset>
        <button>Заказать за {price} руб.</button>
      </form>
    </>
  );
};
