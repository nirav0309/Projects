// backup quill editor
import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import PropTypes from "prop-types";
import "quill/dist/quill.snow.css";

const TextEditor = ({
  height,
  getEditorContent,
  value,
  from,
  isAdd,
  isThankYou,
}) => {
  const quillRef = useRef(null);
  const valueRef = useRef(false);
  const editorRef = useRef(null);
  const [selectedText, setSelectedText] = useState(""); // State to store selected text

  let quill = null;

  useEffect(() => {
    if (quillRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editorRef.current = quill = new Quill(quillRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ color: [] }, { background: [] }],
              ["link"], // Link button in toolbar
              [{ align: [] }],
              ["clean"],
              isAdd
                ? [
                    {
                      placeholder: [
                        "",
                        "DATE",
                        "MEETING LINK",
                        "EAB BRANDING",
                        "ADD ON CALENDER",
                      ],
                    },
                  ]
                : [],
              isThankYou
                ? [
                    {
                      placeholder: ["", "BRANDING"],
                    },
                  ]
                : [],
            ],
            handlers: {
              // Custom handler for the link option
              link: function () {
                const range = quill.getSelection();
                if (range) {
                  const tooltip = quill.theme.tooltip;
                  tooltip.edit("link");

                  // Get selected text and update state
                  const selectedText = quill.getText(range.index, range.length);
                  setSelectedText(selectedText);

                  // Find or create the dropdown for link target selection
                  let dropdown = tooltip.root.querySelector(
                    "select[data-link-target]"
                  );
                  if (!dropdown) {
                    const linkInput =
                      tooltip.root.querySelector("input[data-link]");
                    if (linkInput) {
                      // Creating dropdown for "Open in new tab" option if it doesn't exist
                      dropdown = document.createElement("select");
                      dropdown.setAttribute("data-link-target", "true");
                      dropdown.innerHTML = `<option value="_self">Open in current tab</option>
          <option value="_blank">Open in new tab</option>`;
                      // Insert the dropdown before the link input
                      linkInput.parentNode.insertBefore(dropdown, linkInput);

                      // Add the ql-action class to the link input
                      linkInput.classList.add("ql-action");
                    }
                  }

                  // Get the current link target attribute if editing a link
                  const currentValue =
                    tooltip.root.querySelector("input[data-link]").value;
                  if (currentValue.includes('target="_blank"')) {
                    dropdown.value = "_blank";
                  } else {
                    dropdown.value = "_self";
                  }

                  // Event listener to set the target attribute
                  dropdown.addEventListener("change", (event) => {
                    const target = event.target.value;
                    const linkValue =
                      tooltip.root.querySelector("input[data-link]").value;
                    // Update link with target attribute
                    quill.format("link", `${linkValue}" target="${target}`);
                    tooltip.hide();
                  });
                }
              },
              placeholder: function (value) {
                if (isAdd) {
                  if (value) {
                    const cursorPosition = quill.getSelection().index;
                    const placeholderValue = getEmailContentValue(value);
                    quill.insertText(cursorPosition, placeholderValue);
                    quill.setSelection(
                      cursorPosition + placeholderValue.length
                    );
                  }
                }
                if (isThankYou) {
                  if (value) {
                    const cursorPosition = quill.getSelection().index;
                    const placeholderValue = getThankyouContentValue(value);
                    quill.insertText(cursorPosition, placeholderValue);
                    quill.setSelection(
                      cursorPosition + placeholderValue.length
                    );
                  }
                }
              },
            },
          },
        },
      });

      // Existing initialization code for event listeners
      quill.on("text-change", () => {
        const content = quill.root.innerHTML;
        const cleanedContent = content === "<p><br></p>" ? "" : content;
        getEditorContent(cleanedContent);
      });

      // Your helper functions
      const getEmailContentValue = (emailPlaceholder) => {
        const placeholderMap = {
          DATE: "Date - Time - TimeZone ",
          "MEETING LINK": "MEETING_LINK ",
          "EAB BRANDING": "BRANDING ",
          "ADD ON CALENDER": "ICS_CALENDER ",
        };
        return placeholderMap[emailPlaceholder] || "";
      };

      const getThankyouContentValue = (thankyouPlaceholder) => {
        const placeholderMap = {
          BRANDING: "BRANDING ",
        };
        return placeholderMap[thankyouPlaceholder] || "";
      };

      if (isAdd === true || isThankYou === true) {
        const placeholderPickerItems = Array.from(
          document.querySelectorAll(".ql-placeholder .ql-picker-item")
        );

        placeholderPickerItems.forEach((item) => {
          item.textContent = item.dataset.value;
          item.classList.remove("ql-active"); // Clear any active state
        });

        const placeholderPickerLabel = document.querySelector(
          ".ql-placeholder .ql-picker-label"
        );
        placeholderPickerLabel.innerHTML =
          "Tags" + placeholderPickerLabel.innerHTML;
        placeholderPickerLabel.style.width = "60px";
      }
    }
  }, []);

  const addDataListToLi = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const liElements = tempDiv.querySelectorAll("li");
    liElements.forEach((li) => {
      if (!li.hasAttribute("data-list")) {
        const parent = li.parentElement;
        if (parent.tagName === "UL") {
          li.setAttribute("data-list", "bullet");
        } else if (parent.tagName === "OL") {
          li.setAttribute("data-list", "ordered");
        }
      }
    });
    return tempDiv.innerHTML;
  };

  useEffect(() => {
    if (
      valueRef.current === false &&
      editorRef.current &&
      value !== "" &&
      value !== undefined &&
      value !== null
    ) {
      valueRef.current = true;
      const modifiedHtmlContent = addDataListToLi(value);
      const newHtmlContent = modifiedHtmlContent?.replace(
        /(<p>\s*)?<br\s*\/?>(\s*<\/p>)?/g,
        "<p><br></p>"
      );
      if (newHtmlContent !== editorRef.current.root.innerHTML) {
        if (isThankYou) {
          editorRef.current.root.innerHTML = modifiedHtmlContent || "";
        } else {
          editorRef.current.root.innerHTML = newHtmlContent || "";
        }
      }
    }
  }, [value, isThankYou]);

  return (
    <div>
      {selectedText && (
        <div className="selected-text">Selected: {selectedText}</div>
      )}
      <div
        className={from === "media" ? "mediaText" : "texteditor"}
        style={{ height: height || "300px" }}
        id="editor"
        ref={quillRef}
      />
    </div>
  );
};

TextEditor.propTypes = {
  isAdd: PropTypes.bool,
  isThankYou: PropTypes.bool,
  getEditorContent: PropTypes.func,
  value: PropTypes.string,
  height: PropTypes.string,
  from: PropTypes.string,
};

export default TextEditor;
