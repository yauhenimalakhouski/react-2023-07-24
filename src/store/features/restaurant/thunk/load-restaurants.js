import { failRequest, finishRequest, startRequest } from "../../request/action";
import { finishLoadingRestaurants } from "../action";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurants = (requestId) => (dispatch, getState) => {
    const state = getState();
    const restaurantsIds = selectRestaurantIds(state);

    if( restaurantsIds.length) {
        return;
    }

    dispatch(startRequest(requestId));

    fetch("http://localhost:3001/api/restaurants")
    .then((response) => response.json())
    .then((restaurants) =>{ 
        dispatch(finishLoadingRestaurants(restaurants))
        dispatch(finishRequest(requestId))
    })
    .catch(() => dispatch(failRequest(requestId)));
}