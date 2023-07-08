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
    <div className="filtered-res-list">
      {filteredRestaurants?.map((res) => (
        <div>
          <h3 className="dish-header">Dishes by {res.name}</h3>
          <div className="flex flex-gap-4">
            {res.menu.map(({ name, imgSrc, price, qty }) => (
              <div className="dish-card">
                <Link to={`/restaurant-details/${res.id}`} className="link">
                  <div>
                    <img className="card-img" src={imgSrc} alt="dish" />
                  </div>
                  <div className="p-s">
                    <h3 className="black-color mt-xs mb-xs">{name}</h3>
                    <p className="mt-none mb-xs">{`Rs. ${price} for ${qty}`}</p>
                    <p className="mt-none mb-xs">{res.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilteredRestaurants;
