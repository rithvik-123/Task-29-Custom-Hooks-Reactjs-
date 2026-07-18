# Task 29: ReactJS Custom Hooks

**Author:** D P Rithvik Kumar

## Overview of Decisions & Learning Process
The goal of this assignment was to abstract data-fetching logic out of the main UI component to make the codebase cleaner and more reusable. 

To achieve this, I created a custom hook named `useFetch` inside a dedicated `hooks` folder. 
1. **State Management:** I used three standard state variables: `data` (to hold the API response), `loading` (a boolean to trigger the loading screen), and `error` (to catch network failures).
2. **Network Resilience:** Inside the `useEffect`, I utilized an asynchronous function with a standard `try...catch` block. If a user disconnects their Wi-Fi while the component mounts, the `fetch` API throws a "Failed to fetch" TypeError. The catch block intercepts this, sets the `error` state, and gracefully displays "Error : Failed to fetch" on the UI instead of breaking the application.
3. **API Choice:** I utilized the JSONPlaceholder photos endpoint because it perfectly maps to the dummy images and latin strings required by the design spec.

## How to Run
1. Run `npm install`.
2. Run `npm run dev`.
3. To test the error handling, turn off your internet connection and refresh the page.