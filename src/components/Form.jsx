import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";

function Form(props) {
  const [task, setTask] = useState(""); // task som variabel
  function onSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const data = new FormData(e.target);

    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
    setTask(""); // clear input
  }
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className="contents" htmlFor="task">
        <input
          id="task"
          name="task"
          type="text"
          placeholder="New task here.."
          required
          value={task} // brug variablen
          onChange={(e) => setTask(e.target.value)} // ændrer variablen til dens value
        />
      </label>
      <button className="bg-slate-300 rounded-lg py-1 px-2" type="submit">
        Add task
      </button>
    </form>
  );
}

export default Form;
