// из-за применения модуля request case start и fail больше не нужны

export const RESTAURANT_ACTION = {
  load: "restaurant/load",
  // startLoading: "restaurant/startLoading",
  finishLoading: "restaurant/finishLoading",
  // failLoading: "restaurant/failLoading",
  addReview: "restaurant/addReview",
};

// export const startLoadingRestaurants = () => ({
//   type: RESTAURANT_ACTION.startLoading,
// });

export const finishLoadingRestaurants = (restaurants) => ({
  type: RESTAURANT_ACTION.finishLoading,
  payload: restaurants,
});

// export const failLoadingRestaurants = () => ({
//   type: RESTAURANT_ACTION.failLoading,
// });

export const addNewRestaurantReview = ({restaurantId, reviewId}) => ({
  type: RESTAURANT_ACTION.addReview,
  payload: {restaurantId, reviewId},
});
