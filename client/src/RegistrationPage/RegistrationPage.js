import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Email введен неверно").required("Введите email"),
  password: yup
    .string()
    .required("Введите пароль")
    .min(8, "Пароль должен состоять минимум из 8 символов"),
});

export const RegistrationPage = ({ formSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    formSubmit(data);
  };

  return (
    <>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Пароль</label>
        <input id="password" type="text" name="password" ref={register} />
        <p>{errors.password?.message}</p>
        <button>Зарегистрироваться</button>
      </form>
      <hr />
      <Link to="/login">Логин</Link>
    </>
  );
};
