import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import bankApp from "./reducers";
import {
  selectAccount,
  createAccount,
  createUser,
  deposit,
  transfer,
  withdraw,
  filterTransaction
} from "./actions";

const bankStore = createStore(bankApp);

let unsubscribe = bankStore.subscribe(() => {
  console.log(bankStore.getState());
});

console.log("initial state: ", bankStore.getState());

bankStore.dispatch(
  createUser({
    name: "John Doerr",
    address: "Silicon Valley",
    phone: "(650) 245-1762"
  })
);

bankStore.dispatch(
  createUser({
    name: "Brad Feld",
    address: "Boulder, Colorado",
    phone: "(847) 447-2267"
  })
);

bankStore.dispatch(
  createAccount({
    balance: 500,
    userId: 1
  })
);

bankStore.dispatch(
  createAccount({
    balance: 800,
    userId: 2
  })
);

bankStore.dispatch(selectAccount(2));

bankStore.dispatch(
  deposit({
    accountId: 1,
    amount: 300
  })
);

bankStore.dispatch(
  withdraw({
    accountId: 2,
    amount: 250
  })
);

bankStore.dispatch(
  transfer({
    accountToWithdrawFromId: 1,
    accountToDepositToId: 2,
    amount: 125
  })
);

bankStore.dispatch(filterTransaction("FILTER_BY_DATE"));

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
