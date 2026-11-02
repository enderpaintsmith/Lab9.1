# Lab 9.1: Component Basics

## Project Overview

For this lab, I developed a React component library using TypeScript. The objective was to create reusable components that could be used across different applications while practicing TypeScript interfaces, prop handling, and component composition. I also worked on making the components flexible enough to handle different situations without having to rewrite the same code.

The project consists of three components: AlertBox, UserProfileCard, and ProductDisplay. Each component serves a different purpose while following the same general approach to organization, functionality, and reusability.

## Technologies Used

I used React and TypeScript to develop the components, along with Vite to set up and run the application. I also used Vitest, React Testing Library, and jsdom to create automated tests and verify that the components functioned correctly.

## Components

### AlertBox

The AlertBox component displays notifications based on four different types: success, error, warning, and info. Each type has its own styling to distinguish the message being displayed. The component accepts a required type and message, along with an optional onClose function that allows the user to dismiss the notification. It also supports additional content through the children prop, making it useful for different types of notifications.

### UserProfileCard

The UserProfileCard component displays user information, including a name, email address, and role. It also supports an optional profile image and an Edit Profile button. I used optional props to control whether the email and role are displayed, along with a callback function to handle editing a user profile. The component also accepts additional content through the children prop.

### ProductDisplay

The ProductDisplay component displays product information, including its name, price, description, and availability. It includes optional props that determine whether the description and stock status are visible. I also implemented an Add to Cart button that can trigger a callback function when clicked. If the product is out of stock, the button becomes disabled. Like the other components, it supports additional content through the children prop.

## Running the Project

The project uses npm to manage dependencies and Vite as its development server. After installing the dependencies with `npm install`, the application can be started using `npm run dev`. A production build can be generated using `npm run build`.

## Testing

I used Vitest and React Testing Library to create automated tests for all three components. The tests verify that the components display the correct information, handle optional props, respond to user interactions, and render additional content.

I tested the AlertBox component with four tests, UserProfileCard with five tests, and ProductDisplay with seven tests. All 16 tests passed successfully. The complete test suite can be run using `npx vitest run`.

## Reflection

### How did you handle optional props?

I used optional properties in my TypeScript interfaces to allow certain features to be included or excluded depending on how the component is being used. I also assigned default values to some props so that the components would still function without requiring every property to be passed in. This gave me more flexibility and allowed me to reuse the same components in different situations.

### What considerations went into designing the interfaces?

I wanted the interfaces to be organized, straightforward, and reusable. I separated the user and product information into their own interfaces and defined the props for each component individually. This helped keep the code structured and made it easier to understand what information each component required. I also tried to make the interfaces flexible without making them unnecessarily complicated.

### How did you ensure type safety?

I used TypeScript interfaces to define the types of data that each component accepts, including strings, booleans, objects, and callback functions. I also used a union type for the AlertBox component to limit the available notification types. This helped prevent incorrect values from being passed into the components and made it easier to identify potential errors while developing the application.

### What challenges did you encounter with component composition?

One of the things I had to work through was understanding how the children prop works and how additional content can be passed into a component. Using ReactNode helped me understand how components can accept different types of content while keeping their original structure and functionality. This was useful for understanding how reusable components can be adapted without having to modify the component itself.

### What did you learn from this lab?

This lab gave me more experience working with React and TypeScript together. I developed a better understanding of how interfaces and props work, how to organize components, and how to make them reusable. I also gained experience with automated testing and learned how to verify component functionality beyond manually testing the application in the browser.

## Conclusion

Overall, this lab helped me build on my understanding of React, TypeScript, and component-based development. I gained more experience structuring reusable components, managing props, implementing callback functions, and testing functionality. These are skills that I can continue developing and applying to larger projects as I progress through the software engineering program.