import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ task, completed, id, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }

  return (
    <li className={`${completed ? styles.completed : ""} ${styles.li}`}>
      {task}
      <button className={styles.button} onClick={() => toggleCompleted(id)}>
        {completed ? "Undo" : "Done?"}
      </button>
      <button className={styles.button} onClick={deleteThis}>
        Delete
      </button>
    </li>
  );
}

export default ListItem;
