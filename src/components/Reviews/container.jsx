import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { useEffect } from "react";
import { loadReviewsByRestaurantIfNotExist } from "../../store/features/review/thunks/load-reveiws-by-restaurant";
import { loadUsersIfNotExist } from "../../store/features/user/thunks/load-users";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsByRestaurantIfNotExist(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist());
  }, [dispatch]);

  return <Reviews reviewIds={reviewIds} restaurantId={restaurantId} />;
};
