import { calculatePrice } from "../utils/calculatePrice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPrice } from "../state/price/actions";
import { RadioInputGroup } from "../utils/RadioInputGroup";
import { SIZE, DOUGH, SAUCE } from "../utils/pizzaData";
import { CheckBoxGroup } from "../utils/CheckBoxGroup";

export const PizzaForm = ({ onPizzaCreated, cheese, meat, vegetables }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: "30cm",
      dough: "thin",
      sauce: "tomato",
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const values = watch();
  const selectedToppings = [
    ...values.cheese,
    ...values.vegetables,
    ...values.meat,
  ];

  const toppingsData = [...cheese, ...meat, ...vegetables];
  const price = calculatePrice(
    values.size,
    values.dough,
    values.sauce,
    selectedToppings,
    toppingsData
  );
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    onPizzaCreated(data);
    dispatch(setPrice(price));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Размер</legend>
          <RadioInputGroup
            items={[
              { value: "30cm", label: SIZE["30cm"].name },
              { value: "35cm", label: SIZE["35cm"].name },
            ]}
            name="size"
            register={register}
          />
        </fieldset>
        <fieldset>
          <legend>Тесто</legend>
          <RadioInputGroup
            items={[
              { value: "thin", label: DOUGH["thin"].name },
              { value: "thick", label: DOUGH["thick"].name },
            ]}
            name="dough"
            register={register}
          />
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <RadioInputGroup
            items={[
              { value: "tomato", label: SAUCE["tomato"].name },
              { value: "mayo", label: SAUCE["mayo"].name },
              { value: "spicy", label: SAUCE["spicy"].name },
              { value: "mushroom", label: SAUCE["mushroom"].name },
            ]}
            name="sauce"
            register={register}
          />
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          <CheckBoxGroup items={cheese} name="cheese" register={register} />
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи</legend>
          <CheckBoxGroup
            items={vegetables}
            name="vegetables"
            register={register}
          />
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо</legend>
          <CheckBoxGroup items={meat} name="meat" register={register} />
        </fieldset>
        <button>Заказать за {price} руб.</button>
      </form>
    </>
  );
};
