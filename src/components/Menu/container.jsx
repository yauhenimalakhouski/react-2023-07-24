import { useParams } from "react-router-dom";
import { useGetDishesQuery } from "../../store/services/api";
import { Menu } from "./component";

export const MenuContainer = () => {
  const {restaurantId} = useParams();
  const { data: dishes, isFetching } = useGetDishesQuery(restaurantId, {
    skip: !restaurantId,
  });

  if (isFetching) {
    return <span>Loading....</span>;
  }

  return <Menu dishes={dishes} />;
};
