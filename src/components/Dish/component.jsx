import { useState } from "react";
import { Counter } from "../Counter/component";
import { useCallback } from "react";

const DEFAULT_DISH_AMOUNT = 0;

export const Dish = ({ dish }) => {
  const [price, setPrice] = useState(0);

  const { price: dishPrice, name } = dish || {};

  const updateAmount = useCallback(
    (amount) => setPrice(amount * dishPrice),
    [dishPrice]
  );

  return (
    <div>
      <div>{name}</div>
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
