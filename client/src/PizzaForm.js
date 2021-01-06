import { calculatePrice } from "./utils/calculatePrice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPrice } from "./state/price/actions";
import RadioInputGroup from "./utils/RadioInputGroup";
import { SIZE, BASE } from "./utils/pizzaData";
import { CheckBoxGroup } from "./utils/CheckBoxGroup";

export const PizzaForm = ({
  onPizzaCreated,
  sauces,
  cheeses,
  meats,
  vegetables,
}) => {
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
  const selectedToppings = [
    ...values.sauces,
    ...values.cheeses,
    ...values.vegetables,
    ...values.meats,
  ];

  const toppingsData = [...sauces, ...cheeses, ...vegetables, ...meats];
  const price = calculatePrice(
    values.size,
    values.base,
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
              { value: "thin", label: BASE["thin"].name },
              { value: "thick", label: BASE["thick"].name },
            ]}
            name="base"
            register={register}
          />
        </fieldset>
        <fieldset>
          <legend>Выберите соус</legend>
          <CheckBoxGroup items={sauces} name="sauces" register={register} />
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          <CheckBoxGroup items={cheeses} name="cheeses" register={register} />
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
          <CheckBoxGroup items={meats} name="meats" register={register} />
        </fieldset>
        <button>Заказать за {price} руб.</button>
      </form>
    </>
  );
};
