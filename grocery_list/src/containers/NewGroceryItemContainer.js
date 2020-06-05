import { connect } from "react-redux";
import NewGroceryItem from "../components/NewGroceryItem";
import { addItem } from "../actions";
import serialize from "form-serialize";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(addItem(data));
    }
  };
};

const NewGroceryItemContainer = connect(
  null,
  mapDispatchToProps
)(NewGroceryItem);

export default NewGroceryItemContainer;
