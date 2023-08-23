import { ThemeContext } from "../../contexts/themeContext";
import { MenuContaiener } from "../Menu/container";
import { ReviewsContainer } from "../Reviews/container";


export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ThemeContext.Provider value="green">
        <MenuContaiener restaurantId={restaurant.id} />
      </ThemeContext.Provider>
      <ReviewsContainer restaurantId={restaurant.id} />
    </div>
  );
};
