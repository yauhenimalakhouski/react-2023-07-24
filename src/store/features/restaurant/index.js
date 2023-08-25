// import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { RESTAURANT_ACTION } from "./action";

// из-за применения модуля request case start и fail больше не нужны

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  // status: LOADING_STATUS.idle,
};

export const restaurantReducer = (
  state = DEFAULT_STATE,
  { type, payload } = {}
) => {
  switch (type) {
    // case RESTAURANT_ACTION.startLoading: {
    //   return {
    //     ...state,
    //     status: LOADING_STATUS.loading,
    //   };
    // }
    case RESTAURANT_ACTION.finishLoading: {
      return {
        entities: payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {}),
        ids: payload.map(({ id }) => id),
        // status: LOADING_STATUS.finished,
      };
    }
    // case RESTAURANT_ACTION.failLoading: {
    //   return {
    //     ...state,
    //     status: LOADING_STATUS.failed,
    //   };
    // }

    case RESTAURANT_ACTION.addReview:{
      return {
        ...state,
        entities: {
          ...state.entities,
          [payload.restaurantId]: {
            ...state.entities[payload.restaurantId],
            reviews: [...state.entities[payload.restaurantId].reviews, payload.reviewId],
          }
        }
      }
    }
    default:
      return state;
  }
};
