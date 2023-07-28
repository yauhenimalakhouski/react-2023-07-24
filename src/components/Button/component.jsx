/* eslint-disable react/prop-types */
export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={() => {
        console.log(`button ${text}`);
        onClick();
      }}
    >
      {text}
    </button>
  );
};
