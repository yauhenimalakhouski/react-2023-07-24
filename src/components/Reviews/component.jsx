import {Review} from "../Review/component";

export const Reviews = ({children}) => {
    return (
    <div>
        <h2>Reviews</h2>
        <div>{children.map(review => <Review key={review.id}>{review}</Review>)}</div>
    </div>
    );
};