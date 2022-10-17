import React from "react";
import { Link, Navigate } from "react-router-dom";

export const TableRow = ({ headers, content }) => {
  // Build Headers
  let tableHeaders = [];
  for (let i = 0; i < headers.length; i++) {
    tableHeaders.push(<th key={headers[i]}>{headers[i]}</th>);
  }

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
    tableBody.push(<tr key={j}>{tableDataRow}</tr>);
  }

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};
