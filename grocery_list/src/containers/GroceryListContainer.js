import { connect } from "react-redux";
import { purchaseItem } from "../actions";
import GroceryList from "../components/GroceryList";

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return items;
    case "SHOW_PURCHASED":
      return items.filter(item => item.purchased);
    case "SHOW_AVAILABLE":
      return items.filter(item => !item.purchased);
    case "SHOW_SPIRITS":
      return items.filter(item => item.category === "Spirits");
    case "SHOW_BATH":
      return items.filter(item => item.category === "Bath");
    default:
      return items;
  }
};

const sortItems = (items, sort) => {
  switch (sort) {
    case "SORT_BY_NAME":
      return items.sort((itemA, itemB) => (itemA.name > itemB.name ? 1 : -1));
    case "SORT_BY_DESCRIPTION":
      return items.sort((itemA, itemB) =>
        itemA.description > itemB.description ? 1 : -1
      );
    default:
      return items;
  }
};

const mapStateToProps = state => {
  return {
    items: sortItems(
      getVisibleItems(state.groceryList, state.itemFilters),
      state.sortBy
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    purchaseItem: id => {
      dispatch(purchaseItem(id));
    }
  };
};

const GroceryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryList);

export default GroceryListContainer;
