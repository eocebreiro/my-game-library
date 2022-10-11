import React, { useState } from "react";

export const AddGame = () => {
  // State for the raw form data input from the user
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

  // State for error feedback
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

  // State for undisabling items in form depending on what is chosen for status
  const [formDisable, setFormDisable] = useState({
    ownershipDisable: true,
    hoursDisable: true,
    ratingDisable: true,
  });

  const { ownershipDisable, hoursDisable, ratingDisable } = formDisable;

  const statusOptions = [
    <option key="1">Select an option</option>,
    <option key="2">Unfinished</option>,
    <option key="3">Beaten</option>,
    <option key="4">Completed</option>,
    <option key="5">Backlog</option>,
    <option key="6">Wishlist</option>,
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

  // Check validation while user is inputing
  const onChange = (e) => {
    // Disable or Undisable form items depending on selection of status
    if (e.target.name === "status") {
      if (
        e.target.value === "Unfinished" ||
        e.target.value === "Beaten" ||
        e.target.value === "Completed"
      ) {
        setFormDisable({
          ...formDisable,
          ownershipDisable: false,
          hoursDisable: false,
          ratingDisable: false,
        });
      } else if (e.target.value === "Backlog") {
        setFormDisable({
          ...formDisable,
          ownershipDisable: false,
          hoursDisable: true,
          ratingDisable: true,
        });
      } else if (
        e.target.value === "Wishlist" ||
        e.target.value === "Select an option"
      ) {
        setFormDisable({
          ...formDisable,
          ownershipDisable: true,
          hoursDisable: true,
          ratingDisable: true,
        });
      }
    }

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

    // Check status and clear feedback on disable items
    if (e.target.name === "status") {
      if (e.target.value === "Select an option") {
        setFormFeedback({
          ...formFeedback,
          statusFB: "is-invalid",
          ownershipFB: "",
          hoursFB: "",
          ratingFB: "",
        });
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          ownership: "",
          hours: "",
          rating: "",
        });
        return;
      } else if (e.target.value === "Backlog") {
        setFormFeedback({
          ...formFeedback,
          hoursFB: "",
          ratingFB: "",
        });
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          hours: "",
          rating: "",
        });
        return;
      } else if (e.target.value === "Wishlist") {
        setFormFeedback({
          ...formFeedback,
          ownershipFB: "",
          hoursFB: "",
          ratingFB: "",
        });
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          ownership: "",
          hours: "",
          rating: "",
        });
        return;
      } else {
        setFormFeedback({ ...formFeedback, statusFB: "is-valid" });
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Check ownership
    if (e.target.name === "ownership") {
      if (e.target.value === "Select an option") {
        setFormFeedback({ ...formFeedback, ownershipFB: "is-invalid" });
      } else {
        setFormFeedback({ ...formFeedback, ownershipFB: "is-valid" });
      }
    }

    // Check hours
    if (e.target.name === "hours") {
      if (
        e.target.value === "" ||
        isNaN(e.target.value) ||
        e.target.value < 0
      ) {
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

  // Check validation before the user submits
  const onSubmit = async (e) => {
    e.preventDefault();
    let isError = false;
    let validation = {
      nameFB: nameFB,
      systemFB: systemFB,
      statusFB: statusFB,
      ownershipFB: ownershipFB,
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
    if (statusFB !== "is-valid") {
      validation.statusFB = "is-invalid";
      isError = true;
    }

    // Check feedback of items depending on option selected in status
    if (!ownershipDisable) {
      if (ownershipFB !== "is-valid") {
        validation.ownershipFB = "is-invalid";
        isError = true;
      }
    }
    if (!hoursDisable) {
      if (hoursFB !== "is-valid") {
        validation.hoursFB = "is-invalid";
        isError = true;
      }
    }
    if (!ratingDisable) {
      if (ratingFB !== "is-valid") {
        validation.ratingFB = "is-invalid";
        isError = true;
      }
    }

    if (isError) {
      setFormFeedback({
        ...formFeedback,
        nameFB: validation.nameFB,
        systemFB: validation.systemFB,
        statusFB: validation.statusFB,
        ownershipFB: validation.ownershipFB,
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
                    <div className="invalid-feedback">Name is required.</div>
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
                  <div className="invalid-feedback">System is required.</div>
                </div>
                <div className="col-md-6 mb-4">
                  Status:{" "}
                  <select
                    className={`form-control ${statusFB}`}
                    name="status"
                    value={status}
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
                    className={`form-control ${ownershipFB}`}
                    name="ownership"
                    value={ownership}
                    onChange={(e) => onChange(e)}
                    disabled={ownershipDisable}
                  >
                    {ownershipOptions}
                  </select>
                  <div className="invalid-feedback">Ownership is required.</div>
                </div>
                <div className="col-md-4 mb-4">
                  Hours Played:{" "}
                  <input
                    className={`form-control ${hoursFB}`}
                    disabled={hoursDisable}
                    name="hours"
                    value={hours}
                    onChange={(e) => onChange(e)}
                  />
                  <div className="invalid-feedback">
                    Input must be a positive number.
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  Rating:{" "}
                  <input
                    className={`form-control ${ratingFB}`}
                    disabled={ratingDisable}
                    name="rating"
                    value={rating}
                    onChange={(e) => onChange(e)}
                  />
                  <div className="invalid-feedback">
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
