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
    filterByCuisineType,
  } = useContext(RestaurantContext);

  const restaurant = filteredRestaurants.find(
    ({ id }) => id === Number(restaurantID)
  );

  const avgRating = (
    restaurant?.ratings.reduce((acc, { rating }) => rating + acc, 0) /
    restaurant?.ratings.length
  ).toFixed(1);

  console.log(
    "reduce rating: ",
    restaurant?.ratings.reduce((acc, { rating }) => rating + acc, 0)
  );
  console.log("length rating: ", restaurant?.ratings.length);
  console.log("avg: ", avgRating);

  return (
    <div>
      <div
        className="txt-left"
        onClick={() => {
          filterByCuisineType(-1);
        }}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="flex txt-left res-details">
        <div className="flex flex-col">
          <div>{restaurant?.name}</div>
          <div>
            <div>
              {restaurant?.menu.map(
                ({ name }, id) =>
                  name + (id < restaurant?.menu.length - 1 ? ", " : "")
              )}
            </div>
            <div>{restaurant?.address}</div>
            <div>Average Rating: {avgRating}</div>
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
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
                <AddReviewModal
                  show={addReviewModalStatus}
                  resID={restaurant?.id}
                />
              ) : null}
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        {restaurant?.ratings.map(({ rating, comment, revName, pp }) => (
          <div className="flex">
            <div>
              <div className="flex">
                <img
                  src={pp}
                  alt="profile-pic"
                  className="profile-img br-full"
                />
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
    </div>
  );
};

export default RestaurantDetails;
