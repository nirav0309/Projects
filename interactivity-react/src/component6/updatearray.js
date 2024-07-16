import { useState } from "react";

let nextId = 3;
const xyz = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const UpdateArray = () => {
  const [value, setValue] = useState("");
  //   const [addValue, setAddValue] = useState([]);
  const [addValue, setAddValue] = useState(xyz);
  

  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          //   setAddValue([...addValue, { id: nextId++, name: value }]);

          let insertAnother = 1;
          if (value !== "" && !addValue.some((e) => e.name === value)) {
            setAddValue([...addValue, { id: nextId++, name: value }]); //to add value after index 3.
            // setAddValue([...addValue.slice(0, insertAnother), { id: nextId++, name: value }, ...addValue.slice(insertAnother)]); //to add value at 1 and so on.
            setValue("");
          }
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          const next = [...addValue];
          next.reverse();
          setAddValue(next);
        }}
      >
        Reverse
      </button>

      {/* -------------------------------------------- */}
      {/* <button
        onClick={() => {
            setAddValue([...addValue, value]);
            setValue("");
        }}
      >
        add
      </button> */}

      {/* <ul>
        {addValue.map((element, index) => {
          return (
            <li key={index}>
              {element}{" "}
              <button
                onClick={() => {
                  setAddValue(
                    addValue.filter((index) => {
                      return index !== element;
                    })
                  );
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
      {/* --------------------------------------------- */}
      <ul>
        {addValue.map((e) => (
          <li key={e.id}>
            {e.name}{" "}
            <button>Edit</button>
            <button
              onClick={() => {
                setAddValue(
                  addValue.filter((i) => {
                    return i.id !== e.id;
                  })
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export { UpdateArray };
