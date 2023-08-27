import { RestaurantTabContainer } from "../RestaurantTab/container";
import styles from './styles.module.scss';

export const Tabs = ({ restaurantIds, onTabSelect }) => {
  return (
    <div className={styles.root}>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          key={id}
          restaurantId={id}
          onTabSelect={() => onTabSelect(id)}
        />
      ))}
    </div>
  );
};
