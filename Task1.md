# Task 1: Create a Counter Component

## Objective

Create a functional React component called `Counter` that displays a count and has two buttons: "Increment" and "Decrement". The count should start at 0 and update when the buttons are clicked.

## Requirements

- Use React's `useState` hook to manage the count state.
- Display the current count.
- Provide "Increment" and "Decrement" buttons to update the count.
- The count should not go below 0.
- The count should increment and decrement by 1.

## Instructions

1. Create a new file named `Counter.js` in the `src` directory of your React project.
2. Implement the `Counter` component as described above.
3. Style the component to make it visually appealing (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State with `useState`**:
   - Import `useState` from React.
   - Initialize a state variable `count` with a default value of 0.

2. **Creating Increment and Decrement Functions**:
   - Define a function `increment` that increases the `count` state by 1.
   - Define a function `decrement` that decreases the `count` state by 1 but ensures it does not go below 0.

3. **Rendering the Component**:
   - Display the current `count` in an `<h1>` element.
   - Add two buttons for "Increment" and "Decrement" with `onClick` handlers to call the respective functions.

4. **Styling the Component**:
   - Use inline styles or a CSS file to style the component for better visual appeal (optional).

## FAQs

### 1. What is the `useState` hook?

The `useState` hook is a special function in React that allows you to add state management to your functional components. It returns an array with two elements: the current state value and a function to update it.

### 2. How do I prevent the count from going below 0?

In the `decrement` function, you can add a condition to check if the current count is greater than 0 before decrementing it. This ensures that the count does not go below 0.

### 3. Can I use CSS for styling instead of inline styles?

Yes, you can use either inline styles or a separate CSS file for styling. Inline styles are used in the example for simplicity, but using a CSS file is perfectly acceptable and often preferred for larger projects.

### 4. Do I need to handle edge cases, like large numbers?

For this basic task, handling very large numbers is not necessary. However, you can add additional checks or limits if you wish to showcase more robust handling.

### 5. How do I test the component?

You can test the component by running your React application and interacting with the buttons to ensure the count updates correctly. For automated testing, you can write unit tests using a testing library like Jest and React Testing Library.

## Submission

Once you have completed Task 1, commit the `Counter.js` file to your forked repository and include a note in your README file explaining how to run and test this component.

Good luck and happy coding!
