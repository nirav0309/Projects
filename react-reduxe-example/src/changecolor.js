import { useDispatch, useSelector } from "react-redux";
import { blue, green, red } from "./redux/action";

const ChangeColor = () => {

  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();
//  console.log(dispatch(store.getState().color));
    
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
      <button onClick={() => dispatch(red())}>RED</button>
      <button onClick={() => dispatch(blue())}>BLUE</button>
      <button onClick={() => dispatch(green())}>GREEN</button>
    </div>
  );
};

export { ChangeColor };
