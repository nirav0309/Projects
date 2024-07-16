import { useState } from "react";

const AddTodo = ({ onAddData }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTitle("");
          onAddData(title);
        }}
      >
        Add
      </button>
    </>
  );
};

export { AddTodo };
