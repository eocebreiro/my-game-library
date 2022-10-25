import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";

export const Filters = ({
  filters: { name, status, sortBy },
  activeFilters: { activeStatus, activeSortBy, isDesc, isRow },
  callback,
}) => {
  // If there is a type, create options for it
  let statusOptions = [];
  if (status) {
    for (let i = 0; i < status.length; i++) {
      statusOptions.push(
        <option key={i} value={status[i]}>
          {status[i]}
        </option>
      );
    }
  }

  // If there is a sort by, create options for it
  let sortByOptions = [];
  if (sortBy) {
    for (let i = 0; i < sortBy.length; i++) {
      sortByOptions.push(
        <option key={i} value={sortBy[i]}>
          {sortBy[i]}
        </option>
      );
    }
  }

  return (
    <div className="pt-3">
      <div className="d-flex justify-content-center pb-3">
        <span className="me-3">View: </span>
        <div className="form-check me-3">
          <input
            type="radio"
            className="form-check-input"
            name={name}
            value="row"
            id="row-radio"
            checked={isRow ? true : false}
            onChange={(e) => callback(e)}
          />
          <label className="form-check-label" htmlFor="row-radio">
            <span>Row</span>
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name={name}
            value="col"
            id="col-radio"
            checked={!isRow ? true : false}
            onChange={(e) => callback(e)}
          />
          <label className="form-check-label" htmlFor="col-radio">
            <span>Col</span>
          </label>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center pb-3">
        {activeStatus ? (
          <select
            className="form-select me-3"
            id={"activeStatus"}
            defaultValue={activeStatus}
            onChange={(e) => callback(e)}
          >
            {statusOptions}
          </select>
        ) : null}
        <select
          className="form-select me-3"
          id={"activeSortBy"}
          defaultValue={activeSortBy}
          onChange={(e) => callback(e)}
        >
          {sortByOptions}
        </select>
        {isDesc ? (
          <FontAwesomeIcon
            icon={faArrowDownWideShort}
            fixedWidth
            size="xl"
            id="isDesc"
            onClick={(e) => callback(e)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowDownShortWide}
            fixedWidth
            size="xl"
            id="isDesc"
            onClick={(e) => callback(e)}
          />
        )}
      </div>
    </div>
  );
};
