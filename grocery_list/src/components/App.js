import React from "react";
import "./App.css";
import GroceryListContainer from "../containers/GroceryListContainer";
import NewGroceryItemContainer from "../containers/NewGroceryItemContainer";

function App() {
  return (
    <div className="App">
      <GroceryListContainer />
      <NewGroceryItemContainer add={true} />
    </div>
  );
}

export default App;
