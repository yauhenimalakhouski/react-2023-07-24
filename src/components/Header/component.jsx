import classNames from "classnames";
import { LoginButton } from "../LoginButton/component";

import styles from "./styles.module.css";

export const Header = ({ className }) => {
  return (
    <header className={classNames(styles.root, className)}>
      <LoginButton />
    </header>
  );
};
