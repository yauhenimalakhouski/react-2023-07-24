import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurant, activeRestaurantIndex }) => {
  if(!restaurant) {
    return null;
  }
  
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} activeRestaurantIndex={activeRestaurantIndex}/>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
