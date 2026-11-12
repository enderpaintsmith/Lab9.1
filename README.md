# Lab 9.1: Component Basics

## Project Overview

For this lab, I developed a small React component library using TypeScript. The objective was to practice creating reusable components, defining TypeScript interfaces, handling props, and using component composition.

The application includes three components: AlertBox, UserProfileCard, and ProductDisplay. I used App.tsx to demonstrate how they work together.

## Components and Functionality

### AlertBox

The AlertBox component displays four notification types: success, error, warning, and info. I used an `alertStyles` object to define the colors for each type.

The component accepts a required message and type, an optional `onClose` callback for dismissing notifications, and additional content through `children`.

### UserProfileCard

The UserProfileCard component displays a user's name, email, and role, along with an optional profile image.

I used optional props to control whether the email and role appear. The `onEdit` callback passes the user's ID to a function in App.tsx, which displays a browser alert.

### ProductDisplay

The ProductDisplay component displays a product's name, price, description, and stock availability.

I used optional props to control which details appear and `toFixed(2)` to format prices with two decimal places.

The `onAddToCart` callback passes the product ID to App.tsx. The Add to Cart button is disabled when the product is out of stock.

## Implementation

I used TypeScript interfaces in `src/types/index.ts` to define the props and data types for each component. An interface specifies the properties and types an object should have, while props are information or functions passed between components.

Optional props are marked with `?` and can have default values. I also used a union type to restrict AlertBox to four notification types, helping maintain type safety by limiting the values it accepts.

Callback functions allow child components to call functions provided by their parent component. I used `children` to pass additional content into components and `ReactNode` to define the type of content they can render. This demonstrates component composition, which involves combining components to build an application.

In App.tsx, I used `useState` to manage alert visibility, the shopping cart, and confirmation messages. I also used conditional rendering to display elements based on their props or state.

## Running and Testing

I used React and TypeScript to develop the application, Vite as the development server, and Vitest with React Testing Library for automated testing.

After installing dependencies with `npm install`, the application can be started using `npm run dev`. A production build can be generated using `npm run build`, and the automated tests can be run using `npx vitest run`.

All 16 automated tests passed, and the production build completed without errors.

## Reflection

### How did you handle optional props?

I used optional properties in my TypeScript interfaces and assigned default values where appropriate. This allowed me to control which features appeared without changing the components themselves.

### What considerations did you make when designing the interfaces?

I wanted to keep the interfaces organized and straightforward. I separated the user and product data into their own interfaces and defined the props for each component.

### How did you ensure type safety?

I used TypeScript to define the types of data each component accepts, including strings, booleans, and callback functions. I also used a union type to restrict AlertBox to four notification types.

### What challenges did you face with component composition?

I had to work through understanding how `children` works and how additional content can be passed into components. Using `ReactNode` helped me understand how that content is defined in TypeScript.

## Conclusion

This lab helped me better understand how to create and organize reusable React components. I gained more experience with TypeScript interfaces, prop handling, component composition, state management, and automated testing.