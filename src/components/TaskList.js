import React from "react";
import Task from "./Task";

function TaskList({ displayTask, deletTask }) {


  return (
    <div className="tasks">
      {displayTask.map((task, index) => (
        <Task
          key={index}
          task={task.text}
         category= {task.category}
          deletTask={deletTask}>
        </Task>
          ))
     }   
 
    </div>
  );

  }
export default TaskList;
