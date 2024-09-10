import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import PropTypes from "prop-types";
import "quill/dist/quill.snow.css";
import { Dropdown } from "bootstrap";

const TextEditor = ({
  height,
  // getEditorContent,
  value,
  from,
  isAdd,
  isThankYou,
}) => {
  const quillRef = useRef(null);
  const valueRef = useRef(false);
  const editorRef = useRef(null);
  const [selectedText, setSelectedText] = useState(""); // State to store selected text
  const [editorContent, setEditorContent] = useState(""); // State to store selected text

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
              link: function () {
                const range = quill.getSelection();
                if (range) {
                  const tooltip = quill.theme.tooltip;
                  tooltip.edit("link");

                  const selectedText = quill.getText(range.index, range.length);
                  setSelectedText(selectedText);

                  let selectedValue = "_self";
                  let currentAnchorTag = null;

                  const ensureDropdown = () => {
                    let dropdown = tooltip.root.querySelector(
                      "select[data-link-target]"
                    );
                    if (!dropdown) {
                      const linkInput =
                        tooltip.root.querySelector("input[data-link]");
                      if (linkInput) {
                        dropdown = document.createElement("select");
                        dropdown.setAttribute("data-link-target", "true");
                        dropdown.setAttribute("style", "margin-top: 5px");

                        const options = [
                          { value: "_self", text: "Open in the same tab" },
                          { value: "_blank", text: "Open in a new tab" },
                        ];

                        options.forEach((optionData) => {
                          const option = document.createElement("option");
                          option.value = optionData.value;
                          option.textContent = optionData.text;
                          dropdown.appendChild(option);
                        });

                        dropdown.onchange = function (event) {
                          event.stopPropagation();
                          event.preventDefault();

                          selectedValue = event.target.value;
                          console.log("Selected value:", selectedValue);

                          if (currentAnchorTag) {
                            currentAnchorTag.setAttribute(
                              "target",
                              selectedValue
                            );
                          }
                        };

                        linkInput.parentNode.insertBefore(
                          dropdown,
                          linkInput.nextSibling
                        );
                        linkInput.classList.add("ql-action");
                      }
                    }
                    return dropdown;
                  };

                  const dropdown = ensureDropdown();
                  console.log(dropdown);

                  const saveButton = Array.from(
                    document.querySelectorAll(".ql-action")
                  );
                  if (saveButton[1]) {
                    saveButton[1].addEventListener("click", function () {
                      console.log("Save button clicked");
                      console.log("Selected target value:", selectedValue);

                      const editorContent =
                        document.querySelector(".ql-editor").innerHTML;
                      console.log("Editor content:", editorContent);

                      const anchorTags =
                        document.querySelectorAll(".ql-editor a");
                      anchorTags.forEach((a) => {
                        if (a.textContent === selectedText) {
                          a.setAttribute("target", selectedValue);
                          currentAnchorTag = a;
                          console.log("anchorTagContent:", a);
                        }
                      });
                    });
                  }

                  const manageDropdownVisibility = () => {
                    const isTooltipVisible =
                      tooltip.root.classList.contains("ql-editing");
                    dropdown.style.display = isTooltipVisible
                      ? "block"
                      : "none";
                  };

                  manageDropdownVisibility();

                  const observer = new MutationObserver(
                    manageDropdownVisibility
                  );
                  observer.observe(tooltip.root, {
                    attributes: true,
                    attributeFilter: ["class"],
                  });

                  tooltip.root.addEventListener(
                    "hidden",
                    () => {
                      observer.disconnect();
                    },
                    { once: true }
                  );
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
        setEditorContent(cleanedContent);
        const editButton = document.querySelector(".ql-tooltip a.ql-action");
        editButton.addEventListener("click", handleEditHnadler);
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
      <h3 dangerouslySetInnerHTML={{ __html: editorContent }}></h3>
    </div>
  );
};

TextEditor.propTypes = {
  isAdd: PropTypes.bool,
  isThankYou: PropTypes.bool,
  // getEditorContent: PropTypes.func,
  value: PropTypes.string,
  height: PropTypes.string,
  from: PropTypes.string,
};

export default TextEditor;
