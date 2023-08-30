import classNames from "classnames";
import { DishContainer } from "../Dish/container";
import styles from './styles.module.scss';

export const Cart = ({ dishIds }) => {
  return (
    <div className={classNames(styles.root)}>
      <h2>Cart</h2>
      <ul className={classNames(styles.order_list)}>
        {dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} />
        ))}
      </ul>
    </div>
  );
};
