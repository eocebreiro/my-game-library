import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { addGame } from "../contexts/UserActions";

export const AddGame = () => {
  const naviate = useNavigate();
  const { dispatch } = useUser();

  const handleGoBack = () => {
    window.history.back();
  };

  const [name, setName] = useState({
    field: "",
    feedback: "",
    error: true,
  });

  const [system, setSystem] = useState({
    field: "",
    feedback: "",
    error: true,
  });

  const [status, setStatus] = useState({
    field: "",
    feedback: "",
    error: true,
  });

  const [ownership, setOwnership] = useState({
    field: "",
    disable: true,
    feedback: "",
    error: true,
  });

  const [hours, setHours] = useState({
    field: "",
    disable: true,
    feedback: "",
    error: true,
  });

  const [rating, setRating] = useState({
    field: "",
    disable: true,
    feedback: "",
    error: true,
  });

  const [review, setReview] = useState({
    field: "", // This is optional
    disable: true,
  });

  const [comments, setComments] = useState({
    field: "", // This is optional
  });

  const statusOptions = [
    <option key="1">Select an option</option>,
    <option key="2">Unfinished</option>,
    <option key="3">Ongoing</option>,
    <option key="4">Beaten</option>,
    <option key="5">Completed</option>,
    <option key="6">Backlog</option>,
    <option key="7">Wishlist</option>,
  ];

  const ownershipOptions = [
    <option key="1">Select an option</option>,
    <option key="2">Owned</option>,
    <option key="3">Household</option>,
    <option key="4">Subscription</option>,
    <option key="5">Borrowed/Rented</option>,
    <option key="6">Formerly Owned</option>,
    <option key="7">Other</option>,
  ];

  const onChange = (e) => {
    // Check Name Validation
    if (e.target.name === "name") {
      if (e.target.value === "") {
        setName({
          ...name,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setName({
          ...name,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
    }

    // Check System Validation
    if (e.target.name === "system") {
      if (e.target.value === "") {
        setSystem({
          ...system,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setSystem({
          ...system,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
    }

    // Check Status Validation
    if (e.target.name === "status") {
      if (e.target.value === "" || e.target.value === "Select an option") {
        setStatus({
          ...status,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setStatus({
          ...status,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
      /** The next part of validation depends on what is selected in status */
      if (
        e.target.value === "Select an option" ||
        e.target.value === "Wishlist"
      ) {
        setOwnership({ ...ownership, disable: true });
        setHours({ ...hours, disable: true });
        setRating({ ...rating, disable: true });
        setReview({ ...review, disable: true });
      } else if (e.target.value === "Backlog") {
        setOwnership({ ...ownership, disable: false });
        setHours({ ...hours, disable: true });
        setRating({ ...rating, disable: true });
        setReview({ ...review, disable: true });
      } else {
        setOwnership({ ...ownership, disable: false });
        setHours({ ...hours, disable: false });
        setRating({ ...rating, disable: false });
        setReview({ ...review, disable: false });
      }
    }

    // Check Ownership Validation
    if (e.target.name === "ownership") {
      if (e.target.value === "" || e.target.value === "Select an option") {
        setOwnership({
          ...ownership,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setOwnership({
          ...ownership,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
    }

    // Check Hours Validation
    if (e.target.name === "hours") {
      if (
        e.target.value === "" ||
        isNaN(e.target.value) ||
        e.target.value < 0
      ) {
        setHours({
          ...hours,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setHours({
          ...hours,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
    }

    // Check Rating Validation
    if (e.target.name === "rating") {
      if (
        e.target.value === "" ||
        isNaN(e.target.value) ||
        e.target.value < 0 ||
        e.target.value > 10
      ) {
        setRating({
          ...rating,
          field: e.target.value,
          feedback: "is-invalid",
          error: true,
        });
      } else {
        setRating({
          ...rating,
          field: e.target.value,
          feedback: "is-valid",
          error: false,
        });
      }
    }

    // Check Review Validation
    if (e.target.name === "review") {
      if (e.target.value === "") {
        setReview({
          ...review,
          field: e.target.value,
          feedback: "",
        });
      } else {
        setReview({ ...review, field: e.target.value, feedback: "is-valid" });
      }
    }

    // Check Comments Validation
    if (e.target.name === "comments") {
      if (e.target.value === "") {
        setComments({ ...comments, field: e.target.value, feedback: "" });
      } else {
        setComments({
          ...comments,
          field: e.target.value,
          feedback: "is-valid",
        });
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Check for errors and if so, display the errors for the user
    if (name.error) {
      setName({ ...name, feedback: "is-invalid" });
    }
    if (system.error) {
      setSystem({ ...system, feedback: "is-invalid" });
    }
    if (status.error) {
      setStatus({ ...status, feedback: "is-invalid" });
    }
    if (!ownership.disable && ownership.error) {
      setOwnership({ ...ownership, feedback: "is-invalid" });
    }
    if (!hours.disable && hours.error) {
      setHours({ ...hours, feedback: "is-invalid" });
    }
    if (!rating.disable && rating.error) {
      setRating({ ...rating, feedback: "is-invalid" });
    }

    if (
      !name.error &&
      !system.error &&
      !status.error &&
      (ownership.disable || (!ownership.error && !ownership.disable)) &&
      (hours.disable || (!hours.error && !hours.disable)) &&
      (rating.disable || (!rating.error && !rating.disable))
    ) {
      // if no errors, then build object to send
      let results = {
        name: name.field,
        system: system.field,
        status: status.field,
        ownership: null,
        hours: null,
        rating: null,
        review: null,
        comments: null,
      };

      if (!ownership.disable && !ownership.error) {
        results["ownership"] = ownership.field;
      }

      if (!hours.disable && !hours.error) {
        results["hours"] = hours.field;
      }

      if (!rating.disable && !rating.error) {
        results["rating"] = rating.field;
      }

      if (!review.disable && review.field !== "") {
        results["review"] = review.field;
      }

      if (comments.field !== "") {
        results["comments"] = comments.field;
      }

      // Send Successful result
      await addGame(dispatch, results);
      naviate("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card mb-4 mt-4">
          <div className="card-title pt-3">
            <h3>Game Information</h3>
          </div>
          <div className="card-body">
            <form className="px-md-2" onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="form-outline">
                    Name:{" "}
                    <input
                      className={`form-control ${name.feedback}`}
                      name="name"
                      value={name.field}
                      onChange={(e) => onChange(e)}
                      type="text"
                    />
                    <div className="invalid-feedback">Name is required.</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  {" "}
                  System:{" "}
                  <input
                    className={`form-control ${system.feedback}`}
                    name="system"
                    value={system.field}
                    onChange={(e) => onChange(e)}
                    type="text"
                  />
                  <div className="invalid-feedback">System is required.</div>
                </div>
                <div className="col-md-6 mb-4">
                  Status:{" "}
                  <select
                    className={`form-control ${status.feedback}`}
                    name="status"
                    value={status.field}
                    onChange={(e) => onChange(e)}
                  >
                    {statusOptions}{" "}
                  </select>
                  <div className="invalid-feedback">Status is required.</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4">
                  Ownership:{" "}
                  <select
                    className={`form-control ${
                      ownership.disable ? "" : ownership.feedback
                    }`}
                    name="ownership"
                    value={ownership.disable ? "" : ownership.field}
                    onChange={(e) => onChange(e)}
                    disabled={ownership.disable}
                  >
                    {ownershipOptions}
                  </select>
                  <div className="invalid-feedback">Ownership is required.</div>
                </div>
                <div className="col-md-4 mb-4">
                  Hours Played:{" "}
                  <input
                    className={`form-control ${
                      hours.disable ? "" : hours.feedback
                    }`}
                    disabled={hours.disable}
                    name="hours"
                    value={hours.disable ? "" : hours.field}
                    onChange={(e) => onChange(e)}
                    type="text"
                  />
                  <div className="invalid-feedback">
                    Input must be a positive number.
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  Rating:{" "}
                  <input
                    className={`form-control ${
                      rating.disable ? "" : rating.feedback
                    }`}
                    disabled={rating.disable}
                    name="rating"
                    value={rating.disable ? "" : rating.field}
                    onChange={(e) => onChange(e)}
                    type="text"
                  />
                  <div className="invalid-feedback">
                    Rating must be from 0 - 10.
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  Review:{" "}
                  <textarea
                    className={`form-control ${
                      review.disable ? "" : review.feedback
                    }`}
                    disabled={review.disable}
                    rows="5"
                    name="review"
                    value={review.disable ? "" : review.field}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  Comments:{" "}
                  <textarea
                    className={`form-control ${comments.feedback}`}
                    rows="5"
                    name="comments"
                    value={comments.field}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className=" d-grid col-md-6  gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div className="d-grid col-md-6 gap-2 mt-3">
                  <button
                    type="btn"
                    onClick={handleGoBack}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
