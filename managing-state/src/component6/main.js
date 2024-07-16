import { useState } from "react";
import { ContactList } from "./contactlist";
import { Chart } from "./chat";

const Messenger = () => {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chart contact={to} key={to.id} />
    </>
  );
};

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export { Messenger };
