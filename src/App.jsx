import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import ThemePicker from "./components/ThemePicker";

function App() {
  const [items, setItems] = useState(() => {
    const localList = localStorage.getItem("ITEMS");
    if (localList == null) return [];
    return JSON.parse(localList);
  });
  const [theme, setTheme] = useState("classic");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items)), [items];
  });

  // useState => Theme
  // Theme => Localstorage
  function changeTheme() {
    // data-theme set to value of themeSelecter
  }

  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }

  function deleteItem(id) {
    console.log(id, "skal slettes");
    setItems((old) => old.filter((item) => item.id !== id));
  }

  function toggleCompleted(id) {
    console.log(id, "skal toggles");
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }

  return (
    <main data-theme="classic" className="md:p-4">
      <div className="grid sm:grid-cols-3">
        <h1 className="py-4 font-semibold text-3xl text-center sm:col-start-2">My ToDo Lists</h1>
        <ThemePicker changeTheme={changeTheme} />
      </div>
      <div>
        <List addItem={addItem} toggleCompleted={toggleCompleted} deleteItem={deleteItem} items={items} />
      </div>
    </main>
  );
}

export default App;
