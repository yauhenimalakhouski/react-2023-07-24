import { Dish } from "../Dish/component";
import { NewDish } from "../NewDish/component";

export const Menu = ({ dishes, activeRestaurantIndex }) => {
  return (
    <div>
      <h3>Menu</h3>
      <div>
        {!!dishes.length && dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
      <NewDish activeRestaurantIndex={activeRestaurantIndex}/>
    </div>
  );
};
