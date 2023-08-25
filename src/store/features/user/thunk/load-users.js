import { selectUserIds } from "../selectors";
import { failedUserLoading, finishUserLoading, startUserLoading } from "../action";

export const loadUsersIfNotExists = () => (dispatch, getState) => {
    const state = getState();
    const usersId = selectUserIds(state);

    if(usersId.length) {
        return;
    }

    dispatch(startUserLoading());

    fetch(`http://localhost:3001/api/users`)
    .then((response) => response.json())
    .then((users) => dispatch(finishUserLoading(users)))
    .catch(()=> failedUserLoading());
}