import { useReducer } from "react";
import { Button } from "../Button/component";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import styles from './styles.module.scss';
import classNames from 'classnames';

const DEFAULT_FORM_VALUE = {
  login: "",
  password: "",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case "setLogin":
      return { ...state, login: payload };
    case "setPassword":
      return { ...state, password: payload };

    default:
      return state;
  }
};

export const LoginForm = ({ onLogin }) => {
  const { login } = useContext(UserContext);
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.input_row)}>
        <label className={classNames(styles.input_title)}>Login:</label>
        <input
          value={form.login}
          onChange={(event) =>
            dispatch({ type: "setLogin", payload: event.target.value })
          }
          className={classNames(styles.input)}
        />
      </div>
      <div className={classNames(styles.input_row)}>
        <label className={classNames(styles.input_title)}>Password:</label>
        <input
          value={form.password}
          onChange={(event) =>
            dispatch({ type: "setPassword", payload: event.target.value })
          }
          className={classNames(styles.input)}
        />
      </div>

      <Button
        disabled={!form.login || !form.password}
        onClick={() => {
          login(form.login);
          onLogin();
        }}
        type = "auth_submit"
      >
        Login
      </Button>
    </div>
  );
};
