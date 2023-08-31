import { Restaurants } from "./component";
import { loadRestaurantsIfNotExist } from "../../store/features/restaurant/thunks/load-restaurants";
import { LOADING_STATUS } from "../../constants/loading-statuses";
import { useRequest } from "../../hooks/use-request";

export const RestaurantsContainer = () => {
  const loadingStatus = useRequest(loadRestaurantsIfNotExist);

  if (loadingStatus === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Restaurants />;
};
