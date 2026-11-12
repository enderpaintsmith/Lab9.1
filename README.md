# Lab 10.1: React Counter with useEffect

## Project Overview

For this lab, I developed a React counter application using `useState` and `useEffect`. The objective was to practice managing state, handling side effects, and understanding how React updates components when values change.

The application includes basic counter controls along with several additional features to make it more interactive.

## Features and Functionality

The counter starts at 0 and allows the user to increase, decrease, or reset the count.

I also implemented the following features:

- **Count History:** Keeps track of previous count values and displays them in a list.
- **Auto-Save:** Uses `useEffect` to save the current count to local storage when it changes.
- **Keyboard Controls:** Allows the user to increase the count with ArrowUp and decrease it with ArrowDown.
- **Reset:** Returns the count to 0 and clears the count history.
- **Step Input:** Allows the user to choose how much the count increases or decreases.

## React Hooks and Implementation

I used `useState` to manage the current count, count history, and step value.

I used `useEffect` to handle saving the count and managing keyboard event listeners. I also worked with dependency arrays to control when effects run and cleanup functions to remove event listeners when they are no longer needed.

For the counter functions, I practiced updating state based on its previous value rather than directly changing the existing state.

## Running the Project

Install dependencies:

`npm install`

Start the application:

`npm run dev`

Create a production build:

`npm run build`

## Reflection

This lab helped me better understand how `useState` and `useEffect` work together. I practiced managing multiple state values, updating the counter based on user interactions, and using effects for functionality outside of the normal rendering process.

One of the more important parts was understanding when an effect runs and why cleanup functions are necessary, particularly when working with keyboard events.

Overall, this lab gave me more experience building interactive React components and managing state as an application becomes more complex.