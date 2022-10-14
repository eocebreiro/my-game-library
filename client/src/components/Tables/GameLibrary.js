import React, { Fragment, useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Components
import { TableRow } from "./TableRow";
import { TableCol } from "./TableCol";
import { CardHeader } from "./CardHeader";

export const GameLibrary = () => {
  const { state } = useUser();

  const [display, setDisplay] = useState(true);
  const [view, setView] = useState("row");

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
          {display ? (
            <div className="d-flex gap-3 justify-content-center">
              View:
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gamelibrary"
                  value="row"
                  id="row-radio"
                  checked={view === "row" ? true : false}
                  onChange={(e) => setView("row")}
                />
                <label className="form-check-label" htmlFor="row-radio">
                  Row
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gamelibrary"
                  value="col"
                  id="col-radio"
                  checked={view === "col" ? true : false}
                  onChange={(e) => setView("col")}
                />
                <label className="form-check-label" htmlFor="col-radio">
                  Col
                </label>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="card-body"
          style={display ? { display: "" } : { display: "none" }}
        >
          <div className="table-responsive">
            {view === "row" ? (
              <TableRow
                headers={libraryHeaders}
                content={state.profile.gameLibrary}
              />
            ) : (
              <TableCol
                headers={libraryHeaders}
                content={state.profile.gameLibrary}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
};
