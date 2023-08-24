export const REVIEW_ACTION = {
  startLoading: "review/startLoading",
  finishLoading: "review/finishLoading",
  failLoading: "review/failLoading",
  addReview: "review/addReview",
};

export const startLoadingReviews = () => ({
  type: REVIEW_ACTION.startLoading,
});

export const finishLoadingReviews = (reviews) => ({
  type: REVIEW_ACTION.finishLoading,
  payload: reviews,
});

export const failLoadingReviews = () => ({
  type: REVIEW_ACTION.failLoading,
});

export const addReview = (review) => ({
  type: REVIEW_ACTION.addReview,
  payload: review,
});
