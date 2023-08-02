import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";

export const MainPage = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  
  return (
    <Layout>
      <Tabs onTabSelect={(index) => setActiveRestaurantIndex(index)}>{restaurants}</Tabs>
      <Restaurant>{restaurants[activeRestaurantIndex]}</Restaurant>
    </Layout>
  );
};
