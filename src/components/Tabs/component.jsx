import { Button } from "../Button/component"

export const Tabs = ({children, onTabSelect}) => {
    return <div>{children.map((restaurant, index) => (
        <Button key={restaurant.id} onClick={() => {
            onTabSelect(index);
        }}>
            {restaurant.name}
        </Button>   
    ))}
    </div>
}

