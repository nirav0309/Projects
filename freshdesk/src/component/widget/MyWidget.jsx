import React, { useState } from "react";
import "./style.css"; // You can create a CSS file for styling

const ChatFaqWidget = () => {
  const [isOpen, setIsOpen] = useState(true); // Control whether the widget is open or closed

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div className={`widget-container ${isOpen ? "open" : ""}`}>
    //   <div className="widget-header">
    //     <button onClick={toggleWidget} className="close-button">
    //       X
    //     </button>
    //     <h3>Message Us</h3>
    //   </div>
    //   <div className="widget-content">
    //     <div className="chat-section">
    //       <div className="chat-option">
    //         <div className="chat-icon">C</div>
    //         <div>
    //           <h4>Chat with us</h4>
    //           <p>Hello there! Need help? Reach out...</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="faq-section">
    //       <h4>FAQs</h4>
    //       <div className="faq-item">
    //         <div className="faq-icon">R</div>
    //         <div>Refunds and Returns</div>
    //       </div>
    //       <div className="faq-item">
    //         <div className="faq-icon">R</div>
    //         <div>Rewards</div>
    //       </div>
    //       <div className="faq-item">
    //         <div className="faq-icon">O</div>
    //         <div>Orders</div>
    //       </div>
    //       <div className="show-more">Show more categories</div>
    //     </div>
    //   </div>
    //   <div className="widget-footer">
    //     Powered by{" "}
    //     <a
    //       href="https://www.freshworks.com/freshchat/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Freshchat
    //     </a>
    //   </div>
    // </div>
    <div>
      <script src="//in.fw-cdn.com/32050902/1091469.js" chat="true"></script>
    </div>
  );
};

export default ChatFaqWidget;
