import React, { useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Actions
import { toggleComponent, registerUser } from "../../contexts/UserActions";

export const Register = () => {
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    nameFeedback: "",
    email: "",
    emailFeedback: "",
    password: "",
    passwordFeedback: "",
    password2: "",
    password2Feedback: "",
  });

  const {
    name,
    email,
    password,
    password2,
    nameFeedback,
    emailFeedback,
    passwordFeedback,
    password2Feedback,
  } = formData;

  const changeComponent = () => {
    toggleComponent(dispatch, "login");
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let nameFeedback = "";
    let emailFeedback = "";
    let passwordFeedback = "";
    let password2Feedback = "";
    let isError = false;

    if (name === "") {
      nameFeedback = "is-invalid";
      isError = true;
    }
    if (email === "") {
      emailFeedback = "is-invalid";
      isError = true;
    }
    if (password.length < 6 || password.length > 30) {
      passwordFeedback = "is-invalid";
      isError = true;
      console.log("false");
    }
    if (password !== password2) {
      password2Feedback = "is-invalid";
      isError = true;
    }

    if (!isError) {
      await registerUser(dispatch, name, email, password);
    }

    setFormData({
      ...formData,
      nameFeedback,
      emailFeedback,
      passwordFeedback,
      password2Feedback,
    });
  };

  return (
    <div className="Auth-form-container">
      <form
        className="Auth-form"
        novalidate="novalidate"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center auth-sub-text">
            Already registered?{" "}
            <span
              className="link-primary cursor-pointer"
              onClick={changeComponent}
            >
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              className={`form-control mt-1 ${nameFeedback}`}
              placeholder="e.g Jane Doe"
            />
            <div className="invalid-feedback">Name is required.</div>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className={`form-control mt-1 ${emailFeedback}`}
              placeholder="Email Address"
            />
            <div className="invalid-feedback">Invalid Email.</div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className={`form-control mt-1 ${passwordFeedback}`}
              placeholder="Password"
            />
            <div className="invalid-feedback">
              Password must be 6 to 30 characters long.
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              className={`form-control mt-1 ${password2Feedback}`}
              placeholder="Password"
            />
            <div className="invalid-feedback">Passwords do not match.</div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
