import React from "react";

// State
import { useTheme } from "../../contexts/ThemeContext";

export const ViewPopup = ({ name, content, gameId, type }) => {
  const { themeName } = useTheme();
  return (
    <div
      className="modal fade"
      id={`${type}${gameId}`}
      tabIndex="-1"
      aria-labelledby="viewModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`${type}ModalLabel`}>
              {type}: {name}
            </h1>
            <button
              type="button"
              className={`${
                themeName === "light"
                  ? "btn-close"
                  : "btn-close btn-close-white"
              }`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
