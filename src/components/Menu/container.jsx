import { useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/features/restaurant/selectors";
import { Menu } from "./component";
import { loadDishesByRestaurantIfNotExist } from "../../store/features/dish/thunks/load-dishes-by-restaurant";
import { useRequest } from "../../hooks/use-request";
import { LOADING_STATUS } from "../../constants/loading-statuses";

export const MenuContainer = ({ restaurantId }) => {
  const status = useRequest(loadDishesByRestaurantIfNotExist, restaurantId);
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  if (status === LOADING_STATUS.loading) {
    return <div>Loading...</div>;
  }

  return <Menu dishIds={dishIds} />;
};
