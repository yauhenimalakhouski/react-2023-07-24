export const Review = ({children}) => {
    return (
        <div>
            <h3>{children.user}</h3>
            <div>{children.text}</div>
            <div>
                <span>Rating: </span>
                <span>{children.rating}</span>
            </div>
        </div>
    );
};