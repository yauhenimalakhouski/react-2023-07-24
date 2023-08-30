import classNames from "classnames";
import { Button } from "../Button/component";
import styles from './styles.module.scss';

export const Dish = ({ dish, amount, increment, decrement }) => {
  const { price: dishPrice, name, ingredients } = dish;

  return (
    <div className={classNames(styles.root)}>
      <div className={styles.dish_info_container}>
        <div className={styles.title}>{name}</div>
        <div className={styles.dish_ingredients}>{ingredients.join(', ')}</div>
        <div className={styles.dish_price}>{dishPrice.toFixed(2)} $</div>
      </div>
      <div className={styles.dish_count_container}>
        <div className={styles.buttons_count_container}>
            <Button 
            disabled={amount === 0} 
            onClick={decrement} 
            type="btn_minus"/>
            <span className={styles.dish_count}> {amount} </span>
            <Button 
            disabled={amount === 5} 
            onClick={increment}
            type="btn_plus"/>
        </div>
        <div className={styles.dish_count}>Total: ${amount * dishPrice}</div>
      </div>
    </div>
  );
};
