import { useState } from "react";
const EditData = ({onEdit}) => {
  const [edit, setEdit] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <button
        onClick={() => {
          setEdit("");
          onEdit(edit);
        }}
      >
        Add
      </button>
    </>
  );
};
