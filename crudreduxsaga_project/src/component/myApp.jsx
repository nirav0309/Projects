import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserRequest,
  deleteUserRequest,
  editUserRequest,
  fetchUserRequest,
} from "./userSlice";

const MyComponent = () => {
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState(null);
  const ref = useRef(null)

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  const handleAddItem = () => {
    if (newItem) {
      dispatch(addUserRequest({ name: newItem }));
      setNewItem("");
    }
  };

  const handleEditItem = () => {
    ref.current.select()
    if (editItem && editItem.name) {
      dispatch(editUserRequest(editItem));
      setEditItem(null);
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteUserRequest(id));
  };

  return (
    <div className="app">
      {editItem ? (
        <div>
          <input
            type="text"
            value={editItem.name}
            ref={ref}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
          <button onClick={handleEditItem}>Update Item</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      )}

      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => setEditItem(item)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MyComponent };


//-------------------------------------------------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addUserRequest,
//   deleteUserRequest,
//   editUserRequest,
//   fetchUser,

// } from "./userSlice";

// const MyComponent = () => {
//   const [newItem, setNewItem] = useState("");
//   const [editItem, setEditItem] = useState(null);

//   const dispatch = useDispatch();
//     const { users } = useSelector((state) => state.user);
//     console.log("users>>>>>>>>", users)

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, [dispatch]);

//   const handleAddItem = () => {
    
//   };

//   const handleEditItem = () => {

//   };
//   const handleDeleteItem = (id) => {
    
//   };

//   return (
//     <div className="app">
//       {editItem ? (
//         <div>
//           <input
//             type="text"
//             value={editItem.name}
//             onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
//           />
//           <button onClick={handleEditItem}>Update Item</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             value={newItem}
//             onChange={(e) => setNewItem(e.target.value)}
//           />
//           <button onClick={handleAddItem}>Add Item</button>
//         </div>
//       )}

//       <ul>
//         {users.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => setEditItem(item)}>Edit</button>
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export { MyComponent };
