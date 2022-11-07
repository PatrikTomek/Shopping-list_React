import React, { useState } from "react";

const Item = (props) => {
  const handleIsChecked = (e) => {
    e.currentTarget.classList.toggle("checked-item");
  };
  const handleDelete = (e) => {
    e.currentTarget.parentElement.remove();
  };

  return (
    <div className="item" onClick={handleIsChecked}>
      <div>{props.text}</div>
      <button className="delete-item_btn" onClick={handleDelete}></button>
    </div>
  );
};

export default Item;
