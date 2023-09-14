import { NavLink, useParams } from "react-router-dom"
import { DishContainer } from "../../components/Dish/container"
import { useGetAllDishesQuery, useGetRestaurantsQuery } from "../../store/services/api";

export const DishPage = () => {
    const {dishId} = useParams();
    const {data: dish, isLoading} = useGetAllDishesQuery(undefined, {
        selectFromResult: (result) => ({
            ...result,
            data: result.data?.find(({id}) => id === dishId),
        }),
    });

    const { data: restaurants, isSuccess } = useGetRestaurantsQuery();
    const restaurant = restaurants?.find((restaurant) => restaurant.menu.includes(dishId));
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!dish) {
        return null;
    }

    if (isSuccess){
        return (
            <div>
                <DishContainer dish={dish}/>
                <NavLink
                    to={`/restaurants/${restaurant.id}`}
                >
                    {restaurant.name}
                </NavLink>
            </div>
        );
    }
    
}