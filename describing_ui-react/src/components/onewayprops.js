const OneWayOfProps = () => {
    const name1 = "xyz";
    return (
      <div>
        <Greeting name={name1} />
      </div>
    );
  };
  
  const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  };    

  export { OneWayOfProps }