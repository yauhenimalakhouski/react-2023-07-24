import React from "react";
import { useEffect, useReducer } from "react";

const DEFAULT_DISH = {
    dishName: '',
    dishPrice: 0,
    dishIngridients: [],
};

const typeName = "setDishName";
const typePrice = "setDishPrice";
const typeIngridients = "setDishIngridients";

const reducer = (state, {type, payload}={}) => {
    switch(type) {
        case typeName:
            return {...state, dishName: payload};
        case typePrice:
            return {...state, dishPrice: payload};
        case typeIngridients:
            return {...state, dishIngridients: payload};
        default:
            return state;
    }
};

export const NewDish = (activeRestaurantIndex) => {
    
    const [form, dispatch] = useReducer(reducer, DEFAULT_DISH);
    console.log(form);
    useEffect(()=> {
        dispatch({type: typeName, payload: ""});
        dispatch({type: typePrice, payload: 0});
        dispatch({type: typeIngridients, payload: []});
    }, [activeRestaurantIndex]);
    

    return (
        <React.Fragment>
            <h2>Order a new dish</h2>
            <form action="" method="post">
                <div>
                    <label>Name: </label>
                    <input 
                        name = "dishName"
                        value={form.dishName} 
                        onChange={event => dispatch({type: typeName, payload: event.target.value})} 
                    />
                </div>
                <div>
                    <label>Price: </label>
                    <input 
                        name = "dishPrice"
                        value={form.dishPrice} 
                        onChange={event => dispatch({type: typePrice, payload: +event.target.value})} 
                    />
                </div>
                <div>
                    <label>Ingridients: </label>
                    <input
                        name = "dishIngridients" 
                        value={form.dishIngridients} 
                        onChange={event => {dispatch({type: typeIngridients, payload: event.target.value.split(',')})}} 
                    />
                </div>
                <input type="submit" value="Заказать"/>
            </form>
        </React.Fragment>
    )
}