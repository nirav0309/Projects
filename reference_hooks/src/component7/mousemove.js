import { useEffect, useState } from "react";

const MouseMove = () => {
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      setMouseMove({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
  return (
    <div className="MouseMove"
      style={{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate (${mouseMove.x}px, ${mouseMove.y})`,
        pointerEvents: "none",
        width: 20,
        height: 20,
        top: -10,
        left: -10,
      }}
    />
  );
};

export { MouseMove };
