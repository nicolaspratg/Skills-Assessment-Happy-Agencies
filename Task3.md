# Task 3: Create a Form Component

## Objective

Create a functional component called `UserForm` that contains a form with the following fields: name, email, and message. When the form is submitted, display the form data below the form.

## Requirements

- Use React's `useState` hook to manage the form state.
- Handle form submission to display the form data.
- Perform basic form validation (e.g., ensure all fields are filled out).
- Use controlled components for form inputs.

## Instructions

1. Create a new file named `UserForm.js` in the `src` directory of your React project.
2. Implement the `UserForm` component as described above.
3. Style the component to make it visually appealing (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State with `useState`**:
   - Import `useState` from React.
   - Initialize state variables for `name`, `email`, and `message`.

2. **Creating Controlled Components for Form Inputs**:
   - Use `value` and `onChange` props on input fields to create controlled components.
   - Update state variables when input values change.

3. **Handling Form Submission**:
   - Define a function `handleSubmit` to handle form submission.
   - Prevent the default form submission behavior using `event.preventDefault()`.
   - Validate that all fields are filled out before displaying the form data.

4. **Displaying Submitted Data**:
   - Conditionally render the submitted data below the form after successful submission.

## FAQs

### 1. What are controlled components?

Controlled components are input elements whose value is controlled by React state. They use the `value` and `onChange` props to keep the input values in sync with the state.

### 2. How do I handle form submission in React?

You handle form submission by defining a function that is called when the form is submitted. This function should prevent the default form submission behavior and handle any necessary logic, such as form validation and state updates.

### 3. How do I perform basic form validation?

Basic form validation can be performed by checking if the required fields are not empty before submitting the form. You can display an error message or prevent form submission if any field is empty.

### 4. How do I display submitted form data?

You can display the submitted form data by conditionally rendering the data below the form after the form is successfully submitted. Use state variables to store the submitted data and render it as needed.

## Submission

Once you have completed Task 3, commit the `UserForm.js` file to your forked repository and include a note in your README file explaining how to run and test this component.

Good luck and happy coding!
