import { useState } from "react";

const ObjectWithSpread = () => {
  const [value, setValue] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://images.unsplash.com/photo-1715588694034-f3f0316301b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });
  const handleOnChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };
  const handleOnChangeTitle = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };
  const handleOnChangeCity = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };
  const handleOnChangeImage = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };

  return (
    <>
      <label>
        First name:
        <input
          value={value.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </label>
      <br />
      <label>
        Last name:
        <input value={value.lastName} onChange={handleChange} name="lastName" />
      </label>
      <p>
        {value.firstName} {value.lastName}
      </p>
      {/* -----------------------------------------for nested----------------------------------------------------- */}
      <div>
        <label>
          Name:
          <input
            value={person.name}
            onChange={handleOnChange}
            name="firstName"
          />
        </label>{" "}
        <br />
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleOnChangeTitle}
            name="firstName1"
          />
        </label>{" "}
        <br />
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleOnChangeCity}
            name="firstName2"
          />
        </label>{" "}
        <br />
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleOnChangeImage}
            name="firstName3"
          />
        </label>{" "}
        <br />
        <p>
          {person.name} {" by"} {person.artwork.title}
        </p>
        <img
          src={person.artwork.image}
          alt={person.title}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </>
  );
};

export { ObjectWithSpread };
