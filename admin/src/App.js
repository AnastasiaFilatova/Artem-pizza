import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  price: yup
    .number()
    .transform((currentValue, originalValue) =>
      originalValue === "" ? undefined : currentValue
    )
    .typeError("Цена должна быть числом")
    .min(0, "Цена должна быть не меньше нуля")
    .required("Цена - обязательное поле"),
  name: yup.string().required("Название продукта обязательно"),
  slug: yup.string().required("Введите идентификатор продукта"),
  picture: yup.mixed(),
});

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="price">Цена:</label>
        <input id="price" ref={register} type="tel" name="price" />
        <p>{errors.price?.message}</p>
      </div>
      <div>
        <label htmlFor="name">Название:</label>
        <input id="name" ref={register} type="text" name="name" />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="slug">Идентификатор:</label>
        <input id="slug" ref={register} type="text" name="slug" />
        <p>{errors.slug?.message}</p>
      </div>
      <div>
        <label htmlFor="picture">Картинка:</label>
        <input id="picture" ref={register} type="file" name="picture" />
      </div>
      <button>Отправить</button>
    </form>
  );
}

export default App;
