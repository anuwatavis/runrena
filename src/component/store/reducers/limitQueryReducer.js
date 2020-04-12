const initState = {
  limit: 5,
};

const limitQueryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIMIT_QUERY":
      console.log("LIMIT_QUERY");
      const newState = {
        limit: action.data,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default limitQueryReducer;
