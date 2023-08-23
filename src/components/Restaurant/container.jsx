import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/restaurant/selectors";
import { Restaurant } from "./component";


export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if(!restaurant) {
        return null;
    }
    // return <Restaurant restaurant={restaurant} restaurantId={restaurantId}/>
    return <Restaurant restaurant={restaurant}/>
}