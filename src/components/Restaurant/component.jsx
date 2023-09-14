import { NavLink, Outlet } from "react-router-dom";


import styles from "./styles.module.css";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </div>
  );
};
