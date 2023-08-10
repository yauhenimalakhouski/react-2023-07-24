import { useState } from "react";
import { Button } from "../Button/component.jsx";

const Counter = ({ defaultCount, onCountChange, min, max }) => {
  const [count, setCount] = useState(defaultCount);

  const decrement = () => {
    const newValue = count - 1;
    onCountChange(newValue);
    setCount(newValue);
  };

  const increment = () => {
    const newValue = count + 1;
    onCountChange(newValue);
    setCount(newValue);
  };

  return (
    <div>
      <Button disabled={count === min} onClick={decrement}>
        -
      </Button>
      <span> {count} </span>
      <Button disabled={count === max} onClick={increment}>
        +
      </Button>
    </div>
  );
};

const DEFAULT_DISH_AMOUNT = 0;

export const Dish = ({ dish }) => {
  const [price, setPrice] = useState(0);

  const updateAmount = (amount) => setPrice(amount * dish.price);

  return (
    <div>
      <div>{dish.name}</div>
      <Counter
        defaultCount={DEFAULT_DISH_AMOUNT}
        min={0}
        max={5}
        onCountChange={updateAmount}
      />
      <div>Total: ${price}</div>
    </div>
  );
};
