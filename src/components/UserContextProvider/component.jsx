import { useCallback, useMemo, useState } from "react";
import { UserContext } from "../../contexts/userContext";



export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    const login = useCallback((user)=>{setCurrentUser(user)}, []);

    const logout = useCallback(()=>{setCurrentUser(null)}, []);

    const userContextValue = useMemo(
        ()=> ({ currentUser, login, logout}),
         [currentUser, login, logout]);
    
         return (
            <UserContext.Provider value={userContextValue}>
                {children}
            </UserContext.Provider>
         );
};