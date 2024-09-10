// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
// import FAQItemModal from "./FAQItemModal";

// const FAQsModal = ({ show, handleClose }) => {
//   const [selectedFAQ, setSelectedFAQ] = useState(null);

//   const handleFAQClick = (index) => {
//     setSelectedFAQ(index);
//   };

//   return (
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>FAQs</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Button onClick={() => handleFAQClick(1)}>FAQ 1</Button>
//           <Button onClick={() => handleFAQClick(2)}>FAQ 2</Button>
//           <Button onClick={() => handleFAQClick(3)}>FAQ 3</Button>
//           <Button onClick={() => handleFAQClick(4)}>FAQ 4</Button>
//         </Modal.Body>
//       </Modal>

//       {selectedFAQ && (
//         <FAQItemModal
//           show={true}
//           handleClose={() => setSelectedFAQ(null)}
//           faqIndex={selectedFAQ}
//         />
//       )}
//     </>
//   );
// };

// export default FAQsModal;


import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FAQItemModal from "./FAQItemModal"; // Import FAQ item modals

const FAQsModal = ({ show, handleClose }) => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const handleFAQClick = (index) => {
    setSelectedFAQ(index);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FAQs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={() => handleFAQClick(1)}>FAQ 1</Button>
          <Button onClick={() => handleFAQClick(2)}>FAQ 2</Button>
          <Button onClick={() => handleFAQClick(3)}>FAQ 3</Button>
          <Button onClick={() => handleFAQClick(4)}>FAQ 4</Button>
        </Modal.Body>
      </Modal>

      {selectedFAQ && (
        <FAQItemModal
          show={true}
          handleClose={() => setSelectedFAQ(null)}
          faqIndex={selectedFAQ}
        />
      )}
    </>
  );
};

export default FAQsModal;
