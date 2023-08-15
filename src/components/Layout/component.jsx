import { Header } from "../Header/header";
import { AuthorizationContext } from "../../contexts/authorizationContext";
import { useState } from "react";

export const Layout = ({ children }) => {
  const [authorization, setAuthorization] = useState('Log in');

  return (
    <div>
      <AuthorizationContext.Provider value={authorization}>
        <Header 
          authorization={authorization}
          setAuthorization={setAuthorization}
        />
        <main>{children}</main>
        <footer>footer</footer>
      </AuthorizationContext.Provider>
    </div>
      
  );
};
