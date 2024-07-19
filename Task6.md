# Task 6: Create a Modal Component

## Objective

Create a functional component called `Modal` that displays its children in a modal dialog. Add a button to close the modal.

## Requirements

- Use React's `useState` hook to manage the modal's open/closed state.
- The modal should be centered on the screen.
- Add a backdrop that covers the rest of the screen when the modal is open.
- Clicking the backdrop or a close button should close the modal.
- Use CSS to style the modal and backdrop.

## Instructions

1. Create a new file named `Modal.js` in the `src` directory of your React project.
2. Implement the `Modal` component as described above.
3. Style the component to make it visually appealing (optional, but encouraged).

## Detailed Explanation

### Step-by-Step Guide

1. **Setting Up State with `useState`**:
   - Import `useState` from React.
   - Initialize a state variable `isOpen` to manage the modal's open/closed state.

2. **Creating the Modal Structure**:
   - Create a `div` for the modal content and another `div` for the backdrop.
   - Conditionally render the modal and backdrop based on the `isOpen` state.

3. **Adding Open and Close Functions**:
   - Create a function `openModal` to set `isOpen` to `true`.
   - Create a function `closeModal` to set `isOpen` to `false`.

4. **Handling Click Events**:
   - Add an `onClick` event to the backdrop to close the modal when clicked.
   - Add a button inside the modal content to close the modal when clicked.

5. **Styling the Modal and Backdrop**:
   - Use CSS to center the modal on the screen and style the backdrop.

## FAQs

### 1. How do I manage the open/closed state of a modal?

You can manage the open/closed state of a modal using a state variable, typically a boolean. Use the `useState` hook to initialize and update this state variable.

### 2. How do I conditionally render elements in React?

You can conditionally render elements in React by using JavaScript conditional expressions inside your JSX. For example, `{isOpen && <div>Modal Content</div>}` will render the modal content only when `isOpen` is `true`.

### 3. How do I handle click events in React?

You can handle click events in React by adding `onClick` event handlers to elements. Define a function to handle the event and set the desired state or perform actions within that function.

### 4. How do I center a modal on the screen with CSS?

To center a modal on the screen with CSS, you can use the following styles:
```css
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
