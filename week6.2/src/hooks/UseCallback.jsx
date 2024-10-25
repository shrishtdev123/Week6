export const UseCallback=()=>{
     
    // The useCallback hook is a built-in React hook that helps you optimize the performance of your functional components by memoizing callback functions. This can prevent unnecessary re-renders and help avoid performance bottlenecks, especially in components that rely heavily on passing functions as props to child components.

    // Why Use useCallback?
//In React, when you pass a function as a prop to a child component, a new instance of that function is created each time the parent component re-renders. This can lead to unnecessary re-renders of the child component, as React will see the prop as a different reference even if the function's logic hasn’t changed.

//By using useCallback, you can memoize the function and keep the same reference as long as the dependencies remain unchanged. This helps to optimize performance by preventing unnecessary renders.

//How useCallback Works
//The useCallback hook takes two arguments:

//The function you want to memoize.
//An array of dependencies: The function will only be recreated if one of the dependencies changes.

  //The useCallback hook is a powerful tool for optimizing React components by memoizing functions and preventing unnecessary re-renders. By understanding when and how to use it, you can enhance the performance of your React applications effectively
      return <div>
             <h1>i am from useCallback and from where you</h1>
      </div>
}