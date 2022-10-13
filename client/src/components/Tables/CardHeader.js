import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const CardHeader = ({ children, display, toggle }) => {
  return (
    <div className="col d-flex justify-content-between">
      <div className="flex-basis d-flex align-items-center" />
      {children}
      <div className="flex-basis  d-flex align-items-center">
        {display ? (
          <FontAwesomeIcon icon={faAngleDown} fixedWidth onClick={toggle} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} fixedWidth onClick={toggle} />
        )}
      </div>
    </div>
  );
};
