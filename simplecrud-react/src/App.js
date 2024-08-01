import { useState } from "react";
import "./App.css";
import Form from "./components/formComponent";
import Table from "./components/tableComponent";

function App() {
  const [data, setData] = useState({});
  const [currentId, setCurrentId] = useState("");

  const addOrEdit = (xyz) => {
    if (currentId === "") {
      const id = new Date().getTime().toString();
      setData({ ...data, [id]: xyz });
    } else {
      setData({
        ...data,
        [currentId]: xyz,
      });
    }
    setCurrentId("");
  };

  const deleteData = (id) => {
    const updatedData = { ...data };
    delete updatedData[id];
    setData(updatedData);
  };
  return (
    <div className="App">
      <Form data={data} addOrEdit={addOrEdit} currentId={currentId} />
      <Table deleteData={deleteData} data={data} setCurrentId={setCurrentId} />
    </div>
  );
}

export default App;
