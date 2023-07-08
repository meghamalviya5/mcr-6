import React, { useContext } from "react";
import { RestaurantContext } from "../..";
import "./AddReviewModal.css";

const AddReviewModal = (props) => {
  const { dispatch, onReviewSubmit } = useContext(RestaurantContext);

  if (!props.show) return null;

  const rating = [1, 2, 3, 4, 5];

  return (
    <div className="info-box">
      {/* <div className="centered"> */}
      {/* <div className="modal"> */}
      <div className="modalHeader">
        <h4 className="heading">Add Review</h4>
      </div>
      <button
        className="closeBtn"
        onClick={() =>
          dispatch({
            type: "ADD_REVIEW_MODAL_STATUS",
            payload: false,
          })
        }
      >
        X
      </button>
      {/* <div className="modalContent"> */}
      <form
        className="add-review-modal flex flex-column p-s flex-gap-2"
        method="post"
        onSubmit={(e) => {
          onReviewSubmit(e, props.resID);
          dispatch({
            type: "ADD_REVIEW_MODAL_STATUS",
            payload: false,
          });
        }}
      >
        <div>
          <label htmlFor="rating">Rating: </label>
          <select name="rating">
            {rating.map((element) => (
              <option>{element}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" rows="2" cols="25" />
        </div>
        <div className="flex">
          <button type="submit" className="flex-center btn-save">
            Submit
          </button>
        </div>
      </form>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default AddReviewModal;
