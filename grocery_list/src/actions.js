export const ADD_ITEM = "ADD_ITEM";
export const PURCHASE_ITEM = "PURCHASE_ITEM";
export const SET_PURCHASED_FILTER = "SET_PURCHASED_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const SORT_BY_NAME = "SORT_BY_NAME";
export const SORT_BY_DESCRIPTION = "SORT_BY_DESCRIPTION";

let itemId = 4;

export const addItem = payload => {
  return {
    type: ADD_ITEM,
    payload: {
      ...payload,
      id: itemId++
    }
  };
};

export const purchaseItem = id => {
  return {
    type: PURCHASE_ITEM,
    payload: id
  };
};

export const setPurchasedFilter = filter => {
  return {
    type: SET_PURCHASED_FILTER,
    filter
  };
};

export const setCategoryFilter = filter => {
  return {
    type: SET_CATEGORY_FILTER,
    filter
  };
};

export const sortByName = sort => {
  return {
    type: SORT_BY_NAME,
    sort
  };
};

export const sortByDescription = sort => {
  return {
    type: SORT_BY_DESCRIPTION,
    sort
  };
};
