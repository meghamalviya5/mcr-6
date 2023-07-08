import React, { useContext } from "react";
import { cuisineData } from "../../db/data";
import { RestaurantContext } from "../..";
import FilteredRestaurants from "../../components/FilteredRestaurants/FilteredRestaurants";
import "./Home.css";

const Home = () => {
  const { filterByCuisineType } = useContext(RestaurantContext);

  return (
    <div>
      <h1 className="header">Food Ordering App</h1>
      <h2 className="select">Select Your Cuisine:</h2>
      <div>
        {cuisineData.map(({ id, name }) => (
          <button
            key={id}
            className="btn-cuisine"
            onClick={() => filterByCuisineType(id)}
          >
            {name}
          </button>
        ))}
      </div>
      <FilteredRestaurants />
    </div>
  );
};

export default Home;
