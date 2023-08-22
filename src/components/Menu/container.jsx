import { Menu } from "./component";
import { useSelector } from "react-redux";
import { selectMenuById } from "../../store/features/restaurant/selectors";

export const MenuContaiener = ({restaurantId}) => {
    
    const menuIds = useSelector((state) => selectMenuById(state, restaurantId));
    return <Menu menuIds={menuIds}/>
};