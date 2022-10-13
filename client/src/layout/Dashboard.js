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
  const { dispatch } = useUser();

  useEffect(() => {
    getProfile(dispatch);
  }, []);

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
            <GameLibrary />
          </div>
          <div className="row mb-4">
            <Backlog />
          </div>
          <div className="row mb-4">
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  );
};
