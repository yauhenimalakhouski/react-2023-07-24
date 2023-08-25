import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectRequsetModule = (state) => state.request;

export const selectRequestStatus = (state, requestId) => 
selectRequsetModule(state)[requestId]?.status || LOADING_STATUS.idle;