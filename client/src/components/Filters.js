import React from "react";
import { TableRow } from "./Tables/TableRow";

// State
import { useUser } from "../contexts/UserContext";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const Filters = () => {
  return (
    <div className="card">
      <div>Filter</div>
    </div>
  );
};
