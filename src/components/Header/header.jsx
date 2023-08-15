import { Authorization } from "../Authorization/component";

export const Header = ({authorization, setAuthorization}) => {
    return (
        <header>
            <Authorization 
                authorization={authorization}
                setAuthorization={setAuthorization}
            />    
        </header>
    );
};
