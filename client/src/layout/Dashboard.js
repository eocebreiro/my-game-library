import React from "react";

export const Dashboard = () => {
  return (
    <div className="container">
      <div className="row gap-2">
        <div className="card">
          <div>Unfinished</div>
          <div>Beaten</div>
          <div>Completed</div>
        </div>
        <div className="card">
          <div>Filter</div>
        </div>
        <div className="card">
          <div>LIST OF GAMES</div>
        </div>
      </div>
    </div>
  );
};
