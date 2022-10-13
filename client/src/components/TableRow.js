import React from "react";
import { Link, Navigate } from "react-router-dom";

export const TableRow = ({ headers, content }) => {
  // Build Headers and content rows
  let tableHeaders = [];
  for (let i = 0; i < headers.length; i++) {
    tableHeaders.push(<th key={headers[i]}>{headers[i]}</th>);
  }

  // Build content
  let tableBody = [];
  for (let j = 0; j < content.length; j++) {
    let tableDataRow = [];
    let linkUrl = null;
    for (let i = 0; i < headers.length; i++) {
      linkUrl = content[j]._id;
      tableDataRow.push(
        <td key={i}>{content[j][headers[i].toLowerCase()]}</td>
      );
    }
    tableBody.push(
      <tr className="clickable-row" data-href={"url://google.com"} key={j}>
        {tableDataRow}
      </tr>
    );
  }
  return (
    <table className="table ">
      <thead>
        <tr>{tableHeaders}</tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  );
};
