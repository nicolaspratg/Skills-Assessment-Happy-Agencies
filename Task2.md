# Task 2: Enhanced Counter Component

## Objective

Enhance the `Counter` component created in Task 1 by adding additional features and improving functionality.

## Requirements

- Add an input field that allows users to set a custom increment/decrement value.
- Add a "Reset" button that sets the count back to 0.
- Display a message when the count reaches a certain threshold (e.g., 10) that says "High count!".
- Use React's `useEffect` hook to log a message to the console whenever the count changes.

## Instructions

1. Copy the `Counter.js` file created in Task 1 to a new file named `EnhancedCounter.js`.
2. Implement the following enhancements to the `Counter` component:
   - Add an input field to set a custom step value for incrementing and decrementing the count.
   - Add a "Reset" button to reset the count to 0.
   - Display a message "High count!" when the count reaches or exceeds 10.
   - Use `useEffect` to log a message to the console whenever the `count` state changes.
3. Style the component to make it visually appealing (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State for the Step Value**:
   - Use `useState` to manage a new state variable `step` to hold the custom increment/decrement value.

2. **Creating Increment and Decrement Functions with Step**:
   - Modify the `increment` and `decrement` functions to use the `step` value instead of a fixed value of 1.

3. **Adding a Reset Button**:
   - Add a new button labeled "Reset" that sets the `count` state back to 0 when clicked.

4. **Displaying a High Count Message**:
   - Conditionally render a message "High count!" when the `count` is 10 or greater.

5. **Using `useEffect` to Log Count Changes**:
   - Use the `useEffect` hook to log a message to the console whenever the `count` state changes.

## FAQs

### 1. How do I manage multiple pieces of state in a functional component?

You can call the `useState` hook multiple times to create separate state variables for each piece of state you need to manage. In this task, we use `useState` for both `count` and `step`.

### 2. How do I conditionally render elements in React?

You can use JavaScript conditional expressions inside your JSX to conditionally render elements. For example, to display a message when the count is 10 or greater, use `{count >= 10 && <p>High count!</p>}`.

### 3. What is the purpose of the `useEffect` hook?

The `useEffect` hook lets you perform side effects in functional components, such as logging to the console, fetching data, or interacting with the DOM. In this task, we use `useEffect` to log a message whenever the count changes.

### 4. How do I handle input fields in React?

You can handle input fields by using controlled components. This means the input field's value is controlled by the state, and you update the state when the input value changes. Use the `onChange` event handler to update the state.

### 5. How do I reset the state of a component?

To reset the state, you can define a function that sets the state variables back to their initial values. For example, to reset the `count` state to 0, you can define a `reset` function that calls `setCount(0)`.

## Submission

Once you have completed Task 2, commit the `EnhancedCounter.js` file to your forked repository and include a note in your README file explaining how to run and test this component.

Good luck and happy coding!
