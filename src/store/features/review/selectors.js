import { LOADING_STATUS } from "../../../constants/loading-statuses";

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, id) =>
  selectReviewModule(state).entities[id];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewLoadingStatus = (state) => 
  selectReviewModule(state).status;

export const selectReviewLoading = (state) => 
  selectReviewLoadingStatus(state) === LOADING_STATUS.loading;

export const selectReviewFailed = (state) =>
  selectReviewLoadingStatus(state) === LOADING_STATUS.failed;
