import { memo } from "react";

const ExampleTodos = ({ todos, addTodos, lastTodo }) => {
  console.log("child component render");
  return (
    <>
      <button onClick={addTodos}>Add Todo</button>
      {todos.map((element, index) => (
        <p key={index} ref={index === todos.length - 1 ? lastTodo : null}>
          {element}
        </p>
      ))}
    </>
  );
};

// export default memo(ExampleTodos);

export const MemoHigherOrder = memo(ExampleTodos) //here const MemoHigherOrder is a higher-order component
