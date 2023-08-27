import { Footer } from "../Footer/component";
import { Header } from "../Header/component";
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.root}>{children}</main>
      <Footer/>
    </div>
  );
};
