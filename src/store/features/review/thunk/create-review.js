import { failRequest, finishRequest, startRequest } from "../../request/action";
import { addNewRestaurantReview } from "../../restaurant/action";
import { addReview} from "../action"

export const createReview = (requestId, {restaurantId, newReview}) => (dispatch) => {
    dispatch(startRequest(requestId));


    fetch(`http://localhost:3001/api/review/${restaurantId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(newReview),
        }).then((response) => response.json())
        .then((review) => {
            dispatch(addReview(review));
            dispatch(addNewRestaurantReview({restaurantId, reviewId: review.id}))
            dispatch(finishRequest(requestId));
        })
        .catch((error)=>dispatch(failRequest(requestId, error)));

};