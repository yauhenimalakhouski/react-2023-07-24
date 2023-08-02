export const Dish = ({children}) => {
    return (
    <div>
        <h3>{children.name}</h3>
        <div>
            <span>Price: </span>
            <span>{children.price}</span>
        </div>
        <h4>Ingredients:</h4>
        <ul>{children.ingredients.map((ingridient, index) => <li key={index}>{ingridient}</li>)}</ul>
    </div>
    );
};