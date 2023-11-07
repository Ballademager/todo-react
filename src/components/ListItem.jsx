import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ task, completed, id, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }

  return (
    <li className={completed ? styles.completed : ""}>
      {task}
      <button onClick={() => toggleCompleted(id)}>{completed ? "Undo" : "Done?"}</button>
      <button onClick={deleteThis}>Delete</button>
    </li>
  );
}

export default ListItem;
