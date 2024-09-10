// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import ChatModal from "./ChatModal";
// import FAQsModal from "./FAQModal";


// const MainComponent = () => {
//   const [showChat, setShowChat] = useState(false);
//   const [showFAQs, setShowFAQs] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setShowChat(true)}>Chat with Us</Button>
//       <Button onClick={() => setShowFAQs(true)}>FAQs</Button>

//       <ChatModal show={showChat} handleClose={() => setShowChat(false)} />
//       <FAQsModal show={showFAQs} handleClose={() => setShowFAQs(false)} />
//     </div>
//   );
// };

// export default MainComponent;


import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ChatButton from "./ChatModal"
import FAQsModal from "./FAQModal"

const MainComponent = () => {
  const [showFAQs, setShowFAQs] = useState(false);

  return (
    <div>
      <ChatButton />
      <Button onClick={() => setShowFAQs(true)}>FAQs</Button>

      <FAQsModal show={showFAQs} handleClose={() => setShowFAQs(false)} />
    </div>
  );
};

export default MainComponent;
