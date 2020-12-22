import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PizzaPreviewPage } from "../PizzaPreviewPage/PizzaPreviewPage";
import { useSelector } from "react-redux";
import { getPizza } from "../state/pizza/selectors";
import { getPrice } from "../state/price/selectors";
import { postOrder } from "../api";

const schema = yup.object().shape({
  address: yup.string(), //.required("Введите адрес доставки"),
  // door: yup.number().notRequired(),
  // // .typeError("Введите номер подъезда")
  // // .positive("Введите позитивное число"),
  // floor: yup.number().notRequired(),
  // // .typeError("Введите этаж")
  // // .positive("Введите позитивное число"),
  // apartment: yup.number().notRequired(),
  // .typeError("Введите номер квартиры")
  // .positive("Введите позитивное число"),
  cardNumber: yup.number(),
  // .typeError("Введите номер карты")
  // .positive("Введите позитивное число")
  // .required("Введите номер карты"),
  name: yup.string().required("Введите имя и фамилию на карте"),
});

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ")
      .substr(0, 19) || ""
  );
};

export const CheckoutPage = () => {
  const history = useHistory();
  const pizza = useSelector(getPizza);
  const price = useSelector(getPrice);

  const ingredients = Object.values(pizza);

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const order = {
      ingredients: ingredients,
      address: data.address,
      name: data.name,
      card_number: data.cardNumber,
    };

    const result = await postOrder(order);

    if (result.message === "Success") {
      history.push("order");
    } else {
      // Show error message here
    }
  });

  return (
    <>
      <h1>Оформить заказ</h1>
      <PizzaPreviewPage pizza={pizza} />
      <br />
      <form onSubmit={onSubmit}>
        <label>Адрес доставки</label>
        <input type="text" name="adress" ref={register} />
        <p>{errors.address?.message}</p>
        {/* <label>Подъезд</label>
        <input type="text" name="door" ref={register} />
        <p>{errors.door?.message}</p>
        <label>Этаж</label>
        <input type="text" name="floor" ref={register} />
        <p>{errors.floor?.message}</p>
        <label>Квартира</label>
        <input type="text" name="apartment" ref={register} />
        <p>{errors.apartment?.message}</p> */}
        <label htmlFor="cardNumber">Данные для оплаты</label>
        <input
          placeholder="0000 0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          name="cardNumber"
          id="cardNumber"
          onChange={(event) => {
            const { value } = event.target;
            setValue("cardNumber", normalizeCardNumber(value));
          }}
          ref={register}
        />
        <p>{errors.cardNumber?.message}</p>
        <input
          type="text"
          name="name"
          placeholder="Имя на карте"
          ref={register}
        />
        <p>{errors.name?.message}</p>
        <button>Оплатить {price} руб.</button>
      </form>

      <hr />
      <Link to="/">Вернуться обратно</Link>
    </>
  );
};
