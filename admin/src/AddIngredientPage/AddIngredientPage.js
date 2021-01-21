import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import { postIngredient } from "../api";
import { useHistory } from "react-router-dom";

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
  category: yup.string().required("Введите категорию продукта"),
  image: yup.mixed(),
  thumbnail: yup.mixed(),
});

export const AddIngredientPage = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const { mutateAsync: createIngredient } = useMutation((data) =>
    fetch("https://i4qqz.sse.codesandbox.io/ingredients", {
      method: "POST",
      body: data,
    }).then((response) => response.json())
  );

  const onSubmit = handleSubmit(async (data) => {
    const { price, name, slug, category, image, thumbnail } = data;
    const formData = new FormData();

    formData.append("price", price);
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("category", category);
    formData.append("image", image[0]);
    formData.append("thumbnail", thumbnail[0]);

    // send data to api
    const result = await createIngredient(formData);

    if (result.message === "Success") {
      history.push("/");
    } else {
      // Show error message here
    }
  });

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
        <label htmlFor="category">Категория:</label>
        <select id="category" ref={register} name="category">
          <option value="sauces">Соусы</option>
          <option value="cheese">Сыр</option>
          <option value="vegetables">Овощи</option>
          <option value="meat">Мясо</option>
        </select>
        <p>{errors.category?.message}</p>
      </div>
      <div>
        <label htmlFor="image">Изображение:</label>
        <input id="image" ref={register} type="file" name="image" />
      </div>
      <div>
        <label htmlFor="thumbnail">Миниатюра:</label>
        <input id="thumbnail" ref={register} type="file" name="thumbnail" />
      </div>
      <button>Отправить</button>
    </form>
  );
};
