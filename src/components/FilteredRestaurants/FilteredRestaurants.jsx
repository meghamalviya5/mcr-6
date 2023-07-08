import React, { useContext } from "react";
import { RestaurantContext } from "../..";
import "../../styles.css";
import "./FilteredRestaurants.css";
import { Link } from "react-router-dom";

const FilteredRestaurants = () => {
  const {
    state: { filteredRestaurants },
  } = useContext(RestaurantContext);

  return (
    <div>
      {filteredRestaurants?.map((res) => (
        <div>
          <h2>Dishes by {res.name}</h2>
          <div className="flex flex-gap-4 pl-s">
            {res.menu.map(({ name, imgSrc, price, qty }) => (
              <Link to={`/restaurant-details/${res.id}`}>
                <div>
                  <img className="card-img" src={imgSrc} alt="dish" />
                </div>
                <div>
                  <h3>{name}</h3>
                  <p>{`Rs. ${price} for ${qty}`}</p>
                  <p>{res.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredRestaurants;
