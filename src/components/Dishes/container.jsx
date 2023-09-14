import { useGetAllDishesQuery } from "../../store/services/api"
import { Dishes } from "./component";

export const DishesContainer = () => {
    const {data: dishes, isLoading} = useGetAllDishesQuery(undefined);


    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <Dishes dishes = {dishes}></Dishes>
    )
}