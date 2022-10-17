import React, { useState } from "react";

// Components
import { TableRow } from "../components/Tables/TableRow";
import { TableCol } from "../components/Tables/TableCol";
import { CardHeader } from "../components/Tables/CardHeader";

export const GameLibrary = ({ content }) => {
  const [isRow, setIsRow] = useState(true);

  const handleToggle = async (e) => {
    setIsRow(!isRow);
  };

  const libraryHeaders = [
    "Name",
    "Compilation",
    "System",
    "Status",
    "Ownership",
    "Hours",
    "Rating",
    "Review",
    "Comments",
  ];

  return (
    <div className="card">
      <div className="card-header">
        <CardHeader name={"library"} isRow={isRow} toggle={handleToggle}>
          <h4>My Gaming Library</h4>
        </CardHeader>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          {isRow ? (
            <TableRow headers={libraryHeaders} content={content} />
          ) : (
            <TableCol headers={libraryHeaders} content={content} />
          )}
        </div>
      </div>
    </div>
  );
};
