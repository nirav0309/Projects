import { AddTodo } from "./addtodo";
// import { useState } from "react";
import { TaskList } from "./tasklist";

import { useReducer } from "react";
const TaskApp = () => {
  //   const [data, setData] = useState(initialData);  using use state

  //   const handleAddData = (title) => {
  //     setData([...data, { id: nextId++, title: title, done: false }]);
  //   };

  //   const handleChangeTodo = (nextData) => {
  //     setData(
  //       data.map((e) => {
  //         if (e.id === nextData.id) {
  //           return nextData;
  //         } else {
  //           return e;
  //         }
  //       })
  //     );
  //   };

  //   const handleDeleteTodo = (Id) => {
  //     setData(data.filter((t) => t.id !== Id));
  //   };

  //   const [tasks, setTasks] = useState(initialTasks);

  const [data, dispatch] = useReducer(taskReducer, initialData);
  const handleAddData = (title) => {
    dispatch({
      type: "added",
      id: nextId++,
      title: title,
    });
  };

  const handleChangeTodo = (nextData) => {
    dispatch({
      type: "changed",
      task: nextData,
    });
  };

  const handleDeleteTodo = (Id) => {
    dispatch({
      type: "deleted",
      id: Id,
    });
  };

  return (
    <>
      <AddTodo onAddData={handleAddData} />
      <TaskList
        data={data}
        onChangeData={handleChangeTodo}
        onDeleteData={handleDeleteTodo}
      />
    </>
  );
};

// const taskReducer = (data, action) => {  using if else if
//   if (action.type === "added") {
//     return [
//       ...data,
//       {
//         id: nextId++,
//         title: action.title,
//         done: false,
//       },
//     ];
//   } else if (action.type === "changed") {
//     return data.map((item) => {
//       if (item.id === action.task.id) {
//         return action.task;
//       } else {
//         return item;
//       }
//     });
//   } else if (action.type === "deleted") {
//     return data.filter((t) => t.id !== action.id);
//   } else {
//     throw Error("Wrong Action: " + action.type);
//   }
// };

const taskReducer = (data, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...data,
        {
          id: nextId++,
          title: action.title,
          done: false,
        },
      ];
    }
    case "changed": {
      return data.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    }

    case "deleted": {
      return data.filter((e) => e.id !== action.id);
    }

    default: {
      throw Error("Unknown Action: " + action.type);
    }
  }
};

let nextId = 3;
const initialData = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export { TaskApp };
