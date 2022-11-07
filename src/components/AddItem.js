import React, { useState } from "react";

const AddItem = (props) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHandleAddItem(input);
    setInput("");
  };

  return (
    <div className="add-item_container">
      <form className="add_form" onSubmit={handleSubmit}>
        <input
          className="add_input"
          type="text"
          placeholder="What do you want to buy?"
          value={input}
          onChange={handleInput}
        />
        <button className="add_btn">+</button>
      </form>
    </div>
  );
};

export default AddItem;
