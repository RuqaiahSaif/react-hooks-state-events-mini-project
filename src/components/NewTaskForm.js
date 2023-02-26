import React from "react";
import { useState } from "react";
function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }
  function handletextChange(e){
    setText(e.target.value)
  }
  function handlecategoryChange(e) {
    setCategory(e.target.value)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" 
        name="text"
          value={text} 
          onChange={handletextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handlecategoryChange} >
         {
            categories.map((category)=>(
              <option >{category}</option>
            ))
         }
          {/* render <option> elements for each category here */}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
