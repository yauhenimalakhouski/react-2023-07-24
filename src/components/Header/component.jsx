import { LoginButton } from "../LoginButton/component";
import styles from './styles.module.scss';

import Logo from "./images/icons8-ifood-240.svg";
import { ThemeButton } from "../ThemeButton/component";

export const Header = () => {
  return (
    <header className={styles.root}>
      <img src={Logo} loading="lazy" className = {styles.logo}/>
      <ThemeButton/>
      <LoginButton/>
    </header>
  );
};
