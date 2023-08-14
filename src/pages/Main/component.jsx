import { Layout } from "../../components/Layout/component";
import { restaurants } from "../../constants/constants";
import { useState } from "react";
import { Restaurant } from "../../components/Restaurant/component";
import { Tabs } from "../../components/Tabs/component";
import React, { useEffect } from "react";
import { Button } from "../../components/Button/component";

export const ThemeContext = React.createContext("default");

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";

export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || 0
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantIndex);
  }, [activeRestaurantIndex]);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout>
        <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          SwitchTheme
        </Button>
        <Tabs
          restaurants={restaurants}
          onTabSelect={setActiveRestaurantIndex}
        />
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      </Layout>
    </ThemeContext.Provider>
  );
};
