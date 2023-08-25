export const REVIEW_ACTION = {
    startLoading: "review/startLoading",
    finishLoading: "review/finishLoading",
    failedLoading: "review/failedLoading",
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

