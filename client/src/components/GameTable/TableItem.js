import React, { Fragment } from "react";

export const TableItem = ({ style, headers, content }) => {
  let result = null;

  if (style === "row") {
    // Build headers and data
    let tableHeaders = [];
    let tableData = [];
    for (let i = 0; i < headers.length; i++) {
      tableHeaders.push(<th key={headers[i]}>{headers[i]}</th>);
      tableData.push(
        <td key={content[i]}>{content[headers[i].toLowerCase()]}</td>
      );
    }
    result = (
      <Fragment>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>
          <tr>{tableData}</tr>
        </tbody>
      </Fragment>
    );
  }

  return <tr>{result}</tr>;
};
