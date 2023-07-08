import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import { RestaurantContext } from "../..";
import "../../styles.css";
import "./RestaurantDetails.css";
import AddReviewModal from "../../components/AddReviewModal/AddReviewModal";
import OutsideClickHandler from "react-outside-click-handler";

const RestaurantDetails = () => {
  const navigate = useNavigate();
  const { restaurantID } = useParams();
  const {
    state: { filteredRestaurants, addReviewModalStatus },
    dispatch,
  } = useContext(RestaurantContext);

  const restaurant = filteredRestaurants.find(
    ({ id }) => id === Number(restaurantID)
  );
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} />
      </div>
      <div>
        <div>
          <div>{restaurant.name}</div>
          <div>
            <div>
              {restaurant.menu.map(
                ({ name }, id) =>
                  name + (id < restaurant.menu.length - 1 ? ", " : "")
              )}
            </div>
            <div>{restaurant.address}</div>
            <div>Average Rating: {restaurant.averageRating}</div>
          </div>
        </div>
        <button
          onClick={() =>
            dispatch({ type: "ADD_REVIEW_MODAL_STATUS", payload: true })
          }
        >
          Add Review
        </button>
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch({ type: "ADD_REVIEW_MODAL_STATUS", payload: false });
          }}
        >
          {addReviewModalStatus ? (
            <AddReviewModal show={addReviewModalStatus} resID={restaurant.id} />
          ) : null}
        </OutsideClickHandler>
      </div>
      <h2>Reviews</h2>
      {restaurant.ratings.map(({ rating, comment, revName, pp }) => (
        <div className="flex">
          <div>
            <div className="flex">
              <img src={pp} alt="profile-pic" className="profile-img br-full" />
              <h4>{revName}</h4>
            </div>
            <p>{comment}</p>
          </div>
          <div>
            {rating}
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantDetails;
