import { useSelector } from "react-redux";
import { Reviews } from "./component"
import { selectReviewsById } from "../../store/features/restaurant/selectors";

export const ReviewsContainer = ({restaurantId}) => {
    const reviewsIds = useSelector((state) => selectReviewsById(state, restaurantId));
   
    return <Reviews reviewsIds={reviewsIds}/>;
};