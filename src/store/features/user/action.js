export const USER_ACTION = {
    startLoading: "user/startLoading",
    finishLoading: "user/finishLoading",
    failedLoading: "user/failedLoading",
}


export const startUserLoading = () => ({
    type: USER_ACTION.startLoading,
});

export const finishUserLoading = (users) => ({
    type: USER_ACTION.finishLoading,
    payload: users,
});

export const failedUserLoading = () => ({
    type: USER_ACTION.failedLoading,
});