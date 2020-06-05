import { connect } from "react-redux";
import Filter from "../components/Filter";
import { setPurchasedFilter, setCategoryFilter } from "../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    filterPurchased: (e, filterType) => {
      e.preventDefault();
      dispatch(setPurchasedFilter(filterType));
    },
    filterCategory: (e, filterType) => {
      e.preventDefault();
      dispatch(setCategoryFilter(filterType));
    }
  };
};

const FilterContainer = connect(
  null,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
