import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import groceryApp from "./reducers";
import { Provider } from "react-redux";

const groceryItemsFromServer = [
  {
    name: "Head&Shoulders",
    description: "Shampoo",
    amount: 8,
    category: "Bath",
    purchased: false,
    id: 1
  },
  {
    name: "Paul Mitchell Awapuhi",
    description: "Shampoo",
    amount: 14,
    category: "Bath",
    purchased: false,
    id: 2
  },
  {
    name: "Shafer One Point Five",
    description: "Wine",
    amount: "45.00",
    category: "Spirits",
    purchased: false,
    id: 3
  }
];

let store = createStore(groceryApp, {
  groceryList: groceryItemsFromServer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
