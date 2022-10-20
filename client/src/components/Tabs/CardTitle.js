import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const CardTitle = ({ children, showFilter, callback, filters }) => {
  return (
    <div className="col">
      <div
        className="button d-flex align-items-center"
        type="button"
        onClick={callback}
      >
        Filters
        {showFilter ? (
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            fixedWidth
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faFilter} fixedWidth />
        )}
      </div>
    </div>
  );
};
