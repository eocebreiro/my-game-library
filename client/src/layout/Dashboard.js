import React from "react";
import { TableRow } from "../components/TableRow";

const wishlistHeaders = ["Name", "Compilation", "System"];
const backlockHeaders = ["Name", "Compilation", "System", "Ownership"];

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
const content = [
  {
    _id: 1111111111,
    name: "Witcher 3",
    compilation: null,
    system: "PS5",
    status: "Wishlist",
    ownership: "Owned",
    hours: 102,
    rating: 10,
    review: null,
    comments: null,
  },
  {
    _id: 222222222,
    name: "Spiderman 2",
    compilation: "The DLC",
    system: "PS4",
    status: "Wishlist",
    ownership: "Owned",
    hours: 44,
    rating: 7.5,
    review: null,
    comments: null,
  },
];

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
          <div className="card-header">
            <div>My Game Library</div>
            <div> </div>
          </div>
          <div className="card-body"></div>
          <div className="table-responsive">
            <TableRow headers={libraryHeaders} content={content} />
          </div>
        </div>

        <div className="card">
          <div className="card-header">Backlog</div>
          <div className="card-body"></div>
          <div className="table-responsive">
            <TableRow headers={backlockHeaders} content={content} />
          </div>
        </div>

        <div className="card">
          <div className="card-header">Wishlist</div>
          <div className="card-body">
            <div className="table-responsive">
              <TableRow headers={wishlistHeaders} content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
