import { useReducer } from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

const DEFAULT_VALUE = {
  name: "",
  price: "",
  ingredients: [],
};

const FORM_ACTION = {
  setName: "setName",
  setPrice: "setPrice",
  setIngredients: "setIngredients",
};

const reducer = (state, { type, payload } = {}) => {
  switch (type) {
    case FORM_ACTION.setName:
      return { ...state, name: payload };
    case FORM_ACTION.setPrice:
      return { ...state, price: payload };
    case FORM_ACTION.setIngredients:
      return { ...state, ingredients: payload.split(",") };
    default:
      return state;
  }
};

export const NewDish = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  return (
    <div className={classNames(styles.root)}>
      <div className={styles.form_left_decoration}></div>
      <div className={styles.form_right_decoration}></div>
      <div className={styles.circle}></div>
      <div className={styles.form_inner}>
        <h3>Order your dish</h3>
        <input
          placeholder="Username"
          value={form.name}
          onChange={(event) =>
            dispatch({ type: FORM_ACTION.setName, payload: event.target.value })
          }
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTION.setPrice,
              payload: event.target.value,
            })
          }
        />
        <textarea
          placeholder="Ingredients"
          value={form.ingredients}
          onChange={(event) =>
            dispatch({
              type: FORM_ACTION.setIngredients,
              payload: event.target.value,
            })
          }
        />
        <input type="submit" value="Order"></input>
      </div>
    </div>
  );
};
