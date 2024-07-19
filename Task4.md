# Task 4: Fetch and Display Data

## Objective

Create a functional component called `DataFetcher` that fetches data from an API and displays it in a list. Use the following API endpoint: `https://jsonplaceholder.typicode.com/posts`.

## Requirements

- Use React's `useState` and `useEffect` hooks to manage and fetch the data.
- Display a loading indicator while the data is being fetched.
- Display the data in a list format once it has been fetched.
- Handle and display any errors that occur during the fetch operation.

## Instructions

1. Create a new file named `DataFetcher.js` in the `src` directory of your React project.
2. Implement the `DataFetcher` component as described above.
3. Style the component to make it visually appealing (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State with `useState`**:
   - Import `useState` from React.
   - Initialize state variables for `data`, `loading`, and `error`.

2. **Fetching Data with `useEffect`**:
   - Import `useEffect` from React.
   - Use the `useEffect` hook to fetch data when the component mounts.
   - Update the `data`, `loading`, and `error` state variables based on the fetch results.

3. **Displaying Loading Indicator**:
   - Conditionally render a loading indicator while the data is being fetched.

4. **Displaying Fetched Data**:
   - Map over the fetched data and display it in a list format.

5. **Handling and Displaying Errors**:
   - Catch any errors that occur during the fetch operation.
   - Display an error message if an error occurs.

## FAQs

### 1. How do I fetch data in a React component?

You can fetch data in a React component using the `fetch` API or any other data-fetching library (e.g., Axios). Use the `useEffect` hook to perform the fetch operation when the component mounts.

### 2. How do I manage loading and error states?

You can manage loading and error states using state variables. Set a `loading` state to `true` before starting the fetch operation and to `false` after it completes. Use an `error` state to store any errors that occur during the fetch.

### 3. How do I display a loading indicator?

You can display a loading indicator by conditionally rendering a loading message or spinner when the `loading` state is `true`.

### 4. How do I handle and display errors?

You can handle errors by catching them during the fetch operation and updating an `error` state variable. Display an error message when the `error` state is not `null`.

### 5. How do I display the fetched data?

You can display the fetched data by mapping over the `data` state variable and rendering each item in a list format.

## Submission

Once you have completed Task 4, commit the `DataFetcher.js` file to your forked repository and include a note in your README file explaining how to run and test this component.

Good luck and happy coding!
