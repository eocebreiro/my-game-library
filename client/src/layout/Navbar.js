import React from "react";
import { Link } from "react-router-dom";

// State
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../contexts/ThemeContext";

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

// Images
import Logo from "../img/GameLogo.png";

export const Navbar = () => {
  const { state, dispatch } = useUser();
  const { themeName, toggleTheme } = useTheme();

  const onClick = async (e) => {
    e.preventDefault();
    await logoutUser(dispatch);
  };

  let navbar = null;
  if (state.isAuthenticated) {
    navbar = (
      <nav className="ps-5 pe-5 navbar fixed-top ">
        <Link
          to="/my-game-library/dashboard"
          className="navbar-brand  mr-0 text-center link-color link-color-hover"
        >
          <div className="d-flex align-items-center">
            <img src={Logo} alt="Logo" width="30" className="me-2" />
            <span className="d-none d-md-inline ms-2">My Game Library</span>
          </div>
        </Link>
        <ul className="nav align-items-center">
          <li className="nav-item me-4">
            <Link
              to="/my-game-library/dashboard"
              className="text-decoration-none link-color link-color-hover"
            >
              <FontAwesomeIcon icon={faHouse} fixedWidth />
              <span className="d-none d-md-inline"> Home</span>
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link
              to="/my-game-library/addgame"
              className="text-decoration-none link-color link-color-hover"
            >
              <FontAwesomeIcon icon={faPlus} fixedWidth />
              <span className="d-none d-md-inline"> Add a Game</span>
            </Link>
          </li>

          <li className="nav-item me-4">
            <Link
              to="/my-game-library/"
              className="text-decoration-none link-color link-color-hover "
              onClick={(e) => onClick(e)}
            >
              <FontAwesomeIcon icon={faRightFromBracket} fixedWidth />
              <span className="d-none d-md-inline"> Logout</span>
            </Link>
          </li>
          <li className="nav-item ">
            <div className="theme-circle">
              <button
                className="btn no-focus text-decoration-none link-color theme-color-hover theme-icon "
                onClick={toggleTheme}
              >
                {themeName === "light" ? (
                  <FontAwesomeIcon icon={faMoon} fixedWidth />
                ) : (
                  <FontAwesomeIcon icon={faSun} fixedWidth />
                )}
              </button>
            </div>
          </li>
        </ul>
      </nav>
    );
  }

  return navbar;
};
