import {
  SELECT_ACCOUNT,
  CREATE_ACCOUNT,
  CREATE_USER,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  SET_TRANSACTION_FILTER
} from "./actions";
import { combineReducers } from "redux";

const accounts = (state = [], action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [...state, action.payload];
    case SELECT_ACCOUNT:
      return state.map(account => {
        if (account.id === action.payload) {
          return {
            ...account
          };
        }
        return account;
      });
    case DEPOSIT_MONEY:
      return state.map(account => {
        if (account.id === action.payload.accountId) {
          return {
            ...account,
            balance: (account.balance += action.payload.amount)
          };
        }
        return account;
      });
    case WITHDRAW_MONEY:
      return state.map(account => {
        if (account.id === action.payload.accountId) {
          return {
            ...account,
            balance: (account.balance -= action.payload.amount)
          };
        }
        return account;
      });
    case TRANSFER_MONEY:
      return state.map(accountToWidthdawFrom => {
        let depositAccountFound = false;

        if (
          accountToWidthdawFrom.id === action.payload.accountToWithdrawFromId
        ) {
          state.find(accountToDepositInto => {
            if (
              accountToDepositInto.id === action.payload.accountToDepositToId
            ) {
              depositAccountFound = true;
              return {
                ...accountToDepositInto,
                balance: (accountToDepositInto.balance += action.payload.amount)
              };
            }

            return accountToDepositInto;
          });

          if (depositAccountFound) {
            return {
              ...accountToWidthdawFrom,
              balance: (accountToWidthdawFrom.balance -= action.payload.amount)
            };
          }
        }
        return accountToWidthdawFrom;
      });
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const filterTransactions = (state = [], action) => {
  switch (action.type) {
    case SET_TRANSACTION_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const bankApp = combineReducers({
  accounts,
  users,
  filterTransactions
});

export default bankApp;
