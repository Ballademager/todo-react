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

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items)), [items];
  });

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
    <main className="bg-slate-200 md:p-4">
      <div className="grid md:grid-cols-3">
        <h1 className="py-4 font-semibold text-3xl text-center col-start-2">My ToDo Lists</h1>
        <ThemePicker />
      </div>
      <div>
        <List addItem={addItem} toggleCompleted={toggleCompleted} deleteItem={deleteItem} items={items} />
      </div>
    </main>
  );
}

export default App;
