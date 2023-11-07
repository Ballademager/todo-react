import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.css";

function DoneList({ items, deleteItem, toggleCompleted }) {
  return (
    <div className={styles.noteblock}>
      <h2>Completed tasks</h2>
      <ul>
        {items
          .filter((i) => i.completed)
          .map((item) => (
            <ListItem key={item.id} {...item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
          ))}
      </ul>
    </div>
  );
}

export default DoneList;
