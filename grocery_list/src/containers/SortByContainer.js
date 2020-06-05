import { connect } from "react-redux";
import { sortByName, sortByDescription } from "../actions.js";
import SortBy from "../components/SortBy";

const mapDispatchToProps = dispatch => {
  return {
    nameSort: e => {
      e.preventDefault();
      dispatch(sortByName("SORT_BY_NAME"));
    },
    descriptionSort: e => {
      e.preventDefault();
      dispatch(sortByDescription("SORT_BY_DESCRIPTION"));
    }
  };
};

const SortByContainer = connect(
  null,
  mapDispatchToProps
)(SortBy);

export default SortByContainer;
