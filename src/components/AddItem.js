import React from "react";

const AddItem = () => {
  return (
    <div className="add-item_container">
      <h3>Add Item</h3>
      <form className="add_form">
        <input
          className="add_input"
          type="text"
          placeholder="What do you want to buy?"
          value=""
        />
        <button className="add_btn">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
