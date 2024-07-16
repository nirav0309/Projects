// import logo from "./logo.svg";
// import "./App.css";
// import { UseStateEx1, UseStateEx2 } from "./components/UpdScn";

// // import { UpdateBoth } from "./UpdScn";

// const user = {
//   name: "John Doe",
//   imageUrl:
//     "https://images.unsplash.com/photo-1714738760088-8eb4aaf6916b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   age: 20,
//   color: "red",
//   size: 200,
// };

// function Button() {
//   return <button>This is a component</button>;
// }

// function App() {
//   function ButtonEvent() {
//     alert("This is example of event responding in event");
//   }
//   return (
//     <div className="meet">
//       <h1>Welcome to the react app</h1>
//       <Button />
//       <img
//         className="image"
//         // src="https://images.unsplash.com/photo-1714987524876-f5f3cc746013?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         alt={user.name}
//         src={user.imageUrl}
//         style={{
//           height: user.size,
//           width: user.size,
//           background: user.color,
//         }}
//       ></img>
//       <Button1 />

//       {/* {xyz} */}
//       <ul>{listItem}</ul>
//       <button onClick={ButtonEvent}>Event in react</button>

//       <UseStateEx1/>
//       <br />

//       {/* <UseStateEx2 /> */}
//       <UseStateEx2 />

//       <div className="Page2">
//         <Xyz/>
//       </div>

//     </div>

//   );
// }

// const item = [
//   { title: "Cabbage", id: 1, value: false },
//   { title: "Garlic", id: 2, value: false },
//   { title: "Apple", id: 3, value: true },
// ];

// // const listItem = item.map( (e, i) =>(
// //   <div key={i}>
// //     {e.title}
// //     <br/>
// //   </div>
// // ));

// // const listItem = item.map( (e, i) =>(
// //   <li key={i}>
// //     {e.title}
// //     <br/>
// //   </li>
// // ));

// const listItem = item.map((e) => (
//   <li key={e.id} style={{ color: e.value ? "red" : "green" }}>
//     {e.title}
//   </li>
// ));

// function Button1() {
//   return (
//     <>
//       <a href="https://stackoverflow.com/questions/50073105/how-do-i-export-more-than-one-class-component-with-react-js">
//         This is a link
//       </a>
//       {/* <button onclick = {ButtonEvent}>Button for event</button> */}
//     </>
//   );
// }

// // let x = 10;
// // let xyz;
// // if (x == 10) {
// //   xyz = <Button />;
// // } else {
// //   xyz = <Button1 />;
// // }

// function Xyz(){
//   return(
//     <div>
//       <button>Hello</button>
//     </div>
//   )
// }

// export {App, Xyz};

//--------------------------------------------------------------------

import "./App.css";
import { useState } from "react";

import { ParentComp } from "./components/tic-tac-toe";

import { StateLess } from "./components/xyz";

import { TextToAudio } from "./components/texttoaudio";

import { MyApp } from "./components/product";

const myStyle = {
  color: "red",
  imageUrl: "",
  size: 50,
};

function App() {
  const [count, setCount] = useState(0);

  function HandleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* <MyFunction /> */}
      {data}
      <Student />
      <Event />
      <ExampleUseState />
      <ExampleUseState />

      <div>
        <h1>Example of props</h1>
        <ExampleProps count={count} onClick={HandleClick} />
        <ExampleProps count={count} onClick={HandleClick} />
      </div>

      <div>
        <h1>Example of Image</h1>
        <ImageProp
          imageUrl={
            "https://images.unsplash.com/photo-1715645942867-4c8649966352?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          // person={{
          //   name: "xyz1",
          // }}
          name="xyz1"
          size={100}
        />
        <ImageProp
          imageUrl={
            "https://plus.unsplash.com/premium_photo-1667428818562-fc8379f23bfe?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          person={{
            name: "xyz1",
          }}
          size={200}
        />
        <ImageProp
          imageUrl={
            "https://images.unsplash.com/photo-1715607817921-aa6417a19dbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          person={{
            name: "xyz1",
          }}
          size={300}
        />
      </div>

      <div>
        <ParentComp />
      </div>

      <div>
        <h1>Example of Context</h1>
        <ExampleText />
      </div>

      {/* <div>
        <h3>Stateless component example</h3>
        <StateLess onClick = {xyz} value={val}/>
      </div> */}

      <div>
        <h3>Stateful component example</h3>
        <StateLess />
      </div>

      <div>
        <h3>Text to audio</h3>
        <TextToAudio />
      </div>

      <GreetingContainer />

      <CharCounter />
      <div>
        <h1>Toggle Text </h1>
        <ToggleExample />
      </div>
      <div>
        <h1>Drag and Drop</h1>
        <DragnDrop />
      </div>
      <div>
        <h1>Color switcher</h1>
        <ColorPicker />
      </div>
      <div>
        <h1>Search filter </h1>
        <SearchFilter />
      </div>
      <div>
        <h1>TODO List </h1>
        <TodoList />
      </div>

      <div>
        <h1>Thinking in react </h1>
        <MyApp />
      </div>

      {/* <div>
        <h1>xyzzzzzzzzzzzz</h1>
        <Xyz1 />
      </div> */}
    </div>
  );
}

function MyFunction() {
  return (
    <div>
      <div>
        <h1 style={{ color: myStyle.color, fontSize: myStyle.size }}>
          Welcome user
        </h1>
        <button>Click</button>
      </div>
    </div>
  );
}

