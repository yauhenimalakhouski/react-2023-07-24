import { ThemeContext } from "../../contexts/themeContext";
import { MenuContaiener } from "../Menu/container";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ThemeContext.Provider value="green">
        <MenuContaiener menuIds={restaurant.menu} />
      </ThemeContext.Provider>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
