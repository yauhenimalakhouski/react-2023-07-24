import { useRef } from "react";

export const Button = ({ children, onClick, disabled }) => {
  const ref = useRef(1);

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
