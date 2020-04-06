const initState = {
  friend: null,
};

const runrenaReducer = (state = initState, action) => {
  switch (action.type) {
    case "RUNRENA_FRIEND":
      console.log("GET FRIEND");
      const newState = {
        friend: action.friend,
      };
      return newState;
    default:
      return state;
  }
};

export default runrenaReducer;
