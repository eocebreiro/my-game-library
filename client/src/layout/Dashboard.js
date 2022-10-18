import React, { useEffect, useState } from "react";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { getProfile } from "../contexts/UserActions";

// Components
import { GameLibrary } from "../components/GameLibrary";
import { Backlog } from "../components/Backlog";
import { Wishlist } from "../components/Wishlist";

export const Dashboard = () => {
  const [active, setActive] = useState({
    libraryActive: "active",
    backlogActive: "",
    wishlistActive: "",
  });

  const { libraryActive, backlogActive, wishlistActive } = active;

  const handleActive = (e) => {
    if (e.target.name === "library") {
      setActive({
        ...active,
        libraryActive: "active",
        backlogActive: "",
        wishlistActive: "",
      });
    }
    if (e.target.name === "backlog") {
      setActive({
        ...active,
        libraryActive: "",
        backlogActive: "active",
        wishlistActive: "",
      });
    }
    if (e.target.name === "wishlist") {
      setActive({
        ...active,
        libraryActive: "",
        backlogActive: "",
        wishlistActive: "active",
      });
    }
  };

  const { state, dispatch } = useUser();
  let libraryContent = [];
  let backlogContent = [];
  let wishlistContent = [];

  useEffect(() => {
    getProfile(dispatch);
    console.log(state.reload);
  }, []);

  if (state.profile) {
    // Get games for each category
    state.profile.gameLibrary.map((item) => {
      if (
        item.status === "Unfinished" ||
        item.status === "Ongoing" ||
        item.status === "Completed" ||
        item.status === "Beaten"
      ) {
        libraryContent.push(item);
      }
      if (item.status === "Wishlist") {
        wishlistContent.push(item);
      }
      if (item.status === "Backlog") {
        backlogContent.push(item);
      }
    });

    return (
      <div className="container">
        <ul className="nav nav-tabs nav-fill">
          <li className="nav-item">
            <a
              className={`nav-link ${libraryActive}`}
              aria-current="page"
              href="#library"
              name="library"
              onClick={(e) => handleActive(e)}
            >
              Library
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${backlogActive}`}
              href="#backlog"
              name="backlog"
              onClick={(e) => handleActive(e)}
            >
              Backlog
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${wishlistActive}`}
              href="#wishlist"
              name="wishlist"
              onClick={(e) => handleActive(e)}
            >
              Wishlist
            </a>
          </li>
        </ul>
        <div className="tab-content" id="nav-tabContent">
          <div
            className={`tab-pane fade show ${libraryActive}`}
            id="library"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <GameLibrary content={libraryContent} />
          </div>
          <div
            className={`tab-pane fade show ${backlogActive}`}
            id="backlog"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <Backlog content={backlogContent} />
          </div>
          <div
            className={`tab-pane fade show ${wishlistActive}`}
            id="wishlist"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <Wishlist content={wishlistContent} />
          </div>
        </div>
      </div>
    );
  }
};
