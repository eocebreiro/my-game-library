import React, { useState } from "react";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { toggleComponent, registerUser } from "../contexts/UserActions";

export const Register = () => {
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const changeComponent = () => {
    toggleComponent(dispatch, "login");
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      console.log("Name is required");
    } else if (email === "") {
      console.log("Email is required");
    } else if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      await registerUser(dispatch, name, email, password);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
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
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
              className="form-control mt-1"
              placeholder="Password"
            />
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
