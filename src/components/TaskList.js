import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text} 
          category={task.category}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

