import { calculatePrice } from "./utils/calculatePrice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPrice } from "./state/price/actions";
import RadioInputGroup from "./utils/RadioInputGroup";
import { SIZE, BASE } from "./utils/pizzaData";

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
          {sauces.map((sauce) => {
            return (
              <label key={sauce.id}>
                <input
                  ref={register}
                  type="checkbox"
                  value={sauce.slug}
                  name="sauces"
                />
                {sauce.name}
              </label>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Добавьте сыр</legend>
          {cheeses.map((cheese) => {
            return (
              <label key={cheese.id}>
                <input
                  ref={register}
                  type="checkbox"
                  value={cheese.slug}
                  name="cheeses"
                />
                {cheese.name}
              </label>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Добавьте овощи</legend>
          {vegetables.map((vegetable) => {
            return (
              <label key={vegetable.id}>
                <input
                  ref={register}
                  type="checkbox"
                  value={vegetable.slug}
                  name="vegetables"
                />
                {vegetable.name}
              </label>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Добавьте мясо</legend>
          {meats.map((meat) => {
            return (
              <label key={meat.id}>
                <input
                  ref={register}
                  type="checkbox"
                  value={meat.slug}
                  name="meats"
                />
                {meat.name}
              </label>
            );
          })}
        </fieldset>
        <button>Заказать за {price} руб.</button>
      </form>
    </>
  );
};
