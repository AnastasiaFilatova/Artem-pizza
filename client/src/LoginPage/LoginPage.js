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

export const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {};

  return (
    <>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>
        <label>Пароль</label>
        <input type="text" name="password" ref={register} />
        <p>{errors.password?.message}</p>
        <button>Войти</button>
      </form>
      <hr />
      <Link to="/registration">Регистрация</Link>
    </>
  );
};
