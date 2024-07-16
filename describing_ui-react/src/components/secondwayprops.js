const SecondWayOfProps = () => {
    const props = {
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
    };
  
    return (
      <div>
        <Greeting {...props} />
      </div>
    );
  };
  
  const Greeting = ({ name, age, occupation }) => {
    return (
      <h1>
        Hello, {name}! You are {age} years old and a {occupation}.
      </h1>
    );
  };

  export {SecondWayOfProps}