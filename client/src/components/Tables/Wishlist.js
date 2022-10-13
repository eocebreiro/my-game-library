import React, { useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Components
import { TableRow } from "./TableRow";
import { CardHeader } from "./CardHeader";

export const Wishlist = () => {
  const { state } = useUser();

  const [display, setDisplay] = useState(true);

  const handleToggle = async (e) => {
    setDisplay(!display);
  };

  const wishlistHeaders = ["Name", "Compilation", "System", "Comments"];
  if (state.profile) {
    return (
      <div className="card">
        <div className="card-header">
          <CardHeader display={display} toggle={handleToggle}>
            <h4>Wishlist</h4>
          </CardHeader>
        </div>
        <div
          className="card-body"
          style={display ? { display: "" } : { display: "none" }}
        >
          <div className="table-responsive">
            <TableRow
              headers={wishlistHeaders}
              content={state.profile.gameLibrary}
            />
          </div>
        </div>
      </div>
    );
  }
};
