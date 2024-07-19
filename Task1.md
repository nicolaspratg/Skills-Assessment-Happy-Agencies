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

### Example Code

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.count}>{count}</h1>
      <button style={styles.button} onClick={increment}>Increment</button>
      <button style={styles.button} onClick={decrement}>Decrement</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  count: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
  },
};

export default Counter;
