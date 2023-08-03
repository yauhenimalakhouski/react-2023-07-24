export const Review = ({review}) => {
    return (
        <div>
            <h3>{review.user}</h3>
            <div>{review.text}</div>
            <div>
                <span>Rating: </span>
                <span>{review.rating}</span>
            </div>
        </div>
    );
};