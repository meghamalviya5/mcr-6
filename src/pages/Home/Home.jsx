import React, { useContext } from "react";
import { cuisineData } from "../../db/data";
import { RestaurantContext } from "../..";
import FilteredRestaurants from "../../components/FilteredRestaurants/FilteredRestaurants";

const Home = () => {
  const { filterByCuisineType } = useContext(RestaurantContext);

  return (
    <div>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine:</h2>
      <div>
        {cuisineData.map(({ id, name }) => (
          <button key={id} onClick={() => filterByCuisineType(id)}>
            {name}
          </button>
        ))}
      </div>
      <FilteredRestaurants />
    </div>
  );
};

export default Home;
