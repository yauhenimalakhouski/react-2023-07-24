import {Review} from "../Review/component";

export const Reviews = ({reviews}) => {
    return (
    <div>
        <h2>Reviews</h2>
        <div>{reviews.map(review => <Review key={review.id} review={review} />)}</div>
    </div>
    );
};