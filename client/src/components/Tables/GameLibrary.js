import React, { useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Components
import { TableRow } from "./TableRow";
import { CardHeader } from "./CardHeader";

export const GameLibrary = () => {
  const { state } = useUser();

  const [display, setDisplay] = useState(true);

  const handleToggle = async (e) => {
    setDisplay(!display);
  };

  const libraryHeaders = [
    "Name",
    "Compilation",
    "System",
    "Status",
    "Ownership",
    "Hours",
    "Rating",
    "Review",
    "Comments",
  ];
  if (state.profile) {
    return (
      <div className="card">
        <div className="card-header">
          <CardHeader display={display} toggle={handleToggle}>
            <h4>My Gaming Library</h4>
          </CardHeader>
        </div>
        <div
          className="card-body"
          style={display ? { display: "" } : { display: "none" }}
        >
          <div className="table-responsive">
            <TableRow
              headers={libraryHeaders}
              content={state.profile.gameLibrary}
            />
          </div>
        </div>
      </div>
    );
  }
};
