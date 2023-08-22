import { useSelector } from "react-redux"
import { selectUserById } from "../../store/features/user/selectors";
import { User } from "./component";


export const UserContainer = ({userId}) => {
    const user = useSelector((state) => selectUserById(state, userId));
    return <User user={user}/>;
}