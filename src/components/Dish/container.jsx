import { useDispatch, useSelector } from "react-redux";
import { Dish } from "./component";
import { selectDishAmountById } from "../../store/features/cart/selectors";
import { cartSlice } from "../../store/features/cart";

export const DishContainer = ({ dish, dishId }) => {
  
  const amount = useSelector((state) => selectDishAmountById(state, dishId));
  const dispatch = useDispatch();
  if (!dish) {
    return null;
  }

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={() => {
        dispatch(cartSlice.actions.incrementDish(dishId));
      }}
      decrement={() => {
        dispatch(cartSlice.actions.decrementDish(dishId));
      }}
    />
  );
};
