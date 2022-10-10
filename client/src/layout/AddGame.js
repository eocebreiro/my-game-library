import React, { useState } from "react";

export const AddGame = () => {
  const [formData, setFormData] = useState({
    name: "",
    compilation: "",
    system: "",
    status: "",
    ownership: "",
    hours: "",
    rating: "",
    comments: "",
  });

  const {
    name,
    compilation,
    system,
    status,
    ownership,
    hours,
    rating,
    comments,
  } = formData;

  const [formFeedback, setFormFeedback] = useState({
    nameFB: "",
    systemFB: "",
    statusFB: "",
    ownershipFB: "",
    hoursFB: "",
    ratingFB: "",
  });

  const { nameFB, systemFB, statusFB, ownershipFB, hoursFB, ratingFB } =
    formFeedback;

  const statusOptions = [
    <option value="1">Select an option</option>,
    <option value="2">Unfinished</option>,
    <option value="3">Beaten</option>,
    <option value="4">Completed</option>,
    <option value="5">Backlog</option>,
    <option value="6">Wishlist</option>,
  ];

  const ownershipOptions = [
    <option value="1">Select an option</option>,
    <option value="2">Owned</option>,
    <option value="3">Household</option>,
    <option value="4">Subscription</option>,
    <option value="5">Borrowed/Rented</option>,
    <option value="6">Formerly Owned</option>,
    <option value="7">Other</option>,
  ];

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Check name
    if (e.target.name === "name") {
      if (e.target.value === "") {
        setFormFeedback({ ...formFeedback, nameFB: "is-invalid" });
      } else {
        setFormFeedback({ ...formFeedback, nameFB: "is-valid" });
      }
    }

    // Check system
    if (e.target.name === "system") {
      if (e.target.value === "") {
        setFormFeedback({ ...formFeedback, systemFB: "is-invalid" });
      } else {
        setFormFeedback({ ...formFeedback, systemFB: "is-valid" });
      }
    }

    // Check hours
    if (e.target.name === "hours") {
      if (e.target.value === "" || isNaN(e.target.value)) {
        setFormFeedback({ ...formFeedback, hoursFB: "is-invalid" });
      } else {
        setFormFeedback({ ...formFeedback, hoursFB: "is-valid" });
      }
    }

    // Check rating
    if (e.target.name === "rating") {
      if (
        e.target.value === "" ||
        isNaN(e.target.value) ||
        (e.target.value < 0 && e.target.value > 10)
      ) {
        setFormFeedback({ ...formFeedback, ratingFB: "is-invalid" });
      } else {
        setFormFeedback({ ...formFeedback, ratingFB: "is-valid" });
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let isError = false;
    let validation = {
      nameFB: nameFB,
      systemFB: systemFB,
      hoursFB: hoursFB,
      ratingFB: ratingFB,
    };

    if (nameFB !== "is-valid") {
      validation.nameFB = "is-invalid";
      isError = true;
    }
    if (systemFB !== "is-valid") {
      validation.systemFB = "is-invalid";
      isError = true;
    }
    if (hoursFB !== "is-valid") {
      validation.hoursFB = "is-invalid";
      isError = true;
    }
    if (ratingFB !== "is-valid") {
      validation.ratingFB = "is-invalid";
      isError = true;
    }

    if (isError) {
      setFormFeedback({
        ...formFeedback,
        nameFB: validation.nameFB,
        systemFB: validation.systemFB,
        hoursFB: validation.hoursFB,
        ratingFB: validation.ratingFB,
      });
    } else {
      console.log("it works!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-header">
            <h3>Game Information</h3>
          </div>
          <div className="card-body">
            <form className="px-md-2" onSubmit={(e) => onSubmit(e)}>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    Name:{" "}
                    <input
                      className={`form-control ${nameFB}`}
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                    <div class="invalid-feedback">Name is required.</div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  Compilation:{" "}
                  <input
                    className="form-control"
                    name="compilation"
                    value={compilation}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  {" "}
                  System:{" "}
                  <input
                    className={`form-control ${systemFB}`}
                    name="system"
                    value={system}
                    onChange={(e) => onChange(e)}
                  />
                  <div class="invalid-feedback">System is required.</div>
                </div>
                <div className="col-md-6 mb-4">
                  Status:{" "}
                  <select className="form-control">{statusOptions}</select>
                  <div class="invalid-feedback">Status is required.</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-4">
                  Ownership:{" "}
                  <select className="form-control">{ownershipOptions}</select>
                </div>
                <div className="col-md-4 mb-4">
                  Hours Played:{" "}
                  <input
                    className={`form-control ${hoursFB}`}
                    name="hours"
                    value={hours}
                    onChange={(e) => onChange(e)}
                  />
                  <div class="invalid-feedback">Input must be a number.</div>
                </div>
                <div className="col-md-4 mb-4">
                  Rating:{" "}
                  <input
                    className={`form-control ${ratingFB}`}
                    name="rating"
                    value={rating}
                    onChange={(e) => onChange(e)}
                  />
                  <div class="invalid-feedback">
                    Rating must be from 0 - 10.
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                Comments:{" "}
                <textarea
                  className="form-control"
                  rows="5"
                  name="comments"
                  value={comments}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
