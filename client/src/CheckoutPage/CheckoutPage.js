import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PizzaPreviewPage } from "../PizzaPreviewPage/PizzaPreviewPage";
import { calculatePrice } from "../utils/calculatePrice";
import { useSelector } from "react-redux";
import { getPizza } from "../state/pizza/selectors";

const schema = yup.object().shape({
  adress: yup.string().required("Введите адрес доставки"),
  door: yup
    .number()
    .typeError("Введите номер подъезда")
    .positive("Введите позитивное число"),
  floor: yup
    .number()
    .typeError("Введите этаж")
    .positive("Введите позитивное число"),
  apartment: yup
    .number()
    .typeError("Введите номер квартиры")
    .positive("Введите позитивное число"),
  cardNumber: yup
    .number()
    .typeError("Введите номер карты")
    .positive("Введите позитивное число")
    .required("Введите номер карты"),
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
  const pizza = useSelector(getPizza);

  // set price in a global state
  //const price = useSelector(getPrice;
  const price = 0;

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {};

  return (
    <>
      <h1>Оформить заказ</h1>
      <PizzaPreviewPage pizza={pizza} />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Адрес доставки</label>
        <input type="text" name="adress" ref={register} />
        <p>{errors.adress?.message}</p>
        <label>Подъезд</label>
        <input type="text" name="door" ref={register} />
        <p>{errors.door?.message}</p>
        <label>Этаж</label>
        <input type="text" name="floor" ref={register} />
        <p>{errors.floor?.message}</p>
        <label>Квартира</label>
        <input type="text" name="apartment" ref={register} />
        <p>{errors.apartment?.message}</p>
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
        <button>Оплатить {price} руб.</button>
      </form>

      <hr />
      <Link to="/">Вернуться обратно</Link>
    </>
  );
};
