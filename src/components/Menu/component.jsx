import { Dish } from "../Dish/component";

export const Menu = ({menu}) => {
    return (
        <div>
            <h2>Menu</h2>
            <div>{menu.map(dish => <Dish key={dish.id} dish={dish} />)}</div>
        </div>
    );
};