import { useEffect } from "react";
import { useRef } from "react";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(1); // {current: 1}

  useEffect(() => {
    ref.current = setInterval(() => console.log("Hello"), 1000);
  }, []);

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
