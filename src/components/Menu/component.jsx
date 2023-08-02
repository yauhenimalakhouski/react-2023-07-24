import { Dish } from "../Dish/component";

export const Menu = ({children}) => {
    return (
        <div>
            <h2>Menu</h2>
            <div>{children.map(dish => <Dish key={dish.id}>{dish}</Dish>)}</div>
        </div>
    );
};