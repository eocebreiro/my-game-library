import React, { Fragment, useState } from "react";

// State
import { useUser } from "../../contexts/UserContext";

// Components
import { TableRow } from "../Tables/TableRow";
import { TableCol } from "../Tables/TableCol";
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
    isRow: window.innerWidth < 1024 ? false : true,
  });
  console.log(window.innerWidth);

  if (state.profile) {
    // Deconstruct active filters
    const { activeStatus, activeSortBy, isDesc, isRow } = activeFilters;

    // Filter Categories
    const filters = {
      name: "library",
      status: ["All", "Unfinished", "Ongoing", "Beaten", "Completed"],
      sortBy: ["Name", "Date Added", "System", "Ownership", "Hours", "Rating"],
    };

    // Get the games from the library from the context
    let content = state.profile.gameLibrary.filter((item) => {
      return (
        item.status === "Unfinished" ||
        item.status === "Ongoing" ||
        item.status === "Completed" ||
        item.status === "Beaten"
      );
    });

    // Set the library Headers
    const headers = [
      "Name",
      "System",
      "Status",
      "Ownership",
      "Hours",
      "Rating",
      "Review",
      "Comments",
    ];

    // Filter the games
    if (activeStatus !== "All") {
      content = content.filter((item) => {
        return item.status === activeStatus;
      });
    }

    // Sort the games
    if (activeSortBy === "Name") {
      content.sort((a, b) => {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (isDesc) {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        } else {
          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        }
      });
    } else if (activeSortBy === "Date Added") {
      content.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        if (isDesc) {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    } else if (activeSortBy === "System") {
      content.sort((a, b) => {
        let systemA = a.system.toLowerCase();
        let systemB = b.system.toLowerCase();
        if (isDesc) {
          if (systemA < systemB) return -1;
          if (systemA > systemB) return 1;
          return 0;
        } else {
          if (systemA > systemB) return -1;
          if (systemA < systemB) return 1;
          return 0;
        }
      });
    } else if (activeSortBy === "Ownership") {
      content.sort((a, b) => {
        let ownershipA = a.ownership.toLowerCase();
        let ownershipB = b.ownership.toLowerCase();
        if (isDesc) {
          if (ownershipA < ownershipB) return -1;
          if (ownershipA > ownershipB) return 1;
          return 0;
        } else {
          if (ownershipA > ownershipB) return -1;
          if (ownershipA < ownershipB) return 1;
          return 0;
        }
      });
    } else if (activeSortBy === "Hours") {
      content.sort((a, b) => {
        if (isDesc) {
          return b.hours - a.hours;
        } else {
          return a.hours - b.hours;
        }
      });
    } else if (activeSortBy === "Rating") {
      content.sort((a, b) => {
        if (isDesc) {
          return b.rating - a.rating;
        } else {
          return a.rating - b.rating;
        }
      });
    }

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
      if (e.target.id === "activeStatus") {
        setActiveFilters({ ...activeFilters, [e.target.id]: e.target.value });
      }
      if (e.target.id === "activeSortBy") {
        setActiveFilters({ ...activeFilters, [e.target.id]: e.target.value });
      }
      if (e.target.id === "isDesc") {
        setActiveFilters({ ...activeFilters, isDesc: !isDesc });
      }
    };

    return (
      <Fragment>
        <CardTitle showFilter={showFilter} callback={handleFilterToggle} />
        {showFilter ? (
          <Filters
            filters={filters}
            activeFilters={activeFilters}
            callback={handleSetFilters}
          />
        ) : null}
        <DataChart />
        <div className="card-body">
          <div className="table-responsive">
            {isRow ? (
              <TableRow headers={headers} content={content} />
            ) : (
              <TableCol headers={headers} content={content} />
            )}
          </div>
        </div>
      </Fragment>
    );
  }
};
