import classNames from "classnames";
import { Button } from "../Button/component";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <NavLink
      to={`/${dish.id}`}
    >
      <div className={styles.name}>{name}</div>
    </NavLink>
      
      <div className={styles.actions}>
        <Button disabled={amount === 0} onClick={decrement}>
          -
        </Button>
        <span> {amount} </span>
        <Button disabled={amount === 5} onClick={increment}>
          +
        </Button>
      </div>
      <div className={styles.total}>Total: ${amount * dishPrice}</div>
    </div>
  );
};
