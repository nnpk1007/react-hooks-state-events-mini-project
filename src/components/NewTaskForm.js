import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // define two state variables: 
  // "text" to track the input value for the task details and "selectedCategory" to track the selected category.
  const [text, setText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categories[1])

  // define the handleTextChange function, which updates the text state when the input value changes.
  function handleTextChange(event) {
    setText(event.target.value)
  }

  // define the handleCategoryChange function, which updates the selectedCategory state when the category select value changes.
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  // define the handleSubmit function, which is called when the form is submitted.
  function handleSubmit(event) {
    event.preventDefault()

    // create the new task object with the text and select category
    const newTask = {
      text: text,
      category: selectedCategory
    }
    // call the onTaskFormSubmit with newTask
    onTaskFormSubmit(newTask)

    setText("")
    setSelectedCategory(categories[1])
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectedCategory} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {categories.filter((category) => category !== "All").map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
