import { useMemo } from "react";
import { UserContext } from "../../contexts/userContext";
import { useState } from "react";
import { useCallback } from "react";

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const loginn = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const logoutt = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const userContextValue = useMemo(
    () => ({ currentUser, loginn, logoutt }),
    [currentUser, loginn, logoutt]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
