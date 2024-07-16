// import React, { useEffect, useRef } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import DynamicQuillTools from "./DynamicQuillTools";

// const XYZ = () => {
//   const quillRef = useRef(null);

//   useEffect(() => {
//     const quill = new Quill(quillRef.current, {
//       theme: "snow",
//       modules: {
//         toolbar: {
//           container: [
//             ["bold", "italic", "underline", "strike"],
//             ["blockquote", "code-block"],

//             [{ header: 1 }, { header: 2 }],
//             [{ list: "ordered" }, { list: "bullet" }],
//             [{ script: "sub" }, { script: "super" }],
//             [{ indent: "-1" }, { indent: "+1" }],
//             [{ direction: "rtl" }],

//             [{ size: ["small", false, "large", "huge"] }],
//             [{ header: [1, 2, 3, 4, 5, 6, false] }],

//             [{ color: [] }, { background: [] }],
//             [{ font: [] }],
//             [{ align: [] }],

//             ["clean"],
//           ],
//         },
//       },
//     });

//     const dropDownItems = {
//       "Mike Smith": "mike.smith@gmail.com",
//       "Jonathan Dyke": "jonathan.dyke@yahoo.com",
//       "Max Anderson": "max.anderson@gmail.com",
//     };

//     const myDropDown = new DynamicQuillTools.QuillToolbarDropDown({
//       label: "Email Addresses",
//       rememberSelection: false,
//     });

//     myDropDown.setItems(dropDownItems);

//     myDropDown.onSelect = function (label, value) {
//       const { index, length } = quill.getSelection();
//       quill.deleteText(index, length);
//       quill.insertText(index, value);
//       quill.setSelection(index + value.length);
//     };

//     myDropDown.attach(quill);

//     const myButton = new DynamicQuillTools.QuillToolbarButton({
//       icon: '<svg viewBox="0 0 18 18"> <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path></svg>',
//     });

//     myButton.onClick = function () {
//       const { index, length } = quill.getSelection();
//       const selectedText = quill.getText(index, length);
//       const newText = selectedText.toUpperCase();
//       quill.deleteText(index, length);
//       quill.insertText(index, newText);
//       quill.setSelection(index, newText.length);
//     };

//     myButton.attach(quill);
//   }, []);

//   return <div ref={quillRef} id="editor"></div>;
// };

// export default XYZ;
