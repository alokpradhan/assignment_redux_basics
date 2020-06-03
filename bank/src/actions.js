export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const SELECT_ACCOUNT = "SELECT_ACCOUNT";
export const DEPOSIT_MONEY = "DEPOSIT_MONEY";
export const WITHDRAW_MONEY = "WITHDRAW_MONEY";
export const TRANSFER_MONEY = "TRANSFER_MONEY";
export const SET_TRANSACTION_FILTER = "SET_TRANSACTION_FILTER";

export const CREATE_USER = "CREATE_USER";

let accountId = 1;
export const createAccount = payload => {
  return {
    type: CREATE_ACCOUNT,
    payload: {
      id: accountId++,
      ...payload
    }
  };
};

export const selectAccount = id => {
  return {
    type: SELECT_ACCOUNT,
    payload: id
  };
};

export const deposit = payload => {
  return {
    type: DEPOSIT_MONEY,
    payload
  };
};

export const withdraw = payload => {
  return {
    type: WITHDRAW_MONEY,
    payload
  };
};

export const transfer = payload => {
  return {
    type: TRANSFER_MONEY,
    payload
  };
};

export const filterTransaction = filter => {
  return {
    type: "SET_TRANSACTION_FILTER",
    filter
  };
};

let userId = 1;
export const createUser = payload => {
  return {
    type: CREATE_USER,
    payload: {
      id: userId++,
      ...payload
    }
  };
};
