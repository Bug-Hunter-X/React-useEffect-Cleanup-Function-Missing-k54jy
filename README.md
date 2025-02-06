# React useEffect Cleanup Function Missing

This repository demonstrates a common mistake in React's `useEffect` hook: forgetting to include a cleanup function to remove event listeners or other side effects when the component unmounts.  This can lead to memory leaks and unexpected behavior.

## Bug

The `bug.js` file contains a component that adds an event listener using `addEventListener`. However, it's missing a return statement within the `useEffect` which provides the cleanup function.  When the component unmounts, the event listener remains attached causing potential issues.

## Solution

The `bugSolution.js` file demonstrates the correct implementation. A cleanup function is returned from `useEffect`, which removes the event listener using `removeEventListener` when the component is unmounted, preventing memory leaks.