import { calculatePrice } from "../utils/calculatePrice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPrice } from "../state/price/actions";
import { RadioInputGroup } from "../utils/RadioInputGroup";
import { SIZE, DOUGH, SAUCE } from "../utils/pizzaData";
import { CheckBoxGroup } from "../utils/CheckBoxGroup";
import styled from "styled-components";
import { GRAY600, GREEN } from "../colors";

const RadioSetHorizontalContainer = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: space-between;
`;

const RadioSetHorizontalItem = styled.div`
  margin: 0 24px 0 0;
  display: flex;
  flex-direction: column;
`;

const RadioSetHorizontalItemLabel = styled.div`
  font-size: 14px;
  color: ${GRAY600};
  margin-bottom: 4px;
  margin-left: 2px;
`;

const ScrollableContainer = styled.div`
  overflow-x: overflow;
  padding-bottom: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  margin: 16px 0px;
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: white;
  background-color: ${GREEN};
  border-radius: 16px;
`;

const ButtonFontStyle = styled.div``;

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
        <RadioSetHorizontalContainer>
          <RadioSetHorizontalItem>
            <RadioSetHorizontalItemLabel>Размер</RadioSetHorizontalItemLabel>
            <RadioInputGroup
              items={[
                { value: "30cm", label: SIZE["30cm"].name },
                { value: "35cm", label: SIZE["35cm"].name },
              ]}
              name="size"
              selectedValue={values["size"]}
            />
          </RadioSetHorizontalItem>
          <RadioSetHorizontalItem>
            <RadioSetHorizontalItemLabel>Тесто</RadioSetHorizontalItemLabel>
            <RadioInputGroup
              items={[
                { value: "thin", label: DOUGH["thin"].name },
                { value: "thick", label: DOUGH["thick"].name },
              ]}
              name="dough"
              selectedValue={values["dough"]}
            />
          </RadioSetHorizontalItem>
        </RadioSetHorizontalContainer>
        <ScrollableContainer>
          <RadioSetHorizontalItemLabel>
            Выберите соус
          </RadioSetHorizontalItemLabel>
          <RadioInputGroup
            items={[
              { value: "tomato", label: SAUCE["tomato"].name },
              { value: "mayo", label: SAUCE["mayo"].name },
              { value: "spicy", label: SAUCE["spicy"].name },
              { value: "mushroom", label: SAUCE["mushroom"].name },
              { value: "white", label: SAUCE["white"].name },
              { value: "special", label: SAUCE["special"].name },
            ]}
            name="sauce"
            selectedValue={values["sauce"]}
          />
        </ScrollableContainer>
        <RadioSetHorizontalItemLabel>Добавьте сыр</RadioSetHorizontalItemLabel>
        <CheckBoxGroup items={cheese} name="cheese" register={register} />

        <RadioSetHorizontalItemLabel>
          Добавьте овощи
        </RadioSetHorizontalItemLabel>
        <CheckBoxGroup
          items={vegetables}
          name="vegetables"
          register={register}
        />

        <RadioSetHorizontalItemLabel>Добавьте мясо</RadioSetHorizontalItemLabel>
        <CheckBoxGroup items={meat} name="meat" register={register} />

        <ButtonContainer>Заказать за {price} руб.</ButtonContainer>
      </form>
    </>
  );
};
