import { useEffect, useRef, useState } from "react";
import { formats, modules } from "./quillEditorToolbar";
import "react-quill/dist/quill.snow.css";
import TextEditor from "./modals/newQuillEditor";

const DropDown = () => {
  const quillRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.on("text-change", () => {
        setValue(quill.root.innerHTML);
      });

      const toolbar = quill.getModule("toolbar");
      toolbar.addHandler("font", (value) => {
        quill.format("font", value);
        const range = quill.getSelection();
        quill.insertText(range.index, value);
      });

      // toolbar.addHandler("link", () => {
      //   const range = quill.getSelection();
      //   if (range) {
      //     const value = prompt("Enter the URL:");
      //     if (value) {
      //       quill.format("link", value);

      //       const [leaf] = quill.getLeaf(range.index);
      //       if (leaf && leaf.parent && leaf.parent.domNode) {
      //         leaf.parent.domNode.setAttribute("target", "_blank");
      //       }
      //     }
      //   }
      // });
    }
  }, [value]);

  return (
    <div className="text-editor">go
      <TextEditor
        // ref={quil~lRef}
        theme="snow"
        value={value}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        onChange={(content, delta, source, editor) =>
          setValue(editor.getHTML())
        }
      />
    </div>
  );
};

export default DropDown;
