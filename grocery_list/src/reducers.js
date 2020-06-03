import {
  ADD_ITEM,
  PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SORT_BY_NAME,
  SORT_BY_DESCRIPTION
} from "./actions";
import { combineReducers } from "redux";

const groceryList = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    default:
      return state;
  }
};

const itemFilters = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.filter;
    case SET_CATEGORY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const sortBy = (state = "SORT_BY_ID", action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return action.sort;
    case SORT_BY_DESCRIPTION:
      return action.sort;
    default:
      return state;
  }
};

const groceryApp = combineReducers({
  groceryList,
  itemFilters,
  sortBy
});

export default groceryApp;
