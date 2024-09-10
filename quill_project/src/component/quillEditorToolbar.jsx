// const CustomUndo = () => (
//   <svg viewBox="0 0 18 18">
//     <polygon
//       className="ql-fill ql-stroke"
//       points="6 10 4 12 2 10 6 10"
//     ></polygon>
//     <path
//       className="ql-stroke"
//       d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
//     ></path>
//   </svg>
// );

// const CustomRedo = () => (
//   <svg viewBox="0 0 18 18">
//     <polygon
//       className="ql-fill ql-stroke"
//       points="12 10 14 12 16 10 12 10"
//     ></polygon>
//     <path
//       className="ql-stroke"
//       d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
//     ></path>
//   </svg>
// );

// const handleUndo = (quill) => {
//   quill.history.undo();
// };
// const handleRedo = (quill) => {
//   quill.history.redo();
// };
// export const modules = {
//   toolbar: {
//     container: "#toolbar",
//     handlers: {
//       undo: function () {
//         handleUndo(this.quill);
//       },
//       redo: function () {
//         handleRedo(this.quill);
//       },
//     },
//   },
//   history: {
//     delay: 500,
//     maxStack: 100,
//     userOnly: true,
//   },
//   clipboard: {
//     matchVisual: true,
//   },
// };

// export const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "align",
//   "strike",
//   "script",
//   "blockquote",
//   "background",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "color",
//   "code-block",
// ];

// const QuillToolbar = () => {
//   const valueOption = [
//     { value: "", label: "tags" },
//     { value: "value1", label: "value1" },
//     { value: "value2", label: "value2" },
//     { value: "value3", label: "value3" },
//   ];

//   return (
//     <div id="toolbar">
//       <span className="ql-formats">
//         <select className="ql-header" defaultValue="3">
//           <option value="1">Heading</option>
//           <option value="2">Subheading</option>
//           <option value="3">Normal</option>
//         </select>
//       </span>
//       <span className="ql-formats">
//         <button className="ql-bold" />
//         <button className="ql-italic" />
//         <button className="ql-underline" />
//         <button className="ql-strike" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-list" value="ordered" />
//         <button className="ql-list" value="bullet" />
//         <button className="ql-indent" value="-1" />
//         <button className="ql-indent" value="+1" />
//       </span>
//       <span className="ql-formats">
//         <select className="ql-align" />
//         <select className="ql-color" />
//         <select className="ql-background" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-link" formTarget="_self"/>
//         <button className="ql-image" />
//         <button className="ql-video" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-formula" />
//         <button className="ql-code-block" />
//         <button className="ql-clean" />
//       </span>
//       <span className="ql-formats">
//         <button className="ql-undo">
//           <CustomUndo />
//         </button>
//       </span>
//       <span className="ql-formats">
//         <button className="ql-redo">
//           <CustomRedo />
//         </button>
//       </span>
//       <span className="ql-formats">
//         <select className="ql-font" defaultValue="">
//           {valueOption.map((e) => (
//             <option key={e.value} value={e.value}>
//               {e.label}
//             </option>
//           ))}
//         </select>
//       </span>
//     </div>
//   );
// };

// export default QuillToolbar;



//-------------------------------------------------------------------------------- my form
// eslint-disable-next-line no-lone-blocks
{
  /* <Form.Group className="mb-2">
            <Form.Label>URL</Form.Label>
            <Form.Control
              placeholder=""
              name="url"
              value={linkData?.url || ""}
              onChange={(e) =>
                setLinkData({ ...linkData, url: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Text to Display</Form.Label>
            <Form.Control
              placeholder=""
              name="text"
              value={linkData?.text || ""}
              onChange={(e) =>
                setLinkData({ ...linkData, text: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder=""
              name="title"
              value={linkData?.title || ""}
              onChange={(e) =>
                setLinkData({ ...linkData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Open Link in</Form.Label>
            <Form.Select
              name="target"
              value={linkData.target}
              onChange={(e) =>
                setLinkData({ ...linkData, target: e.target.value })
              }
            >
              <option value="_self">Current window</option>
              <option value="_blank">New window</option>
            </Form.Select>
          </Form.Group> */
}