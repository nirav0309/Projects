const Profiler = () => {
  const today = new Date();

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1715645942867-4c8649966352?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
      {/* <h1>To Do List for {formatDate(today)}</h1> */}
      <FormatDate data={today} />  <br />
    </>
  );
};

// const today = new Date();
// const data = ['sun','mon', 'tue', 'thu', 'fri', 'sat']

// function formatDate() {
// return data[today.getDay()]
// }

function FormatDate({ date }) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export { Profiler };
