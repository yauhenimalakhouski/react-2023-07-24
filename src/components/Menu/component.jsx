import classNames from "classnames";
import { DishContainer } from "../Dish/container";
import { NewDish } from "../NewDish/component";
import styles from './styles.module.scss'

export const Menu = ({ dishIds }) => {
  return (
    <div className={classNames(styles.root)}>
      <h3 className={styles.title}>Menu</h3>
      <div className={classNames(styles.dishs_container)}>
        {dishIds.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} />
        ))}
      </div>
      <NewDish />
    </div>
  );
};
