import { DishContainer } from "../Dish/container"
import styles from "./styles.module.css";

export const Dishes = ({dishes}) => {
    return (
        <div>
            {dishes.map((dish) => (
                <DishContainer key={dish.id} dish={dish} className={styles.dish}/>
            ))}
        </div>
    )
}