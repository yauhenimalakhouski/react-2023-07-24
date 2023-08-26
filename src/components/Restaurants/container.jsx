import { Restaurants } from "./component";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";
import { loadRestaurantsIfNotExist } from "../../store/features/restaurant/thunks/load-restaurants";

export const RestaurantsContainer = () => {
  const status = useRequest(loadRestaurantsIfNotExist);

  if (status === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Restaurants />;
};
