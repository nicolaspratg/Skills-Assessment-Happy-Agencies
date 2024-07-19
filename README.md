# React Developer Assessment

Welcome to the React Developer Assessment! This assessment is designed to evaluate your skills and knowledge in React development. Please complete the tasks below and submit your code as a GitHub repository.

## Instructions

1. **Fork this repository** to your GitHub account.
2. Complete the tasks outlined below.
3. Push your code to your forked repository.
4. Submit a pull request to this repository with your completed assessment.
5. Include a README file with any additional notes or instructions on how to run your code.

## Task 1: Create a Counter Component

Create a functional component called `Counter` that displays a count and has two buttons: "Increment" and "Decrement". The count should start at 0 and update when the buttons are clicked.

### Requirements

- Use React's `useState` hook to manage the count state.
- Display the current count.
- Provide "Increment" and "Decrement" buttons to update the count.
- The count should not go below 0.

### Example

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
