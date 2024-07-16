// QuillEditor.js
import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomToolbar = () => (
  <div id="toolbar">
    <select id="custom-dropdown" className="ql-custom-dropdown">
      <option value="value1">Value 1</option>
      <option value="value2">Value 2</option>
      <option value="value3">Value 3</option>
    </select>
  </div>
);

const MyEditor = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    const dropdown = document.getElementById("custom-dropdown");
    dropdown.addEventListener("change", handleDropdownChange);

    return () => {
      dropdown.removeEventListener("change", handleDropdownChange);
    };
  }, []);

  const handleDropdownChange = (event) => {
    const value = event.target.value;
    document.getElementById("root").innerHTML = value;
  };

  return (
    <div>
      <CustomToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={{
          toolbar: {
            container: "#toolbar",
          },
        }}
      />
    </div>
  );
};

export default MyEditor;
