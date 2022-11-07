import React from "react";

const Item = (props) => {
  const handleIsChecked = (e) => {
    e.currentTarget.classList.toggle("checked-item");
  };

  return (
    <div className="item" onClick={handleIsChecked}>
      {props.text}
    </div>
  );
};

export default Item;
