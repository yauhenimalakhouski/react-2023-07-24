import { LOADING_STATUS } from "../../../constants/loading-statuses";
import { USER_ACTION } from "./action";

const DEFAULT_STATE = {
  entities: {},
  ids: [],
};

export const userReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  switch (type) {
    case USER_ACTION.startLoading: { 
      return {...state,
      status: LOADING_STATUS.loading,
      };
    }

    case USER_ACTION.finishLoading: {
      return {...state,
        entities: payload.reduce(
          (acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {...state.entities}
        ),
        ids: Array.from(new Set([...payload.map(({id}) => id), ...state.ids])),
        status: LOADING_STATUS.finished,
      };
    }

    case USER_ACTION.failedLoading:{
      return {
        ...state,
        status:LOADING_STATUS.failedLoading,
      }
    }

    default:
      return state;
  }
};
