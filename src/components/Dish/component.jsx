import { Button } from "../Button/component";
import styles from './styles.module.scss';

export const Dish = ({ dish, amount, increment, decrement }) => {
  const { price: dishPrice, name } = dish;

  return (
    <div>
      <div>{name}</div>
      <Button 
      disabled={amount === 0} 
      onClick={decrement} 
      type="btn_minus"/>
      <span> {amount} </span>
      <Button 
      disabled={amount === 5} 
      onClick={increment}
      type="btn_plus"/>
      <div>Total: ${amount * dishPrice}</div>
    </div>
  );
};
