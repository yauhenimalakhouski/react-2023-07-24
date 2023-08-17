import { Button } from "../Button/component";
import { createPortal } from "react-dom";
import { useState, useContext } from "react";
import { LoginModal } from "../LoginModal/component";
import { UserContext } from "../../contexts/userContext";

export const LoginButton = () => {
    const {currentUser, logout} = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    
    return (
            <>
                <div>
                    {currentUser && <span>{currentUser}</span>}
                    <Button 
                        onClick={() => {
                            if(currentUser){
                                logout();
                            } else {
                                setShowModal(true);
                            }   
                        }}
                    >
                        {currentUser ? "Logout" : "Login"}
                    </Button>
                </div>
                {showModal && createPortal(
                    <LoginModal onClose={() => setShowModal(false)}/>,
                    document.querySelector('#modal-container')
                )}
            </>
    );
};