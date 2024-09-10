// // import Quill from "quill";

// // const Inline = Quill.import("blots/inline");

// // class CustomLinkBlot extends Inline {
// //   static blotName = "link";
// //   static tagName = "a";

// //   static create(url, value) {
// //     const node = super.create();
// //     node.setAttribute("href", url);
// //     if (value) {
// //       node.removeAttribute("target");
// //     } else {
// //       node.setAttribute("target", "_self");
// //     }
// //     return node;
// //   }

// //   static formats(node) {
// //     return node.getAttribute("href");
// //   }

// //   format(name, value) {
// //     super.format(name, value);

// //     if (name !== this.statics.blotName || !value) {
// //       return;
// //     }

// //     if (value) {
// //       this.domNode.removeAttribute("target");
// //     } else {
// //       this.domNode.setAttribute("target", "_self");
// //     }
// //   }
// // }

// // Quill.register(CustomLinkBlot);
// // export default CustomLinkBlot;


// //-------------------------------------------------------------based on this website https://coding.gonevis.com/how-to-edit-target-attribute-in-quilljs-links/


// // import Quill from "quill";

// // const Inline = Quill.import("blots/inline");

// // class LinkModal extends Inline {
// //   static blotName = "link";
// //   static tagName = "a";

// //   static create(value) {
// //     const node = super.create();
// //     let newValue = typeof value === "string" ? JSON.parse(value) : value;

// //     if (typeof newValue === "object") {
// //       const { href, target } = newValue;
// //       node.setAttribute("href", href);
// //       node.setAttribute("target", target || "_self");
// //     } else {
// //       node.setAttribute("href", newValue);
// //       node.setAttribute("target", "_self");
// //     }

// //     return node;
// //   }

// //   static formats(domNode) {
// //     return JSON.stringify({
// //       href: domNode.getAttribute("href") || "",
// //       target: domNode.getAttribute("target") || "_self",
// //     });
// //   }

// //   format(name, value) {
// //     if (name !== this.statics.blotName || !value) {
// //       return super.format(name, value);
// //     }

// //     let newValue = typeof value === "string" ? JSON.parse(value) : value;

// //     if (typeof newValue === "object") {
// //       const { href, target } = newValue;
// //       this.domNode.setAttribute("href", href);
// //       this.domNode.setAttribute("target", target || "_self");
// //     } else {
// //       this.domNode.setAttribute("href", newValue);
// //       this.domNode.setAttribute("target", "_self");
// //     }
// //   }
// // }

// // Quill.register(LinkModal);
// // export default LinkModal;


// import Quill from "quill";

// const Inline = Quill.import("blots/inline");

// class LinkModal extends Inline {
//   static blotName = "link";
//   static tagName = "A";

//   static create(value) {
   
//     const node = super.create();
//     let newValue;

//     if (isStringified(value)) {
//       newValue = JSON.parse(value);
//     } else {
//       newValue = value;
//     }

  
//     if (typeof newValue !== "string") {
     
//       node.setAttribute("href", newValue.href);
//       node.setAttribute("target", newValue.target);
//       return node;
//     }

//     node.setAttribute("href", newValue);
//     return node;
//   }

//   static formats(domNode) {
//     return JSON.stringify({
//       href: domNode.getAttribute("href"),
//       target: domNode.getAttribute("target"),
//     });
//   }


//   format(name, value) {
//     if (name !== this.statics.blotName || !value) {
//       return super.format(name, value);
//     }

//     let newValue;

//     if (isStringified(value)) {
//       newValue = JSON.parse(value);
//     } else {
//       newValue = value;
//     }

  
//     if (typeof newValue !== "string") {
 
//       this.domNode.setAttribute("href", newValue.href);
//       this.domNode.setAttribute("target", newValue.target);
//     } else {
//       this.domNode.setAttribute("href", newValue);
//     }
//   }
// }


// function isStringified(value) {
//   try {
//     JSON.parse(value);
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// Quill.register(LinkModal, true);
// export default LinkModal;;



import Quill from "quill";

// Custom Link Blot
const Inline = Quill.import("blots/inline");

class CustomLinkBlot extends Inline {
  static create(value) {
    let node = super.create();
    node.setAttribute("href", value.href);
    node.setAttribute("target", value.target || "_self"); // Default to '_self' if no target specified
    return node;
  }

  static formats(node) {
    return {
      href: node.getAttribute("href"),
      target: node.getAttribute("target"),
    };
  }

  static format(node, values) {
    node.setAttribute("href", values.href);
    node.setAttribute("target", values.target || "_self");
  }

  format(name, value) {
    if (name === "link") {
      if (value) {
        this.domNode.setAttribute("href", value.href);
        this.domNode.setAttribute("target", value.target || "_self");
      } else {
        this.domNode.removeAttribute("href");
        this.domNode.removeAttribute("target");
      }
    } else {
      super.format(name, value);
    }
  }
}

CustomLinkBlot.blotName = "link";
CustomLinkBlot.tagName = "A";

// Quill.register(CustomLinkBlot);
export default CustomLinkBlot;
