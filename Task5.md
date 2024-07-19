# Task 5: Create a Todo List Component

## Objective

Create a functional component called `TodoList` that allows users to add, remove, and toggle the completion status of todo items.

## Requirements

- Use React's `useState` hook to manage the todo list state.
- Allow users to add new todo items.
- Allow users to remove existing todo items.
- Allow users to toggle the completion status of todo items.
- Style the component to differentiate between completed and incomplete items.

## Instructions

1. Create a new file named `TodoList.js` in the `src` directory of your React project.
2. Implement the `TodoList` component as described above.
3. Style the component to make it visually appealing and to differentiate between completed and incomplete items (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State with `useState`**:
   - Import `useState` from React.
   - Initialize a state variable `todos` as an array to hold the todo items.
   - Initialize a state variable `newTodo` to manage the input for a new todo item.

2. **Adding New Todo Items**:
   - Create an input field to capture the new todo item text.
   - Create a function `addTodo` that adds the new todo item to the `todos` array and clears the input field.

3. **Removing Todo Items**:
   - Create a function `removeTodo` that removes a todo item from the `todos` array based on its index.

4. **Toggling Completion Status**:
   - Create a function `toggleTodo` that toggles the `completed` status of a todo item.

5. **Rendering the Todo List**:
   - Map over the `todos` array to display each todo item.
   - Conditionally style todo items based on their completion status.

## FAQs

### 1. How do I manage a list of items in React?

You can manage a list of items in React using an array state variable. Use `useState` to initialize the array and provide functions to add, remove, and update items in the array.

### 2. How do I handle form inputs in React?

You can handle form inputs by using controlled components. Use the `value` and `onChange` props to keep the input value in sync with the state and update the state when the input value changes.

### 3. How do I add new items to a list?

To add new items to a list, create a function that updates the list state by concatenating the new item to the existing array. Use the spread operator to create a new array with the existing items and the new item.

### 4. How do I remove items from a list?

To remove items from a list, create a function that filters out the item to be removed from the array. Use the `filter` method to create a new array without the specified item.

### 5. How do I toggle the completion status of items?

To toggle the completion status of items, create a function that maps over the array and updates the `completed` property of the specified item. Use the `map` method to create a new array with the updated item.

## Submission

Once you have completed Task 5, commit the `TodoList.js` file to your forked repository and include a note in your README file explaining how to run and test this component.

Good luck and happy coding!
