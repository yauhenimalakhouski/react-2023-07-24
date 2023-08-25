import { useDispatch, useSelector } from "react-redux";
import { Restaurants } from "./component";
import { useEffect } from "react";
import { selectIsRestaurantsLoading } from "../../store/features/restaurant/selectors";
import { loadRestaurants } from "../../store/features/restaurant/thunk/load-restaurants";

export const RestaurantsContainer = () => {
  const isLoading = useSelector(selectIsRestaurantsLoading);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <Restaurants />;
};
