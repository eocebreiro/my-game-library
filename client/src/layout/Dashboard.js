import React, { useEffect } from "react";

// State
import { useUser } from "../contexts/UserContext";

// Actions
import { getProfile } from "../contexts/UserActions";

// Components
import { GameLibrary } from "../components/Tables/GameLibrary";
import { Backlog } from "../components/Tables/Backlog";
import { Wishlist } from "../components/Tables/Wishlist";
import { Filters } from "../components/Filters";
import { DataChart } from "../components/DataChart";

export const Dashboard = () => {
  const { state, dispatch } = useUser();
  let libraryContent = [];
  let backlogContent = [];
  let wishlistContent = [];

  useEffect(() => {
    getProfile(dispatch);
  }, []);

  if (state.profile) {
    // Get games for each category
    state.profile.gameLibrary.map((item) => {
      if (
        item.status === "Unfinished" ||
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

    console.log(libraryContent);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row mb-4">
              <DataChart />
            </div>
            <div className="row mb-4">
              <Filters />
            </div>
            <div className="row mb-4">
              <GameLibrary content={libraryContent} />
            </div>
            <div className="row mb-4">
              <Backlog content={backlogContent} />
            </div>
            <div className="row mb-4">
              <Wishlist content={wishlistContent} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
