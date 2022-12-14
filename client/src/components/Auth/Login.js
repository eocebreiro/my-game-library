import React, { useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Actions
import { toggleComponent, loginUser } from "../../contexts/UserActions";

export const Login = () => {
  const { state, dispatch } = useUser();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    invalidAuth: false,
  });

  const { email, password, invalidAuth } = formData;

  const changeComponent = () => {
    toggleComponent(dispatch, "register");
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await loginUser(dispatch, email, password);
    setFormData({ ...formData, invalidAuth: !state.isAuthenticated && true });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center auth-sub-text">
            Not registered yet?{" "}
            <span
              className="link-primary cursor-pointer"
              onClick={changeComponent}
            >
              Sign Up
            </span>
          </div>
          {invalidAuth && (
            <div
              className="alert alert-danger mt-3 text-center fw-bold"
              role="alert"
            >
              Invalid Credentials
            </div>
          )}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="form-control mt-1"
              placeholder="Enter email"
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
              placeholder="Enter password"
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
