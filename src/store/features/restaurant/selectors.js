export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectMenuById = (state, id) =>
  selectRestaurantModule(state).entities[id].menu;

export const selectReviewsById = (state, id) => 
  selectRestaurantModule(state).entities[id].reviews;