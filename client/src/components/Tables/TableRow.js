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

export const TableRow = ({ headers, content }) => {
  const { themeName } = useTheme();
  // Build Headers
  let tableHeaders = [];
  for (let i = 0; i < headers.length; i++) {
    tableHeaders.push(<th key={headers[i]}>{headers[i]}</th>);
  }
  tableHeaders.push(
    <th rowSpan={2} key={"edit"}>
      Actions
    </th>
  );

  // Build table body
  let tableBody = [];
  let gameId = null;
  let name = null;
  let review = null;
  let comments = null;

  for (let j = 0; j < content.length; j++) {
    let tableDataRow = [];
    gameId = content[j]._id;
    name = content[j].name;
    review = content[j].review;
    comments = content[j].comments;

    for (let i = 0; i < headers.length; i++) {
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
    }

    tableDataRow.push(
      <td key={"edit"}>
        <div className="d-flex justify-content-around align-items-center">
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
            to={`/my-game-library/editgame/${gameId}`}
            className="text-decoration-none text-dark"
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              fixedWidth
              size="xl"
              className="fa-action-icon"
            />
          </Link>

          <FontAwesomeIcon
            icon={faTrashCan}
            fixedWidth
            data-bs-toggle="modal"
            data-bs-target={`#gameId${gameId}`}
            size="xl"
            className="fa-action-icon"
          />
        </div>
      </td>
    );
    tableBody.push(<tr key={j}>{tableDataRow}</tr>);
  }

  return (
    <div>
      <table
        className={`table ${
          themeName === "light" ? "table-light" : "table-dark"
        } table-bordered table-hover`}
      >
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};
