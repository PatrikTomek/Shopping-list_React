import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (itemText) => {
    console.log(itemText);
    setItemList((prevItemList) => {
      return [
        ...prevItemList,
        { text: itemText, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="app_container">
      <h1>Shopping List</h1>
      <AddItem onHandleAddItem={handleAddItem} />
      <ItemList items={itemList} />
    </div>
  );
}

export default App;
