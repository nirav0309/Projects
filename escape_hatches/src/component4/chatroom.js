import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

const MainChatRoom = () => {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <div>
      <label>
        Choose the room{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>{show ? "Close" : "Open"}</button>
      {show && <hr />}
      {show && <ChatRoom value={roomId} />}
    </div>
  );
};

const ChatRoom = ({ value }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, value);
    connection.connect();
    return () => connection.disconnect();
  }, [value]);

  return <h1>Welcome to the {value}</h1>;
};

export { MainChatRoom };
