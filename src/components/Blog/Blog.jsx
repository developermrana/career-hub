import React from "react";

const Blog = () => {
  return (
    <div className="My-Container">
      <div>
        <h2 className="text-2xl">Question: When should you use context api?</h2>
        <p>
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">Question: What is custom hook?</h2>
        <p>
          Custom React JS hooks are reusable functions that a React JS software
          developer can use to add special and unique functionality to the React
          applications. Usually, if there is a requirement to add a feature, one
          can install a third-party library and solve the problem.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">Question: What is useRef in react?</h2>
        <p>
          useRef is a built-in React hook that accepts one argument as the
          initial value and returns a reference . A reference is an object
          having a special property current .
        </p>
      </div>
      <div>
        <h2 className="text-2xl">Question: What is useMemo in react?</h2>
        <p>
          React has a built-in hook called useMemo that allows you to memoize
          expensive functions so that you can avoid calling them on every
          render. You simple pass in a function and an array of inputs and
          useMemo will only recompute the memoized value when one of the inputs
          has changed.
        </p>
      </div>
    </div>
  );
};

export default Blog;
