import React from "react";
import ListItem from "./ListItem";
import Form from "./Form";
import styles from "./List.module.css";

function List({ items, deleteItem, toggleCompleted, addItem }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
      <div className={styles.noteblock}>
        <h2 className="font-semibold text-2xl">My ToDo list</h2>
        <ul className="contents">
          <li class={`${styles.li} font-bold`}>
            <p>Task:</p>

            <p>Done</p>
            <p>Delete</p>
          </li>
          {items
            .filter((i) => i.completed === false)
            .map((item) => (
              <ListItem key={item.id} {...item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
            ))}
          <Form addItem={addItem} />
          <div className={styles.vertline}></div>
        </ul>
      </div>
      <div className={styles.noteblock}>
        <h2 className="font-semibold text-2xl">Completed tasks</h2>
        <ul className="contents">
          {items
            .filter((i) => i.completed)
            .map((item) => (
              <ListItem key={item.id} {...item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
