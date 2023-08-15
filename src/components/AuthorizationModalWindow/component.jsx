import { Button } from "../Button/component";
import { useReducer } from "react";

const DEFAULT_VALUE = {
    name: "",
    surname: "",
};

const FORM_ACTION = {
    setName: "setName",
    setSurname: "setSurname",
};

const reducer = (state, {type, payload} = {}) => {
    switch (type) {
        case FORM_ACTION.setName:
            return {...state, name:payload};
        case FORM_ACTION.setSurname:
            return {...state, surname:payload};
        default:
            return state;
    }
};


export const AuthorizationModalWindow = ({setAuthorization, onClose}) => {
   const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

    return (
        <div>
            <label>Name: </label>
            <input 
                value={form.name} 
                onChange={(event) => 
                dispatch({type:FORM_ACTION.setName, payload:event.target.value})
                }
            />
            <label>Surname: </label>
            <input 
                value={form.surname}
                onChange={(event) => 
                    dispatch({type:FORM_ACTION.setSurname, payload:event.target.value})
                }
            />
            <Button disabled={form.name === "" || form.surname === ""} onClick={() => {
                setAuthorization(`${form.name} ${form.surname}`);
                onClose();
            }}>
                Log in
            </Button>
        </div>
    );
};
