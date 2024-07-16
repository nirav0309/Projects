const initialState = {
  count: 0,
  color: "black",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
          };
      case "ADD": return {
          ...state,
          count: state.count + action.payload
      }

    default:
      return state;
  }
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    case "GREEN":
      return { ...state, color: "green" };
    default:
      return state;
  }
};

export { counterReducer, colorReducer };
