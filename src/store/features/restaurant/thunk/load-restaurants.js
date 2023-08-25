import { failLoadingRestaurants, finishLoadingRestaurants, startLoadingRestaurants } from "../action";
import { selectRestaurantIds } from "../selectors";




export const loadRestaurants = () => (dispatch, getState) => {
    const state = getState();
    const restaurantsIds = selectRestaurantIds(state);

    if( restaurantsIds.length) {
        return;
    }

    dispatch(startLoadingRestaurants());

    fetch("http://localhost:3001/api/restaurants")
    .then((response) => response.json())
    .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
    .catch(() => dispatch(failLoadingRestaurants()));
}