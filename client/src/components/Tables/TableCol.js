import React, { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const TableCol = ({ headers, content }) => {
  let tables = [];

  //Build Headers and Data columuns
  for (let j = 0; j < content.length; j++) {
    let linkUrl = content[j]._id;
    let tableBody = [];

    for (let i = 0; i < headers.length; i++) {
      let tableDataRow = [];

      tableDataRow.push(
        <th key={headers[i]} className="table-light w-25">
          {headers[i]}
        </th>
      );

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
      tableBody.push(<tr key={i}>{tableDataRow}</tr>);
    }
    tableBody.push(
      <tr key={"edit"}>
        <td key={"edit"} colSpan={2}>
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-primary me-2">
              <FontAwesomeIcon icon={faPenToSquare} fixedWidth /> Edit
            </button>
            <button
              type="button"
              className="btn btn-danger ms-2"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              <FontAwesomeIcon icon={faTrashCan} fixedWidth /> Delete
            </button>
          </div>
        </td>
      </tr>
    );

    tables.push(
      <table key={j} className="table table-bordered table-hover">
        <tbody>{tableBody}</tbody>
      </table>
    );
  }

  return <Fragment>{tables}</Fragment>;
};
