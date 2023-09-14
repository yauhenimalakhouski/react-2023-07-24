import { useParams } from "react-router-dom";
import { useGetReviewsQuery } from "../../store/services/api";
import { Reviews } from "./component";

export const ReviewsContainer = () => {
  const {restaurantId} = useParams();
  const { data: reviews, isLoading } = useGetReviewsQuery(restaurantId, {
    skip: !restaurantId,
  });

  if (isLoading) {
    return <span>Loading....</span>;
  }

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