function MyFunction1() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

let data;
let a = 10;

if (a > 1) {
  data = <MyFunction1 />;
} else {
  data = <MyFunction />;
}

const obj1 = [
  { name: "xyz1", value: true, id: 1 },
  { name: "xyz2", value: false, id: 2 },
  { name: "xyz3", value: true, id: 3 },
];

function Student() {
  const item1 = obj1.map((e) => (
    <li key={e.id} style={{ color: e.value ? "red" : "green" }}>
      {e.name}
    </li>
  )); //using map, use outer array obj
  return <ul>{item1}</ul>;

  // const obj = [
  //   { name: "xyz1", value: true, id: 1 },
  //   { name: "xyz2", value: false, id: 2 },
  //   { name: "xyz3", value: true, id: 3 },
  // ];

  // const item = [];
  // for (let i = 0; i < obj.length; i++) {
  //   item.push(<li key={obj[i].id}
  //     // style={{color: obj.value ? "red" : "green"}}
  //     >
  //     {obj[i].name}

  //     </li>
  //   ); //using for loop, use inner array obj
  // }

  // return (
  //   <div>
  //     <ul>{item}</ul>
  //   </div>
  // );
}

function Event() {
  function HandleClick() {
    alert("This is event responding");
  }
  return (
    <div>
      <button onClick={HandleClick}>Click</button>
    </div>
  );
}

function ExampleUseState() {
  //using hooks, useState
  const [count, setCount] = useState(0);

  // () => {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>
      <h1>Counts: {count}</h1>
    </div>
  );
}

function ExampleProps({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click {count} me</button>
    </div>
  );
}

function ImageProp(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} width={props.size} />
    </div>
  );
}

function ExampleText() {
  const [value, setValue] = useState("");
  function HandleClick() {
    // alert('Hello World');
    let newValue = document.getElementById("xyz1").value.toUpperCase();
    setValue(newValue);
  }
  function HandleClick1() {
    // alert('Hello World');
    let newValue = document.getElementById("xyz1").value.toLowerCase();
    setValue(newValue);
  }

  function HandleChange() {
    let text = document.getElementById("xyz1").value;
    setValue(text);
    // setValue(event.target.value);
  }

  return (
    <div className="testText">
      {/* <textarea className="text" id="xyz1" onChange={HandleChange} value={value} /> <br /> */}
      <input className="text" id="xyz1" onChange={HandleChange} value={value} />{" "}
      <br />
      <button onClick={HandleClick}>Click UpperCase </button>
      <br />
      <button onClick={HandleClick1}>Click LowerCase </button>
      <br />
      value: {value}
    </div>
  );
}

// Presentational component
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Container component
const GreetingContainer = () => {
  const [name, setName] = useState("World");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Input value</h1>
      <input type="text" value={name} onChange={handleChange} />
      <Greeting name={name} />
    </div>
  );
};

const CharCounter = () => {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <h1>Character Counter</h1>
      <textarea onChange={handleChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
};

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
function DragnDrop() {
  const item = initialItems.map((e) => <li key={e}>{e}</li>);
  return <ul>{item}</ul>;
}

const ColorPicker = () => {
  const [color, SetColor] = useState("");
  function handleChange(e) {
    SetColor(e.target.value);
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option value="">color</option>
        <option value="red">red</option>
        <option value="green">green</option>
      </select>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
    </div>
  );
};

const items = [
  "Apple",
  "Banana",
  "Carrot",
  "Date",
  "Eggplant",
  "Fig",
  "Grape",
  "Apps",
];
const SearchFilter = () => {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }
  const filteredItems = items.filter((e) =>
    e.toLowerCase().includes(item.toLowerCase())
  );

  // const xyz = items.filter((e) => {
  //   if (e.toLowerCase().includes(item.toLowerCase())) {
  //     return e;
  //     // console.log(e)
  //   }
  // });
  return (
    <div>
      <input type="text" id="xyz" value={item} onChange={handleChange} />
      <ul>
        {filteredItems.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
//
const arr = [];
const TodoList = () => {
  const [value, setValue] = useState("");
  const [xyz, setXyz] = useState(arr);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    // setXyz([...arr]);
    // console.log(arr)
    if (value) {
      setXyz([...xyz, value]);
      setValue("");
    }
  }

  function handleDelete(i) {
    // console.log("fe")
    setXyz(xyz.filter((e, x) => x !== i));
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>

      <ul>
        {xyz.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ToggleExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  function handleClick() {
    setIsToggle(!isToggle);
    // if(!isToggle){
    //   setIsToggle(true)
    // }
    // else{
    //   setIsToggle(false)
    // }
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      {isToggle && <p>Some text</p>}
    </div>
  );
};

// const item = [
//   { title: "Cabbage", id: 1, value: false },
//   { title: "Garlic", id: 2, value: false },
//   { title: "Apple", id: 3, value: true },
// ];
// const Xyz1 = () => {
//   let arr = item.map((e) => <li key={e.id}>{e.title}</li>);
//   return (
//     <>
//       <ul>
//         {/* {item.map((e) => <li key={e.id}>{e.title}</li> )} */}
//         {arr}
//       </ul>
//     </>
//   );
// };

export { App, MyFunction, Event, ExampleUseState, ExampleText };
