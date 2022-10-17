import React, { useState } from "react";

// State
import { useUser } from "../contexts/UserContext";

// Components
import { TableRow } from "./Tables/TableRow";
import { TableCol } from "./Tables/TableCol";
import { CardTitle } from "./CardTitle";
import { Filters } from "./Filters";
import { DataChart } from "./DataChart";

export const GameLibrary = () => {
  //State
  const { state } = useUser();
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    activeStatus: "All",
    activeSortBy: "Date Added",
    isDesc: true,
    isRow: true,
  });

  if (state.profile) {
    // Deconstruct active filters
    const { activeStatus, activeSortBy, isDesc, isRow } = activeFilters;

    // Filter Categories
    const filters = {
      name: "library",
      status: ["All", "Unfinished", "Beaten", "Completed"],
      sortBy: ["Name", "Date Added", "System", "Ownership", "Hours", "Rating"],
    };

    // Get the games from the library from the context
    const content = state.profile.gameLibrary.filter((item) => {
      return (
        item.status === "Unfinished" ||
        item.status === "Completed" ||
        item.status === "Beaten"
      );
    });

    // Set the library Headers
    const headers = [
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

    const handleFilterToggle = async (e) => {
      setShowFilter(!showFilter);
    };

    const handleSetFilters = async (e) => {
      // handle view change
      if (e.target.value === "row") {
        setActiveFilters({ ...activeFilters, isRow: true });
      }
      if (e.target.value === "col") {
        setActiveFilters({ ...activeFilters, isRow: false });
      }
      if (e.target.id === "statusActive") {
        setActiveFilters({ ...activeFilters, [e.target.id]: e.target.value });
      }
      if (e.target.id === "sortByActive") {
        setActiveFilters({ ...activeFilters, [e.target.id]: e.target.value });
      }
      if (e.target.id === "isDesc") {
        setActiveFilters({ ...activeFilters, isDesc: !isDesc });
      }
    };

    return (
      <div className="card">
        <div className="card-header">
          <CardTitle showFilter={showFilter} callback={handleFilterToggle}>
            <h4>My Gaming Library</h4>
          </CardTitle>

          {showFilter ? (
            <Filters
              filters={filters}
              activeFilters={activeFilters}
              callback={handleSetFilters}
            />
          ) : null}
          <DataChart />
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {isRow ? (
              <TableRow headers={headers} content={content} />
            ) : (
              <TableCol headers={headers} content={content} />
            )}
          </div>
        </div>
      </div>
    );
  }
};
