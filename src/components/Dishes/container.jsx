import { useSearchParams } from "react-router-dom";
import { useGetAllDishesQuery } from "../../store/services/api"
import { Dishes } from "./component";

export const DishesContainer = () => {
    const {data: dishes, isLoading} = useGetAllDishesQuery(undefined);
    const [search, setSearch] = useSearchParams();
    if (isLoading) {
        return <div>Loading</div>;
    }

    const filteredDishes = dishes.filter(({name}) => {
        return (
            name.toLowerCase().includes(search.get("search") || "")
        );
    });

    return (
        <div>
            <input
                value={search.get("search") || ""}
                onChange={(event) => setSearch({search: event.target.value})}
            />
           <Dishes dishes = {filteredDishes}></Dishes> 
        </div>
        
    )
}