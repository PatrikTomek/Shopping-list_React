import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="item-list_container">
      <ul>
        {props.items.map((item) => (
          <li key={item.id}><Item text={item.text} /></li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
