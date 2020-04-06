const initState = {
  activities: [],
};

const activityPostReducer = (state = initState, action) => {
  switch (action.type) {
    case "ACTIVITY_POST":
      console.log("ACTIVITY_POST");
      const newState = {
        activityStat: action.activities,
      };
      return newState;
    case "CREATE_ACTIVITY_ERROR":
      return state;
    default:
      return state;
  }
};

export default activityPostReducer;
