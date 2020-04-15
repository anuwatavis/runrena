var today = new Date();
today.setDate(today.getDate() - 7);
var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const initState = {
  today: date,
};

const limitQueryReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIMIT_QUERY":
      console.log("xxxxxx", action.data);
      console.log("LIMIT_QUERY");
      const newState = {
        today: action.data,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default limitQueryReducer;
