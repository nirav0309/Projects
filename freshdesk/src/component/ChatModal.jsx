// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const ChatModal = ({ show, handleClose }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     // Add your chat logic here (e.g., send message to server and get a response)
//     setMessages([...messages, { user: "You", text: input }]);
//     setInput("");
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Chat with Us</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="chat-container">
//           {messages.map((msg, index) => (
//             <div key={index} className={`message ${msg.user}`}>
//               {msg.text}
//             </div>
//           ))}
//         </div>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <Button onClick={handleSend} className="mt-2">
//           Send
//         </Button>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ChatModal;


import React from "react";
import { Button } from "react-bootstrap";
import FreshchatIntegration from "./FreshChat";


const ChatButton = () => {
  const openFreshchat = () => {
    if (window.fcWidget) {
      window.fcWidget.open();
    }
  };

  return (
    <>
      <FreshchatIntegration />
      <Button onClick={openFreshchat}>Chat with Us</Button>
    </>
  );
};

export default ChatButton;
