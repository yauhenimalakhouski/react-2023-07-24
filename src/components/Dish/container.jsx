import { useDispatch, useSelector } from "react-redux"
import { Dish } from "./component";
import { selectDishById } from "../../store/features/dish/selectors";
import { selectDishAmountById } from "../../store/features/cart/selectors";

export const DishContainer = ({dishId}) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const amount = useSelector((state) => selectDishAmountById(state, dishId));
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "increment", payload: dish.id });
      };
      const decrement = () => {
        dispatch({ type: "decrement", payload: dish.id });
      };

    if(!dish) {
        return null;
    }
    return <Dish 
      dish={dish}
      increment = {increment}
      decrement = {decrement}
      amount = {amount}
    />
}