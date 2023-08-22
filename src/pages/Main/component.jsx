import { Layout } from "../../components/Layout/component";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../../components/Button/component";
import { ThemeContext } from "../../contexts/themeContext";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store";
import { UserContextProvider } from "../../components/UserContextProvider/component";
import { RestaurantTabsContainer } from "../../components/Tabs/container";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { CartContainer } from "../../components/Cart/container";

const LOCAL_STORAGE_KEY = "activeRestaurantIndex";
export const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    () => localStorage.getItem(LOCAL_STORAGE_KEY) || null
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeRestaurantId);
  }, [activeRestaurantId]);

  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContext.Provider value={theme}>
          <Layout>
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              SwitchTheme
            </Button>
            <RestaurantTabsContainer onTabSelect={setActiveRestaurantId} />
            <RestaurantContainer restaurantId={activeRestaurantId} />
            <CartContainer />
          </Layout>
        </ThemeContext.Provider>
      </UserContextProvider>
    </Provider>
  );
};
