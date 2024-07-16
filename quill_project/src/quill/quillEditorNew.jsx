import { useCallback, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import QuillEditor from "react-quill";
import { Quill } from "react-quill";
import PropTypes from "prop-types";
import { Dropdown } from "./dropDown";

const icons = Quill.import("ui/icons");
icons["undo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
icons["redo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;

const DropDownQuill = () => {
  const [value, setValue] = useState("");

  const quillRef = useRef();

  const handleUndo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.undo();
    }
  };
  const handleRedo = () => {
    if (quillRef.current) {
      quillRef.current.getEditor().history.redo();
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quillRef.current.getEditor();

        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const module = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          ["undo", "redo"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
          [{ placeholder: ["[GuestName]", "[HotelName]"] }],
          {
            type: "custom",
            component: Dropdown,
            options: ["Option 1", "Option 2", "Option 3"],
            onSelect: (selectedValue) => {
              console.log("Selected option:", selectedValue);
            },
          },
        ],
        handlers: {
          image: imageHandler,
          undo: handleUndo,
          redo: handleRedo,
          // placeholder: function (value) {
          //   alert(`value: ${value}`);
          // },
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
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
    "clean",
    "placeholder",
  ];

  return (
    <div className={styles.wrapper}>
      <QuillEditor
        ref={(el) => (quillRef.current = el)}
        className={styles.editor}
        theme="snow"
        value={value}
        formats={formats}
        modules={module}
        onChange={(value) => setValue(value)}
        placeholder={"some text...."}
      />
    </div>
  );
};

DropDownQuill.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export { DropDownQuill };
