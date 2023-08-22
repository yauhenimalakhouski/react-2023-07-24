import { DishContainer } from "../Dish/container";
import { NewDish } from "../NewDish/component";

export const Menu = ({ menuIds }) => {

  return (
    <div>
      <h3>Menu</h3>
      <div>
        {menuIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
