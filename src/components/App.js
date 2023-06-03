import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete))
  }
  
  function handleCategoryChange(category) {
    setSelectedCategory(category)
  }

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const filteredCategory = selectedCategory === "All" ? tasks : tasks.filter((task) =>task.category === selectedCategory)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}  
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit = {addTask}/>
      <TaskList tasks={filteredCategory} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

