import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import {
  failLoadingReviews,
  finishLoadingReviews,
  startLoadingReviews,
} from "../action";
import { selectReviewIds } from "../selectors";

export const loadReviewsByRestaurantIfNotExist =
  (restaurantId) => (dispatch, getState) => {
    const state = getState();
    const restaurantReviews = selectRestaurantReviewsById(state, restaurantId);
    const reviewIds = selectReviewIds(state);

    if (
      !restaurantReviews ||
      restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))
    ) {
      return;
    }

    dispatch(startLoadingReviews());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
      .then((response) => response.json())
      .then((restaurants) => dispatch(finishLoadingReviews(restaurants)))
      .catch(() => dispatch(failLoadingReviews()));
  };
