import React from "react";

const xyz = [
  {
    id: "0",
    message: "Hello!",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
    end: true,
  },
];

const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};

const config = {
  botAvatar: "img.png",
  floating: true,
};
const Chatbot = () => {
  return (
    <div>
      <Chatbot xyz={xyz} {...config} />
    </div>
  );
};

export default Chatbot;
