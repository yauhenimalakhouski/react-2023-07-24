import { useSelector } from "react-redux";
import { Cart } from "./component";
import { selectCartDishIds } from "../../store/features/cart/selectors";

export const CartContainer = () => {
  const dishIds = useSelector(selectCartDishIds);
  
  console.log(dishIds);
  return <Cart dishIds={dishIds} />;
};
