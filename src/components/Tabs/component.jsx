import { Tab } from "../Tab/component";

import styles from "./styles.module.css";

export const Tabs = ({ restaurants, onTabSelect }) => {
  return (
    <div>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          title={name}
          className={styles.tab}
          onTabSelect={() => onTabSelect(id)}
        />
      ))}
    </div>
  );
};
