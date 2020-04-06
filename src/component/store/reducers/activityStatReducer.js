const initState = {
  activities: [],
};

const activityStatReducer = (state = initState, action) => {
  switch (action.type) {
    case "ACTIVITY_STAT":
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

export default activityStatReducer;
