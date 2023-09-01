import { useGetReviewsQuery, useGetUsersQuery } from "../../store/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurantId, {
    skip: !restaurantId,
    pollingInterval: 1*60*1000,
  });

  useGetUsersQuery();

  if (isLoading) {
    return <span>Loading....</span>;
  }

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
