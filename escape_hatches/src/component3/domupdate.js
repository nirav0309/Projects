import { useEffect, useState, useRef } from "react";

const DomUpdate = () => {
  const [color, setColor] = useState("blue");
  const ref = useRef(null);

  useEffect(() => {
    console.log("change");
    if (ref.current) {
      ref.current.style.background = color;
    }
  }, [color]);
  return (
    <div>
      <h3>Dom Update</h3>
      <div
        ref={ref}
        style={{
          background: color,
          height: "100px",
          width: "100px",
          color: "white",
        }}
      >
        This div change color
      </div>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("black")}>black</button>
      <button onClick={() => setColor("green")}>green</button>
    </div>
  );
};

export { DomUpdate };
