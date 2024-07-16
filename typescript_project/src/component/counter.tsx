import { useReducer } from "react";
const initialState = { count: 0 }

type xyz = { type: 'increment', payload: string } | { type: 'decrement', payload: number }

const reducer = (state: typeof initialState, action: xyz) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + Number(action.payload) };
        case 'decrement':
            return {count: state.count - action.payload}
    
        default:
            throw new Error()
    }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: '2'})}>
        +
      </button>
      <button onClick={() => dispatch({type: "decrement", payload: 2})}>
        -
      </button>
    </>
  );
}

export {Counter}

