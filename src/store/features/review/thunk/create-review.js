import { failRequest, finishRequest, startRequest } from "../../request/action";
import { addReview, failedLoadingReviews, finishLoadingReviews } from "../action"

export const createReview = (requestId, {restaurantId, newReview}) => (dispatch, getState) => {
    dispatch(startRequest(requestId));


    fetch(`http://localhost:3001/api/review/${restaurantId}`, {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json; charset=utf-8",
            },
            body: JSON.stringify(newReview),
        }).then((response) => response.json())
        .then((review) => {
            dispatch(addReview(review));
            finishRequest(requestId);
        })
        .catch((error)=>dispatch(failRequest(requestId, error)));

};