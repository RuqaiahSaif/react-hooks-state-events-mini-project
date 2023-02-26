import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setItasks] = useState(TASKS);
  const[selectCategories,setSelectcategories]=useState("All")

  function handleDelete(deltask){
    setItasks(tasks.filter((task) => task.text !== deltask))
  }
  const displayTask = tasks.filter(
    (task) => selectCategories === "All" || task.selectCategories === selectCategories
  );
function addTask(newTask){
  setItasks([...tasks, newTask])
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES}
        selectCategories={selectCategories}
        onSelectcategories={setSelectcategories}/>
      <NewTaskForm categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={addTask} />
      <TaskList displayTask={displayTask} deletTask={handleDelete} />
    </div>
  );
}

export default App;
