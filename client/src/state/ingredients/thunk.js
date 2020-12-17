import { getIngredients } from "../../api";
import {
  ingredientsError,
  ingredientsSuccess,
  requestIngredients,
} from "./actions";

export const fetchIngredients = () => async (dispatch) => {
  dispatch(requestIngredients());
  try {
    const data = await getIngredients();
    const dataWithCorrectTypes = data.map((item) => ({
      ...item,
      price: Number(item.price),
    }));
    dispatch(ingredientsSuccess(dataWithCorrectTypes));
  } catch (error) {
    // dispatch(ingredientsError(error));
  }
};
