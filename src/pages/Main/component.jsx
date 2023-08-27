import { Layout } from "../../components/Layout/component";
import { UserContextProvider } from "../../components/UserContextProvider/component";
import { RestaurantsContainer } from "../../components/Restaurants/container";

export const MainPage = () => {
  

  return (
    <UserContextProvider>
        <Layout>
          <RestaurantsContainer />
        </Layout>
    </UserContextProvider>
  );
};
