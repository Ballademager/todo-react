import React from "react";
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
    <form className="flex gap-2" onSubmit={onSubmit}>
      <label htmlFor="task">Task</label>
      <input
        id="task"
        name="task"
        type="text"
        required
        value={task} // brug variablen
        onChange={(e) => setTask(e.target.value)} // ændrer variablen til dens value
      />
      <button className="bg-slate-300 border rounded-lg border-solid border-black py-1 px-2" type="submit">
        Add task
      </button>
    </form>
  );
}

export default Form;
