import { useDispatch, useSelector } from "react-redux"
import { add, decrement, increment } from "./redux/action";

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(add())}>Add by 10</button>
        </div>
    )
}

export {Counter}


