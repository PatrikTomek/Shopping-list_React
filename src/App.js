import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (itemText) => {
    setItemList((prevItemList) => {
      return [
        ...prevItemList,
        { text: itemText, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <div className="app_container">
        <h1 className="main_header">Shopping List</h1>
        <AddItem onHandleAddItem={handleAddItem} />
        <ItemList items={itemList} />
      </div>
      <p className="sign_footer">
        Coded by <a href="https://patriktomek.cz/">Patrik Tomek</a>
      </p>
    </div>
  );
}

export default App;
