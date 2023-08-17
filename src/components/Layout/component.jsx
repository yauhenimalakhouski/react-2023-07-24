import { Header } from "../Header/header";

export const Layout = ({ children }) => {

  return (
    <div>
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
    </div>
      
  );
};
