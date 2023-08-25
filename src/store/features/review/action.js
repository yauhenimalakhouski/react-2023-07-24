export const REVIEW_ACTION = {
    startLoading: "review/startLoading",
    finishLoading: "review/finishLoading",
    failedLoading: "review/failedLoading",
    addReview: "review/addReview",
}


export const startLoadingReviews = () => ({
    type: REVIEW_ACTION.startLoading,
});

export const finishLoadingReviews = (reviews) => ({
    type: REVIEW_ACTION.finishLoading,
    payload: reviews,
});

export const  failedLoadingReviews = () => ({
    type: REVIEW_ACTION.failedLoading,
});

export const addReview = (review) => ({
    type: REVIEW_ACTION.addReview,
    payload: review,
});

