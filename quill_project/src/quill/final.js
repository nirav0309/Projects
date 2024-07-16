import React, { useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PropTypes from "prop-types";

let quill = null

const insertStar = function () {
  const cursorPosition = quill.getSelection().index;
  quill.insertText(cursorPosition, "Text");
  quill.setSelection(cursorPosition + 1);
};

const insertCustomTags = function (value) {
  const cursorPosition = quill.getSelection().index;
  quill.insertText(cursorPosition, value);
  quill.setSelection(cursorPosition + value.length);
};

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>
    
    <select className="ql-myDropDown">
      <option value="One">One</option>
      <option value="Two">Two</option>
        </select>
        
  </div>
);

const Editor = ({ placeholder }) => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = useCallback(() => {
    setEditorHtml();
  }, []);

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        placeholder={placeholder}
        modules={Editor.modules}
        formats={Editor.formats}
      />
    </div>
  );
};

Editor.modules = {
  toolbar: {
    container: [{ 'myDropdown': ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'] }],
    handlers: {
      insertStar,
      insertCustomTags: function (value) {
        insertCustomTags.call(this, value);
      },
    },
  },
};

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
];

Editor.propTypes = {
  placeholder: PropTypes.string,
};

export default Editor;
