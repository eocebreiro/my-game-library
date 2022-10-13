import React from "react";
import { TableItem } from "./TableItem";

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

const content = {
  name: "Witcher 3",
  compilation: null,
  system: "PS5",
  status: "Wishlist",
  ownership: null,
  hours: null,
  rating: null,
  review: null,
  comments: null,
};

const type = null;

export default function index({ type }) {
  if (type === "library") {
    return (
      <table className="table table-striped">
        <TableItem style="col" headers={libraryHeaders} content={content} />
      </table>
    );
  }
  if (type === "backlog") {
    return (
      <table className="table">
        <TableItem style="col" headers={libraryHeaders} content={content} />
      </table>
    );
  }
  if (type === "wishlist") {
    return (
      <table className="table">
        <TableItem style="row" headers={wishlistHeaders} content={content} />
      </table>
    );
  }
  return null;
}
