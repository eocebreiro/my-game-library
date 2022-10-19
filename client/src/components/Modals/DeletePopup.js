import React from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Actions
import { deleteGame } from "../../contexts/UserActions";
import { getProfile } from "../../contexts/UserActions";

export const DeletePopup = ({ gameId }) => {
  const { dispatch } = useUser();

  const handleDelete = () => {
    deleteGame(dispatch, gameId);
    getProfile(dispatch);
  };

  return (
    <div
      className="modal fade"
      id={`gameId${gameId}`}
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="deleteModalLabel">
              Delete Item?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this entry?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
