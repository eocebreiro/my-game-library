import React, { useState } from "react";

// Components
import { TableRow } from "../components/Tables/TableRow";
import { TableCol } from "../components/Tables/TableCol";
import { CardHeader } from "../components/Tables/CardHeader";

export const Backlog = ({ content }) => {
  const [isRow, setIsRow] = useState(true);

  const handleToggle = async (e) => {
    setIsRow(!isRow);
  };

  const backlogHeaders = [
    "Name",
    "Compilation",
    "System",
    "Ownership",
    "Comments",
  ];

  return (
    <div className="card">
      <div className="card-header">
        <CardHeader name={"backlog"} isRow={isRow} toggle={handleToggle}>
          <h4>Backlog</h4>
        </CardHeader>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          {isRow ? (
            <TableRow headers={backlogHeaders} content={content} />
          ) : (
            <TableCol headers={backlogHeaders} content={content} />
          )}
        </div>
      </div>
    </div>
  );
};
