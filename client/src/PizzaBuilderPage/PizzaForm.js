import { calculatePrice } from "../utils/calculatePrice";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPrice } from "../state/price/actions";
import { RadioInputGroup } from "../utils/RadioInputGroup";
import { SIZE, DOUGH, SAUCE } from "../utils/pizzaData";
import { CheckBoxGroup } from "../utils/CheckBoxGroup";
import { NavPanel } from "../shared/NavPanel";
import styled from "styled-components";
import { GRAY600, GREEN, BLACK } from "../colors";
import thin from "./assets/thin.png";
import thick from "./assets/thick.png";
import plate from "./assets/plate.png";

const PageContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
`;

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

const Title = styled.div`
  font-family: Rounded Mplus 1c;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: ${BLACK}};
  margin-bottom: 24px;
  margin-top: 16px;
`;

const PizzaPlate = styled.img`
  width: 300px;
  height: 274.29px;
  position: absolute;
  margin-left: 10px;
`;

const Dough = styled.img`
  width: 220px;
  height: 221px;
  position: relative;
  left: 8.33%;
  right: 18.49%;
  top: 25px;
  left: 25px;
  margin-bottom: 80px;
  margin-left: 10px;
`;

export const PizzaForm = ({ onPizzaCreated, cheese, meat, vegetables }) => {
  const defaultValues = {
    size: "30cm",
    dough: "thin",
    sauce: "tomato",
    cheese: [],
    vegetables: [],
    meat: [],
  };

  const { register, handleSubmit, watch, control } = useForm({
    defaultValues: defaultValues,
  });

  const values = watch();

  const selectedToppings = Object.values(values);
  const toppingsData = [...cheese, ...meat, ...vegetables];
  const price = calculatePrice(selectedToppings, toppingsData);

  const dough = values["dough"];

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    onPizzaCreated(data);
    dispatch(setPrice(price));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PageContainer>
          <NavPanel />
          <Title>Собери свою пиццу</Title>
          <PizzaPlate src={plate} alt="pizza plate" />
          {dough === "thin" ? (
            <Dough src={thin} alt="dough thin" />
          ) : (
            <Dough src={thick} alt="dough thick" />
          )}
          <RadioSetHorizontalContainer>
            <RadioSetHorizontalItem>
              <RadioSetHorizontalItemLabel>Размер</RadioSetHorizontalItemLabel>
              <Controller
                control={control}
                name="size"
                defaultValue={defaultValues["size"]}
                render={({ onChange, value }) => (
                  <RadioInputGroup
                    items={[
                      { value: "30cm", label: SIZE["30cm"].name },
                      { value: "35cm", label: SIZE["35cm"].name },
                    ]}
                    id="size"
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
            </RadioSetHorizontalItem>
            <RadioSetHorizontalItem>
              <RadioSetHorizontalItemLabel>Тесто</RadioSetHorizontalItemLabel>
              <Controller
                control={control}
                name="dough"
                defaultValue={defaultValues["dough"]}
                render={({ onChange, value }) => (
                  <RadioInputGroup
                    items={[
                      { value: "thin", label: DOUGH["thin"].name },
                      { value: "thick", label: DOUGH["thick"].name },
                    ]}
                    id="dough"
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
            </RadioSetHorizontalItem>
          </RadioSetHorizontalContainer>
          <ScrollableContainer>
            <RadioSetHorizontalItemLabel>
              Выберите соус
            </RadioSetHorizontalItemLabel>
            <Controller
              control={control}
              name="sauce"
              defaultValue={defaultValues["sauce"]}
              render={({ onChange, value }) => (
                <RadioInputGroup
                  items={[
                    { value: "tomato", label: SAUCE["tomato"].name },
                    { value: "mayo", label: SAUCE["mayo"].name },
                    { value: "spicy", label: SAUCE["spicy"].name },
                    { value: "mushroom", label: SAUCE["mushroom"].name },
                    { value: "white", label: SAUCE["white"].name },
                    { value: "special", label: SAUCE["special"].name },
                  ]}
                  id="sauce"
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
          </ScrollableContainer>
          <RadioSetHorizontalItemLabel>
            Добавьте сыр
          </RadioSetHorizontalItemLabel>
          <CheckBoxGroup items={cheese} name="cheese" register={register} />
          <RadioSetHorizontalItemLabel>
            Добавьте овощи
          </RadioSetHorizontalItemLabel>
          <CheckBoxGroup
            items={vegetables}
            name="vegetables"
            register={register}
          />

          <RadioSetHorizontalItemLabel>
            Добавьте мясо
          </RadioSetHorizontalItemLabel>
          <CheckBoxGroup items={meat} name="meat" register={register} />

          <ButtonContainer>Заказать за {price} руб.</ButtonContainer>
        </PageContainer>
      </form>
    </>
  );
};
