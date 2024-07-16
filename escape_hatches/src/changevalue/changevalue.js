import { useState } from "react";
const arr = [1, 2, 3, 4, 5, 6];
const List = () => {
  const [list, setList] = useState(arr);

  const handleClick = (index) => {
    setList(
      list.map((e, i) => 
         i === index ? 4 : e
      )
    );
    // console.log(list)
  };

  return (
    <div>
      {list.map((item, index) => {
        return (
          <EditList
            key={index}
            value={item}
            onSmash={() => handleClick(index)}
          ></EditList>
        );
      })}
    </div>
  );
};

const EditList = ({ value, onSmash }) => {
  return (
    <>
      <p>{value}</p>
      <button onClick={onSmash}>edit</button>
    </>
  );
};

export { List };
