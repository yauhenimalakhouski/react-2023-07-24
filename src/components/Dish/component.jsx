export const Dish = ({dish}) => {
    return (
    <div>
        <h3>{dish.name}</h3>
        <div>
            <span>Price: </span>
            <span>{dish.price}</span>
        </div>
        <h4>Ingredients:</h4>
        <ul>{dish.ingredients.map((ingridient, index) => <li key={index}>{ingridient}</li>)}</ul>
    </div>
    );
};