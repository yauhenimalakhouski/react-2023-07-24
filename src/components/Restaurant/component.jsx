import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurant }) => {
  if(!restaurant) {
    return null;
  }
  
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu}/>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
