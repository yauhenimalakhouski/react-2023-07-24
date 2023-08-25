import { selectRestaurantById } from "../../restaurant/selectors";
import { failedLoadingReviews, finishLoadingReviews, startLoadingReviews } from "../action";
import { selectReviewIds } from "../selectors";

export const loadRewiewsIfDoesNotExist = (restaurantId) => (dispatch, getState) => {
    const state = getState();
    const reviewsIds = selectReviewIds(state);
    const restaurantReviwes = selectRestaurantById(state, restaurantId).reviews;
    if(reviewsIds.length 
        && restaurantReviwes.every(reviewId => reviewsIds.includes(reviewId))) {
            return;
    }

    dispatch(startLoadingReviews());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => dispatch(finishLoadingReviews(reviews)))
    .catch(()=>failedLoadingReviews());
}