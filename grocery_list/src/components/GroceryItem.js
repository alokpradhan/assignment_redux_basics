import React from "react";
import PropTypes from "prop-types";

// item, purchaseItem()
const GroceryItem = ({ item, purchaseItem }) => {
  const { name, description, amount, category, purchased } = item;
  const purchaseOption = purchased ? (
    "Sold"
  ) : (
    <button className="btn btn-success" onClick={purchaseItem}>
      Purchase item
    </button>
  );

  return (
    <div
      className="grocery-item card col-3 offset-1"
      style={{ padding: "24px", margin: "24px" }}
    >
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{amount}</p>
      <p>{category}</p>
      {purchaseOption}
    </div>
  );
};

GroceryItem.propTypes = {
  item: PropTypes.object.isRequired,
  purchaseItem: PropTypes.func.isRequired
};

export default GroceryItem;
