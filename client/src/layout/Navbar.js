import React from "react";
import { Link } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { logoutUser } from "../contexts/UserActions";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRightFromBracket,
  faPlus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { state, dispatch } = useUser();

  const onClick = async (e) => {
    e.preventDefault();
    await logoutUser(dispatch);
  };

  const toggleTheme = async (e) => {
    e.preventDefault();
  };

  let navbar = null;
  if (state.isAuthenticated) {
    navbar = (
      <nav className="ps-5 pe-5 navbar  navbar-dark bg-dark fixed-top">
        <Link
          to="/dashboard"
          className="navbar-brand  mr-0 text-center link-color link-color-hover"
        >
          MGL
        </Link>
        <ul className="nav gap-5 ">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="text-decoration-none link-color link-color-hover"
            >
              <FontAwesomeIcon icon={faHouse} fixedWidth />
              <span className="d-none d-md-inline"> Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/addgame"
              className="text-decoration-none link-color link-color-hover"
            >
              <FontAwesomeIcon icon={faPlus} fixedWidth />
              <span className="d-none d-md-inline"> Add a Game</span>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/"
              className="text-decoration-none link-color link-color-hover "
              onClick={(e) => toggleTheme(e)}
            >
              {state.theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} fixedWidth />
              ) : (
                <FontAwesomeIcon icon={faSun} fixedWidth />
              )}
              <span className="d-none d-md-inline"> Theme</span>{" "}
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/"
              className="text-decoration-none link-color link-color-hover "
              onClick={(e) => onClick(e)}
            >
              <FontAwesomeIcon icon={faRightFromBracket} fixedWidth />
              <span className="d-none d-md-inline"> Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return navbar;
};
