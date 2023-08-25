import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../store/features/restaurant/selectors";
import { selectReviewLoading } from "../../store/features/review/selectors";
import { useEffect } from "react";
import { loadRewiewsIfDoesNotExist } from "../../store/features/review/thunk/load-rewiews";


export const ReviewsContainer = ({ restaurantId }) => {
  const isLoading = useSelector(selectReviewLoading);
  const reviewIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadRewiewsIfDoesNotExist(restaurantId));
  }, [dispatch, restaurantId]);
  
  if(isLoading) {
    return <div>??Load??</div>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
