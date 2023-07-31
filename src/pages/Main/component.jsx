import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { Button } from "../../components/Button/component";
import { useState } from "react";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Layout>
      <div>
        {restaurants.map((restaurant, index) => (
          <Button
            key={restaurant.id}
            onClick={() => setActiveRestaurantIndex(index)}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>
      <div>{restaurants[activeRestaurantIndex].name}</div>
      {/* <div><Restaurant/></div> */}
    </Layout>
  );
};
