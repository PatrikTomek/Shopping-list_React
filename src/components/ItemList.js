import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <div className="item-list_container">
      <ul>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>{props.firstItem}</li>
        <li>{props.secondItem}</li>
      </ul>
    </div>
  );
};

export default ItemList;
