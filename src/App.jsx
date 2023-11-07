import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

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
    <main className="bg-slate-200 border rounded-lg border-solid border-black p-4">
      <h1 className="my-4 text-2xl ">My Todo</h1>
      <Form addItem={addItem} />
      <div>
        <List toggleCompleted={toggleCompleted} deleteItem={deleteItem} items={items} />
      </div>
    </main>
  );
}

export default App;
