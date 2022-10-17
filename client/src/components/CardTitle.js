import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

export const CardTitle = ({ children, showFilter, callback, filters }) => {
  return (
    <div className="col d-flex justify-content-between ">
      <div className="flex-basis d-flex align-items-center " />
      {children}
      <div className="flex-basis  d-flex align-items-center">
        {showFilter ? (
          <FontAwesomeIcon
            icon={faFilterCircleXmark}
            fixedWidth
            onClick={callback}
          />
        ) : (
          <FontAwesomeIcon icon={faFilter} fixedWidth onClick={callback} />
        )}
      </div>
    </div>
  );
};
