import { useState } from "react";
const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];
const UpdateItem = () => {
  const [value, setValue] = useState(initialItems);
  const [change, setChange] = useState(0);

  const selectedItem = value.find((e) => {
    return e.id === change;
  });

  const handleItemChange = (id, e) => {
    setValue(
      value.map((elm) => {
        if (elm.id === id) {
          return {
            ...elm,
            title: e.target.value,
          };
        } else {
          return elm;
        }
      })
    );
  };

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {value.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setChange(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
};

export { UpdateItem };
