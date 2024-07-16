import { useEffect, useRef, useState } from "react";
import QuillToolbar, { formats, modules } from "./quillEditorToolbar";
import ReactQuill from "react-quill";

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
    }
  }, [value]);

  // console.log("my-value>>>>>>>>>>>", value)

  // const newHtmlContent = value?.replace(/<br\s*\/?>/gi, "\n");
  // console.log("replace",newHtmlContent)
  // quillRef.current.root.innerHTML = newHtmlContent || "";

  return (
    <div className="text-editor">
      <QuillToolbar />
      <ReactQuill
        ref={quillRef}
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
