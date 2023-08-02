import { Menu } from "../Menu/component";
import { Reviews } from "../Reviews/component";

export const Restaurant = ({children}) => {
    return (
        <div>
            <h1>{children.name}</h1>
            <Menu>{children.menu}</Menu>
            <Reviews>{children.reviews}</Reviews>
        </div>
    );
};