import { useDispatch, useSelector } from "react-redux";
import { green, red } from "./counterSlice";

const ChangeColor = () => {
    const color = useSelector((state) => state.mySlice.color);
    const dispatch = useDispatch();
    
  return (
    <div>
      <h3>Dom Update</h3>
      <div
        style={{
          background: color,
          height: "100px",
          width: "100px",
          color: "white",
        }}
      >
        This div change color
      </div>
      <button onClick={() => dispatch(red())}>red</button>
      <button onClick={() => dispatch(green())}>green</button>
    </div>
  );
};

export { ChangeColor };
