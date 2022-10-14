import React, { useState } from "react";

// Components
import { TableRow } from "./TableRow";
import { TableCol } from "./TableCol";
import { CardHeader } from "./CardHeader";

export const Backlog = ({ content }) => {
  const [display, setDisplay] = useState(true);
  const [view, setView] = useState("row");

  const handleToggle = async (e) => {
    setDisplay(!display);
  };

  const backlogHeaders = [
    "Name",
    "Compilation",
    "System",
    "Ownership",
    "Comments",
  ];

  return (
    <div className="card">
      <div className="card-header">
        <CardHeader display={display} toggle={handleToggle}>
          <h4>Backlog</h4>
        </CardHeader>
        {display ? (
          <div className="d-flex gap-3 justify-content-center">
            View:
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="backlog"
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
                name="backlog"
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
            <TableRow headers={backlogHeaders} content={content} />
          ) : (
            <TableCol headers={backlogHeaders} content={content} />
          )}
        </div>
      </div>
    </div>
  );
};
