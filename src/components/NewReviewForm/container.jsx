import { useDispatch } from "react-redux";
import { NewReviewForm } from "./component"
import { createReview } from "../../store/features/review/thunk/create-review";
import { REQUEST_ID } from "../../store/features/request/constants";

export const NewReviewFormContainer = ({restaurantId}) => {
    const dispatch = useDispatch();

    const createNewReview = (newReview) => {
        dispatch(createReview(REQUEST_ID.addReview, {restaurantId, newReview}))
    }
    
    return <NewReviewForm onSaveForm={createNewReview}/>;

    }