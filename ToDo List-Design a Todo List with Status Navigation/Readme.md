HTML
<!DOCTYPE html>: Declares the document as HTML5.
<html lang="en">: Specifies the language of the document as English.
<head>: Contains metadata and links:
<meta charset="UTF-8">: Sets the character encoding to UTF-8.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Ensures proper scaling on mobile devices.
<title>Todo List</title>: Sets the title of the webpage.
<link rel="stylesheet" href="style.css">: Links to the external CSS file for styling.
<body>: Contains the main content of the document:
<div class="todo-list">: Main container for the todo list columns.
<div class="status backlog">: Column for tasks in the backlog status.
<h2>Backlog</h2>: Column heading.
<ul id="backlog-list"></ul>: List container for backlog tasks.
<div class="status to-do">: Column for tasks in the to-do status.
<h2>To Do</h2>: Column heading.
<ul id="to-do-list"></ul>: List container for to-do tasks.
<div class="status ongoing">: Column for tasks in the ongoing status.
<h2>Ongoing</h2>: Column heading.
<ul id="ongoing-list"></ul>: List container for ongoing tasks.
<div class="status done">: Column for tasks in the done status.
<h2>Done</h2>: Column heading.
<ul id="done-list"></ul>: List container for done tasks.
<script src="script.js"></script>: Links to the external JavaScript file for functionality.
JavaScript
const statuses = ['backlog', 'to-do', 'ongoing', 'done'];: Defines the list statuses.
const lists = statuses.map(status => document.getElementById(${status}-list));: Maps status names to corresponding list elements.
const todos = [ ... ];: Array of initial todo items.
todos.forEach((todo, index) => { ... });: Iterates over the todos and assigns each to a status.
createTaskElement(todo, status, list);: Creates and appends each task to its list.
function createTaskElement(taskContent, status, list) { ... }: Creates a new list item for a task and appends it to the specified list.
function moveTask(task, direction) { ... }: Moves a task between lists based on the direction (-1 for left, 1 for right).
const fromStatus = task.dataset.status;: Gets the current status of the task.
const nextStatus = statuses[nextIndex];: Determines the new status for the task.
fromList.removeChild(task);: Removes the task from its current list.
toList.appendChild(task);: Adds the task to the new list.
function updateTaskButtons(task, status) { ... }: Updates the buttons for moving a task based on its current status.
const existingPrevBtn = task.querySelector('button.move-btn[data-direction="-1"]');: Removes any existing move buttons.
if (status !== 'backlog') { ... }: Adds a "move left" button if the status is not 'backlog'.
if (status !== 'done') { ... }: Adds a "move right" button if the status is not 'done'.
CSS
body { ... }: Styles the body of the document:
font-family: Arial, sans-serif;: Sets the font.
background-color: #f4f4f4;: Sets a light gray background color.
margin: 0; padding: 0;: Removes default margin and padding.
display: flex; justify-content: center; align-items: center; height: 100vh;: Centers the content vertically and horizontally.
.todo-list { ... }: Styles the container for the todo columns:
display: flex; justify-content: space-between;: Arranges columns side by side.
width: 80%; max-width: 1200px;: Sets the width with a maximum limit.
.status { ... }: Styles each status column:
border: 2px solid #007bff; border-radius: 8px;: Adds a border with rounded corners.
padding: 10px; width: 23%; background-color: #ffffff;: Adds padding and sets the background color.
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); position: relative;: Adds a shadow and sets position.
.status h2 { ... }: Styles the heading of each column:
text-align: center; margin-bottom: 10px;: Centers text and adds bottom margin.
.status ul { ... }: Styles the list within each column:
list-style: none; padding: 0; margin: 0;: Removes default list styles.
.status li { ... }: Styles each task list item:
display: flex; justify-content: space-between; align-items: center;: Aligns items within the list item.
background-color: #e0e0e0; padding: 8px; margin-bottom: 5px; border-radius: 5px;: Sets background color, padding, margin, and rounded corners.
button { ... }: Styles the buttons:
background-color: #007bff; color: white; border: none; padding: 5px 10px; border-radius: 5px;: Sets background color, text color, padding, and rounded corners.
cursor: pointer; font-size: 14px; margin: 0;: Adds a pointer cursor and sets font size.
button:hover { background-color: #0056b3; }: Changes button background color on hover.
button.move-btn { margin-left: 0; }: Removes left margin from move buttons.
button.disabled { background-color: #ccc; cursor: not-allowed; }: Styles disabled buttons with a gray background and not-allowed cursor.
@media (max-width: 768px) { ... }: Applies styles for smaller screens:
.todo-list { flex-direction: column; }: Stacks columns vertically.
.status { width: 100%; margin-bottom: 20px; }: Makes each column full width and adds bottom margin.