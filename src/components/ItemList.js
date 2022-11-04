import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div className="item-list_container">
      <ul>
        <li><Item /></li>
        <li><Item /></li>
      </ul>
    </div>
  );
};

export default ItemList;
