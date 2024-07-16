import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const ParentComponent = () => {
  const [img, setImg] = useState(
    "https://images.unsplash.com/photo-1708074017412-be6a9e38e4ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  return (
    <>
      <UserContext.Provider value={{ img, setImg }}>
        <ContextImage1 />
        {/* <ContextImage /> */}
      </UserContext.Provider>
    </>
  );
};

const ContextImage1 = () => {
  return (
    <>
      <h2>Context example</h2>
      <ContextImage />
    </>
  );
};

const ContextImage = () => {
  // const imageValue = useContext(UserContext)
  const { img, setImg } = useContext(UserContext);
  function handleClick() {
    setImg(
      "https://images.unsplash.com/photo-1713715098941-48da2a137a25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8"
    );
  }

  return (
    <>
      <img src={img} alt="" style={{ width: "100px", height: "100px" }} />{" "}
      <br />
      <button onClick={handleClick}>Click me</button>
    </>
  );
};


export { ParentComponent };


// import {  useState } from "react";

// const ParentComponent = () => {
//   const [img, setImg] = useState(
//     "https://images.unsplash.com/photo-1708074017412-be6a9e38e4ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   );

//   function handleClick(){
//     setImg("https://plus.unsplash.com/premium_photo-1675863732862-4260e05a4188?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8")
//   }
//   return (
//     <>
//      <ContextImage src={img} />
//      <button onClick={handleClick}>Click me</button>
//     </>
//   );
// };

// const ContextImage = ({src}) => {

//   return (
//     <>
//       <img src={src} alt="" style={{ width: "100px", height: "100px" }} />

//     </>
//   );
// };
// export { ParentComponent };
