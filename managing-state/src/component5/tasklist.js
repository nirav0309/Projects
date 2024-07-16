import { useState } from "react";

const TaskList = ({ data, onChangeData, onDeleteData }) => {
  return (
    <>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <Task
                todo={item}
                onChange={(updatedItem) => onChangeData(updatedItem)}
                onDelete={() => onDeleteData(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Task = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  let DataContent;

  if (isEditing) {
    DataContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    DataContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {DataContent}
        <button onClick={onDelete}>Delete</button>
      </label>
    </>
  );
};

export { TaskList };
