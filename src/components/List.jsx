import React from "react";
import ListItem from "./ListItem";

function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div>
      <h2>My ToDo list</h2>
      <ul>
        {items
          .filter((i) => i.completed === false)
          .map((item) => (
            <ListItem key={item.id} {...item} deleteItem={deleteItem} toggleCompleted={toggleCompleted} />
          ))}
      </ul>
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
