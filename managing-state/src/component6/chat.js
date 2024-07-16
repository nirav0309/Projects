import { useState } from "react";

const Chart = ({contact}) => {
  const [text, setText] = useState("");
  return (
    <>
      <section className="chat">
        <textarea
          value={text}
          placeholder={"Chat to " + contact.name}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button>Send to {contact.email}</button>
      </section>
    </>
  );
};

export {Chart}