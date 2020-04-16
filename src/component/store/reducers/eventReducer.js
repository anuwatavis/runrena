const initState = {
  event: null,
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_EVENT":
      console.log("GET_EVENT");
      const newState = {
        events: action.events,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default eventReducer;
