const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const add = () => {
  return {
    type: "ADD",
    payload: 10
  }
}

const red = () => {
  return {
    type: "RED"
  }
}
const blue = () => {
  return {
    type: "BLUE"
  }
}
const green = () => {
  return {
    type: "GREEN",
  }
}

export { increment, decrement, add, red, blue, green }; 


