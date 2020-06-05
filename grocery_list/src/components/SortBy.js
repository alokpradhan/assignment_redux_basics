import React from "react";

const SortBy = ({ nameSort, descriptionSort }) => {
  return (
    <div>
      Sort by:{" "}
      <a href="#" onClick={nameSort}>
        Name
      </a>
      {", "}
      <a href="#" onClick={descriptionSort}>
        Description
      </a>
    </div>
  );
};

export default SortBy;
