import { Button } from "../Button/component";
import { createPortal } from "react-dom";
import { useState } from "react";
import { AuthorizationModalWindow } from "../AuthorizationModalWindow/component";

export const Authorization = ({authorization, setAuthorization}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
            <div>
                <Button onClick={() => setShowModal(true)}>{authorization}</Button>
                {showModal && createPortal(
                    <AuthorizationModalWindow 
                    setAuthorization={setAuthorization}
                    onClose={()=>setShowModal(false)}/>,
                    document.body
                )}
            </div>
    );
};