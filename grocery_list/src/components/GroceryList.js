import React from "react";
import PropTypes from "prop-types";
import GroceryItem from "./GroceryItem";
import FilterContainer from "../containers/FilterContainer";
import SortByContainer from "../containers/SortByContainer";

// items, purchaseItem
const GroceryList = ({ items, purchaseItem }) => {
  const itemsToDisplay = items.map(item => {
    return (
      <GroceryItem
        item={item}
        key={item.id}
        purchaseItem={() => purchaseItem(item.id)}
      />
    );
  });

  return (
    <div>
      <br />
      <h1>Grocery List</h1>
      <FilterContainer />
      <SortByContainer />
      <div className="row">{itemsToDisplay}</div>
    </div>
  );
};

GroceryList.propTypes = {
  items: PropTypes.array.isRequired
};

export default GroceryList;
