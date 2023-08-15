import { useContext } from "react";
import { useRef } from "react";
import { AuthorizationContext } from "../../contexts/authorizationContext";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(1); // {current: 1}

  const authorization = useContext(AuthorizationContext);

  console.log("authorization: ", authorization);

  return (
    <button
      ref={ref}
      onClick={() => {
        onClick();
        clearInterval(ref.current);
        ref.current = undefined;
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
