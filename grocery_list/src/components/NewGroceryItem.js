import React from "react";
import PropTypes from "prop-types";

const NewGroceryItem = ({ add, onSubmit }) => {
  if (!add) {
    return;
  }

  return (
    <form className="form-group col-4 offset-4" onSubmit={onSubmit}>
      <h2>New item</h2>
      <label htmlFor="name">Item name</label>
      <input className="form-control" type="text" name="name" />

      <br />

      <label htmlFor="description">Item description</label>
      <input className="form-control" type="text" name="description" />

      <br />

      <label htmlFor="amount">Item amount</label>
      <input className="form-control" type="text" name="amount" />

      <br />

      <label htmlFor="category">Item category</label>
      <input className="form-control" type="text" name="category" />

      <br />

      <button className="btn btn-success">Add Item</button>
    </form>
  );
};

NewGroceryItem.propTypes = {
  add: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default NewGroceryItem;
