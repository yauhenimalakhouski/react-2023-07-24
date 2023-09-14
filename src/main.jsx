import ReactDOM from "react-dom/client";
import { MainPage } from "./pages/Main/component";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Navigate } from "react-router-dom";

import "./styles/index.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserContextProvider } from "./components/UserContextProvider/component";
import { Layout } from "./components/Layout/component";
import { RestaurantPage } from "./pages/Restaurant/component";
import { RestaurantContainer } from "./components/Restaurant/container";
import { CartContainer } from "./components/Cart/container";
import { MenuContainer } from "./components/Menu/container";
import { ReviewsContainer } from "./components/Reviews/container";
import { DishesPage } from "./pages/Dishes/component";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserContextProvider>
        <Layout>
          <Routes>
            <Route index element={<MainPage />}></Route>
            <Route path="restaurants" element={<RestaurantPage />}>
              <Route index element={<span>Select Restaurant</span>} />
              <Route path=":restaurantId" element={<RestaurantContainer />}>
                <Route index element={<Navigate to="menu" replace/>} />
                <Route path="menu" element={<MenuContainer/>} />
                <Route path="reviews" element={<ReviewsContainer/>} />
              </Route>
            </Route>
            <Route path="cart" element={<CartContainer />} />
            <Route path="dishes" element={<DishesPage />} />
          </Routes>
        </Layout>
      </UserContextProvider>
    </BrowserRouter>
  </Provider>
);
