# Lab 9.1: Component Basics

## Project Overview

For this lab, I developed a small React application using TypeScript. The objective was to create reusable components while practicing interfaces, props, and component composition.

The project consists of three main components: AlertBox, UserProfileCard, and ProductDisplay. Each component handles a different function, and I used App.tsx to bring everything together and demonstrate how they work.

## Technologies Used

I used React and TypeScript to build the application, along with Vite to run the project. I also used Vitest and React Testing Library to test the components.

## Components

### AlertBox

The AlertBox component displays four types of notifications: success, error, warning, and info. Each notification has its own colors to help distinguish the message being displayed.

I used an object called `alertStyles` to store the colors for each notification type. The component uses the selected type to determine which colors to display.

The component also accepts an optional close function and additional content through `children`. When a close function is provided, a button appears that allows the user to dismiss the notification.

### UserProfileCard

The UserProfileCard component displays a user's name, email address, and role. It can also display a profile image if one is provided.

I included optional settings to control whether the email and role are displayed. Both are shown by default.

The component also includes an optional Edit Profile button. For this lab, clicking the button displays a popup with the user's ID rather than opening an editing form.

Additional content can also be displayed using `children`.

### ProductDisplay

The ProductDisplay component displays a product's name, price, description, and availability.

I used `toFixed(2)` to display the price with two decimal places. I also included optional settings to control whether the description and stock status appear.

The Add to Cart button allows the user to add a product to the cart. The button becomes disabled if the product is out of stock.

The component also supports an optional product image and additional content through `children`.

## How the Application Works

I used App.tsx to display the three components and handle some basic interactions.

The application uses `useState` to keep track of whether the first success alert is visible, which products have been added to the cart, and the message displayed when a product is added.

When the user clicks Add to Cart, the product's ID is added to an array. The application then updates the cart count and displays a confirmation message.

I also used conditional rendering to show or hide certain elements. For example, the first success alert disappears when the user clicks its close button.

The components receive their information through props. I used TypeScript interfaces to define what information each component needs, including which properties are optional.

## Running the Project

Install the project dependencies:

`npm install`

Start the development server:

`npm run dev`

Create a production build:

`npm run build`

## Testing

I used Vitest and React Testing Library to test the three main components. The tests check whether information displays correctly, optional features work, and buttons respond as expected.

I created four tests for AlertBox, five for UserProfileCard, and seven for ProductDisplay.

All 16 automated tests passed successfully. I also confirmed that the project builds without errors and tested the application in the browser.

To run the automated tests:

`npx vitest run`

## Reflection

### How did you handle optional props?

I used optional properties in my TypeScript interfaces so that certain features could be included or excluded depending on how the component is used. I also assigned default values to some props so that I wouldn't have to specify every setting each time.

### What considerations went into designing the interfaces?

I wanted to keep the interfaces organized and easy to understand. I separated the user and product information into their own interfaces and defined the props for each component. This helped me keep track of what information each component needed.

### How did you ensure type safety?

I used TypeScript to define the types of information each component accepts, including strings, booleans, and functions. I also limited the AlertBox types to four specific values. This helped me identify incorrect values and avoid potential errors.

### What challenges did you encounter with component composition?

One thing I had to work through was understanding how `children` works. I learned that I could pass additional content into a component without changing the component itself. Using `ReactNode` helped me understand how that content is defined in TypeScript.

### What did you learn from this lab?

This lab helped me get more comfortable working with React and TypeScript together. I practiced creating components, passing props, working with interfaces, and handling basic user interactions.

I also gained more experience testing my code and making sure the application worked as expected.

## Conclusion

Overall, this lab helped me better understand how React components are organized and how they work together. I was able to practice building reusable components, managing props, and testing their functionality. These are skills I can continue developing as I work on larger applications.