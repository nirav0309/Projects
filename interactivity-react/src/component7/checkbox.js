import { useState } from "react";
// let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

const ParentCheckbox = () => {
  const [firstList, setFirstList] = useState(initialList);
  const [secondList, setSecondList] = useState(initialList);

  const handleFirstList = (Id, Seen) => {
    setFirstList(
      firstList.map((e) => {
        if (e.id === Id) {
          //create new obj with changes
          return { ...e, seen: Seen };
        } else {
          return e;
        }
      })
    );
  };
  const handleSecondList = (Id, Seen) => {
    setSecondList(
      secondList.map((e) => {
        if (e.id === Id) {
          //create new obj with changes
          return { ...e, seen: Seen };
         
        } else {
          return e;
        }
      })
    );
  };

  return (
    <>
      <h2>first</h2>
      <CheckBox value={firstList} onToggle={handleFirstList} />
      <h2>second</h2>
      <CheckBox value={secondList} onToggle={handleSecondList} />
    </>
  );
};
const CheckBox = ({ value, onToggle }) => {
  return (
    <>
      <ul>
        {value.map((e) => {
          return (
            <li key={e.id}>
              <input
                type="checkbox"
                checked={e.seen}
                onChange={(event) => {
                  onToggle(e.id, event.target.checked);
                }}
              />
              {e.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { ParentCheckbox };
