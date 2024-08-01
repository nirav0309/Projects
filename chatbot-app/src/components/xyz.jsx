import React from "react";
let count = 0;
const MyComponent = () => {
  count = count + 1;
  return (
    <div>
      <h2>count: {count}</h2>
    </div>
  );
};

export default MyComponent;
