import {
  failLoadingDishes,
  finishLoadingDishes,
  startLoadingDishes,
} from "../action";

import { selectDishIds } from "../selectors";
import { selectRestaurantById } from "../../restaurant/selectors";

export const loadDishesByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
    const dishs = selectDishIds(state);
    const resturantDishs = selectRestaurantById(state, restaurantId).menu;

    // if( dishs.length && resturantDishs.every(dish => dishs.includes(dish))) {
    //   return;
    // }

    if( !resturantDishs || resturantDishs.every(dish => dishs.includes(dish))) {
      return;
    }

    dispatch(startLoadingDishes());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingDishes(restaurants)))
      .catch(() => dispatch(failLoadingDishes()));
  };
