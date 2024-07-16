// import React, { useEffect, useRef } from "react";
// import Quill from "quill";
// import PropTypes from "prop-types";
// import "quill/dist/quill.snow.css";

// const TextEditor = ({
//   height,
//   getEditorContent,
//   value,
//   from,
//   isAdd,
//   isThankYou,
// }) => {
//   const quillRef = useRef(null);
//   const valueRef = useRef(false);
//   const editorRef = useRef(null);

//   let quill = null;

//   useEffect(() => {
//     if (quillRef.current) {
//       editorRef.current = quill = new Quill(quillRef.current, {
//         styles: {
//           left: "40px",
//         },
//         theme: "snow",
//         modules: {
//           toolbar: {
//             container: [
//               ["bold", "italic", "underline"],
//               [{ list: "ordered" }, { list: "bullet" }],
//               [{ color: [] }, { background: [] }],
//               ["link"],
//               [{ align: [] }],
//               ["clean"],
//               isAdd
//                 ? [
//                     {
//                       placeholder: [
//                         "",
//                         "DATE",
//                         "MEETING LINK",
//                         "EAB BRANDING",
//                         "ADD ON CALENDAR",
//                       ],
//                     },
//                   ]
//                 : [],
//               isThankYou
//                 ? [
//                     {
//                       placeholder: ["", "BRANDING"],
//                     },
//                   ]
//                 : [],
//             ],
//             handlers: {
//               placeholder: function (value) {
//                 if (isAdd) {
//                   if (value) {
//                     const cursorPosition = quill.getSelection().index;
//                     const placeholderValue = getEmailContentValue(value);
//                     quill.insertText(cursorPosition, placeholderValue);
//                     quill.setSelection(
//                       cursorPosition + placeholderValue.length
//                     );
//                   }
//                 }
//                 if (isThankYou) {
//                   if (value) {
//                     const cursorPosition = quill.getSelection().index;
//                     const placeholderValue = getThankyouContentValue(value);
//                     quill.insertText(cursorPosition, placeholderValue);
//                     quill.setSelection(
//                       cursorPosition + placeholderValue.length
//                     );
//                   }
//                 }
//               },
//             },
//           },
//         },
//       });

//       quill.on("text-change", () => {
//         getEditorContent(quill.root.innerHTML);
//       });

//       const getEmailContentValue = (emailPlaceholder) => {
//         const placeholderMap = {
//           DATE: "Date - Time - TimeZone ",
//           "MEETING LINK": "MEETING_LINK ",
//           "EAB BRANDING": "BRANDING ",
//           "ADD ON CALENDAR": "ICS_CALENDAR ",
//         };

//         return placeholderMap[emailPlaceholder] || "";
//       };

//       const getThankyouContentValue = (thankyouPlaceholder) => {
//         const placeholderMap = {
//           BRANDING: "BRANDING ",
//         };

//         return placeholderMap[thankyouPlaceholder] || "";
//       };

//       if (isAdd === true || isThankYou === true) {
//         const placeholderPickerItems = Array.from(
//           document.querySelectorAll(".ql-placeholder .ql-picker-item")
//         );

//         placeholderPickerItems.forEach((item) => {
//           item.textContent = item.dataset.value;
//           item.classList.remove("ql-active"); 
//         });

//         const placeholderPickerLabel = document.querySelector(
//           ".ql-placeholder .ql-picker-label"
//         );
//         placeholderPickerLabel.innerHTML =
//           "Tags" + placeholderPickerLabel.innerHTML;
//         placeholderPickerLabel.style.width = "60px";
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (
//       valueRef.current === false &&
//       editorRef.current &&
//       value !== "" &&
//       value !== undefined &&
//       value !== null
//     ) {
//       const newHtmlContent = value?.replace(/<br\s*\/?>/gi, "\n");
//       editorRef.current.root.innerHTML = newHtmlContent || "";
//       valueRef.current = true;
//     }
//   }, [value]);

//   return (
//     <div
//       className={from === "media" ? "mediaText" : "texteditor"}
//       style={{ height: height || "300px" }}
//       id="editor"
//       ref={quillRef}
//     />
//   );
// };

// TextEditor.propTypes = {
//   isAdd: PropTypes.object,
// };

// export default TextEditor;


