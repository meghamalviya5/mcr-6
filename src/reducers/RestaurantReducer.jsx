export const restaurantReducer = (state, action) => {
  console.log("in reducer");

  switch (action.type) {
    case "FILTER_BY_CUISINE":
      return { ...state, filteredRestaurants: action.payload };

    case "ADD_REVIEW_MODAL_STATUS":
      return { ...state, addReviewModalStatus: action.payload };

    case "ADD_REVIEW_COMMENT":
      const updatedRestaurantList = state.restaurantList.map((res) =>
        res.id === action.payload.id ? action.payload : res
      );

      const updatedFilteresList = state.filteredRestaurants.map((res) =>
        res.id === action.payload.id ? action.payload : res
      );

      return {
        ...state,
        restaurantList: updatedRestaurantList,
        filteredRestaurants: updatedFilteresList,
      };

    case "UPDATE_SELECTED_CUISINE":
      return { ...state, selectedCuisineID: action.payload };

    default:
      return { state };
  }
};
