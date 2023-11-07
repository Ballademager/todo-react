import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.css";

function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div>
      <div className={styles.noteblock}>
        <h2>My ToDo list</h2>
        <ul className="contents">
          {items
            .filter((i) => i.completed === false)
            .map((item) => (
              <ListItem key={item.id} {...item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
            ))}
          <div className={styles.vertline}></div>
        </ul>
      </div>
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

export default List;
