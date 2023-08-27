import styles from './styles.module.scss';
import classNames from 'classnames';

export const Button = ({ children, onClick, disabled, type, className }) => {
  return (
    <button onClick={onClick} disabled={disabled} 
    className={classNames(styles.root, className, {
      [styles.tabs]: type ==="tabs", 
      [styles.authoriazation]: type ==="authoriazation",
      [styles.btn_minus]: type ==="btn_minus",
      [styles.btn_plus]: type ==="btn_plus",
      [styles.tab]: type ==="tab",
      [styles.btn_theme_dark]: type ==="btn_theme_dark",
      [styles.btn_theme_light]: type ==="btn_theme_light",
      })}>
      {children}
    </button>
  );
};
