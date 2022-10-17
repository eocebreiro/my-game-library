import React, { useState } from "react";

// Components
import { TableRow } from "../components/Tables/TableRow";
import { TableCol } from "../components/Tables/TableCol";
import { CardHeader } from "../components/Tables/CardHeader";

export const Wishlist = ({ content }) => {
  const [display, setDisplay] = useState(true);
  const [view, setView] = useState("row");

  const handleToggle = async (e) => {
    setDisplay(!display);
  };

  const wishlistHeaders = ["Name", "Compilation", "System", "Comments"];
  return (
    <div className="card">
      <div className="card-header">
        <CardHeader display={display} toggle={handleToggle}>
          <h4>Wishlist</h4>
        </CardHeader>
        {display ? (
          <div className="d-flex gap-3 justify-content-center">
            View:
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="wishlist"
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
                name="wishlist"
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
            <TableRow headers={wishlistHeaders} content={content} />
          ) : (
            <TableCol headers={wishlistHeaders} content={content} />
          )}
        </div>
      </div>
    </div>
  );
};