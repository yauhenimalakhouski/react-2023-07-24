import { Layout } from "../../components/Layout/component";
import { UserContextProvider } from "../../components/UserContextProvider/component";
import { Restaurants } from "../../components/Restaurants/component";

export const MainPage = () => {
  return (
    <UserContextProvider>
      <Layout>
        <Restaurants />
      </Layout>
    </UserContextProvider>
  );
};
