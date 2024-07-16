import { createContext, useContext, useState } from "react";
import "../App.css";

const MyContext = createContext(null);
const CurrentUserContext = createContext(null);

const ContextExample = () => {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrent] = useState(null);
  return (
    <>
      <MyContext.Provider value={theme}>
        <CurrentUserContext.Provider value={{ currentUser, setCurrent }}>
          <WelcomeMessage />
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
          </label>
        </CurrentUserContext.Provider>
      </MyContext.Provider>
    </>
  );
};

// function Form() {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

const WelcomeMessage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title="welcome">
        {currentUser !== null ? <Greeting /> : <LoginForm />}
      </Panel>
    </>
  );
};
const Greeting = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}.</p>;
};

const LoginForm = () => {
  const { setCurrent } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <>
      <label>
        First Name: {" "}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>{" "}
      <br />
      <label>
        Last Name: {" "}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>{" "}
      <br />
       <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrent({ name: firstName + " " + lastName });
        }}
      >
        Login in
      </Button>         
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
};

function Panel({ title, children }) {
  const theme = useContext(MyContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(MyContext);
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export { ContextExample };
