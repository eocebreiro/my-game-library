import React from "react";
import { Link } from "react-router-dom";

// State
import { useTheme } from "../../contexts/ThemeContext";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

// Components
import { DeletePopup } from "../Modals/DeletePopup";
import { ViewPopup } from "../Modals/ViewPopup";

export const TableCol = ({ headers, content }) => {
  const { themeName } = useTheme();

  let tables = [];
  let gameId = null;
  let name = null;
  let review = null;
  let comments = null;

  //Build Headers and Data columuns
  for (let j = 0; j < content.length; j++) {
    gameId = content[j]._id;
    name = content[j].name;
    review = content[j].review;
    comments = content[j].comments;
    let tableBody = [];

    for (let i = 0; i < headers.length; i++) {
      let tableDataRow = [];

      tableDataRow.push(
        <th key={headers[i]} className=" w-25">
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
              data-bs-toggle="modal"
              data-bs-target={`#Review${gameId}`}
            >
              View
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
              data-bs-toggle="modal"
              data-bs-target={`#Comments${gameId}`}
            >
              View
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
            <DeletePopup gameId={gameId} />
            <ViewPopup
              name={name}
              content={review}
              gameId={gameId}
              type="Review"
            />
            <ViewPopup
              name={name}
              content={comments}
              gameId={gameId}
              type="Comments"
            />

            <Link
              to={`/editgame/${gameId}`}
              type="button"
              className="btn btn-primary me-2"
            >
              <FontAwesomeIcon
                className="action-icon"
                icon={faPenToSquare}
                fixedWidth
              />{" "}
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-danger ms-2"
              data-bs-toggle="modal"
              data-bs-target={`#gameId${gameId}`}
            >
              <FontAwesomeIcon
                className="action-icon"
                icon={faTrashCan}
                fixedWidth
              />{" "}
              Delete
            </button>
          </div>
        </td>
      </tr>
    );

    tables.push(
      <table
        key={j}
        className={`table ${
          themeName === "light" ? "table-light" : "table-dark"
        } table-bordered table-hover`}
      >
        <tbody>{tableBody}</tbody>
      </table>
    );
  }

  return <div>{tables}</div>;
};
