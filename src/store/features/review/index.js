import { REVIEW_ACTION } from "./action";
import { LOADING_STATUS } from "../../../constants/loading-statuses";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
  status: LOADING_STATUS.idle,
};


export const reviewReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case REVIEW_ACTION.startLoading: {
      return {...state,
        status: LOADING_STATUS.loading,
      };
    }
    case REVIEW_ACTION.finishLoading: {
      return {...state,
        entities: payload.reduce(
          (acc, review) => {
            acc[review.id] = review;
            return acc;
          }, {...state.entities}
        ),
        ids: Array.from(new Set([...payload.map(({id}) => id), ...state.ids])),
        status: LOADING_STATUS.finished,
      };
    }
    case REVIEW_ACTION.failedLoading: {
      return {
        ...state, 
        status:REVIEW_STATUS.failedLoading,
      }
    }
    

    default:
      return state;
  }
};
