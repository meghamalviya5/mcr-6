import { createContext, useReducer } from "react";
import { restaurantReducer } from "../reducers/RestaurantReducer";
import { restaurantsData } from "../db/data";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const initialState = {
    restaurantList: restaurantsData,
    selectedCuisineID: -1,
    filteredRestaurants: [],
    addReviewModalStatus: false,
  };

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  console.log("state in context: ", state);

  const filterByCuisineType = (cuisineID) => {
    const foundData = state.restaurantList.filter(
      (res) => res.cuisine_id === cuisineID
    );

    dispatch({ type: "FILTER_BY_CUISINE", payload: foundData });
    //dispatch({ type: "UPDATE_SELECTED_CUISINE", payload: cuisineID });
  };

  const onReviewSubmit = (e, resID) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("data form === ", data.get("comment"));
    console.log("data form === ", data.get("rating"));
    const reviewData = {
      revName: "Alex",
      pp: "https://img.lovepik.com/element/40128/7461.png_1200.png",
      comment: data.get("comment"),
      rating: data.get("rating"),
    };

    const restaurant = state.filteredRestaurants.find(
      ({ id }) => id === Number(resID)
    );

    const updatedRestaurant = {
      ...restaurant,
      ratings: [...restaurant.ratings, reviewData],
    };

    dispatch({ type: "ADD_REVIEW_COMMENT", payload: updatedRestaurant });
  };

  const valueProp = { state, dispatch, filterByCuisineType, onReviewSubmit };

  return (
    <RestaurantContext.Provider value={valueProp}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
