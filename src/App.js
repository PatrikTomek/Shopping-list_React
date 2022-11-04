import "./App.css";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="app_container">
      <h1>Shopping List</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
