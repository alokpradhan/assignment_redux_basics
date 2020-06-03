import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import groceryApp from "./reducers";
import {
  addItem,
  purchaseItem,
  setPurchasedFilter,
  setCategoryFilter,
  sortByName,
  sortByDescription
} from "./actions";

const store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state: ", store.getState());

store.dispatch(
  addItem({
    name: "Head & Shoulders",
    description: "Shampoo",
    amount: "8.00",
    category: "Bath",
    purchased: false
  })
);

store.dispatch(
  addItem({
    name: "Shafer One Point Five",
    description: "Wine",
    amount: "45.00",
    category: "Spirits",
    purchased: false
  })
);

store.dispatch(purchaseItem(2));
store.dispatch(setPurchasedFilter("SHOW_PURCHASED"));
store.dispatch(setCategoryFilter("SHOW_BATH"));
store.dispatch(sortByName("Shafer"));
store.dispatch(sortByDescription("Shampoo"));

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
