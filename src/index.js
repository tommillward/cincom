import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShoppingList from "./ShoppingList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>
);
