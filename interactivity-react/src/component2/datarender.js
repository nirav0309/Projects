import { myData } from "./data";
import { useState } from "react";

const DataRender = () => {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(false);

  //for disable enable
  // const handleClick = () => {
  //   setIndex(index + 1);
  // };
  // const handleClick1 = () => {
  //   setIndex(index - 1);
  // };

  const handleClick = () =>{
    if(index<myData.length- 1){
      setIndex(index + 1)
    }
    else{
      setIndex(0)
    }
  }

  const showHide = () => {
    setNext(!next);
  };

  let myDataIndex = myData[index];
  return (
    <>
      {/* <button onClick={handleClick} disabled={index === 11}> */}
      <button onClick={handleClick} >
        {" "}
        Next{" "}
      </button>

      {/* <button onClick={handleClick1} disabled={index === 0}>
        {" "}
        Previous{" "}
      </button> */}

      <h2>
        <i>{myDataIndex.name}</i>
        {" by"} {myDataIndex.artist}
      </h2>
      <h3>
        ({index + 1} of {myData.length})
      </h3>
      <img
        src={myDataIndex.url}
        alt={myDataIndex.alt}
        style={{ width: "100px", height: "100px" }}
      />{" "}
      <br />
      <button onClick={showHide}>{next ? "Hide" : "Show"} Data</button>
      {next && <p> {myDataIndex.description}</p>}
    </>
  );
};

export { DataRender };
