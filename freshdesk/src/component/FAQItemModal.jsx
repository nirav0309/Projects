// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// const FAQItemModal = ({ show, handleClose, faqIndex }) => {
//   const faqContent = {
//     1: "FAQ 1 content here...",
//     2: "FAQ 2 content here...",
//     3: "FAQ 3 content here...",
//     4: "FAQ 4 content here...",
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>FAQ {faqIndex}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>{faqContent[faqIndex]}</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default FAQItemModal;


import React from "react";
import { Modal, Button } from "react-bootstrap";

const FAQItemModal = ({ show, handleClose, faqIndex }) => {
  const faqContent = {
    1: "FAQ 1 content here...",
    2: "FAQ 2 content here...",
    3: "FAQ 3 content here...",
    4: "FAQ 4 content here...",
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>FAQ {faqIndex}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{faqContent[faqIndex]}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FAQItemModal;
