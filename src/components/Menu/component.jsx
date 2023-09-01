
import { DishContainer } from "../Dish/container";
import { NewDish } from "../NewDish/component";

export const Menu = ({ dishes }) => {
  
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <DishContainer key={dish.id} dishId={dish.id} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
