import React from "react";

function Task({ task, category, deletTask }) {
  function handelClick(){
    deletTask(task)
  }
 
  return (
    <div className="task">
      <div className="label">{task}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handelClick}>X</button>
    </div>
  );
}

export default Task;
