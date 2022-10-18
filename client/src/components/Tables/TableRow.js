import React from "react";
import { Link, Navigate } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

// Components
import { DeletePopup } from "../DeletePopup";

export const TableRow = ({ headers, content }) => {
  // Edit and Delete handlers

  const handleEdit = () => {};

  const handleDelete = () => {};

  // Build Headers
  let tableHeaders = [];
  for (let i = 0; i < headers.length; i++) {
    tableHeaders.push(<th key={headers[i]}>{headers[i]}</th>);
  }
  tableHeaders.push(
    <th rowSpan={2} key={"edit"}>
      Edit/Delete
    </th>
  );

  // Build table body
  let tableBody = [];

  for (let j = 0; j < content.length; j++) {
    let tableDataRow = [];
    let linkUrl = null;

    for (let i = 0; i < headers.length; i++) {
      linkUrl = content[j]._id;

      // Check to see if items have values, if not, replace with a dash (-)
      if (content[j][headers[i].toLowerCase()] === null) {
        tableDataRow.push(<td key={i}>-</td>);
      }
      // Check to see if the item is REVIEW
      else if (headers[i].toLowerCase() === "review") {
        tableDataRow.push(
          <td key={i}>
            <Link
              className="text-decoration-none"
              to={"/game/review/" + linkUrl}
            >
              view
            </Link>
          </td>
        );
      }
      // Check to see if the item is Comments
      else if (headers[i].toLowerCase() === "comments") {
        tableDataRow.push(
          <td key={i}>
            <Link
              className="text-decoration-none"
              to={"/game/comments/" + linkUrl}
            >
              view
            </Link>
          </td>
        );
      } else {
        tableDataRow.push(
          <td key={i}>{content[j][headers[i].toLowerCase()]}</td>
        );
      }
    }
    tableDataRow.push(
      <td key={"edit"}>
        <div className="d-flex justify-content-around align-items-center">
          <FontAwesomeIcon
            icon={faPenToSquare}
            fixedWidth
            onClick={handleEdit}
            size="xl"
            type="button"
            className="fa-icon-hover"
          />

          <FontAwesomeIcon
            icon={faTrashCan}
            fixedWidth
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            size="xl"
            className="fa-icon-hover"
          />
        </div>
      </td>
    );
    tableBody.push(<tr key={j}>{tableDataRow}</tr>);
  }

  return (
    <div>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
