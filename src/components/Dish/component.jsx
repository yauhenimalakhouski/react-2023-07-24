import { useState } from "react";
import { Button } from "../Button/component";


export const Dish = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);
  if(!dish) {
    return null;
  }  

  return <div>
        <h3>{dish.name}</h3>
        <div>
            <span>Price: </span>
            <span>{dish.price}</span>
        </div>
        <h4>Ingredients:</h4>
        <ul>{dish.ingredients.map((ingridient, index) => <li key={index}>{ingridient}</li>)}</ul>
        <div>
            <Button onClick={() => {
                if(dishCount === 0) {
                    return;
                }
                setDishCount(dishCount-1)
                }}
                >-</Button>
            <span>{dishCount}</span>
            <Button onClick={() => setDishCount(dishCount+1)}>+</Button>
        </div>
        <div>Total price: {dishCount*dish.price} $</div>
    </div>;
};