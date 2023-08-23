import { useContext } from "react";
import { Button } from "../Button/component.jsx";
import { UserContext } from "../../contexts/userContext.js";
import { createPortal } from "react-dom";
import { useState } from "react";
import { LoginForm } from "../LoginForm/component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/authorization/action.js";

export const LoginButton = () => {
  const { currentUser, logoutt } = useContext(UserContext);
  const [isModalOpened, setIsModalOpened] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {currentUser && <span>{currentUser}</span>}
        <Button
          onClick={() => {
            if(currentUser){
              logoutt();   //из useContext
              dispatch(logout()); //из store
            } else {
              setIsModalOpened(true);
            } 
          }}
        >
          {currentUser ? "Logout" : "Login"}
        </Button>
      </div>

      {isModalOpened &&
        createPortal(
          <LoginForm onLogin={() => setIsModalOpened(false)} />,
          document.getElementById("modal-container")
        )}
    </>
  );
};
