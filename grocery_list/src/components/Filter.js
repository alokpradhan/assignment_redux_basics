import React from "react";

const Filters = ({ filterPurchased, filterCategory }) => {
  return (
    <div className="filters">
      <a
        href="#"
        onClick={e => {
          filterPurchased(e, "SHOW_ALL");
        }}
      >
        Show all
      </a>
      {", "}
      <a
        href="#"
        onClick={e => {
          filterPurchased(e, "SHOW_PURCHASED");
        }}
      >
        Show purchased
      </a>
      {", "}
      <a
        href="#"
        onClick={e => {
          filterPurchased(e, "SHOW_AVAILABLE");
        }}
      >
        Show available
      </a>
      {", "}
      <a
        href="#"
        onClick={e => {
          filterCategory(e, "SHOW_SPIRITS");
        }}
      >
        Show spirits
      </a>
      {", "}
      <a
        href="#"
        onClick={e => {
          filterCategory(e, "SHOW_BATH");
        }}
      >
        Show bath
      </a>
    </div>
  );
};

export default Filters;
