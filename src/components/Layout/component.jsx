import { Footer } from "../Footer/component";
import { Header } from "../Header/component";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};
